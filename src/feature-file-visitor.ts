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

    protected defaultResult(): void {
        return;
    }

    private runNextStep(steps: (GivenStepContext | AndGivenStepContext | WhenStepContext | AndWhenStepContext | ThenStepContext | AndStepContext | ButStepContext)[]) {
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

        const name = `${prefix} ${step.contentText().text.trim()}`;
        const matchRule = this.stepDefinitions.filter(def => {
            return def.match.test(name);
        });
        if (!matchRule.length) {
            throw new Error(`Missing step definition '${name}'`);
        } else if (matchRule.length > 1) {
            throw new Error(`Multiple step definition match '${name}':\n${matchRule.map(rule => rule.match.toString()).join("\n")}`);
        }

        const docStringContents = step.docString()?.DOC_STRING_TEXT()?.text;

        const {step: stepCall, match} = matchRule[0];
        let args: string [] = [];
        let matchResults = match.exec(name);
        if(matchResults) {
            args = matchResults.slice(1);
        }
        if (docStringContents) {
            const cleanedDocstring = docStringContents.trim()
                .split(/((\r\n)|\r|\n)]/)
                .map(line=>line.trimStart()).join(EOL)
            args.push(cleanedDocstring);
        }

        if (prepare) {
            describe(name, () => {
                beforeEach(() => {
                    stepCall(this.world, ...args);
                });
                this.runNextStep(steps)
            })
        } else {
            it(name, () => {
                stepCall(this.world, ...args);
            })
            this.runNextStep(steps);
        }

    }

}