import {Step} from "./step";

export interface StepDefinition<TWorld> {
    match: RegExp,
    step: Step<TWorld>;
}