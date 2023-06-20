// @ts-nocheck
// Generated from ./src/grammar/GherkinParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GherkinParserVisitor } from "./GherkinParserVisitor";


export class GherkinParser extends Parser {
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
	public static readonly RULE_featureFile = 0;
	public static readonly RULE_feature = 1;
	public static readonly RULE_background = 2;
	public static readonly RULE_scenario = 3;
	public static readonly RULE_scenarioOutline = 4;
	public static readonly RULE_examplesBlock = 5;
	public static readonly RULE_tableHeader = 6;
	public static readonly RULE_tableRow = 7;
	public static readonly RULE_cell = 8;
	public static readonly RULE_step = 9;
	public static readonly RULE_givenStep = 10;
	public static readonly RULE_andGivenStep = 11;
	public static readonly RULE_whenStep = 12;
	public static readonly RULE_andWhenStep = 13;
	public static readonly RULE_thenStep = 14;
	public static readonly RULE_andStep = 15;
	public static readonly RULE_butStep = 16;
	public static readonly RULE_docString = 17;
	public static readonly RULE_tags = 18;
	public static readonly RULE_thenTags = 19;
	public static readonly RULE_contentText = 20;
	public static readonly RULE_multilineText = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"featureFile", "feature", "background", "scenario", "scenarioOutline", 
		"examplesBlock", "tableHeader", "tableRow", "cell", "step", "givenStep", 
		"andGivenStep", "whenStep", "andWhenStep", "thenStep", "andStep", "butStep", 
		"docString", "tags", "thenTags", "contentText", "multilineText",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GherkinParser._LITERAL_NAMES, GherkinParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GherkinParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GherkinParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GherkinParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GherkinParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GherkinParser._ATN, this);
	}
	// @RuleVersion(0)
	public featureFile(): FeatureFileContext {
		let _localctx: FeatureFileContext = new FeatureFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GherkinParser.RULE_featureFile);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 44;
					this.feature();
					}
					}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 50;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 56;
			this.match(GherkinParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public feature(): FeatureContext {
		let _localctx: FeatureContext = new FeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GherkinParser.RULE_feature);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 58;
				this.tags();
				}
				break;
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 61;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(GherkinParser.FEATURE);
			this.state = 68;
			this.multilineText();
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 69;
				this.background();
				}
				break;
			}
			this.state = 76;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 74;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						this.state = 72;
						this.scenario();
						}
						break;

					case 2:
						{
						this.state = 73;
						this.scenarioOutline();
						}
						break;
					}
					}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 82;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 79;
					this.match(GherkinParser.NEWLINE);
					}
					}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public background(): BackgroundContext {
		let _localctx: BackgroundContext = new BackgroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GherkinParser.RULE_background);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 85;
				this.tags();
				}
				break;
			}
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 88;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(GherkinParser.BACKGROUND);
			this.state = 95;
			this.multilineText();
			this.state = 96;
			this.givenStep();
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 97;
					this.andGivenStep();
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scenario(): ScenarioContext {
		let _localctx: ScenarioContext = new ScenarioContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GherkinParser.RULE_scenario);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 103;
				this.tags();
				}
				break;
			}
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 106;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.match(GherkinParser.SCENARIO);
			this.state = 113;
			this.multilineText();
			this.state = 114;
			this.step();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scenarioOutline(): ScenarioOutlineContext {
		let _localctx: ScenarioOutlineContext = new ScenarioOutlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GherkinParser.RULE_scenarioOutline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 116;
				this.tags();
				}
				break;
			}
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 119;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(GherkinParser.SCENARIO_OUTLINE);
			this.state = 126;
			this.multilineText();
			this.state = 127;
			this.step();
			this.state = 128;
			this.examplesBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public examplesBlock(): ExamplesBlockContext {
		let _localctx: ExamplesBlockContext = new ExamplesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GherkinParser.RULE_examplesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 130;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this.match(GherkinParser.EXAMPLES);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GherkinParser.NEWLINE);
			this.state = 142;
			this.tableHeader();
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 143;
				this.tableRow();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GherkinParser.PIPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableHeader(): TableHeaderContext {
		let _localctx: TableHeaderContext = new TableHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GherkinParser.RULE_tableHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.tableRow();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableRow(): TableRowContext {
		let _localctx: TableRowContext = new TableRowContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GherkinParser.RULE_tableRow);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(GherkinParser.PIPE);
			this.state = 151;
			this.cell();
			this.state = 156;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 152;
					this.match(GherkinParser.PIPE);
					this.state = 153;
					this.cell();
					}
					}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 159;
			this.match(GherkinParser.PIPE);
			this.state = 161;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 160;
					this.match(GherkinParser.NEWLINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cell(): CellContext {
		let _localctx: CellContext = new CellContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GherkinParser.RULE_cell);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TEXT_CHARACTER) {
				{
				this.state = 165;
				this.contentText();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public step(): StepContext {
		let _localctx: StepContext = new StepContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, GherkinParser.RULE_step);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.givenStep();
			this.state = 172;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 169;
					this.andGivenStep();
					}
					}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 175;
			this.whenStep();
			this.state = 179;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 176;
					this.andWhenStep();
					}
					}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 182;
			this.thenStep();
			this.state = 186;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 183;
					this.andStep();
					}
					}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 192;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 189;
					this.butStep();
					}
					}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public givenStep(): GivenStepContext {
		let _localctx: GivenStepContext = new GivenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GherkinParser.RULE_givenStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 195;
				this.tags();
				}
				break;
			}
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 198;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 204;
			this.match(GherkinParser.GIVEN);
			this.state = 205;
			this.multilineText();
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 213;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 206;
					this.match(GherkinParser.NEWLINE);
					this.state = 207;
					this.docString();
					this.state = 209;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 208;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 211;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 216;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 215;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 218;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andGivenStep(): AndGivenStepContext {
		let _localctx: AndGivenStepContext = new AndGivenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GherkinParser.RULE_andGivenStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 222;
				this.tags();
				}
				break;
			}
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 225;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 231;
			this.match(GherkinParser.AND_GIVEN);
			this.state = 232;
			this.multilineText();
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 240;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 233;
					this.match(GherkinParser.NEWLINE);
					this.state = 234;
					this.docString();
					this.state = 236;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 235;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 238;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 243;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 242;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 245;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenStep(): WhenStepContext {
		let _localctx: WhenStepContext = new WhenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GherkinParser.RULE_whenStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 249;
				this.tags();
				}
				break;
			}
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 252;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 258;
			this.match(GherkinParser.WHEN);
			this.state = 259;
			this.multilineText();
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 260;
					this.match(GherkinParser.NEWLINE);
					this.state = 261;
					this.docString();
					this.state = 263;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 262;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 265;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 270;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 269;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 272;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andWhenStep(): AndWhenStepContext {
		let _localctx: AndWhenStepContext = new AndWhenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GherkinParser.RULE_andWhenStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 276;
				this.tags();
				}
				break;
			}
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 279;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 285;
			this.match(GherkinParser.AND_WHEN);
			this.state = 286;
			this.multilineText();
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 287;
					this.match(GherkinParser.NEWLINE);
					this.state = 288;
					this.docString();
					this.state = 290;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 289;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 292;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 297;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 296;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 299;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thenStep(): ThenStepContext {
		let _localctx: ThenStepContext = new ThenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GherkinParser.RULE_thenStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 303;
				this.thenTags();
				}
				break;
			}
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 306;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 312;
			this.match(GherkinParser.THEN);
			this.state = 313;
			this.multilineText();
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 321;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 314;
					this.match(GherkinParser.NEWLINE);
					this.state = 315;
					this.docString();
					this.state = 317;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 316;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 319;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 324;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 323;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 326;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andStep(): AndStepContext {
		let _localctx: AndStepContext = new AndStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GherkinParser.RULE_andStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 330;
				this.thenTags();
				}
				break;
			}
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 333;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 339;
			this.match(GherkinParser.AND);
			this.state = 340;
			this.multilineText();
			this.state = 355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 348;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 341;
					this.match(GherkinParser.NEWLINE);
					this.state = 342;
					this.docString();
					this.state = 344;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 343;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 346;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 351;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 350;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 353;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public butStep(): ButStepContext {
		let _localctx: ButStepContext = new ButStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GherkinParser.RULE_butStep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 357;
				this.thenTags();
				}
				break;
			}
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 360;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 366;
			this.match(GherkinParser.BUT);
			this.state = 367;
			this.multilineText();
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 375;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 368;
					this.match(GherkinParser.NEWLINE);
					this.state = 369;
					this.docString();
					this.state = 371;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 370;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 373;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 378;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 377;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 380;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public docString(): DocStringContext {
		let _localctx: DocStringContext = new DocStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GherkinParser.RULE_docString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(GherkinParser.DOC_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tags(): TagsContext {
		let _localctx: TagsContext = new TagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GherkinParser.RULE_tags);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 386;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 392;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.ONLY_TAG) | (1 << GherkinParser.SKIP_TAG) | (1 << GherkinParser.TAG))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 396;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 393;
						this.match(GherkinParser.NEWLINE);
						}
						}
					}
					this.state = 398;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				}
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.ONLY_TAG) | (1 << GherkinParser.SKIP_TAG) | (1 << GherkinParser.TAG))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thenTags(): ThenTagsContext {
		let _localctx: ThenTagsContext = new ThenTagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, GherkinParser.RULE_thenTags);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 403;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 409;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.ONLY_TAG) | (1 << GherkinParser.SKIP_TAG) | (1 << GherkinParser.TODO_TAG) | (1 << GherkinParser.FAIL_TAG) | (1 << GherkinParser.TAG))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 410;
						this.match(GherkinParser.NEWLINE);
						}
						}
					}
					this.state = 415;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.ONLY_TAG) | (1 << GherkinParser.SKIP_TAG) | (1 << GherkinParser.TODO_TAG) | (1 << GherkinParser.FAIL_TAG) | (1 << GherkinParser.TAG))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contentText(): ContentTextContext {
		let _localctx: ContentTextContext = new ContentTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GherkinParser.RULE_contentText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 420;
				this.match(GherkinParser.TEXT_CHARACTER);
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GherkinParser.TEXT_CHARACTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multilineText(): MultilineTextContext {
		let _localctx: MultilineTextContext = new MultilineTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GherkinParser.RULE_multilineText);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 425;
					_la = this._input.LA(1);
					if (!(_la === GherkinParser.TEXT_CHARACTER || _la === GherkinParser.NEWLINE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\u01B1\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x07\x026\n\x02\f" +
		"\x02\x0E\x029\v\x02\x03\x02\x03\x02\x03\x03\x05\x03>\n\x03\x03\x03\x07" +
		"\x03A\n\x03\f\x03\x0E\x03D\v\x03\x03\x03\x03\x03\x03\x03\x05\x03I\n\x03" +
		"\x03\x03\x03\x03\x07\x03M\n\x03\f\x03\x0E\x03P\v\x03\x03\x03\x07\x03S" +
		"\n\x03\f\x03\x0E\x03V\v\x03\x03\x04\x05\x04Y\n\x04\x03\x04\x07\x04\\\n" +
		"\x04\f\x04\x0E\x04_\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04e\n\x04" +
		"\f\x04\x0E\x04h\v\x04\x03\x05\x05\x05k\n\x05\x03\x05\x07\x05n\n\x05\f" +
		"\x05\x0E\x05q\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x05\x06x\n" +
		"\x06\x03\x06\x07\x06{\n\x06\f\x06\x0E\x06~\v\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x07\x07\x86\n\x07\f\x07\x0E\x07\x89\v\x07\x03" +
		"\x07\x03\x07\x06\x07\x8D\n\x07\r\x07\x0E\x07\x8E\x03\x07\x03\x07\x06\x07" +
		"\x93\n\x07\r\x07\x0E\x07\x94\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07\t" +
		"\x9D\n\t\f\t\x0E\t\xA0\v\t\x03\t\x03\t\x06\t\xA4\n\t\r\t\x0E\t\xA5\x03" +
		"\n\x05\n\xA9\n\n\x03\v\x03\v\x07\v\xAD\n\v\f\v\x0E\v\xB0\v\v\x03\v\x03" +
		"\v\x07\v\xB4\n\v\f\v\x0E\v\xB7\v\v\x03\v\x03\v\x07\v\xBB\n\v\f\v\x0E\v" +
		"\xBE\v\v\x03\v\x07\v\xC1\n\v\f\v\x0E\v\xC4\v\v\x03\f\x05\f\xC7\n\f\x03" +
		"\f\x07\f\xCA\n\f\f\f\x0E\f\xCD\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f" +
		"\xD4\n\f\r\f\x0E\f\xD5\x05\f\xD8\n\f\x03\f\x06\f\xDB\n\f\r\f\x0E\f\xDC" +
		"\x05\f\xDF\n\f\x03\r\x05\r\xE2\n\r\x03\r\x07\r\xE5\n\r\f\r\x0E\r\xE8\v" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\xEF\n\r\r\r\x0E\r\xF0\x05\r\xF3" +
		"\n\r\x03\r\x06\r\xF6\n\r\r\r\x0E\r\xF7\x05\r\xFA\n\r\x03\x0E\x05\x0E\xFD" +
		"\n\x0E\x03\x0E\x07\x0E\u0100\n\x0E\f\x0E\x0E\x0E\u0103\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u010A\n\x0E\r\x0E\x0E\x0E\u010B\x05" +
		"\x0E\u010E\n\x0E\x03\x0E\x06\x0E\u0111\n\x0E\r\x0E\x0E\x0E\u0112\x05\x0E" +
		"\u0115\n\x0E\x03\x0F\x05\x0F\u0118\n\x0F\x03\x0F\x07\x0F\u011B\n\x0F\f" +
		"\x0F\x0E\x0F\u011E\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F" +
		"\u0125\n\x0F\r\x0F\x0E\x0F\u0126\x05\x0F\u0129\n\x0F\x03\x0F\x06\x0F\u012C" +
		"\n\x0F\r\x0F\x0E\x0F\u012D\x05\x0F\u0130\n\x0F\x03\x10\x05\x10\u0133\n" +
		"\x10\x03\x10\x07\x10\u0136\n\x10\f\x10\x0E\x10\u0139\v\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x06\x10\u0140\n\x10\r\x10\x0E\x10\u0141\x05" +
		"\x10\u0144\n\x10\x03\x10\x06\x10\u0147\n\x10\r\x10\x0E\x10\u0148\x05\x10" +
		"\u014B\n\x10\x03\x11\x05\x11\u014E\n\x11\x03\x11\x07\x11\u0151\n\x11\f" +
		"\x11\x0E\x11\u0154\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11" +
		"\u015B\n\x11\r\x11\x0E\x11\u015C\x05\x11\u015F\n\x11\x03\x11\x06\x11\u0162" +
		"\n\x11\r\x11\x0E\x11\u0163\x05\x11\u0166\n\x11\x03\x12\x05\x12\u0169\n" +
		"\x12\x03\x12\x07\x12\u016C\n\x12\f\x12\x0E\x12\u016F\v\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x06\x12\u0176\n\x12\r\x12\x0E\x12\u0177\x05" +
		"\x12\u017A\n\x12\x03\x12\x06\x12\u017D\n\x12\r\x12\x0E\x12\u017E\x05\x12" +
		"\u0181\n\x12\x03\x13\x03\x13\x03\x14\x07\x14\u0186\n\x14\f\x14\x0E\x14" +
		"\u0189\v\x14\x03\x14\x03\x14\x07\x14\u018D\n\x14\f\x14\x0E\x14\u0190\v" +
		"\x14\x06\x14\u0192\n\x14\r\x14\x0E\x14\u0193\x03\x15\x07\x15\u0197\n\x15" +
		"\f\x15\x0E\x15\u019A\v\x15\x03\x15\x03\x15\x07\x15\u019E\n\x15\f\x15\x0E" +
		"\x15\u01A1\v\x15\x06\x15\u01A3\n\x15\r\x15\x0E\x15\u01A4\x03\x16\x06\x16" +
		"\u01A8\n\x16\r\x16\x0E\x16\u01A9\x03\x17\x06\x17\u01AD\n\x17\r\x17\x0E" +
		"\x17\u01AE\x03\x17\x02\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x05\x04\x02\x10\x11\x14" +
		"\x14\x03\x02\x10\x14\x03\x02\x16\x17\x02\u01E5\x021\x03\x02\x02\x02\x04" +
		"=\x03\x02\x02\x02\x06X\x03\x02\x02\x02\bj\x03\x02\x02\x02\nw\x03\x02\x02" +
		"\x02\f\x87\x03\x02\x02\x02\x0E\x96\x03\x02\x02\x02\x10\x98\x03\x02\x02" +
		"\x02\x12\xA8\x03\x02\x02\x02\x14\xAA\x03\x02\x02\x02\x16\xC6\x03\x02\x02" +
		"\x02\x18\xE1\x03\x02\x02\x02\x1A\xFC\x03\x02\x02\x02\x1C\u0117\x03\x02" +
		"\x02\x02\x1E\u0132\x03\x02\x02\x02 \u014D\x03\x02\x02\x02\"\u0168\x03" +
		"\x02\x02\x02$\u0182\x03\x02\x02\x02&\u0187\x03\x02\x02\x02(\u0198\x03" +
		"\x02\x02\x02*\u01A7\x03\x02\x02\x02,\u01AC\x03\x02\x02\x02.0\x05\x04\x03" +
		"\x02/.\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02" +
		"\x0227\x03\x02\x02\x0231\x03\x02\x02\x0246\x07\x17\x02\x0254\x03\x02\x02" +
		"\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02" +
		"\x0297\x03\x02\x02\x02:;\x07\x02\x02\x03;\x03\x03\x02\x02\x02<>\x05&\x14" +
		"\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>B\x03\x02\x02\x02?A\x07\x17\x02" +
		"\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02" +
		"\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\x03\x02\x02FH\x05,\x17" +
		"\x02GI\x05\x06\x04\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02IN\x03\x02\x02" +
		"\x02JM\x05\b\x05\x02KM\x05\n\x06\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02" +
		"MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OT\x03\x02\x02\x02" +
		"PN\x03\x02\x02\x02QS\x07\x17\x02\x02RQ\x03\x02\x02\x02SV\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x05\x03\x02\x02\x02VT\x03\x02\x02" +
		"\x02WY\x05&\x14\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02Y]\x03\x02\x02" +
		"\x02Z\\\x07\x17\x02\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\x0E" +
		"\x02\x02ab\x05,\x17\x02bf\x05\x16\f\x02ce\x05\x18\r\x02dc\x03\x02\x02" +
		"\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\x07\x03\x02" +
		"\x02\x02hf\x03\x02\x02\x02ik\x05&\x14\x02ji\x03\x02\x02\x02jk\x03\x02" +
		"\x02\x02ko\x03\x02\x02\x02ln\x07\x17\x02\x02ml\x03\x02\x02\x02nq\x03\x02" +
		"\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02" +
		"\x02\x02rs\x07\x04\x02\x02st\x05,\x17\x02tu\x05\x14\v\x02u\t\x03\x02\x02" +
		"\x02vx\x05&\x14\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02x|\x03\x02\x02" +
		"\x02y{\x07\x17\x02\x02zy\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02" +
		"\x02|}\x03\x02\x02\x02}\x7F\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x80" +
		"\x07\x05\x02\x02\x80\x81\x05,\x17\x02\x81\x82\x05\x14\v\x02\x82\x83\x05" +
		"\f\x07\x02\x83\v\x03\x02\x02\x02\x84\x86\x07\x17\x02\x02\x85\x84\x03\x02" +
		"\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x8A\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8C\x07\r" +
		"\x02\x02\x8B\x8D\x07\x17\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\x92\x05\x0E\b\x02\x91\x93\x05\x10\t\x02\x92\x91\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\r\x03\x02\x02\x02\x96\x97\x05\x10\t\x02\x97\x0F\x03\x02\x02\x02" +
		"\x98\x99\x07\x0F\x02\x02\x99\x9E\x05\x12\n\x02\x9A\x9B\x07\x0F\x02\x02" +
		"\x9B\x9D\x05\x12\n\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02" +
		"\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02" +
		"\xA0\x9E\x03\x02\x02\x02\xA1\xA3\x07\x0F\x02\x02\xA2\xA4\x07\x17\x02\x02" +
		"\xA3\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02" +
		"\xA5\xA6\x03\x02\x02\x02\xA6\x11\x03\x02\x02\x02\xA7\xA9\x05*\x16\x02" +
		"\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\x13\x03\x02\x02\x02" +
		"\xAA\xAE\x05\x16\f\x02\xAB\xAD\x05\x18\r\x02\xAC\xAB\x03\x02\x02\x02\xAD" +
		"\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF" +
		"\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB5\x05\x1A\x0E\x02\xB2" +
		"\xB4\x05\x1C\x0F\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5" +
		"\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7" +
		"\xB5\x03\x02\x02\x02\xB8\xBC\x05\x1E\x10\x02\xB9\xBB\x05 \x11\x02\xBA" +
		"\xB9\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC" +
		"\xBD\x03\x02\x02\x02\xBD\xC2\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF" +
		"\xC1\x05\"\x12\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2" +
		"\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\x15\x03\x02\x02\x02\xC4" +
		"\xC2\x03\x02\x02\x02\xC5\xC7\x05&\x14\x02\xC6\xC5\x03\x02\x02\x02\xC6" +
		"\xC7\x03\x02\x02\x02\xC7\xCB\x03\x02\x02\x02\xC8\xCA\x07\x17\x02\x02\xC9" +
		"\xC8\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB" +
		"\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE" +
		"\xCF\x07\x06\x02\x02\xCF\xDE\x05,\x17\x02\xD0\xD1\x07\x17\x02\x02\xD1" +
		"\xD3\x05$\x13\x02\xD2\xD4\x07\x17\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4" +
		"\xD5\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6" +
		"\xD8\x03\x02\x02\x02\xD7\xD0\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\xDF\x03\x02\x02\x02\xD9\xDB\x07\x17\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB" +
		"\xDC\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD" +
		"\xDF\x03\x02\x02\x02\xDE\xD7\x03\x02\x02\x02\xDE\xDA\x03\x02\x02\x02\xDF" +
		"\x17\x03\x02\x02\x02\xE0\xE2\x05&\x14\x02\xE1\xE0\x03\x02\x02\x02\xE1" +
		"\xE2\x03\x02\x02\x02\xE2\xE6\x03\x02\x02\x02\xE3\xE5\x07\x17\x02\x02\xE4" +
		"\xE3\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6" +
		"\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9" +
		"\xEA\x07\x07\x02\x02\xEA\xF9\x05,\x17\x02\xEB\xEC\x07\x17\x02\x02\xEC" +
		"\xEE\x05$\x13\x02\xED\xEF\x07\x17\x02\x02\xEE\xED\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1" +
		"\xF3\x03\x02\x02\x02\xF2\xEB\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3" +
		"\xFA\x03\x02\x02\x02\xF4\xF6\x07\x17\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6" +
		"\xF7\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8" +
		"\xFA\x03\x02\x02\x02\xF9\xF2\x03\x02\x02\x02\xF9\xF5\x03\x02\x02\x02\xFA" +
		"\x19\x03\x02\x02\x02\xFB\xFD\x05&\x14\x02\xFC\xFB\x03\x02\x02\x02\xFC" +
		"\xFD\x03\x02\x02\x02\xFD\u0101\x03\x02\x02\x02\xFE\u0100\x07\x17\x02\x02" +
		"\xFF\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0104\u0105\x07\b\x02\x02\u0105\u0114\x05,\x17" +
		"\x02\u0106\u0107\x07\x17\x02\x02\u0107\u0109\x05$\x13\x02\u0108\u010A" +
		"\x07\x17\x02\x02\u0109\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
		"\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03" +
		"\x02\x02\x02\u010D\u0106\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0115\x03\x02\x02\x02\u010F\u0111\x07\x17\x02\x02\u0110\u010F\x03\x02" +
		"\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u010D\x03\x02" +
		"\x02\x02\u0114\u0110\x03\x02\x02\x02\u0115\x1B\x03\x02\x02\x02\u0116\u0118" +
		"\x05&\x14\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02" +
		"\u0118\u011C\x03\x02\x02\x02\u0119\u011B\x07\x17\x02\x02\u011A\u0119\x03" +
		"\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u011F\x03\x02\x02\x02\u011E\u011C\x03\x02" +
		"\x02\x02\u011F\u0120\x07\t\x02\x02\u0120\u012F\x05,\x17\x02\u0121\u0122" +
		"\x07\x17\x02\x02\u0122\u0124\x05$\x13\x02\u0123\u0125\x07\x17\x02\x02" +
		"\u0124\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0124\x03" +
		"\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128" +
		"\u0121\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u0130\x03\x02" +
		"\x02\x02\u012A\u012C\x07\x17\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C" +
		"\u012D\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0128\x03\x02\x02\x02\u012F" +
		"\u012B\x03\x02\x02\x02\u0130\x1D\x03\x02\x02\x02\u0131\u0133\x05(\x15" +
		"\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0137" +
		"\x03\x02\x02\x02\u0134\u0136\x07\x17\x02\x02\u0135\u0134\x03\x02\x02\x02" +
		"\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03" +
		"\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A" +
		"\u013B\x07\n\x02\x02\u013B\u014A\x05,\x17\x02\u013C\u013D\x07\x17\x02" +
		"\x02\u013D\u013F\x05$\x13\x02\u013E\u0140\x07\x17\x02\x02\u013F\u013E" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u013C\x03" +
		"\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u014B\x03\x02\x02\x02\u0145" +
		"\u0147\x07\x17\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149" +
		"\u014B\x03\x02\x02\x02\u014A\u0143\x03\x02\x02\x02\u014A\u0146\x03\x02" +
		"\x02\x02\u014B\x1F\x03\x02\x02\x02\u014C\u014E\x05(\x15\x02\u014D\u014C" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0152\x03\x02\x02\x02" +
		"\u014F\u0151\x07\x17\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151\u0154\x03" +
		"\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0155\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0156\x07\v\x02" +
		"\x02\u0156\u0165\x05,\x17\x02\u0157\u0158\x07\x17\x02\x02\u0158\u015A" +
		"\x05$\x13\x02\u0159\u015B\x07\x17\x02\x02\u015A\u0159\x03\x02\x02\x02" +
		"\u015B\u015C\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03" +
		"\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u0157\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u0166\x03\x02\x02\x02\u0160\u0162\x07\x17" +
		"\x02\x02\u0161\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02" +
		"\x02\x02\u0165\u015E\x03\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0166" +
		"!\x03\x02\x02\x02\u0167\u0169\x05(\x15\x02\u0168\u0167\x03\x02\x02\x02" +
		"\u0168\u0169\x03\x02\x02\x02\u0169\u016D\x03\x02\x02\x02\u016A\u016C\x07" +
		"\x17\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D" +
		"\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02" +
		"\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0171\x07\f\x02\x02\u0171\u0180" +
		"\x05,\x17\x02\u0172\u0173\x07\x17\x02\x02\u0173\u0175\x05$\x13\x02\u0174" +
		"\u0176\x07\x17\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02" +
		"\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"\u017A\x03\x02\x02\x02\u0179\u0172\x03\x02\x02\x02\u0179\u017A\x03\x02" +
		"\x02\x02\u017A\u0181\x03\x02\x02\x02\u017B\u017D\x07\x17\x02\x02\u017C" +
		"\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017C\x03\x02" +
		"\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180" +
		"\u0179\x03\x02\x02\x02\u0180\u017C\x03\x02\x02\x02\u0181#\x03\x02\x02" +
		"\x02\u0182\u0183\x07\x19\x02\x02\u0183%\x03\x02\x02\x02\u0184\u0186\x07" +
		"\x17\x02\x02\u0185\u0184\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187" +
		"\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0191\x03\x02" +
		"\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018E\t\x02\x02\x02\u018B\u018D" +
		"\x07\x17\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02" +
		"\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0192\x03" +
		"\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u018A\x03\x02\x02\x02\u0192" +
		"\u0193\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02" +
		"\x02\x02\u0194\'\x03\x02\x02\x02\u0195\u0197\x07\x17\x02\x02\u0196\u0195" +
		"\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02" +
		"\u0198\u0199\x03\x02\x02\x02\u0199\u01A2\x03\x02\x02\x02\u019A\u0198\x03" +
		"\x02\x02\x02\u019B\u019F\t\x03\x02\x02\u019C\u019E\x07\x17\x02\x02\u019D" +
		"\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A2\u019B\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		")\x03\x02\x02\x02\u01A6\u01A8\x07\x16\x02\x02\u01A7\u01A6\x03\x02\x02" +
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA" +
		"\x03\x02\x02\x02\u01AA+\x03\x02\x02\x02\u01AB\u01AD\t\x04\x02\x02\u01AC" +
		"\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AC\x03\x02" +
		"\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF-\x03\x02\x02\x02M17=BHLNTX" +
		"]fjow|\x87\x8E\x94\x9E\xA5\xA8\xAE\xB5\xBC\xC2\xC6\xCB\xD5\xD7\xDC\xDE" +
		"\xE1\xE6\xF0\xF2\xF7\xF9\xFC\u0101\u010B\u010D\u0112\u0114\u0117\u011C" +
		"\u0126\u0128\u012D\u012F\u0132\u0137\u0141\u0143\u0148\u014A\u014D\u0152" +
		"\u015C\u015E\u0163\u0165\u0168\u016D\u0177\u0179\u017E\u0180\u0187\u018E" +
		"\u0193\u0198\u019F\u01A4\u01A9\u01AE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GherkinParser.__ATN) {
			GherkinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GherkinParser._serializedATN));
		}

		return GherkinParser.__ATN;
	}

}

export class FeatureFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GherkinParser.EOF, 0); }
	public feature(): FeatureContext[];
	public feature(i: number): FeatureContext;
	public feature(i?: number): FeatureContext | FeatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureContext);
		} else {
			return this.getRuleContext(i, FeatureContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_featureFile; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitFeatureFile) {
			return visitor.visitFeatureFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeatureContext extends ParserRuleContext {
	public FEATURE(): TerminalNode { return this.getToken(GherkinParser.FEATURE, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public background(): BackgroundContext | undefined {
		return this.tryGetRuleContext(0, BackgroundContext);
	}
	public scenario(): ScenarioContext[];
	public scenario(i: number): ScenarioContext;
	public scenario(i?: number): ScenarioContext | ScenarioContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScenarioContext);
		} else {
			return this.getRuleContext(i, ScenarioContext);
		}
	}
	public scenarioOutline(): ScenarioOutlineContext[];
	public scenarioOutline(i: number): ScenarioOutlineContext;
	public scenarioOutline(i?: number): ScenarioOutlineContext | ScenarioOutlineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScenarioOutlineContext);
		} else {
			return this.getRuleContext(i, ScenarioOutlineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_feature; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitFeature) {
			return visitor.visitFeature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BackgroundContext extends ParserRuleContext {
	public BACKGROUND(): TerminalNode { return this.getToken(GherkinParser.BACKGROUND, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public givenStep(): GivenStepContext {
		return this.getRuleContext(0, GivenStepContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public andGivenStep(): AndGivenStepContext[];
	public andGivenStep(i: number): AndGivenStepContext;
	public andGivenStep(i?: number): AndGivenStepContext | AndGivenStepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndGivenStepContext);
		} else {
			return this.getRuleContext(i, AndGivenStepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_background; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitBackground) {
			return visitor.visitBackground(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScenarioContext extends ParserRuleContext {
	public SCENARIO(): TerminalNode { return this.getToken(GherkinParser.SCENARIO, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public step(): StepContext {
		return this.getRuleContext(0, StepContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_scenario; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitScenario) {
			return visitor.visitScenario(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScenarioOutlineContext extends ParserRuleContext {
	public SCENARIO_OUTLINE(): TerminalNode { return this.getToken(GherkinParser.SCENARIO_OUTLINE, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public step(): StepContext {
		return this.getRuleContext(0, StepContext);
	}
	public examplesBlock(): ExamplesBlockContext {
		return this.getRuleContext(0, ExamplesBlockContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_scenarioOutline; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitScenarioOutline) {
			return visitor.visitScenarioOutline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExamplesBlockContext extends ParserRuleContext {
	public EXAMPLES(): TerminalNode { return this.getToken(GherkinParser.EXAMPLES, 0); }
	public tableHeader(): TableHeaderContext {
		return this.getRuleContext(0, TableHeaderContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public tableRow(): TableRowContext[];
	public tableRow(i: number): TableRowContext;
	public tableRow(i?: number): TableRowContext | TableRowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableRowContext);
		} else {
			return this.getRuleContext(i, TableRowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_examplesBlock; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitExamplesBlock) {
			return visitor.visitExamplesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableHeaderContext extends ParserRuleContext {
	public tableRow(): TableRowContext {
		return this.getRuleContext(0, TableRowContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_tableHeader; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitTableHeader) {
			return visitor.visitTableHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableRowContext extends ParserRuleContext {
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.PIPE);
		} else {
			return this.getToken(GherkinParser.PIPE, i);
		}
	}
	public cell(): CellContext[];
	public cell(i: number): CellContext;
	public cell(i?: number): CellContext | CellContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CellContext);
		} else {
			return this.getRuleContext(i, CellContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_tableRow; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitTableRow) {
			return visitor.visitTableRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CellContext extends ParserRuleContext {
	public contentText(): ContentTextContext | undefined {
		return this.tryGetRuleContext(0, ContentTextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_cell; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitCell) {
			return visitor.visitCell(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StepContext extends ParserRuleContext {
	public givenStep(): GivenStepContext {
		return this.getRuleContext(0, GivenStepContext);
	}
	public whenStep(): WhenStepContext {
		return this.getRuleContext(0, WhenStepContext);
	}
	public thenStep(): ThenStepContext {
		return this.getRuleContext(0, ThenStepContext);
	}
	public andGivenStep(): AndGivenStepContext[];
	public andGivenStep(i: number): AndGivenStepContext;
	public andGivenStep(i?: number): AndGivenStepContext | AndGivenStepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndGivenStepContext);
		} else {
			return this.getRuleContext(i, AndGivenStepContext);
		}
	}
	public andWhenStep(): AndWhenStepContext[];
	public andWhenStep(i: number): AndWhenStepContext;
	public andWhenStep(i?: number): AndWhenStepContext | AndWhenStepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndWhenStepContext);
		} else {
			return this.getRuleContext(i, AndWhenStepContext);
		}
	}
	public andStep(): AndStepContext[];
	public andStep(i: number): AndStepContext;
	public andStep(i?: number): AndStepContext | AndStepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndStepContext);
		} else {
			return this.getRuleContext(i, AndStepContext);
		}
	}
	public butStep(): ButStepContext[];
	public butStep(i: number): ButStepContext;
	public butStep(i?: number): ButStepContext | ButStepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ButStepContext);
		} else {
			return this.getRuleContext(i, ButStepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_step; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitStep) {
			return visitor.visitStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GivenStepContext extends ParserRuleContext {
	public GIVEN(): TerminalNode { return this.getToken(GherkinParser.GIVEN, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_givenStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitGivenStep) {
			return visitor.visitGivenStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndGivenStepContext extends ParserRuleContext {
	public AND_GIVEN(): TerminalNode { return this.getToken(GherkinParser.AND_GIVEN, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_andGivenStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitAndGivenStep) {
			return visitor.visitAndGivenStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenStepContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(GherkinParser.WHEN, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_whenStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitWhenStep) {
			return visitor.visitWhenStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndWhenStepContext extends ParserRuleContext {
	public AND_WHEN(): TerminalNode { return this.getToken(GherkinParser.AND_WHEN, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_andWhenStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitAndWhenStep) {
			return visitor.visitAndWhenStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThenStepContext extends ParserRuleContext {
	public THEN(): TerminalNode { return this.getToken(GherkinParser.THEN, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public thenTags(): ThenTagsContext | undefined {
		return this.tryGetRuleContext(0, ThenTagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_thenStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitThenStep) {
			return visitor.visitThenStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndStepContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(GherkinParser.AND, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public thenTags(): ThenTagsContext | undefined {
		return this.tryGetRuleContext(0, ThenTagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_andStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitAndStep) {
			return visitor.visitAndStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ButStepContext extends ParserRuleContext {
	public BUT(): TerminalNode { return this.getToken(GherkinParser.BUT, 0); }
	public multilineText(): MultilineTextContext {
		return this.getRuleContext(0, MultilineTextContext);
	}
	public thenTags(): ThenTagsContext | undefined {
		return this.tryGetRuleContext(0, ThenTagsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_butStep; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitButStep) {
			return visitor.visitButStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocStringContext extends ParserRuleContext {
	public DOC_STRING(): TerminalNode { return this.getToken(GherkinParser.DOC_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_docString; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitDocString) {
			return visitor.visitDocString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagsContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public ONLY_TAG(): TerminalNode[];
	public ONLY_TAG(i: number): TerminalNode;
	public ONLY_TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.ONLY_TAG);
		} else {
			return this.getToken(GherkinParser.ONLY_TAG, i);
		}
	}
	public SKIP_TAG(): TerminalNode[];
	public SKIP_TAG(i: number): TerminalNode;
	public SKIP_TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.SKIP_TAG);
		} else {
			return this.getToken(GherkinParser.SKIP_TAG, i);
		}
	}
	public TAG(): TerminalNode[];
	public TAG(i: number): TerminalNode;
	public TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.TAG);
		} else {
			return this.getToken(GherkinParser.TAG, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_tags; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitTags) {
			return visitor.visitTags(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThenTagsContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	public ONLY_TAG(): TerminalNode[];
	public ONLY_TAG(i: number): TerminalNode;
	public ONLY_TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.ONLY_TAG);
		} else {
			return this.getToken(GherkinParser.ONLY_TAG, i);
		}
	}
	public SKIP_TAG(): TerminalNode[];
	public SKIP_TAG(i: number): TerminalNode;
	public SKIP_TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.SKIP_TAG);
		} else {
			return this.getToken(GherkinParser.SKIP_TAG, i);
		}
	}
	public FAIL_TAG(): TerminalNode[];
	public FAIL_TAG(i: number): TerminalNode;
	public FAIL_TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.FAIL_TAG);
		} else {
			return this.getToken(GherkinParser.FAIL_TAG, i);
		}
	}
	public TODO_TAG(): TerminalNode[];
	public TODO_TAG(i: number): TerminalNode;
	public TODO_TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.TODO_TAG);
		} else {
			return this.getToken(GherkinParser.TODO_TAG, i);
		}
	}
	public TAG(): TerminalNode[];
	public TAG(i: number): TerminalNode;
	public TAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.TAG);
		} else {
			return this.getToken(GherkinParser.TAG, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_thenTags; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitThenTags) {
			return visitor.visitThenTags(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentTextContext extends ParserRuleContext {
	public TEXT_CHARACTER(): TerminalNode[];
	public TEXT_CHARACTER(i: number): TerminalNode;
	public TEXT_CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.TEXT_CHARACTER);
		} else {
			return this.getToken(GherkinParser.TEXT_CHARACTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_contentText; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitContentText) {
			return visitor.visitContentText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultilineTextContext extends ParserRuleContext {
	public TEXT_CHARACTER(): TerminalNode[];
	public TEXT_CHARACTER(i: number): TerminalNode;
	public TEXT_CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.TEXT_CHARACTER);
		} else {
			return this.getToken(GherkinParser.TEXT_CHARACTER, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.NEWLINE);
		} else {
			return this.getToken(GherkinParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_multilineText; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitMultilineText) {
			return visitor.visitMultilineText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


