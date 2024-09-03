import {StepDefinition} from "../../src";
import {World} from "../world";

export const givenSteps: StepDefinition<World>[] = [{
    match: /^Given a simple text$/, step: (world) => {
        world['Simple text'] = 'Simple text';
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
    match: /^Given a scenario outline named '(.*)'$/, step: (world, name) => {
        world["outline-name"] = name;
    }
}, {
    match:/^Given the background initializes a counter to a value of 1$/, step: (world)=> {
        world['background-counter'] = 1;
    }
}, {
    match:/^Given a background counter$/, step: ()=> {
        /* nop */
    }
}, {
    match:/^Given a scenario with skip tag$/, step: ()=> {
        fail("It should not run");
    }
}];