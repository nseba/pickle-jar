export function getCallSites() {
    const oldPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const stack = (new Error().stack as unknown as NodeJS.CallSite[]).slice(1);
    Error.prepareStackTrace = oldPrepareStackTrace;
    return stack;
}