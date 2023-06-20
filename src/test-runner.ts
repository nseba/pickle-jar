import {BufferedTokenStream, CharStreams} from "antlr4ts";
import * as fs from "fs";
import {glob} from "glob";
import {EOL} from "os";
import * as path from "path";

import {FeatureFileVisitor} from "./feature-file-visitor";
import {getCallSites} from "./get-call-sites";
import {GherkinLexer} from "./grammar/GherkinLexer";
import {FeatureFileContext, GherkinParser} from "./grammar/GherkinParser";
import {JestErrorListener} from "./jest-error-listener";
import {StepDefinition} from "./step-definition";

export function testRunner<TWorld>(globPattern: string, stepDefinitions: StepDefinition<TWorld>[], worldFactory: () => TWorld, tagFilter: (tags: string[])=> boolean = ()=> true) {

    const featureFiles = glob.sync(globPattern);
    for (const featureFile of featureFiles) {
        const callSite = getCallSites()[1];
        const file = callSite?.getFileName() ?? "";
        const dir = path.dirname(file);
        const absoluteFeaturePath = path.resolve(dir, featureFile);
        const relativeFeaturePath = path.relative(dir, absoluteFeaturePath);

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
            const visitor = new FeatureFileVisitor<TWorld>(worldFactory, stepDefinitions, tagFilter);
            parsedFeatureFile.accept(visitor);

            listener.reportErrors();
        });
    }


}