import {Recognizer} from "antlr4ts";
import {ANTLRErrorListener} from "antlr4ts/ANTLRErrorListener";
import {ATNSimulator} from "antlr4ts/atn";

interface AntlrError {
    msg: string;
    line: number;
    charPositionInLine: number;
}

export class JestErrorListener implements ANTLRErrorListener<unknown> {
    private readonly errors: AntlrError[] = [];

    public syntaxError<T>(recognizer: Recognizer<T, ATNSimulator>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string/*, e: RecognitionException | undefined*/): void {
        this.errors.push({
            msg, line, charPositionInLine
        });
    }

    public reportErrors() {
        for (const {msg, line, charPositionInLine} of this.errors) {
            it(`Failed: line ${line}:${charPositionInLine} ${msg}`, () => {
                expect(`line ${line}:${charPositionInLine} ${msg}`).toBe(undefined);
            })
        }
    }
}