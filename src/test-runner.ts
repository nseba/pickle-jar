import { BufferedTokenStream, CharStreams } from "antlr4ts";
import * as fs from "fs";
import { glob } from "glob";
import { EOL } from "os";
import * as path from "path";

import { FeatureContext } from "./feature-context";
import { FeatureFileVisitor } from "./feature-file-visitor";
import { GherkinLexer } from "./grammar/GherkinLexer";
import { FeatureFileContext, GherkinParser } from "./grammar/GherkinParser";
import { JestErrorListener } from "./jest-error-listener";
import { StepDefinition } from "./step-definition";
import { WorldFactory } from "./world";

interface TestRunnerAllOptions {
    workDir: string;
    groupByFeaturePath: boolean;
}

export type TestRunnerOptions = Partial<TestRunnerAllOptions>;

export function testRunner<TWorld>(globPattern: string, stepDefinitions: StepDefinition<TWorld>[], worldFactory: WorldFactory<TWorld>, tagFilter: (tags: string[])=> boolean = ()=> true, options?: TestRunnerOptions) {

    const defaultOptions: TestRunnerAllOptions = {
        workDir: process.cwd(),
        groupByFeaturePath: true,
    }
    
    const actualOptions = { ...defaultOptions, ...options };
    
    const featureFiles = glob.sync(globPattern);
    for (const featureFile of featureFiles) {
        
        const absoluteFeaturePath = path.resolve(actualOptions.workDir, featureFile);
        const relativeFeaturePath = path.relative(actualOptions.workDir, absoluteFeaturePath);

        const featureContext : FeatureContext = {            
            directory: actualOptions.workDir,
            absoluteFeaturePath: absoluteFeaturePath,
            relativeFeaturePath: relativeFeaturePath,
        }

        const run = () => {
            const listener = new JestErrorListener();
            const featureText = fs.readFileSync(absoluteFeaturePath, "utf-8") + EOL;
            const input = CharStreams.fromString(featureText);
            const lexer = new GherkinLexer(input);
            lexer.removeErrorListeners();
            lexer.addErrorListener(listener);

            const lexerStream = new BufferedTokenStream(lexer);
            const parser = new GherkinParser(lexerStream);
            parser.removeErrorListeners();
            parser.addErrorListener(listener);

            const parsedFeatureFile: FeatureFileContext = parser.featureFile();
            const visitor = new FeatureFileVisitor<TWorld>(worldFactory, stepDefinitions, tagFilter, featureContext);
            parsedFeatureFile.accept(visitor);

            listener.reportErrors();
        }

        if (actualOptions.groupByFeaturePath) {
            describe(relativeFeaturePath, run);
        } else {
            run();
        }
    }


}