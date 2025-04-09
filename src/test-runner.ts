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

export function testRunner<TWorld>(globPattern: string, stepDefinitions: StepDefinition<TWorld>[], worldFactory: WorldFactory<TWorld>, tagFilter: (tags: string[])=> boolean = ()=> true, workDir: string = process.cwd()) {

    const featureFiles = glob.sync(globPattern);
    for (const featureFile of featureFiles) {
        
        const absoluteFeaturePath = path.resolve(workDir, featureFile);
        const relativeFeaturePath = path.relative(workDir, absoluteFeaturePath);

        const featureContext : FeatureContext = {            
            directory: workDir,
            absoluteFeaturePath: absoluteFeaturePath,
            relativeFeaturePath: relativeFeaturePath,
        }


        describe(relativeFeaturePath, () => {
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
        });
    }


}