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
	public static readonly TAG = 14;
	public static readonly COMMENT = 15;
	public static readonly TEXT_CHARACTER = 16;
	public static readonly WS = 17;
	public static readonly WSS = 18;
	public static readonly DOC_STRING_QUOT = 19;
	public static readonly DOC_STRING_TEXT = 20;
	public static readonly DOC_STRING_WS = 21;
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
	public static readonly RULE_contentText = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"featureFile", "feature", "background", "scenario", "scenarioOutline", 
		"examplesBlock", "tableHeader", "tableRow", "cell", "step", "givenStep", 
		"andGivenStep", "whenStep", "andWhenStep", "thenStep", "andStep", "butStep", 
		"docString", "tags", "contentText",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FEATURE", "SCENARIO", "SCENARIO_OUTLINE", "GIVEN", "AND_GIVEN", 
		"WHEN", "AND_WHEN", "THEN", "AND", "BUT", "EXAMPLES", "BACKGROUND", "PIPE", 
		"TAG", "COMMENT", "TEXT_CHARACTER", "WS", "WSS", "DOC_STRING_QUOT", "DOC_STRING_TEXT", 
		"DOC_STRING_WS",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.FEATURE) {
				{
				{
				this.state = 40;
				this.feature();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public feature(): FeatureContext {
		let _localctx: FeatureContext = new FeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GherkinParser.RULE_feature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(GherkinParser.FEATURE);
			this.state = 47;
			this.contentText();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.BACKGROUND) {
				{
				this.state = 48;
				this.background();
				}
			}

			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.SCENARIO || _la === GherkinParser.SCENARIO_OUTLINE) {
				{
				this.state = 53;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GherkinParser.SCENARIO:
					{
					this.state = 51;
					this.scenario();
					}
					break;
				case GherkinParser.SCENARIO_OUTLINE:
					{
					this.state = 52;
					this.scenarioOutline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(GherkinParser.BACKGROUND);
			this.state = 59;
			this.contentText();
			this.state = 60;
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
	public scenario(): ScenarioContext {
		let _localctx: ScenarioContext = new ScenarioContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GherkinParser.RULE_scenario);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(GherkinParser.SCENARIO);
			this.state = 63;
			this.contentText();
			this.state = 64;
			this.step();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 65;
				this.tags();
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
	public scenarioOutline(): ScenarioOutlineContext {
		let _localctx: ScenarioOutlineContext = new ScenarioOutlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GherkinParser.RULE_scenarioOutline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(GherkinParser.SCENARIO_OUTLINE);
			this.state = 69;
			this.contentText();
			this.state = 70;
			this.step();
			this.state = 71;
			this.examplesBlock();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 72;
				this.tags();
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
	public examplesBlock(): ExamplesBlockContext {
		let _localctx: ExamplesBlockContext = new ExamplesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GherkinParser.RULE_examplesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(GherkinParser.EXAMPLES);
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 76;
				this.tableHeader();
				}
				break;
			}
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 79;
				this.tableRow();
				}
				}
				this.state = 82;
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
			this.state = 84;
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(GherkinParser.PIPE);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 87;
				this.cell();
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GherkinParser.TEXT_CHARACTER);
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 92;
					this.match(GherkinParser.PIPE);
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 93;
						this.cell();
						}
						}
						this.state = 96;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === GherkinParser.TEXT_CHARACTER);
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 103;
			this.match(GherkinParser.PIPE);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.contentText();
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.givenStep();
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.AND_GIVEN) {
				{
				{
				this.state = 108;
				this.andGivenStep();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
			this.whenStep();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.AND_WHEN) {
				{
				{
				this.state = 115;
				this.andWhenStep();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.thenStep();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.AND) {
				{
				{
				this.state = 122;
				this.andStep();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.BUT) {
				{
				{
				this.state = 128;
				this.butStep();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(GherkinParser.GIVEN);
			this.state = 135;
			this.contentText();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 136;
				this.tags();
				}
			}

			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 139;
				this.docString();
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
	public andGivenStep(): AndGivenStepContext {
		let _localctx: AndGivenStepContext = new AndGivenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GherkinParser.RULE_andGivenStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(GherkinParser.AND_GIVEN);
			this.state = 143;
			this.contentText();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 144;
				this.tags();
				}
			}

			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 147;
				this.docString();
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
	public whenStep(): WhenStepContext {
		let _localctx: WhenStepContext = new WhenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GherkinParser.RULE_whenStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(GherkinParser.WHEN);
			this.state = 151;
			this.contentText();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 152;
				this.tags();
				}
			}

			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 155;
				this.docString();
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
	public andWhenStep(): AndWhenStepContext {
		let _localctx: AndWhenStepContext = new AndWhenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GherkinParser.RULE_andWhenStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(GherkinParser.AND_WHEN);
			this.state = 159;
			this.contentText();
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 160;
				this.tags();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 163;
				this.docString();
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
	public thenStep(): ThenStepContext {
		let _localctx: ThenStepContext = new ThenStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GherkinParser.RULE_thenStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(GherkinParser.THEN);
			this.state = 167;
			this.contentText();
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 168;
				this.tags();
				}
				break;
			}
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 171;
				this.docString();
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
	public andStep(): AndStepContext {
		let _localctx: AndStepContext = new AndStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GherkinParser.RULE_andStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(GherkinParser.AND);
			this.state = 175;
			this.contentText();
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this.tags();
				}
				break;
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 179;
				this.docString();
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
	public butStep(): ButStepContext {
		let _localctx: ButStepContext = new ButStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GherkinParser.RULE_butStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(GherkinParser.BUT);
			this.state = 183;
			this.contentText();
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 184;
				this.tags();
				}
				break;
			}
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 187;
				this.docString();
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
	public docString(): DocStringContext {
		let _localctx: DocStringContext = new DocStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GherkinParser.RULE_docString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(GherkinParser.DOC_STRING_QUOT);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_TEXT) {
				{
				this.state = 191;
				this.match(GherkinParser.DOC_STRING_TEXT);
				}
			}

			this.state = 194;
			this.match(GherkinParser.DOC_STRING_QUOT);
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 196;
					this.match(GherkinParser.TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public contentText(): ContentTextContext {
		let _localctx: ContentTextContext = new ContentTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, GherkinParser.RULE_contentText);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 201;
					this.match(GherkinParser.TEXT_CHARACTER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\xD1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x07\x02,\n\x02\f\x02\x0E" +
		"\x02/\v\x02\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03\x03\x03\x07" +
		"\x038\n\x03\f\x03\x0E\x03;\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05E\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06L\n\x06\x03\x07\x03\x07\x05\x07P\n\x07\x03\x07\x06\x07" +
		"S\n\x07\r\x07\x0E\x07T\x03\b\x03\b\x03\t\x03\t\x06\t[\n\t\r\t\x0E\t\\" +
		"\x03\t\x03\t\x06\ta\n\t\r\t\x0E\tb\x07\te\n\t\f\t\x0E\th\v\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x07\vp\n\v\f\v\x0E\vs\v\v\x03\v\x03\v\x07\v" +
		"w\n\v\f\v\x0E\vz\v\v\x03\v\x03\v\x07\v~\n\v\f\v\x0E\v\x81\v\v\x03\v\x07" +
		"\v\x84\n\v\f\v\x0E\v\x87\v\v\x03\f\x03\f\x03\f\x05\f\x8C\n\f\x03\f\x05" +
		"\f\x8F\n\f\x03\r\x03\r\x03\r\x05\r\x94\n\r\x03\r\x05\r\x97\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\x9C\n\x0E\x03\x0E\x05\x0E\x9F\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\xA4\n\x0F\x03\x0F\x05\x0F\xA7\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\xAC\n\x10\x03\x10\x05\x10\xAF\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\xB4\n\x11\x03\x11\x05\x11\xB7\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\xBC\n\x12\x03\x12\x05\x12\xBF\n\x12\x03\x13\x03\x13\x05\x13\xC3" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x06\x14\xC8\n\x14\r\x14\x0E\x14\xC9\x03" +
		"\x15\x06\x15\xCD\n\x15\r\x15\x0E\x15\xCE\x03\x15\x02\x02\x02\x16\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x02" +
		"\x02\xDC\x02-\x03\x02\x02\x02\x040\x03\x02\x02\x02\x06<\x03\x02\x02\x02" +
		"\b@\x03\x02\x02\x02\nF\x03\x02\x02\x02\fM\x03\x02\x02\x02\x0EV\x03\x02" +
		"\x02\x02\x10X\x03\x02\x02\x02\x12k\x03\x02\x02\x02\x14m\x03\x02\x02\x02" +
		"\x16\x88\x03\x02\x02\x02\x18\x90\x03\x02\x02\x02\x1A\x98\x03\x02\x02\x02" +
		"\x1C\xA0\x03\x02\x02\x02\x1E\xA8\x03\x02\x02\x02 \xB0\x03\x02\x02\x02" +
		"\"\xB8\x03\x02\x02\x02$\xC0\x03\x02\x02\x02&\xC7\x03\x02\x02\x02(\xCC" +
		"\x03\x02\x02\x02*,\x05\x04\x03\x02+*\x03\x02\x02\x02,/\x03\x02\x02\x02" +
		"-+\x03\x02\x02\x02-.\x03\x02\x02\x02.\x03\x03\x02\x02\x02/-\x03\x02\x02" +
		"\x0201\x07\x03\x02\x0213\x05(\x15\x0224\x05\x06\x04\x0232\x03\x02\x02" +
		"\x0234\x03\x02\x02\x0249\x03\x02\x02\x0258\x05\b\x05\x0268\x05\n\x06\x02" +
		"75\x03\x02\x02\x0276\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x02" +
		"9:\x03\x02\x02\x02:\x05\x03\x02\x02\x02;9\x03\x02\x02\x02<=\x07\x0E\x02" +
		"\x02=>\x05(\x15\x02>?\x05\x14\v\x02?\x07\x03\x02\x02\x02@A\x07\x04\x02" +
		"\x02AB\x05(\x15\x02BD\x05\x14\v\x02CE\x05&\x14\x02DC\x03\x02\x02\x02D" +
		"E\x03\x02\x02\x02E\t\x03\x02\x02\x02FG\x07\x05\x02\x02GH\x05(\x15\x02" +
		"HI\x05\x14\v\x02IK\x05\f\x07\x02JL\x05&\x14\x02KJ\x03\x02\x02\x02KL\x03" +
		"\x02\x02\x02L\v\x03\x02\x02\x02MO\x07\r\x02\x02NP\x05\x0E\b\x02ON\x03" +
		"\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QS\x05\x10\t\x02RQ\x03" +
		"\x02\x02\x02ST\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\r" +
		"\x03\x02\x02\x02VW\x05\x10\t\x02W\x0F\x03\x02\x02\x02XZ\x07\x0F\x02\x02" +
		"Y[\x05\x12\n\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\Z\x03\x02\x02\x02" +
		"\\]\x03\x02\x02\x02]f\x03\x02\x02\x02^`\x07\x0F\x02\x02_a\x05\x12\n\x02" +
		"`_\x03\x02\x02\x02ab\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02" +
		"ce\x03\x02\x02\x02d^\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x07\x0F\x02\x02" +
		"j\x11\x03\x02\x02\x02kl\x05(\x15\x02l\x13\x03\x02\x02\x02mq\x05\x16\f" +
		"\x02np\x05\x18\r\x02on\x03\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02" +
		"\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02tx\x05\x1A\x0E" +
		"\x02uw\x05\x1C\x0F\x02vu\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02" +
		"\x02xy\x03\x02\x02\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02{\x7F\x05\x1E" +
		"\x10\x02|~\x05 \x11\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x85\x03\x02\x02\x02\x81\x7F\x03" +
		"\x02\x02\x02\x82\x84\x05\"\x12\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03" +
		"\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x15\x03" +
		"\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89\x07\x06\x02\x02\x89\x8B\x05" +
		"(\x15\x02\x8A\x8C\x05&\x14\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02" +
		"\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8F\x05$\x13\x02\x8E\x8D\x03\x02" +
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x17\x03\x02\x02\x02\x90\x91\x07\x07" +
		"\x02\x02\x91\x93\x05(\x15\x02\x92\x94\x05&\x14\x02\x93\x92\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02\x95\x97\x05$\x13" +
		"\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x19\x03\x02\x02" +
		"\x02\x98\x99\x07\b\x02\x02\x99\x9B\x05(\x15\x02\x9A\x9C\x05&\x14\x02\x9B" +
		"\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D" +
		"\x9F\x05$\x13\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F" +
		"\x1B\x03\x02\x02\x02\xA0\xA1\x07\t\x02\x02\xA1\xA3\x05(\x15\x02\xA2\xA4" +
		"\x05&\x14\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6" +
		"\x03\x02\x02\x02\xA5\xA7\x05$\x13\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\x1D\x03\x02\x02\x02\xA8\xA9\x07\n\x02\x02\xA9\xAB" +
		"\x05(\x15\x02\xAA\xAC\x05&\x14\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAF\x05$\x13\x02\xAE\xAD\x03" +
		"\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\x1F\x03\x02\x02\x02\xB0\xB1\x07" +
		"\v\x02\x02\xB1\xB3\x05(\x15\x02\xB2\xB4\x05&\x14\x02\xB3\xB2\x03\x02\x02" +
		"\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB7\x05$\x13" +
		"\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7!\x03\x02\x02" +
		"\x02\xB8\xB9\x07\f\x02\x02\xB9\xBB\x05(\x15\x02\xBA\xBC\x05&\x14\x02\xBB" +
		"\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD" +
		"\xBF\x05$\x13\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF" +
		"#\x03\x02\x02\x02\xC0\xC2\x07\x15\x02\x02\xC1\xC3\x07\x16\x02\x02\xC2" +
		"\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4" +
		"\xC5\x07\x15\x02\x02\xC5%\x03\x02\x02\x02\xC6\xC8\x07\x10\x02\x02\xC7" +
		"\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9" +
		"\xCA\x03\x02\x02\x02\xCA\'\x03\x02\x02\x02\xCB\xCD\x07\x12\x02\x02\xCC" +
		"\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE" +
		"\xCF\x03\x02\x02\x02\xCF)\x03\x02\x02\x02\"-379DKOT\\bfqx\x7F\x85\x8B" +
		"\x8E\x93\x96\x9B\x9E\xA3\xA6\xAB\xAE\xB3\xB6\xBB\xBE\xC2\xC9\xCE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GherkinParser.__ATN) {
			GherkinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GherkinParser._serializedATN));
		}

		return GherkinParser.__ATN;
	}

}

export class FeatureFileContext extends ParserRuleContext {
	public feature(): FeatureContext[];
	public feature(i: number): FeatureContext;
	public feature(i?: number): FeatureContext | FeatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureContext);
		} else {
			return this.getRuleContext(i, FeatureContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public step(): StepContext {
		return this.getRuleContext(0, StepContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public step(): StepContext {
		return this.getRuleContext(0, StepContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
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
	public tableHeader(): TableHeaderContext | undefined {
		return this.tryGetRuleContext(0, TableHeaderContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public contentText(): ContentTextContext {
		return this.getRuleContext(0, ContentTextContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public DOC_STRING_QUOT(): TerminalNode[];
	public DOC_STRING_QUOT(i: number): TerminalNode;
	public DOC_STRING_QUOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.DOC_STRING_QUOT);
		} else {
			return this.getToken(GherkinParser.DOC_STRING_QUOT, i);
		}
	}
	public DOC_STRING_TEXT(): TerminalNode | undefined { return this.tryGetToken(GherkinParser.DOC_STRING_TEXT, 0); }
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


