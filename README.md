# pickle-jar
[//]: <> (start placeholder for auto-badger)


[![version](https://img.shields.io/npm/v/pickle-jar.svg?style=flat-square)](https://npmjs.org/pickle-jar)
[![min size](https://img.shields.io/bundlephobia/min/pickle-jar?style=flat-square)](https://bundlephobia.com/result?p=pickle-jar)
[![mingzip size](https://img.shields.io/bundlephobia/minzip/pickle-jar)](https://bundlephobia.com/result?p=pickle-jar)
[![license](https://img.shields.io/npm/l/pickle-jar?color=%23007a1f&style=flat-square)](https://github.com/nseba/pickle-jar/blob/master/LICENSE)

[![dependancies](https://img.shields.io/librariesio/release/npm/pickle-jar?color=%23007a1f&style=flat-square)](https://libraries.io/npm/pickle-jar)
[![downloads](https://img.shields.io/npm/dm/pickle-jar?style=flat-square&color=%23007a1f)](https://npmcharts.com/compare/pickle-jar)
[![all contributors](https://img.shields.io/github/all-contributors/nseba/pickle-jar?style=flat-square)](https://github.com/nseba/pickle-jar/graphs/contributors)
[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/nseba/pickle-jar/blob/master/CODE_OF_CONDUCT.md)

[![stargazers](https://img.shields.io/github/stars/nseba/pickle-jar?style=social)](https://github.com/nseba/pickle-jar/stargazers)
[![number of forks](https://img.shields.io/github/forks/nseba/pickle-jar?style=social)](https://github.com/nseba/pickle-jar/fork)

[//]: <> (end placeholder for auto-badger)

Framework for writing Gherkin features and running them using Jest

# Overview
pickle-jar is an alternative to jest-cucumber and and Cucumber.js that runs on top of jest. `pickle-jar`
allows defining test scnearios using Gherkin language and translates them into define/it blocks that run using jest.
Compared to jest-cucumber, the output is more explicit and all steps are reperesented by jest describe blocks.

The framework allows defining steps using regular expression matchers. Match groups are automatically passed as parameters
to the step function.

# Why pickle-jar?
jest-cucumber is a good framework, but it has several limitations:
* the test steps are not clearly represented (only the scenario)
* scenario descriptions are not clear, making it hard to figure out the set of parameters that leads to a scenario failure

# Getting started
## Install pickle-jar:
```shell
npm install pickle-jar --dev
```
The project dependencies must be explicitly installed (they are defined as peer dependencies):
```shell
npm install antlr4 antlr4ts glob --dev
```
## Create a first feature file
Create a folder named `<rootDir>/test/features`. This folder will be the base folder for all feature files.
To keep things tidy, feature files can be also grouped in subfolders.

Define a first feature file, called `MyFeature.feature` inside the `<rootDir>/test/features` directory:
```gherkin
Feature: Logging in

Scenario: Entering a correct password
    Given I have previously created a password
    When I enter my password correctly
    Then I should be granted access
```

In order to run the features and their steps, a test runner entry point must be defined:
## The test runner entry point
Create a file named `runner.ts` in the `<rootDir>/test` directory:

```ts
import {workerData} from "worker_threads";
import {StepDefinition, testRunner} from "../src";

interface World {
    password: string | undefined;
    grantedAccess: boolean;
}

const stepDefinitions: StepDefinition<World>[] = [{
    match: /^Given I have previously created a password$/, step: (world) => {
        world.password = "my password";
    }
}, {
    match: /^When I enter my password correctly$/, step: (world) => {
        world.grantedAccess = world.password === 'my password';
    }
}, {
    match: /^I should be granted access$/, step: (world) => {
        expect(world.grantedAccess).toBeTruthy();
    }
}];

const world: World = {
    password: undefined,
    grantedAccess: false
}
testRunner<World>(`${__dirname}/features/**/*.feature`, stepDefinitions, world);
```

The test runner file defines the World object structure. This object is passed to each step and allows sharing values from one step to another.

## Step definitions
Steps from the feature file are matched using regular expressions. The test runner receives an array of steps.
Each step has a regular expression and a callback:
```ts 
{
    match: /^Given I have previously created a password$/, 
    step: (world) => {
        world.password = "my password";
    }
}
```
The test runner checks the step using the regular expressions. If zero or more than one regular expression
match the feature step, an error will be thrown. Any regular expression capture groups or doc string in the step definition
will be passed to the step callback as parameters. 

For example, the feature and steps define above can be rewritten in a more general way: 


### `MyFeature.feature`:
```gherkin
Feature: Logging in
  Scenario: Test passwords with parameters
    Given I have previously created the 'my password' password
    When I enter correctly the password
    """
    my password
    """
    Then I should be granted access
```
### `runner.ts` steps:
```ts
import {workerData} from "worker_threads";
import {StepDefinition, testRunner} from "../src";

interface World {
    password: string | undefined;
    grantedAccess: boolean;
}

const stepDefinitions: StepDefinition<World>[] = [{
    match: /^Given I have previously the '([^']+)' password$/, step: (world, password) => {
        world.password = password;
    }
}, {
    match: /^I enter correctly the password$/, step: (world, expectedPassword) => {
        world.grantedAccess = world.password === expectedPassword;
    }
}, {
    match: /^I should be granted access$/, step: (world) => {
        expect(world.grantedAccess).toBeTruthy();
    }
}];

const world: World = {
    password: undefined,
    grantedAccess: false
}
testRunner<World>(`${__dirname}/features/**/*.feature`, stepDefinitions, world);
```

## Running scenario outlines
Scenario outline steps are defined in the same way as normal scenario steps. The scenario outline is expanded into a test run for 
each row of the examples. 

## Tag filtering
Tags can be used for filtering entire scenarios or scenario steps. Feature files can use tags using the `@tag`. The test runner can accept an optional predicate callback that can filter scenarios or steps based on the tags such as:

```ts
const tagFilter = (tags: string[])=> {
    return tags.indexOf("@ui") === -1;
}
```
There are several builtin tags which are handled differently than custom tags:

* `@skip` - when used, the step and sub-steps are completely skipped (they are handled as Jest `describe.only` or `it.only` calls)
* `@only` - when used, only the steps and sub-steps are executed (they are handled as Jest `describe.only` or `it.only` calls)
* `@todo` - when used, the step is marked as a TODO and no step code is executed (they are handled as Jest `it.todo` calls)
* `@fail` - when used, the step is expected to fail (thye are handled as Jest `it.failed` calls)

## Jest configuration
Create a `jest.config.js` file in the project root (or update the existing one) to match the `runner.ts` file:
```js
module.exports = {
    testMatch: [
        '<rootDir>/test/runner.ts'
    ],
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        }]
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../coverage/',
};
```