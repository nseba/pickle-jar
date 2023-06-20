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
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.ONLY_TAG) | (1 << GherkinParser.SKIP_TAG) | (1 << GherkinParser.TAG) | (1 << GherkinParser.NEWLINE))) !== 0)) {
				{
				this.state = 58;
				this.tags();
				}
			}

			this.state = 61;
			this.match(GherkinParser.FEATURE);
			this.state = 62;
			this.multilineText();
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 63;
				this.background();
				}
				break;
			}
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 68;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 66;
						this.scenario();
						}
						break;

					case 2:
						{
						this.state = 67;
						this.scenarioOutline();
						}
						break;
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 76;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 73;
					this.match(GherkinParser.NEWLINE);
					}
					}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 79;
				this.tags();
				}
				break;
			}
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 82;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this.match(GherkinParser.BACKGROUND);
			this.state = 89;
			this.multilineText();
			this.state = 90;
			this.givenStep();
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 91;
					this.andGivenStep();
					}
					}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 97;
				this.tags();
				}
				break;
			}
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 100;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 106;
			this.match(GherkinParser.SCENARIO);
			this.state = 107;
			this.multilineText();
			this.state = 108;
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
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 110;
				this.tags();
				}
				break;
			}
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 113;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this.match(GherkinParser.SCENARIO_OUTLINE);
			this.state = 120;
			this.multilineText();
			this.state = 121;
			this.step();
			this.state = 122;
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
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 124;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(GherkinParser.EXAMPLES);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 131;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GherkinParser.NEWLINE);
			this.state = 136;
			this.tableHeader();
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.tableRow();
				}
				}
				this.state = 140;
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
			this.state = 142;
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
			this.state = 144;
			this.match(GherkinParser.PIPE);
			this.state = 145;
			this.cell();
			this.state = 150;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 146;
					this.match(GherkinParser.PIPE);
					this.state = 147;
					this.cell();
					}
					}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 153;
			this.match(GherkinParser.PIPE);
			this.state = 154;
			this.match(GherkinParser.NEWLINE);
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
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TEXT_CHARACTER) {
				{
				this.state = 156;
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
			this.state = 159;
			this.givenStep();
			this.state = 163;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 160;
					this.andGivenStep();
					}
					}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 166;
			this.whenStep();
			this.state = 170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 167;
					this.andWhenStep();
					}
					}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 173;
			this.thenStep();
			this.state = 177;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 174;
					this.andStep();
					}
					}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 180;
					this.butStep();
					}
					}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 186;
				this.tags();
				}
				break;
			}
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 189;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 195;
			this.match(GherkinParser.GIVEN);
			this.state = 196;
			this.multilineText();
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 197;
					this.match(GherkinParser.NEWLINE);
					this.state = 198;
					this.docString();
					this.state = 200;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 199;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 202;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 207;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 206;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 209;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 213;
				this.tags();
				}
				break;
			}
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 216;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 222;
			this.match(GherkinParser.AND_GIVEN);
			this.state = 223;
			this.multilineText();
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 231;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 224;
					this.match(GherkinParser.NEWLINE);
					this.state = 225;
					this.docString();
					this.state = 227;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 226;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 229;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 234;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 233;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 236;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 240;
				this.tags();
				}
				break;
			}
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 243;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 249;
			this.match(GherkinParser.WHEN);
			this.state = 250;
			this.multilineText();
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 258;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 251;
					this.match(GherkinParser.NEWLINE);
					this.state = 252;
					this.docString();
					this.state = 254;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 253;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 256;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 261;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 260;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 263;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.tags();
				}
				break;
			}
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 270;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
			this.match(GherkinParser.AND_WHEN);
			this.state = 277;
			this.multilineText();
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 278;
					this.match(GherkinParser.NEWLINE);
					this.state = 279;
					this.docString();
					this.state = 281;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 280;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 283;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 288;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 287;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.thenTags();
				}
				break;
			}
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 297;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 303;
			this.match(GherkinParser.THEN);
			this.state = 304;
			this.multilineText();
			this.state = 319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 312;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 305;
					this.match(GherkinParser.NEWLINE);
					this.state = 306;
					this.docString();
					this.state = 308;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 307;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 310;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 315;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 314;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 317;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 321;
				this.thenTags();
				}
				break;
			}
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 324;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 330;
			this.match(GherkinParser.AND);
			this.state = 331;
			this.multilineText();
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 339;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 332;
					this.match(GherkinParser.NEWLINE);
					this.state = 333;
					this.docString();
					this.state = 335;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 334;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 337;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 342;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 341;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 344;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 348;
				this.thenTags();
				}
				break;
			}
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 351;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
			this.match(GherkinParser.BUT);
			this.state = 358;
			this.multilineText();
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 366;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 359;
					this.match(GherkinParser.NEWLINE);
					this.state = 360;
					this.docString();
					this.state = 362;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 361;
							this.match(GherkinParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 364;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 369;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 368;
						this.match(GherkinParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 371;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
			this.state = 375;
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
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 377;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 383;
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
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 384;
						this.match(GherkinParser.NEWLINE);
						}
						}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				}
				}
				}
				this.state = 392;
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
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.NEWLINE) {
				{
				{
				this.state = 394;
				this.match(GherkinParser.NEWLINE);
				}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 400;
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
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 401;
						this.match(GherkinParser.NEWLINE);
						}
						}
					}
					this.state = 406;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				}
				}
				}
				this.state = 409;
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
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 411;
				this.match(GherkinParser.TEXT_CHARACTER);
				}
				}
				this.state = 414;
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
			this.state = 417;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 416;
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
				this.state = 419;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\u01A8\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x07\x026\n\x02\f" +
		"\x02\x0E\x029\v\x02\x03\x02\x03\x02\x03\x03\x05\x03>\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03C\n\x03\x03\x03\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03" +
		"J\v\x03\x03\x03\x07\x03M\n\x03\f\x03\x0E\x03P\v\x03\x03\x04\x05\x04S\n" +
		"\x04\x03\x04\x07\x04V\n\x04\f\x04\x0E\x04Y\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04_\n\x04\f\x04\x0E\x04b\v\x04\x03\x05\x05\x05e\n\x05\x03" +
		"\x05\x07\x05h\n\x05\f\x05\x0E\x05k\v\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x05\x06r\n\x06\x03\x06\x07\x06u\n\x06\f\x06\x0E\x06x\v\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x07\x07\x80\n\x07\f\x07\x0E" +
		"\x07\x83\v\x07\x03\x07\x03\x07\x06\x07\x87\n\x07\r\x07\x0E\x07\x88\x03" +
		"\x07\x03\x07\x06\x07\x8D\n\x07\r\x07\x0E\x07\x8E\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\x97\n\t\f\t\x0E\t\x9A\v\t\x03\t\x03\t\x03\t\x03\n" +
		"\x05\n\xA0\n\n\x03\v\x03\v\x07\v\xA4\n\v\f\v\x0E\v\xA7\v\v\x03\v\x03\v" +
		"\x07\v\xAB\n\v\f\v\x0E\v\xAE\v\v\x03\v\x03\v\x07\v\xB2\n\v\f\v\x0E\v\xB5" +
		"\v\v\x03\v\x07\v\xB8\n\v\f\v\x0E\v\xBB\v\v\x03\f\x05\f\xBE\n\f\x03\f\x07" +
		"\f\xC1\n\f\f\f\x0E\f\xC4\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\xCB\n" +
		"\f\r\f\x0E\f\xCC\x05\f\xCF\n\f\x03\f\x06\f\xD2\n\f\r\f\x0E\f\xD3\x05\f" +
		"\xD6\n\f\x03\r\x05\r\xD9\n\r\x03\r\x07\r\xDC\n\r\f\r\x0E\r\xDF\v\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x06\r\xE6\n\r\r\r\x0E\r\xE7\x05\r\xEA\n\r\x03" +
		"\r\x06\r\xED\n\r\r\r\x0E\r\xEE\x05\r\xF1\n\r\x03\x0E\x05\x0E\xF4\n\x0E" +
		"\x03\x0E\x07\x0E\xF7\n\x0E\f\x0E\x0E\x0E\xFA\v\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x06\x0E\u0101\n\x0E\r\x0E\x0E\x0E\u0102\x05\x0E\u0105" +
		"\n\x0E\x03\x0E\x06\x0E\u0108\n\x0E\r\x0E\x0E\x0E\u0109\x05\x0E\u010C\n" +
		"\x0E\x03\x0F\x05\x0F\u010F\n\x0F\x03\x0F\x07\x0F\u0112\n\x0F\f\x0F\x0E" +
		"\x0F\u0115\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u011C" +
		"\n\x0F\r\x0F\x0E\x0F\u011D\x05\x0F\u0120\n\x0F\x03\x0F\x06\x0F\u0123\n" +
		"\x0F\r\x0F\x0E\x0F\u0124\x05\x0F\u0127\n\x0F\x03\x10\x05\x10\u012A\n\x10" +
		"\x03\x10\x07\x10\u012D\n\x10\f\x10\x0E\x10\u0130\v\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x06\x10\u0137\n\x10\r\x10\x0E\x10\u0138\x05\x10" +
		"\u013B\n\x10\x03\x10\x06\x10\u013E\n\x10\r\x10\x0E\x10\u013F\x05\x10\u0142" +
		"\n\x10\x03\x11\x05\x11\u0145\n\x11\x03\x11\x07\x11\u0148\n\x11\f\x11\x0E" +
		"\x11\u014B\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\u0152" +
		"\n\x11\r\x11\x0E\x11\u0153\x05\x11\u0156\n\x11\x03\x11\x06\x11\u0159\n" +
		"\x11\r\x11\x0E\x11\u015A\x05\x11\u015D\n\x11\x03\x12\x05\x12\u0160\n\x12" +
		"\x03\x12\x07\x12\u0163\n\x12\f\x12\x0E\x12\u0166\v\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x06\x12\u016D\n\x12\r\x12\x0E\x12\u016E\x05\x12" +
		"\u0171\n\x12\x03\x12\x06\x12\u0174\n\x12\r\x12\x0E\x12\u0175\x05\x12\u0178" +
		"\n\x12\x03\x13\x03\x13\x03\x14\x07\x14\u017D\n\x14\f\x14\x0E\x14\u0180" +
		"\v\x14\x03\x14\x03\x14\x07\x14\u0184\n\x14\f\x14\x0E\x14\u0187\v\x14\x06" +
		"\x14\u0189\n\x14\r\x14\x0E\x14\u018A\x03\x15\x07\x15\u018E\n\x15\f\x15" +
		"\x0E\x15\u0191\v\x15\x03\x15\x03\x15\x07\x15\u0195\n\x15\f\x15\x0E\x15" +
		"\u0198\v\x15\x06\x15\u019A\n\x15\r\x15\x0E\x15\u019B\x03\x16\x06\x16\u019F" +
		"\n\x16\r\x16\x0E\x16\u01A0\x03\x17\x06\x17\u01A4\n\x17\r\x17\x0E\x17\u01A5" +
		"\x03\x17\x02\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x05\x04\x02\x10\x11\x14\x14\x03" +
		"\x02\x10\x14\x03\x02\x16\x17\x02\u01DA\x021\x03\x02\x02\x02\x04=\x03\x02" +
		"\x02\x02\x06R\x03\x02\x02\x02\bd\x03\x02\x02\x02\nq\x03\x02\x02\x02\f" +
		"\x81\x03\x02\x02\x02\x0E\x90\x03\x02\x02\x02\x10\x92\x03\x02\x02\x02\x12" +
		"\x9F\x03\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xBD\x03\x02\x02\x02\x18" +
		"\xD8\x03\x02\x02\x02\x1A\xF3\x03\x02\x02\x02\x1C\u010E\x03\x02\x02\x02" +
		"\x1E\u0129\x03\x02\x02\x02 \u0144\x03\x02\x02\x02\"\u015F\x03\x02\x02" +
		"\x02$\u0179\x03\x02\x02\x02&\u017E\x03\x02\x02\x02(\u018F\x03\x02\x02" +
		"\x02*\u019E\x03\x02\x02\x02,\u01A3\x03\x02\x02\x02.0\x05\x04\x03\x02/" +
		".\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x02" +
		"27\x03\x02\x02\x0231\x03\x02\x02\x0246\x07\x17\x02\x0254\x03\x02\x02\x02" +
		"69\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x02" +
		"97\x03\x02\x02\x02:;\x07\x02\x02\x03;\x03\x03\x02\x02\x02<>\x05&\x14\x02" +
		"=<\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x07\x03\x02\x02" +
		"@B\x05,\x17\x02AC\x05\x06\x04\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02" +
		"CH\x03\x02\x02\x02DG\x05\b\x05\x02EG\x05\n\x06\x02FD\x03\x02\x02\x02F" +
		"E\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"IN\x03\x02\x02\x02JH\x03\x02\x02\x02KM\x07\x17\x02\x02LK\x03\x02\x02\x02" +
		"MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O\x05\x03\x02\x02" +
		"\x02PN\x03\x02\x02\x02QS\x05&\x14\x02RQ\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02SW\x03\x02\x02\x02TV\x07\x17\x02\x02UT\x03\x02\x02\x02VY\x03\x02\x02" +
		"\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02Z[\x07\x0E\x02\x02[\\\x05,\x17\x02\\`\x05\x16\f\x02]_\x05\x18\r\x02" +
		"^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"a\x07\x03\x02\x02\x02b`\x03\x02\x02\x02ce\x05&\x14\x02dc\x03\x02\x02\x02" +
		"de\x03\x02\x02\x02ei\x03\x02\x02\x02fh\x07\x17\x02\x02gf\x03\x02\x02\x02" +
		"hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02" +
		"ki\x03\x02\x02\x02lm\x07\x04\x02\x02mn\x05,\x17\x02no\x05\x14\v\x02o\t" +
		"\x03\x02\x02\x02pr\x05&\x14\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rv" +
		"\x03\x02\x02\x02su\x07\x17\x02\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02" +
		"vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"yz\x07\x05\x02\x02z{\x05,\x17\x02{|\x05\x14\v\x02|}\x05\f\x07\x02}\v\x03" +
		"\x02\x02\x02~\x80\x07\x17\x02\x02\x7F~\x03\x02\x02\x02\x80\x83\x03\x02" +
		"\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03\x02" +
		"\x02\x02\x83\x81\x03\x02\x02\x02\x84\x86\x07\r\x02\x02\x85\x87\x07\x17" +
		"\x02\x02\x86\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03\x02" +
		"\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8C\x05\x0E" +
		"\b\x02\x8B\x8D\x05\x10\t\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\r\x03\x02\x02" +
		"\x02\x90\x91\x05\x10\t\x02\x91\x0F\x03\x02\x02\x02\x92\x93\x07\x0F\x02" +
		"\x02\x93\x98\x05\x12\n\x02\x94\x95\x07\x0F\x02\x02\x95\x97\x05\x12\n\x02" +
		"\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02" +
		"\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02" +
		"\x9B\x9C\x07\x0F\x02\x02\x9C\x9D\x07\x17\x02\x02\x9D\x11\x03\x02\x02\x02" +
		"\x9E\xA0\x05*\x16\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02" +
		"\xA0\x13\x03\x02\x02\x02\xA1\xA5\x05\x16\f\x02\xA2\xA4\x05\x18\r\x02\xA3" +
		"\xA2\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5" +
		"\xA6\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8" +
		"\xAC\x05\x1A\x0E\x02\xA9\xAB\x05\x1C\x0F\x02\xAA\xA9\x03\x02\x02\x02\xAB" +
		"\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD" +
		"\xAF\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB3\x05\x1E\x10\x02\xB0" +
		"\xB2\x05 \x11\x02\xB1\xB0\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3" +
		"\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB9\x03\x02\x02\x02\xB5" +
		"\xB3\x03\x02\x02\x02\xB6\xB8\x05\"\x12\x02\xB7\xB6\x03\x02\x02\x02\xB8" +
		"\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA" +
		"\x15\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBE\x05&\x14\x02\xBD" +
		"\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF" +
		"\xC1\x07\x17\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2" +
		"\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4" +
		"\xC2\x03\x02\x02\x02\xC5\xC6\x07\x06\x02\x02\xC6\xD5\x05,\x17\x02\xC7" +
		"\xC8\x07\x17\x02\x02\xC8\xCA\x05$\x13\x02\xC9\xCB\x07\x17\x02\x02\xCA" +
		"\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC" +
		"\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xC7\x03\x02\x02\x02\xCE" +
		"\xCF\x03\x02\x02\x02\xCF\xD6\x03\x02\x02\x02\xD0\xD2\x07\x17\x02\x02\xD1" +
		"\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3" +
		"\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xCE\x03\x02\x02\x02\xD5" +
		"\xD1\x03\x02\x02\x02\xD6\x17\x03\x02\x02\x02\xD7\xD9\x05&\x14\x02\xD8" +
		"\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDD\x03\x02\x02\x02\xDA" +
		"\xDC\x07\x17\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD" +
		"\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF" +
		"\xDD\x03\x02\x02\x02\xE0\xE1\x07\x07\x02\x02\xE1\xF0\x05,\x17\x02\xE2" +
		"\xE3\x07\x17\x02\x02\xE3\xE5\x05$\x13\x02\xE4\xE6\x07\x17\x02\x02\xE5" +
		"\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7" +
		"\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE2\x03\x02\x02\x02\xE9" +
		"\xEA\x03\x02\x02\x02\xEA\xF1\x03\x02\x02\x02\xEB\xED\x07\x17\x02\x02\xEC" +
		"\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE" +
		"\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xE9\x03\x02\x02\x02\xF0" +
		"\xEC\x03\x02\x02\x02\xF1\x19\x03\x02\x02\x02\xF2\xF4\x05&\x14\x02\xF3" +
		"\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF8\x03\x02\x02\x02\xF5" +
		"\xF7\x07\x17\x02\x02\xF6\xF5\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8" +
		"\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA" +
		"\xF8\x03\x02\x02\x02\xFB\xFC\x07\b\x02\x02\xFC\u010B\x05,\x17\x02\xFD" +
		"\xFE\x07\x17\x02\x02\xFE\u0100\x05$\x13\x02\xFF\u0101\x07\x17\x02\x02" +
		"\u0100\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0100\x03" +
		"\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104" +
		"\xFD\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u010C\x03\x02\x02" +
		"\x02\u0106\u0108\x07\x17\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u0109" +
		"\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u010C\x03\x02\x02\x02\u010B\u0104\x03\x02\x02\x02\u010B\u0107\x03" +
		"\x02\x02\x02\u010C\x1B\x03\x02\x02\x02\u010D\u010F\x05&\x14\x02\u010E" +
		"\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0113\x03\x02" +
		"\x02\x02\u0110\u0112\x07\x17\x02\x02\u0111\u0110\x03\x02\x02\x02\u0112" +
		"\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02" +
		"\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116" +
		"\u0117\x07\t\x02\x02\u0117\u0126\x05,\x17\x02\u0118\u0119\x07\x17\x02" +
		"\x02\u0119\u011B\x05$\x13\x02\u011A\u011C\x07\x17\x02\x02\u011B\u011A" +
		"\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02" +
		"\u011D\u011E\x03\x02\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0118\x03" +
		"\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0127\x03\x02\x02\x02\u0121" +
		"\u0123\x07\x17\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02" +
		"\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125" +
		"\u0127\x03\x02\x02\x02\u0126\u011F\x03\x02\x02\x02\u0126\u0122\x03\x02" +
		"\x02\x02\u0127\x1D\x03\x02\x02\x02\u0128\u012A\x05(\x15\x02\u0129\u0128" +
		"\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012E\x03\x02\x02\x02" +
		"\u012B\u012D\x07\x17\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03" +
		"\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F" +
		"\u0131\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0132\x07\n\x02" +
		"\x02\u0132\u0141\x05,\x17\x02\u0133\u0134\x07\x17\x02\x02\u0134\u0136" +
		"\x05$\x13\x02\u0135\u0137\x07\x17\x02\x02\u0136\u0135\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03" +
		"\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u0133\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\u0142\x03\x02\x02\x02\u013C\u013E\x07\x17" +
		"\x02\x02\u013D\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
		"\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02" +
		"\x02\x02\u0141\u013A\x03\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u0142" +
		"\x1F\x03\x02\x02\x02\u0143\u0145\x05(\x15\x02\u0144\u0143\x03\x02\x02" +
		"\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0149\x03\x02\x02\x02\u0146\u0148" +
		"\x07\x17\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02" +
		"\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x03" +
		"\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014D\x07\v\x02\x02\u014D" +
		"\u015C\x05,\x17\x02\u014E\u014F\x07\x17\x02\x02\u014F\u0151\x05$\x13\x02" +
		"\u0150\u0152\x07\x17\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0153\x03" +
		"\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
		"\u0156\x03\x02\x02\x02\u0155\u014E\x03\x02\x02\x02\u0155\u0156\x03\x02" +
		"\x02\x02\u0156\u015D\x03\x02\x02\x02\u0157\u0159\x07\x17\x02\x02\u0158" +
		"\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u0158\x03\x02" +
		"\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C" +
		"\u0155\x03\x02\x02\x02\u015C\u0158\x03\x02\x02\x02\u015D!\x03\x02\x02" +
		"\x02\u015E\u0160\x05(\x15\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160" +
		"\x03\x02\x02\x02\u0160\u0164\x03\x02\x02\x02\u0161\u0163\x07\x17\x02\x02" +
		"\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03" +
		"\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166" +
		"\u0164\x03\x02\x02\x02\u0167\u0168\x07\f\x02\x02\u0168\u0177\x05,\x17" +
		"\x02\u0169\u016A\x07\x17\x02\x02\u016A\u016C\x05$\x13\x02\u016B\u016D" +
		"\x07\x17\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0171\x03" +
		"\x02\x02\x02\u0170\u0169\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
		"\u0178\x03\x02\x02\x02\u0172\u0174\x07\x17\x02\x02\u0173\u0172\x03\x02" +
		"\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175" +
		"\u0176\x03\x02\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0170\x03\x02" +
		"\x02\x02\u0177\u0173\x03\x02\x02\x02\u0178#\x03\x02\x02\x02\u0179\u017A" +
		"\x07\x19\x02\x02\u017A%\x03\x02\x02\x02\u017B\u017D\x07\x17\x02\x02\u017C" +
		"\u017B\x03\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02" +
		"\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0188\x03\x02\x02\x02\u0180" +
		"\u017E\x03\x02\x02\x02\u0181\u0185\t\x02\x02\x02\u0182\u0184\x07\x17\x02" +
		"\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02" +
		"\u0187\u0185\x03\x02\x02\x02\u0188\u0181\x03\x02\x02\x02\u0189\u018A\x03" +
		"\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\'\x03\x02\x02\x02\u018C\u018E\x07\x17\x02\x02\u018D\u018C\x03\x02\x02" +
		"\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190" +
		"\x03\x02\x02\x02\u0190\u0199\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02" +
		"\u0192\u0196\t\x03\x02\x02\u0193\u0195\x07\x17\x02\x02\u0194\u0193\x03" +
		"\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02" +
		"\x02\x02\u0199\u0192\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
		"\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C)\x03\x02\x02" +
		"\x02\u019D\u019F\x07\x16\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F\u01A0" +
		"\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
		"\u01A1+\x03\x02\x02\x02\u01A2\u01A4\t\x04\x02\x02\u01A3\u01A2\x03\x02" +
		"\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6-\x03\x02\x02\x02K17=BFHNRW`diqv\x81\x88\x8E" +
		"\x98\x9F\xA5\xAC\xB3\xB9\xBD\xC2\xCC\xCE\xD3\xD5\xD8\xDD\xE7\xE9\xEE\xF0" +
		"\xF3\xF8\u0102\u0104\u0109\u010B\u010E\u0113\u011D\u011F\u0124\u0126\u0129" +
		"\u012E\u0138\u013A\u013F\u0141\u0144\u0149\u0153\u0155\u015A\u015C\u015F" +
		"\u0164\u016E\u0170\u0175\u0177\u017E\u0185\u018A\u018F\u0196\u019B\u01A0" +
		"\u01A5";
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
	public NEWLINE(): TerminalNode { return this.getToken(GherkinParser.NEWLINE, 0); }
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


