import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {EOL} from "os";
import {
    AndGivenStepContext,
    AndStepContext,
    AndWhenStepContext,
    BackgroundContext,
    ButStepContext,
    FeatureContext,
    FeatureFileContext,
    GivenStepContext,
    ScenarioContext,
    ScenarioOutlineContext,
    ThenStepContext,
    WhenStepContext
} from "./grammar/GherkinParser";
import {GherkinParserVisitor} from "./grammar/GherkinParserVisitor";
import {StepDefinition} from "./step-definition";
import {extractTags, extractTestTags} from "./tags";
import {StepTags} from "./step-tags";
import {WorldFactory} from "./world";
import {FeatureContext as PickleFeatureContext} from "./feature-context";
import {dedent} from "./dedent";
import {ExecutionContext} from "./execution-context";

type SubSteps = (GivenStepContext | AndGivenStepContext | WhenStepContext | AndWhenStepContext | ThenStepContext | AndStepContext | ButStepContext | ScenarioContext | ScenarioOutlineContext);


interface WorldObject<TWorld> {
    world: TWorld
}


export class FeatureFileVisitor<TWorld> extends AbstractParseTreeVisitor<void> implements GherkinParserVisitor<void> {
    constructor(
        private readonly worldFactory: WorldFactory<TWorld>,
        private readonly stepDefinitions: StepDefinition<TWorld>[],
        private tagFilter: (tags: string[]) => boolean,
        private readonly featureContext: PickleFeatureContext) {
        super();
    }

    public visitFeatureFile(ctx: FeatureFileContext): void {
        this.visitChildren(ctx);
    }


    public visitFeature(ctx: FeatureContext): void {
        const {tags, isOnly, isSkip} = extractTags(ctx.tags());

        if (!this.tagFilter(tags)) {
            return;
        }

        const describeFunc = isOnly ? describe.only : isSkip ? describe.skip : describe;

        describeFunc(`Feature: ${ctx.multilineText().text.trim()}`, () => {
            const backgroundCtx = ctx.background();
            if (backgroundCtx) {
                this.setupBackground(backgroundCtx, ctx)
            } else {
                this.visitChildren(ctx);
            }
        })
    }

    public visitScenario(ctx: ScenarioContext, worldObject?: WorldObject<TWorld>): void {
        const {tags, isOnly, isSkip} = extractTags(ctx.tags());

        if (!this.tagFilter(tags)) {
            return;
        }

        const describeFunc = isOnly ? describe.only : isSkip ? describe.skip : describe;

        describeFunc(`Scenario: ${ctx.multilineText().text.trim()}`, () => {
            const worldObj: WorldObject<TWorld> = {} as WorldObject<TWorld>;
            beforeEach(() => {
                if (!worldObject) {
                    worldObj.world = this.worldFactory(this.featureContext);
                }
            })

            const step = ctx.step();

            const steps = [step.givenStep(), ...step.andGivenStep(), step.whenStep(), ...step.andWhenStep(), step.thenStep(), ...step.andStep(), ...step.butStep()];

            this.runNextStep(steps, undefined, worldObject ?? worldObj);
        })
    }

    public setupBackground(backgroundCtx: BackgroundContext, ctx: FeatureContext): void {
        const {tags, isOnly, isSkip} = extractTags(backgroundCtx.tags());

        if (!this.tagFilter(tags)) {
            return;
        }


        const describeFunc = isOnly ? describe.only : isSkip ? describe.skip : describe;

        describeFunc(`Background: ${backgroundCtx.multilineText().text.trim()}`, () => {
            const worldObj: WorldObject<TWorld> = {} as WorldObject<TWorld>;
            beforeEach(() => {
                worldObj.world = this.worldFactory(this.featureContext);
            })

            const steps = [backgroundCtx.givenStep(), ...backgroundCtx.andGivenStep(), ...ctx.scenario(), ...ctx.scenarioOutline()];

            this.runNextStep(steps, undefined, worldObj);
            //
            // const scenarios = [...backgroundCtx.scenario(), ...backgroundCtx.scenarioOutline()];
            // for (const scenario of scenarios) {
            //     const steps = [backgroundCtx.givenStep(), ...backgroundCtx.andGivenStep(), scenario];
            //
            //     this.runNextStep(steps, undefined, worldObj);
            // }
        })
    }

    public visitScenarioOutline(ctx: ScenarioOutlineContext, worldObject?: WorldObject<TWorld>): void {
        const {tags, isOnly, isSkip} = extractTags(ctx.tags());

        if (!this.tagFilter(tags)) {
            return;
        }


        const describeFunc = isOnly ? describe.only : isSkip ? describe.skip : describe;


        const cellNames = ctx.examplesBlock().tableHeader().tableRow().cell().map(cell => cell.text.trim());
        const values = ctx.examplesBlock().tableRow().map(row => row.cell().map(cell => cell.text.trim()));
        const valueMap = values.map(row => {
            const item: Record<string, string> = {};
            for (let i = 0; i < row.length; ++i) {
                item[cellNames[i]] = row[i];
            }
            return item;
        })
        const scenarioName = ctx.multilineText().text.trim();
        describeFunc(`Scenario outline: ${scenarioName}`, () => {
            const worldObj: WorldObject<TWorld> = {} as WorldObject<TWorld>;
            beforeEach(() => {
                if (!worldObject) {
                    worldObj.world = this.worldFactory(this.featureContext);
                }
            })

            for (const row of valueMap) {

                const step = ctx.step();

                const steps = [step.givenStep(), ...step.andGivenStep(), step.whenStep(), ...step.andWhenStep(), step.thenStep(), ...step.andStep(), ...step.butStep()];

                this.runNextStep(steps, row, worldObject ?? worldObj);

            }
        })
    }

    protected defaultResult(): void {
        return;
    }


    private replaceKeywords(input: string, replacements: Record<string, string> | undefined): string {
        return input
            .replace(/<([^>]+)>/g, (match, keyword) => {
                const replacement = replacements?.[keyword];
                return replacement !== undefined ? replacement.replace(/\$/g, "\\$") : match;
            });
    }

    private runNextStep(steps: SubSteps[], valueMap: Record<string, string> | undefined, worldObject: {
        world: TWorld
    }) {
        const step = steps.shift();
        if (!step) {
            return;
        }


        if (step instanceof ScenarioContext) {
            this.visitScenario(step, worldObject);
            return;
        } else if (step instanceof ScenarioOutlineContext) {
            this.visitScenarioOutline(step, worldObject);
            return;
        }

        let tags: StepTags;


        let prefix: string;
        let prepare = true;
        const executionContext: ExecutionContext = {
            step: "",
            file: this.featureContext.absoluteFeaturePath,
            startLine: step.start.line,
            startChar: step.start.charPositionInLine,
            absoluteFeaturePath: this.featureContext.absoluteFeaturePath,
            relativeFeaturePath: this.featureContext.relativeFeaturePath,
            directory: this.featureContext.directory
        };
        if (step instanceof GivenStepContext || step instanceof AndGivenStepContext) {
            prefix = 'Given';
            tags = extractTags(step.tags());
        } else if (step instanceof WhenStepContext || step instanceof AndWhenStepContext) {
            prefix = 'When';
            tags = extractTags(step.tags());
        } else if (step instanceof ThenStepContext || step instanceof AndStepContext) {
            prefix = "Then";
            prepare = false;
            tags = extractTestTags(step.thenTags());
        } else {
            prefix = 'But';
            prepare = false;
            tags = extractTestTags(step.thenTags());
        }

        executionContext.step = prefix + ' ' + step.multilineText().text.trim();

        if (!this.tagFilter(tags.tags)) {
            return;
        }

        const name = `${prefix} ${this.replaceKeywords(step.multilineText().text.trim(), valueMap)}`;
        const {match, step: stepCall} = this.getMatchingStepDefinition(name, !!tags.isTodo);


        const docStringContents = dedent(step.docString()?.DOC_STRING().text);
        const args = this.extractTestArgs(match, name, docStringContents, valueMap);


        if (prepare) {
            this.definePrepareStep(name, stepCall, args, steps, valueMap, worldObject, tags, executionContext);
        } else {
            this.defineTestStep(name, stepCall, args, steps, valueMap, worldObject, tags, executionContext);
        }

    }

    private injectIntoStackTrace(error: Error, entry: string) {
        if (error && error.stack) {
            const stackLines = error.stack.split('\n');
            const firstStackLine = stackLines.findIndex(line => line.startsWith('    at '));
            stackLines.splice(firstStackLine, 0, entry); // Insert the entry after the first line
            error.stack = stackLines.join('\n');
        }
        return error;
    }

    private defineTestStep(name: string, stepCall: (world: TWorld, ...params: string[]) => void, args: string[], steps: SubSteps[], valueMap: Record<string, string> | undefined, worldObject: WorldObject<TWorld>, tags: StepTags, executionContext: ExecutionContext) {
        const itFunc = tags.isOnly ? it.only : tags.isSkip ? it.skip : tags.isTodo ? it.todo : tags.isFail ? it.failing : it;

        if (tags.isTodo) {
            itFunc(name);
        } else {


            itFunc(name, () => {
                try {
                    stepCall(worldObject.world, ...args);
                } catch (error) {
                    this.featureContext.absoluteFeaturePath
                    throw this.injectIntoStackTrace(error, `    at '${executionContext.step}' (${executionContext.absoluteFeaturePath}:${executionContext.startLine}:${executionContext.startChar})`)
                }
            })
        }
        this.runNextStep(steps, valueMap, worldObject);
    }

    private definePrepareStep(name: string, stepCall: (world: TWorld, ...params: string[]) => void, args: string[], steps: SubSteps[], valueMap: Record<string, string> | undefined, worldObject: WorldObject<TWorld>, tags: StepTags, executionContext: ExecutionContext) {
        const describeFunc = tags.isOnly ? describe.only : tags.isSkip ? describe.skip : describe;

        describeFunc(name, () => {
            beforeEach(() => {
                try {
                    stepCall(worldObject.world, ...args);
                } catch (error) {
                    this.featureContext.absoluteFeaturePath
                    throw this.injectIntoStackTrace(error, `    at '${executionContext.step}' (${executionContext.absoluteFeaturePath}:${executionContext.startLine}:${executionContext.startChar})`)
                }
            });
            this.runNextStep(steps, valueMap, worldObject)
        })
    }

    private extractTestArgs(match: RegExp, name: string, docStringContents: string | undefined, valueMap: Record<string, string> | undefined) {
        let args: string [] = [];
        const matchResults = match.exec(name);
        if (matchResults) {
            args = matchResults.slice(1);
        }
        if (docStringContents) {
            const cleanedDocstring = this.replaceKeywords(docStringContents
                .trim()
                .replace(/^"""/, "")
                .replace(/"""$/, "")
                .split(/((\r\n)|\r|\n)]/)
                .map(line => line.trim()).join(EOL), valueMap)
            args.push(cleanedDocstring);
        }
        return args;
    }

    private getMatchingStepDefinition(name: string, provideNopBoilerplate: boolean) {
        const matchingStepDefinitions = this.stepDefinitions.filter(def => {
            return def.match.test(name);
        });

        if (!matchingStepDefinitions.length && !provideNopBoilerplate) {
            throw new Error(`Missing step definition '${name}'`);
        } else if (matchingStepDefinitions.length > 1) {
            throw new Error(`Multiple step definition match '${name}':\n${matchingStepDefinitions.map(rule => rule.match.toString()).join("\n")}`);
        }
        return matchingStepDefinitions[0] ?? {match: /^.*$/, step: undefined};
    }
}