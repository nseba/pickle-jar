export interface ExecutionContext {
    step: string;
    file: string;
    absoluteFeaturePath: string;
    relativeFeaturePath: string;
    directory: string;
    startLine: number;
    startChar: number;
}