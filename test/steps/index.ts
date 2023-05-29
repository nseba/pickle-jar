import {givenSteps} from "./given-steps";
import {whenSteps} from "./when-steps";
import {thenSteps} from "./then-steps";
import {butSteps} from "./but-steps";

export const steps = [
    ...givenSteps,
    ...whenSteps,
    ...thenSteps,
    ...butSteps
];