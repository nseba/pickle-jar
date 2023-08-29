import {FeatureContext} from "./feature-context";

export type WorldFactory<TWorld> = (featureContext : FeatureContext) => TWorld;