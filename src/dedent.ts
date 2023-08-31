export function dedent(text: string| undefined) {
    if(!text) {
        return undefined;
    }
    let indentCount = Number.MAX_SAFE_INTEGER

    const lines = text.split("\n");

    for (const line of lines) {
        if (line.trim().length === 0) {
            continue;
        }

        const indent = line.length - line.trimLeft().length;
        if (indent < indentCount) {
            indentCount = indent;
        }
    }

    return lines.map(line => line.substring(indentCount)).join("\n");
}