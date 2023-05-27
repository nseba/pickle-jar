import {StepDefinition, testRunner} from "../src";

type World = Record<string, string>;

const stepDefinitions: StepDefinition<World>[] = [{
    match: /^Given a simple text$/, step: (world) => {
        world['Simple text'];
    }
}, {
    match: /^Given the (\w+) word$/, step: (world, word) => {
        world['given argument'] = word;
    }
}, {
    match: /^Given the '([\w.]+)' file with contents:$/, step: (world, file, contents) => {
        world[file] = contents;
    }
}, {
    match: /^Given the input string:$/, step: (world, input) => {
        world["input string"] = input;
    }
}, {
    match: /^Given a first step$/, step: (world) => {
        world["first step"] = "true";
    }
}, {
    match: /^Given a second step$/, step: (world) => {
        world["second step"] = "true";
    }
}, {
    match: /^Given a scenario outline named '(.+)'$/, step: (world, name) => {
        world["outline-name"] = name;
    }
}, {
    match: /^When running the test framework$/, step: world => {
        /*nop*/
    }
}, {
    match: /^When using two steps/, step: world => {
        /*nop*/
    }
}, {
    match: /^When the outline parameter is '(.+)'$/, step: (world, param) => {
        world["outline-param"] = param;
    }
}, {
    match: /^Then no error should be reported$/, step: world => {
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
    match: /^But the third step didn't run$/, step: world => {
        expect(world['third step']).toBeUndefined();
    }
}]


testRunner<World>(`${__dirname}/features/**/*.feature`, stepDefinitions, {});