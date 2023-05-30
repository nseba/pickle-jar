import {StepDefinition} from "../../src";
import {World} from "../world";

export const whenSteps: StepDefinition<World>[] = [{
    match: /^When running the test framework$/, step: () => {
        /*nop*/
    }
}, {
    match: /^When using two steps/, step: () => {
        /*nop*/
    }
}, {
    match: /^When the outline parameter is '(.+)'$/, step: (world, param) => {
        world["outline-param"] = param;
    }
}, {
    match:/^When the background counter is incremented$/, step: (world)=> {
        world['background-counter'] = world['background-counter'] as number + 1;
    }
}, {
    match: /^When a tagged scenario that excludes the skip tag$/, step: () => {
        fail("It should not run");
    }
}]