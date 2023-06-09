// @ts-nocheck
// Generated from ./src/grammar/GherkinLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class GherkinLexer extends Lexer {
	public static readonly FEATURE = 1;
	public static readonly SCENARIO = 2;
	public static readonly SCENARIO_OUTLINE = 3;
	public static readonly GIVEN = 4;
	public static readonly AND_GIVEN = 5;
	public static readonly WHEN = 6;
	public static readonly AND_WHEN = 7;
	public static readonly THEN = 8;
	public static readonly AND = 9;
	public static readonly BUT = 10;
	public static readonly EXAMPLES = 11;
	public static readonly BACKGROUND = 12;
	public static readonly PIPE = 13;
	public static readonly ONLY_TAG = 14;
	public static readonly SKIP_TAG = 15;
	public static readonly TODO_TAG = 16;
	public static readonly FAIL_TAG = 17;
	public static readonly TAG = 18;
	public static readonly COMMENT = 19;
	public static readonly TEXT_CHARACTER = 20;
	public static readonly NEWLINE = 21;
	public static readonly WSS = 22;
	public static readonly DOC_STRING = 23;
	public static readonly TEXT_CHARACTER_MODE = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "TEXT_CHARACTER_MODE",
	];

	public static readonly ruleNames: string[] = [
		"FEATURE", "SCENARIO", "SCENARIO_OUTLINE", "GIVEN", "AND_GIVEN", "WHEN", 
		"AND_WHEN", "THEN", "AND", "BUT", "EXAMPLES", "BACKGROUND", "PIPE", "ONLY_TAG", 
		"SKIP_TAG", "TODO_TAG", "FAIL_TAG", "TAG", "COMMENT", "TEXT_CHARACTER", 
		"NEWLINE", "WSS", "DOC_STRING", "TEXT_CHARACTER2",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'|'", 
		"'@only'", "'@skip'", "'@todo'", "'@fail'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FEATURE", "SCENARIO", "SCENARIO_OUTLINE", "GIVEN", "AND_GIVEN", 
		"WHEN", "AND_WHEN", "THEN", "AND", "BUT", "EXAMPLES", "BACKGROUND", "PIPE", 
		"ONLY_TAG", "SKIP_TAG", "TODO_TAG", "FAIL_TAG", "TAG", "COMMENT", "TEXT_CHARACTER", 
		"NEWLINE", "WSS", "DOC_STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GherkinLexer._LITERAL_NAMES, GherkinLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GherkinLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(GherkinLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "GherkinLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return GherkinLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return GherkinLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return GherkinLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return GherkinLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x19\u0159\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04" +
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x05\x02D\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\x8C\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x98\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xAC\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xB6\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xC8\n\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xD2\n\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\xDA\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\xE2\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xF5\n\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u010C\n\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x06\x13" +
		"\u012A\n\x13\r\x13\x0E\x13\u012B\x03\x14\x03\x14\x07\x14\u0130\n\x14\f" +
		"\x14\x0E\x14\u0133\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x17\x06\x17\u013E\n\x17\r\x17\x0E\x17\u013F\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0149\n\x18\f" +
		"\x18\x0E\x18\u014C\v\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x06\x19" +
		"\u0153\n\x19\r\x19\x0E\x19\u0154\x03\x19\x03\x19\x03\x19\x03\u014A\x02" +
		"\x02\x1A\x04\x02\x03\x06\x02\x04\b\x02\x05\n\x02\x06\f\x02\x07\x0E\x02" +
		"\b\x10\x02\t\x12\x02\n\x14\x02\v\x16\x02\f\x18\x02\r\x1A\x02\x0E\x1C\x02" +
		"\x0F\x1E\x02\x10 \x02\x11\"\x02\x12$\x02\x13&\x02\x14(\x02\x15*\x02\x16" +
		",\x02\x17.\x02\x180\x02\x192\x02\x02\x04\x02\x03\x06\x06\x022;C\\aac|" +
		"\x04\x02\f\f\x0F\x0F\x05\x02\f\f\x0F\x0F~~\x04\x02\v\v\"\"\x02\u0169\x02" +
		"\x04\x03\x02\x02\x02\x02\x06\x03\x02\x02\x02\x02\b\x03\x02\x02\x02\x02" +
		"\n\x03\x02\x02\x02\x02\f\x03\x02\x02\x02\x02\x0E\x03\x02\x02\x02\x02\x10" +
		"\x03\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14\x03\x02\x02\x02\x02\x16" +
		"\x03\x02\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02\x02\x1C" +
		"\x03\x02\x02\x02\x02\x1E\x03\x02\x02\x02\x02 \x03\x02\x02\x02\x02\"\x03" +
		"\x02\x02\x02\x02$\x03\x02\x02\x02\x02&\x03\x02\x02\x02\x02(\x03\x02\x02" +
		"\x02\x02*\x03\x02\x02\x02\x02,\x03\x02\x02\x02\x02.\x03\x02\x02\x02\x02" +
		"0\x03\x02\x02\x02\x032\x03\x02\x02\x02\x04C\x03\x02\x02\x02\x06V\x03\x02" +
		"\x02\x02\b\x8B\x03\x02\x02\x02\n\x97\x03\x02\x02\x02\f\xAB\x03\x02\x02" +
		"\x02\x0E\xB5\x03\x02\x02\x02\x10\xC7\x03\x02\x02\x02\x12\xD1\x03\x02\x02" +
		"\x02\x14\xD9\x03\x02\x02\x02\x16\xE1\x03\x02\x02\x02\x18\xF4\x03\x02\x02" +
		"\x02\x1A\u010B\x03\x02\x02\x02\x1C\u010D\x03\x02\x02\x02\x1E\u010F\x03" +
		"\x02\x02\x02 \u0115\x03\x02\x02\x02\"\u011B\x03\x02\x02\x02$\u0121\x03" +
		"\x02\x02\x02&\u0127\x03\x02\x02\x02(\u012D\x03\x02\x02\x02*\u0136\x03" +
		"\x02\x02\x02,\u013A\x03\x02\x02\x02.\u013D\x03\x02\x02\x020\u0143\x03" +
		"\x02\x02\x022\u0152\x03\x02\x02\x0245\x07H\x02\x0256\x07g\x02\x0267\x07" +
		"c\x02\x0278\x07v\x02\x0289\x07w\x02\x029:\x07t\x02\x02:;\x07g\x02\x02" +
		";D\x07<\x02\x02<=\x07H\x02\x02=>\x07G\x02\x02>?\x07C\x02\x02?@\x07V\x02" +
		"\x02@A\x07W\x02\x02AB\x07T\x02\x02BD\x07G\x02\x02C4\x03\x02\x02\x02C<" +
		"\x03\x02\x02\x02D\x05\x03\x02\x02\x02EF\x07U\x02\x02FG\x07e\x02\x02GH" +
		"\x07g\x02\x02HI\x07p\x02\x02IJ\x07c\x02\x02JK\x07t\x02\x02KL\x07k\x02" +
		"\x02LM\x07q\x02\x02MW\x07<\x02\x02NO\x07U\x02\x02OP\x07E\x02\x02PQ\x07" +
		"G\x02\x02QR\x07P\x02\x02RS\x07C\x02\x02ST\x07T\x02\x02TU\x07K\x02\x02" +
		"UW\x07Q\x02\x02VE\x03\x02\x02\x02VN\x03\x02\x02\x02W\x07\x03\x02\x02\x02" +
		"XY\x07U\x02\x02YZ\x07e\x02\x02Z[\x07g\x02\x02[\\\x07p\x02\x02\\]\x07c" +
		"\x02\x02]^\x07t\x02\x02^_\x07k\x02\x02_`\x07q\x02\x02`a\x07\"\x02\x02" +
		"ab\x07Q\x02\x02bc\x07w\x02\x02cd\x07v\x02\x02de\x07n\x02\x02ef\x07k\x02" +
		"\x02fg\x07p\x02\x02gh\x07g\x02\x02h\x8C\x07<\x02\x02ij\x07U\x02\x02jk" +
		"\x07E\x02\x02kl\x07G\x02\x02lm\x07P\x02\x02mn\x07C\x02\x02no\x07T\x02" +
		"\x02op\x07K\x02\x02pq\x07Q\x02\x02qr\x07a\x02\x02rs\x07Q\x02\x02st\x07" +
		"W\x02\x02tu\x07V\x02\x02uv\x07N\x02\x02vw\x07K\x02\x02wx\x07P\x02\x02" +
		"x\x8C\x07G\x02\x02yz\x07U\x02\x02z{\x07e\x02\x02{|\x07g\x02\x02|}\x07" +
		"p\x02\x02}~\x07c\x02\x02~\x7F\x07t\x02\x02\x7F\x80\x07k\x02\x02\x80\x81" +
		"\x07q\x02\x02\x81\x82\x07\"\x02\x02\x82\x83\x07V\x02\x02\x83\x84\x07g" +
		"\x02\x02\x84\x85\x07o\x02\x02\x85\x86\x07r\x02\x02\x86\x87\x07n\x02\x02" +
		"\x87\x88\x07c\x02\x02\x88\x89\x07v\x02\x02\x89\x8A\x07g\x02\x02\x8A\x8C" +
		"\x07<\x02\x02\x8BX\x03\x02\x02\x02\x8Bi\x03\x02\x02\x02\x8By\x03\x02\x02" +
		"\x02\x8C\t\x03\x02\x02\x02\x8D\x8E\x07I\x02\x02\x8E\x8F\x07k\x02\x02\x8F" +
		"\x90\x07x\x02\x02\x90\x91\x07g\x02\x02\x91\x98\x07p\x02\x02\x92\x93\x07" +
		"I\x02\x02\x93\x94\x07K\x02\x02\x94\x95\x07X\x02\x02\x95\x96\x07G\x02\x02" +
		"\x96\x98\x07P\x02\x02\x97\x8D\x03\x02\x02\x02\x97\x92\x03\x02\x02\x02" +
		"\x98\v\x03\x02\x02\x02\x99\x9A\x07C\x02\x02\x9A\x9B\x07p\x02\x02\x9B\x9C" +
		"\x07f\x02\x02\x9C\x9D\x07\"\x02\x02\x9D\x9E\x07i\x02\x02\x9E\x9F\x07k" +
		"\x02\x02\x9F\xA0\x07x\x02\x02\xA0\xA1\x07g\x02\x02\xA1\xAC\x07p\x02\x02" +
		"\xA2\xA3\x07C\x02\x02\xA3\xA4\x07P\x02\x02\xA4\xA5\x07F\x02\x02\xA5\xA6" +
		"\x07a\x02\x02\xA6\xA7\x07I\x02\x02\xA7\xA8\x07K\x02\x02\xA8\xA9\x07X\x02" +
		"\x02\xA9\xAA\x07G\x02\x02\xAA\xAC\x07P\x02\x02\xAB\x99\x03\x02\x02\x02" +
		"\xAB\xA2\x03\x02\x02\x02\xAC\r\x03\x02\x02\x02\xAD\xAE\x07Y\x02\x02\xAE" +
		"\xAF\x07j\x02\x02\xAF\xB0\x07g\x02\x02\xB0\xB6\x07p\x02\x02\xB1\xB2\x07" +
		"Y\x02\x02\xB2\xB3\x07J\x02\x02\xB3\xB4\x07G\x02\x02\xB4\xB6\x07P\x02\x02" +
		"\xB5\xAD\x03\x02\x02\x02\xB5\xB1\x03\x02\x02\x02\xB6\x0F\x03\x02\x02\x02" +
		"\xB7\xB8\x07C\x02\x02\xB8\xB9\x07p\x02\x02\xB9\xBA\x07f\x02\x02\xBA\xBB" +
		"\x07\"\x02\x02\xBB\xBC\x07y\x02\x02\xBC\xBD\x07j\x02\x02\xBD\xBE\x07g" +
		"\x02\x02\xBE\xC8\x07p\x02\x02\xBF\xC0\x07C\x02\x02\xC0\xC1\x07P\x02\x02" +
		"\xC1\xC2\x07F\x02\x02\xC2\xC3\x07a\x02\x02\xC3\xC4\x07Y\x02\x02\xC4\xC5" +
		"\x07J\x02\x02\xC5\xC6\x07G\x02\x02\xC6\xC8\x07P\x02\x02\xC7\xB7\x03\x02" +
		"\x02\x02\xC7\xBF\x03\x02\x02\x02\xC8\x11\x03\x02\x02\x02\xC9\xCA\x07V" +
		"\x02\x02\xCA\xCB\x07j\x02\x02\xCB\xCC\x07g\x02\x02\xCC\xD2\x07p\x02\x02" +
		"\xCD\xCE\x07V\x02\x02\xCE\xCF\x07J\x02\x02\xCF\xD0\x07G\x02\x02\xD0\xD2" +
		"\x07P\x02\x02\xD1\xC9\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD2\x13" +
		"\x03\x02\x02\x02\xD3\xD4\x07C\x02\x02\xD4\xD5\x07p\x02\x02\xD5\xDA\x07" +
		"f\x02\x02\xD6\xD7\x07C\x02\x02\xD7\xD8\x07P\x02\x02\xD8\xDA\x07F\x02\x02" +
		"\xD9\xD3\x03\x02\x02\x02\xD9\xD6\x03\x02\x02\x02\xDA\x15\x03\x02\x02\x02" +
		"\xDB\xDC\x07D\x02\x02\xDC\xDD\x07w\x02\x02\xDD\xE2\x07v\x02\x02\xDE\xDF" +
		"\x07D\x02\x02\xDF\xE0\x07W\x02\x02\xE0\xE2\x07V\x02\x02\xE1\xDB\x03\x02" +
		"\x02\x02\xE1\xDE\x03\x02\x02\x02\xE2\x17\x03\x02\x02\x02\xE3\xE4\x07G" +
		"\x02\x02\xE4\xE5\x07z\x02\x02\xE5\xE6\x07c\x02\x02\xE6\xE7\x07o\x02\x02" +
		"\xE7\xE8\x07r\x02\x02\xE8\xE9\x07n\x02\x02\xE9\xEA\x07g\x02\x02\xEA\xEB" +
		"\x07u\x02\x02\xEB\xF5\x07<\x02\x02\xEC\xED\x07G\x02\x02\xED\xEE\x07Z\x02" +
		"\x02\xEE\xEF\x07C\x02\x02\xEF\xF0\x07O\x02\x02\xF0\xF1\x07R\x02\x02\xF1" +
		"\xF2\x07N\x02\x02\xF2\xF3\x07G\x02\x02\xF3\xF5\x07U\x02\x02\xF4\xE3\x03" +
		"\x02\x02\x02\xF4\xEC\x03\x02\x02\x02\xF5\x19\x03\x02\x02\x02\xF6\xF7\x07" +
		"D\x02\x02\xF7\xF8\x07c\x02\x02\xF8\xF9\x07e\x02\x02\xF9\xFA\x07m\x02\x02" +
		"\xFA\xFB\x07i\x02\x02\xFB\xFC\x07t\x02\x02\xFC\xFD\x07q\x02\x02\xFD\xFE" +
		"\x07w\x02\x02\xFE\xFF\x07p\x02\x02\xFF\u0100\x07f\x02\x02\u0100\u010C" +
		"\x07<\x02\x02\u0101\u0102\x07D\x02\x02\u0102\u0103\x07C\x02\x02\u0103" +
		"\u0104\x07E\x02\x02\u0104\u0105\x07M\x02\x02\u0105\u0106\x07I\x02\x02" +
		"\u0106\u0107\x07T\x02\x02\u0107\u0108\x07Q\x02\x02\u0108\u0109\x07W\x02" +
		"\x02\u0109\u010A\x07P\x02\x02\u010A\u010C\x07F\x02\x02\u010B\xF6\x03\x02" +
		"\x02\x02\u010B\u0101\x03\x02\x02\x02\u010C\x1B\x03\x02\x02\x02\u010D\u010E" +
		"\x07~\x02\x02\u010E\x1D\x03\x02\x02\x02\u010F\u0110\x07B\x02\x02\u0110" +
		"\u0111\x07q\x02\x02\u0111\u0112\x07p\x02\x02\u0112\u0113\x07n\x02\x02" +
		"\u0113\u0114\x07{\x02\x02\u0114\x1F\x03\x02\x02\x02\u0115\u0116\x07B\x02" +
		"\x02\u0116\u0117\x07u\x02\x02\u0117\u0118\x07m\x02\x02\u0118\u0119\x07" +
		"k\x02\x02\u0119\u011A\x07r\x02\x02\u011A!\x03\x02\x02\x02\u011B\u011C" +
		"\x07B\x02\x02\u011C\u011D\x07v\x02\x02\u011D\u011E\x07q\x02\x02\u011E" +
		"\u011F\x07f\x02\x02\u011F\u0120\x07q\x02\x02\u0120#\x03\x02\x02\x02\u0121" +
		"\u0122\x07B\x02\x02\u0122\u0123\x07h\x02\x02\u0123\u0124\x07c\x02\x02" +
		"\u0124\u0125\x07k\x02\x02\u0125\u0126\x07n\x02\x02\u0126%\x03\x02\x02" +
		"\x02\u0127\u0129\x07B\x02\x02\u0128\u012A\t\x02\x02\x02\u0129\u0128\x03" +
		"\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C\'\x03\x02\x02\x02\u012D\u0131\x07%\x02\x02" +
		"\u012E\u0130\n\x03\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130\u0133\x03" +
		"\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0134\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0135\b\x14\x02" +
		"\x02\u0135)\x03\x02\x02\x02\u0136\u0137\n\x04\x02\x02\u0137\u0138\x03" +
		"\x02\x02\x02\u0138\u0139\b\x15\x03\x02\u0139+\x03\x02\x02\x02\u013A\u013B" +
		"\t\x03\x02\x02\u013B-\x03\x02\x02\x02\u013C\u013E\t\x05\x02\x02\u013D" +
		"\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u013D\x03\x02" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
		"\u0142\b\x17\x02\x02\u0142/\x03\x02\x02\x02\u0143\u0144\x07$\x02\x02\u0144" +
		"\u0145\x07$\x02\x02\u0145\u0146\x07$\x02\x02\u0146\u014A\x03\x02\x02\x02" +
		"\u0147\u0149\v\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014C\x03" +
		"\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B" +
		"\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u014E\x07$\x02" +
		"\x02\u014E\u014F\x07$\x02\x02\u014F\u0150\x07$\x02\x02\u01501\x03\x02" +
		"\x02\x02\u0151\u0153\n\x04\x02\x02\u0152\u0151\x03\x02\x02\x02\u0153\u0154" +
		"\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02" +
		"\u0155\u0156\x03\x02\x02\x02\u0156\u0157\b\x19\x04\x02\u0157\u0158\b\x19" +
		"\x05\x02\u01583\x03\x02\x02\x02\x15\x02\x03CV\x8B\x97\xAB\xB5\xC7\xD1" +
		"\xD9\xE1\xF4\u010B\u012B\u0131\u013F\u014A\u0154\x06\b\x02\x02\x07\x03" +
		"\x02\t\x16\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GherkinLexer.__ATN) {
			GherkinLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GherkinLexer._serializedATN));
		}

		return GherkinLexer.__ATN;
	}

}

