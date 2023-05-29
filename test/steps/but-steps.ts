import {StepDefinition} from "../../src";
import {World} from "../world";

export const butSteps: StepDefinition<World>[] = [
    {
        match: /^But the third step didn't run$/, step: world => {
            expect(world['third step']).toBeUndefined();
        }
    }
]