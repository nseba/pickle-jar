import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {EOL} from "os";
import {
    AndGivenStepContext,
    AndStepContext,
    AndWhenStepContext,
    ButStepContext,
    FeatureContext,
    GivenStepContext,
    ScenarioContext,
    ScenarioOutlineContext,
    ThenStepContext,
    WhenStepContext
} from "./grammar/GherkinParser";
import {GherkinParserVisitor} from "./grammar/GherkinParserVisitor";
import {StepDefinition} from "./step-definition";

export class FeatureFileVisitor<TWorld> extends AbstractParseTreeVisitor<void> implements GherkinParserVisitor<void> {
    constructor(public readonly world: TWorld, public readonly stepDefinitions: StepDefinition<TWorld>[]) {
        super();
    }

    public visitFeature(ctx: FeatureContext): void {
        describe(`Feature: ${ctx.contentText().text.trim()}`, () => {
            this.visitChildren(ctx);
        })
    }

    public visitScenario(ctx: ScenarioContext): void {
        describe(`Scenario: ${ctx.contentText().text.trim()}`, () => {
            const step = ctx.step();

            const steps = [step.givenStep(), ...step.andGivenStep(), step.whenStep(), ...step.andWhenStep(), step.thenStep(), ...step.andStep(), ...step.butStep()];

            this.runNextStep(steps);
        })
    }

    public visitScenarioOutline(ctx: ScenarioOutlineContext): void {
        const cellNames = ctx.examplesBlock().tableHeader().tableRow().cell().map(cell => cell.text.trim());
        const values = ctx.examplesBlock().tableRow().map(row => row.cell().map(cell => cell.text.trim()));

        const valueMap = values.map(row => {
            const item: Record<string, string> = {};
            for (let i = 0; i < row.length; ++i) {
                item[cellNames[i]] = row[i];
            }
            return item;
        })
        const scenarioName = ctx.contentText().text.trim();

        describe(`Scenario outline: ${scenarioName}`, () => {
            for (const row of valueMap) {

                const step = ctx.step();

                const steps = [step.givenStep(), ...step.andGivenStep(), step.whenStep(), ...step.andWhenStep(), step.thenStep(), ...step.andStep(), ...step.butStep()];

                this.runNextStep(steps, row);

            }
        })
    }

    protected defaultResult(): void {
        return;
    }

    private replaceKeywords(input: string, replacements: Record<string, string> | undefined): string {
        return input.replace(/<([^>]+)>/g, (match, keyword) => {
            const replacement = replacements?.[keyword];
            return replacement !== undefined ? replacement : match;
        });
    }

    private runNextStep(steps: (GivenStepContext | AndGivenStepContext | WhenStepContext | AndWhenStepContext | ThenStepContext | AndStepContext | ButStepContext)[], valueMap?: Record<string, string>) {
        const step = steps.shift();
        if (!step) {
            return;
        }

        let prefix: string;
        let prepare = true;
        if (step instanceof GivenStepContext || step instanceof AndGivenStepContext) {
            prefix = 'Given';
        } else if (step instanceof WhenStepContext || step instanceof AndWhenStepContext) {
            prefix = 'When';
        } else if (step instanceof ThenStepContext || step instanceof AndStepContext) {
            prefix = "Then";
            prepare = false;
        } else {
            prefix = 'But';
            prepare = false;
        }

        const name = `${prefix} ${this.replaceKeywords(step.contentText().text.trim(), valueMap)}`;
        const stepDefinition = this.getMatchingStepDefinition(name);

        const {step: stepCall, match} = stepDefinition;

        const docStringContents = step.docString()?.DOC_STRING_TEXT()?.text;
        const args = this.extractTestArgs(match, name, docStringContents, valueMap);

        if (prepare) {
            this.definePrepareStep(name, stepCall, args, steps, valueMap);
        } else {
            this.defineTestStep(name, stepCall, args, steps, valueMap);
        }

    }

    private defineTestStep(name: string, stepCall: (world: TWorld, ...params: string[]) => void, args: string[], steps: (GivenStepContext | AndGivenStepContext | WhenStepContext | AndWhenStepContext | ThenStepContext | AndStepContext | ButStepContext)[], valueMap: Record<string, string> | undefined) {
        it(name, () => {
            stepCall(this.world, ...args);
        })
        this.runNextStep(steps, valueMap);
    }

    private definePrepareStep(name: string, stepCall: (world: TWorld, ...params: string[]) => void, args: string[], steps: (GivenStepContext | AndGivenStepContext | WhenStepContext | AndWhenStepContext | ThenStepContext | AndStepContext | ButStepContext)[], valueMap: Record<string, string> | undefined) {
        describe(name, () => {
            beforeEach(() => {
                stepCall(this.world, ...args);
            });
            this.runNextStep(steps, valueMap)
        })
    }

    private extractTestArgs(match: RegExp, name: string, docStringContents: string | undefined, valueMap: Record<string, string> | undefined) {
        let args: string [] = [];
        const matchResults = match.exec(name);
        if (matchResults) {
            args = matchResults.slice(1);
        }
        if (docStringContents) {
            const cleanedDocstring = this.replaceKeywords(docStringContents.trim()
                .split(/((\r\n)|\r|\n)]/)
                .map(line => line.trimStart()).join(EOL), valueMap)
            args.push(cleanedDocstring);
        }
        return args;
    }

    private getMatchingStepDefinition(name: string) {
        const matchingStepDefinitions = this.stepDefinitions.filter(def => {
            return def.match.test(name);
        });
        if (!matchingStepDefinitions.length) {
            throw new Error(`Missing step definition '${name}'`);
        } else if (matchingStepDefinitions.length > 1) {
            throw new Error(`Multiple step definition match '${name}':\n${matchingStepDefinitions.map(rule => rule.match.toString()).join("\n")}`);
        }
        return matchingStepDefinitions[0];
    }
}