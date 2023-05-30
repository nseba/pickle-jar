import {StepDefinition} from "../../src";
import {World} from "../world";

export const thenSteps: StepDefinition<World>[] = [{
    match: /^Then no error should be reported$/, step: () => {
        /*nop*/
    }
}, {
    match: /^Then the given argument should be '(.*)'$/, step: (world, arg) => {
        expect(world['given argument']).toBe(arg);
    }
}, {
    match: /^Then the '([\w.]+)' file should contain '([^']+)'$/, step(world, file, contents) {
        expect(world[file]).not.toBeUndefined();
        expect(world[file]).toBe(contents);
    }
}, {
    match: /^Then the output string is:$/, step: (world, text) => {
        expect(world['input string']).not.toBeUndefined();
        expect(world['input string']).toBe(text);
    }
}, {
    match: /^Then the first step ran$/, step: world => {
        expect(world['first step']).toBe("true");
    }
}, {
    match: /^Then the second step ran$/, step: world => {
        expect(world['second step']).toBe("true");
    }
}, {
    match: /^Then the world stores the '([^']+)' '([^']+)'/, step: (world, name, parameter) => {
        expect(world['outline-name']).not.toBeUndefined();
        expect(world['outline-name']).toBe(name);

        expect(world['outline-param']).not.toBeUndefined();
        expect(world['outline-param']).toBe(parameter);
    }
}, {
    match: /^Then it can also be used as a docstring$/, step: (world, docstring) => {
        expect(docstring).toBe(`${world['outline-name']} ${world['outline-param']}`)
    }
}, {
    match: /^Then it can also be used as a docstring with quotes$/, step: (world, docstring) => {
        expect(docstring).toBe(`"${world['outline-name']} ${world['outline-param']}"`)
    }
}, {
    match:/^Then the value of the background counter is 2$/, step: (world)=> {
        expect(world['background-counter']).toBe(2);
    }
}, {
    match: /^Then the test doesn't run$/, step: () => {
        fail("It should not run");
    }
}];