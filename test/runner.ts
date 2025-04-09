import {testRunner, TestRunnerOptions} from "../src";

import {steps} from "./steps";
import {World} from "./world";

const tagFilter = () => {
    return true;
}

const createWorld = () => ({});

describe("groupByFeaturePath: false ", () => {
    const options :TestRunnerOptions = {        
        groupByFeaturePath: false,
    }
    
    testRunner<World>(`${__dirname}/features/**/*.feature`, steps, createWorld, tagFilter, options);
})

describe("groupByFeaturePath: true ", () => {
    const options :TestRunnerOptions = {        
        groupByFeaturePath: true,
    }
    
    testRunner<World>(`${__dirname}/features/**/*.feature`, steps, createWorld, tagFilter, options);
})