export type Step<TWorld> = (world: TWorld,...params: string[]) => void;