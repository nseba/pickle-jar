import {testRunner} from "../src";

import {steps} from "./steps";
import {World} from "./world";

const tagFilter = (tags: string[]) => {
    return true;
}

const createWorld = () => ({});

testRunner<World>(`${__dirname}/features/**/*.feature`, steps, createWorld, tagFilter);