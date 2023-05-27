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
	public static readonly WHEN = 5;
	public static readonly THEN = 6;
	public static readonly AND = 7;
	public static readonly BUT = 8;
	public static readonly TEXT_CHARACTER = 9;
	public static readonly PIPE = 10;
	public static readonly DOC_STRING_QUOT = 11;
	public static readonly TAG = 12;
	public static readonly QUOTED_TEXT = 13;
	public static readonly ESCAPED_CHAR = 14;
	public static readonly COMMENT = 15;
	public static readonly MARKDOWN = 16;
	public static readonly ANGLE_BRACKET_PLACEHOLDER = 17;
	public static readonly WS = 18;
	public static readonly ANGLE_BRACKET_WORD = 19;
	public static readonly DOC_STRING_TEXT = 20;
	public static readonly BACKGROUND = 21;
	public static readonly EXAMPLES = 22;
	public static readonly RULE_feature = 0;
	public static readonly RULE_background = 1;
	public static readonly RULE_scenario = 2;
	public static readonly RULE_scenarioOutline = 3;
	public static readonly RULE_examplesBlock = 4;
	public static readonly RULE_tableHeader = 5;
	public static readonly RULE_tableRow = 6;
	public static readonly RULE_cell = 7;
	public static readonly RULE_step = 8;
	public static readonly RULE_givenStep = 9;
	public static readonly RULE_whenStep = 10;
	public static readonly RULE_thenStep = 11;
	public static readonly RULE_andStep = 12;
	public static readonly RULE_butStep = 13;
	public static readonly RULE_docStringContents = 14;
	public static readonly RULE_docString = 15;
	public static readonly RULE_markdown = 16;
	public static readonly RULE_tags = 17;
	public static readonly RULE_text = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"feature", "background", "scenario", "scenarioOutline", "examplesBlock", 
		"tableHeader", "tableRow", "cell", "step", "givenStep", "whenStep", "thenStep", 
		"andStep", "butStep", "docStringContents", "docString", "markdown", "tags", 
		"text",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Feature:'", "'Scenario:'", "'Scenario Outline:'", "'Given'", 
		"'When'", "'Then'", "'And'", "'But'", undefined, "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FEATURE", "SCENARIO", "SCENARIO_OUTLINE", "GIVEN", "WHEN", 
		"THEN", "AND", "BUT", "TEXT_CHARACTER", "PIPE", "DOC_STRING_QUOT", "TAG", 
		"QUOTED_TEXT", "ESCAPED_CHAR", "COMMENT", "MARKDOWN", "ANGLE_BRACKET_PLACEHOLDER", 
		"WS", "ANGLE_BRACKET_WORD", "DOC_STRING_TEXT", "BACKGROUND", "EXAMPLES",
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
	public feature(): FeatureContext {
		let _localctx: FeatureContext = new FeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GherkinParser.RULE_feature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(GherkinParser.FEATURE);
			this.state = 39;
			this.text();
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.BACKGROUND) {
				{
				this.state = 40;
				this.background();
				}
			}

			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GherkinParser.SCENARIO || _la === GherkinParser.SCENARIO_OUTLINE) {
				{
				this.state = 45;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GherkinParser.SCENARIO:
					{
					this.state = 43;
					this.scenario();
					}
					break;
				case GherkinParser.SCENARIO_OUTLINE:
					{
					this.state = 44;
					this.scenarioOutline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 49;
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
		this.enterRule(_localctx, 2, GherkinParser.RULE_background);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(GherkinParser.BACKGROUND);
			this.state = 51;
			this.text();
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.GIVEN) | (1 << GherkinParser.WHEN) | (1 << GherkinParser.THEN) | (1 << GherkinParser.AND) | (1 << GherkinParser.BUT))) !== 0)) {
				{
				{
				this.state = 52;
				this.step();
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
	public scenario(): ScenarioContext {
		let _localctx: ScenarioContext = new ScenarioContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GherkinParser.RULE_scenario);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(GherkinParser.SCENARIO);
			this.state = 59;
			this.text();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.GIVEN) | (1 << GherkinParser.WHEN) | (1 << GherkinParser.THEN) | (1 << GherkinParser.AND) | (1 << GherkinParser.BUT))) !== 0)) {
				{
				{
				this.state = 60;
				this.step();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.EXAMPLES) {
				{
				this.state = 66;
				this.examplesBlock();
				}
			}

			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 69;
				this.docString();
				}
			}

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
	public scenarioOutline(): ScenarioOutlineContext {
		let _localctx: ScenarioOutlineContext = new ScenarioOutlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GherkinParser.RULE_scenarioOutline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(GherkinParser.SCENARIO_OUTLINE);
			this.state = 76;
			this.text();
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.GIVEN) | (1 << GherkinParser.WHEN) | (1 << GherkinParser.THEN) | (1 << GherkinParser.AND) | (1 << GherkinParser.BUT))) !== 0)) {
				{
				{
				this.state = 77;
				this.step();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.examplesBlock();
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.DOC_STRING_QUOT) {
				{
				this.state = 84;
				this.docString();
				}
			}

			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.TAG) {
				{
				this.state = 87;
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
		this.enterRule(_localctx, 8, GherkinParser.RULE_examplesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(GherkinParser.EXAMPLES);
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 91;
				this.tableHeader();
				}
				break;
			}
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 94;
				this.tableRow();
				}
				}
				this.state = 97;
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
		this.enterRule(_localctx, 10, GherkinParser.RULE_tableHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
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
		this.enterRule(_localctx, 12, GherkinParser.RULE_tableRow);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(GherkinParser.PIPE);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 102;
				this.cell();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.TEXT_CHARACTER) | (1 << GherkinParser.QUOTED_TEXT) | (1 << GherkinParser.ESCAPED_CHAR) | (1 << GherkinParser.MARKDOWN) | (1 << GherkinParser.ANGLE_BRACKET_PLACEHOLDER))) !== 0));
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 107;
					this.match(GherkinParser.PIPE);
					this.state = 109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 108;
						this.cell();
						}
						}
						this.state = 111;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GherkinParser.TEXT_CHARACTER) | (1 << GherkinParser.QUOTED_TEXT) | (1 << GherkinParser.ESCAPED_CHAR) | (1 << GherkinParser.MARKDOWN) | (1 << GherkinParser.ANGLE_BRACKET_PLACEHOLDER))) !== 0));
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 118;
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
		this.enterRule(_localctx, 14, GherkinParser.RULE_cell);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.text();
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
		this.enterRule(_localctx, 16, GherkinParser.RULE_step);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GherkinParser.GIVEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.givenStep();
				}
				break;
			case GherkinParser.WHEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.whenStep();
				}
				break;
			case GherkinParser.THEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.thenStep();
				}
				break;
			case GherkinParser.AND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 125;
				this.andStep();
				}
				break;
			case GherkinParser.BUT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 126;
				this.butStep();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 18, GherkinParser.RULE_givenStep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(GherkinParser.GIVEN);
			this.state = 130;
			this.text();
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 131;
				this.docString();
				}
				break;
			}
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 134;
				this.tags();
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
		this.enterRule(_localctx, 20, GherkinParser.RULE_whenStep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(GherkinParser.WHEN);
			this.state = 138;
			this.text();
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 139;
				this.docString();
				}
				break;
			}
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.tags();
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
		this.enterRule(_localctx, 22, GherkinParser.RULE_thenStep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(GherkinParser.THEN);
			this.state = 146;
			this.text();
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 147;
				this.docString();
				}
				break;
			}
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 150;
				this.tags();
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
		this.enterRule(_localctx, 24, GherkinParser.RULE_andStep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(GherkinParser.AND);
			this.state = 154;
			this.text();
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 155;
				this.docString();
				}
				break;
			}
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 158;
				this.tags();
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
		this.enterRule(_localctx, 26, GherkinParser.RULE_butStep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(GherkinParser.BUT);
			this.state = 162;
			this.text();
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 163;
				this.docString();
				}
				break;
			}
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 166;
				this.tags();
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
	public docStringContents(): DocStringContentsContext {
		let _localctx: DocStringContentsContext = new DocStringContentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GherkinParser.RULE_docStringContents);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 169;
				_la = this._input.LA(1);
				if (!(_la === GherkinParser.ANGLE_BRACKET_WORD || _la === GherkinParser.DOC_STRING_TEXT)) {
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
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GherkinParser.ANGLE_BRACKET_WORD || _la === GherkinParser.DOC_STRING_TEXT);
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
		this.enterRule(_localctx, 30, GherkinParser.RULE_docString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(GherkinParser.DOC_STRING_QUOT);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GherkinParser.ANGLE_BRACKET_WORD || _la === GherkinParser.DOC_STRING_TEXT) {
				{
				this.state = 175;
				this.docStringContents();
				}
			}

			this.state = 178;
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
	public markdown(): MarkdownContext {
		let _localctx: MarkdownContext = new MarkdownContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GherkinParser.RULE_markdown);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(GherkinParser.MARKDOWN);
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
		this.enterRule(_localctx, 34, GherkinParser.RULE_tags);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 182;
					this.match(GherkinParser.TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GherkinParser.RULE_text);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 192;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case GherkinParser.TEXT_CHARACTER:
						{
						this.state = 187;
						this.match(GherkinParser.TEXT_CHARACTER);
						}
						break;
					case GherkinParser.QUOTED_TEXT:
						{
						this.state = 188;
						this.match(GherkinParser.QUOTED_TEXT);
						}
						break;
					case GherkinParser.ESCAPED_CHAR:
						{
						this.state = 189;
						this.match(GherkinParser.ESCAPED_CHAR);
						}
						break;
					case GherkinParser.ANGLE_BRACKET_PLACEHOLDER:
						{
						this.state = 190;
						this.match(GherkinParser.ANGLE_BRACKET_PLACEHOLDER);
						}
						break;
					case GherkinParser.MARKDOWN:
						{
						this.state = 191;
						this.markdown();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 194;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18\xC7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03\x02" +
		"\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x03\x03\x03\x03\x03\x07" +
		"\x038\n\x03\f\x03\x0E\x03;\v\x03\x03\x04\x03\x04\x03\x04\x07\x04@\n\x04" +
		"\f\x04\x0E\x04C\v\x04\x03\x04\x05\x04F\n\x04\x03\x04\x05\x04I\n\x04\x03" +
		"\x04\x05\x04L\n\x04\x03\x05\x03\x05\x03\x05\x07\x05Q\n\x05\f\x05\x0E\x05" +
		"T\v\x05\x03\x05\x03\x05\x05\x05X\n\x05\x03\x05\x05\x05[\n\x05\x03\x06" +
		"\x03\x06\x05\x06_\n\x06\x03\x06\x06\x06b\n\x06\r\x06\x0E\x06c\x03\x07" +
		"\x03\x07\x03\b\x03\b\x06\bj\n\b\r\b\x0E\bk\x03\b\x03\b\x06\bp\n\b\r\b" +
		"\x0E\bq\x07\bt\n\b\f\b\x0E\bw\v\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\x82\n\n\x03\v\x03\v\x03\v\x05\v\x87\n\v\x03\v" +
		"\x05\v\x8A\n\v\x03\f\x03\f\x03\f\x05\f\x8F\n\f\x03\f\x05\f\x92\n\f\x03" +
		"\r\x03\r\x03\r\x05\r\x97\n\r\x03\r\x05\r\x9A\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\x9F\n\x0E\x03\x0E\x05\x0E\xA2\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\xA7\n\x0F\x03\x0F\x05\x0F\xAA\n\x0F\x03\x10\x06\x10\xAD\n\x10\r\x10" +
		"\x0E\x10\xAE\x03\x11\x03\x11\x05\x11\xB3\n\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x13\x06\x13\xBA\n\x13\r\x13\x0E\x13\xBB\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x06\x14\xC3\n\x14\r\x14\x0E\x14\xC4\x03\x14\x02\x02" +
		"\x02\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02\x02\x03\x03\x02\x15\x16\x02\xD9\x02(\x03\x02\x02\x02\x044\x03\x02" +
		"\x02\x02\x06<\x03\x02\x02\x02\bM\x03\x02\x02\x02\n\\\x03\x02\x02\x02\f" +
		"e\x03\x02\x02\x02\x0Eg\x03\x02\x02\x02\x10z\x03\x02\x02\x02\x12\x81\x03" +
		"\x02\x02\x02\x14\x83\x03\x02\x02\x02\x16\x8B\x03\x02\x02\x02\x18\x93\x03" +
		"\x02\x02\x02\x1A\x9B\x03\x02\x02\x02\x1C\xA3\x03\x02\x02\x02\x1E\xAC\x03" +
		"\x02\x02\x02 \xB0\x03\x02\x02\x02\"\xB6\x03\x02\x02\x02$\xB9\x03\x02\x02" +
		"\x02&\xC2\x03\x02\x02\x02()\x07\x03\x02\x02)+\x05&\x14\x02*,\x05\x04\x03" +
		"\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,1\x03\x02\x02\x02-0\x05\x06\x04" +
		"\x02.0\x05\b\x05\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02" +
		"\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x03\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0245\x07\x17\x02\x0259\x05&\x14\x0268\x05\x12\n\x0276\x03\x02\x02" +
		"\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\x05\x03\x02" +
		"\x02\x02;9\x03\x02\x02\x02<=\x07\x04\x02\x02=A\x05&\x14\x02>@\x05\x12" +
		"\n\x02?>\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02" +
		"\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x05\n\x06\x02ED\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GI\x05 \x11\x02HG\x03\x02" +
		"\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JL\x05$\x13\x02KJ\x03\x02" +
		"\x02\x02KL\x03\x02\x02\x02L\x07\x03\x02\x02\x02MN\x07\x05\x02\x02NR\x05" +
		"&\x14\x02OQ\x05\x12\n\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02" +
		"\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02UW\x05\n" +
		"\x06\x02VX\x05 \x11\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02" +
		"\x02\x02Y[\x05$\x13\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\t\x03\x02" +
		"\x02\x02\\^\x07\x18\x02\x02]_\x05\f\x07\x02^]\x03\x02\x02\x02^_\x03\x02" +
		"\x02\x02_a\x03\x02\x02\x02`b\x05\x0E\b\x02a`\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\v\x03\x02\x02\x02ef\x05" +
		"\x0E\b\x02f\r\x03\x02\x02\x02gi\x07\f\x02\x02hj\x05\x10\t\x02ih\x03\x02" +
		"\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lu\x03\x02" +
		"\x02\x02mo\x07\f\x02\x02np\x05\x10\t\x02on\x03\x02\x02\x02pq\x03\x02\x02" +
		"\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sm\x03\x02\x02" +
		"\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02xy\x07\f\x02\x02y\x0F\x03\x02\x02\x02z{\x05&\x14" +
		"\x02{\x11\x03\x02\x02\x02|\x82\x05\x14\v\x02}\x82\x05\x16\f\x02~\x82\x05" +
		"\x18\r\x02\x7F\x82\x05\x1A\x0E\x02\x80\x82\x05\x1C\x0F\x02\x81|\x03\x02" +
		"\x02\x02\x81}\x03\x02\x02\x02\x81~\x03\x02\x02\x02\x81\x7F\x03\x02\x02" +
		"\x02\x81\x80\x03\x02\x02\x02\x82\x13\x03\x02\x02\x02\x83\x84\x07\x06\x02" +
		"\x02\x84\x86\x05&\x14\x02\x85\x87\x05 \x11\x02\x86\x85\x03\x02\x02\x02" +
		"\x86\x87\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02\x88\x8A\x05$\x13\x02" +
		"\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x15\x03\x02\x02\x02" +
		"\x8B\x8C\x07\x07\x02\x02\x8C\x8E\x05&\x14\x02\x8D\x8F\x05 \x11\x02\x8E" +
		"\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90" +
		"\x92\x05$\x13\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92" +
		"\x17\x03\x02\x02\x02\x93\x94\x07\b\x02\x02\x94\x96\x05&\x14\x02\x95\x97" +
		"\x05 \x11\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99" +
		"\x03\x02\x02\x02\x98\x9A\x05$\x13\x02\x99\x98\x03\x02\x02\x02\x99\x9A" +
		"\x03\x02\x02\x02\x9A\x19\x03\x02\x02\x02\x9B\x9C\x07\t\x02\x02\x9C\x9E" +
		"\x05&\x14\x02\x9D\x9F\x05 \x11\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\xA2\x05$\x13\x02\xA1\xA0\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x1B\x03\x02\x02\x02\xA3\xA4\x07" +
		"\n\x02\x02\xA4\xA6\x05&\x14\x02\xA5\xA7\x05 \x11\x02\xA6\xA5\x03\x02\x02" +
		"\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xAA\x05$\x13" +
		"\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\x1D\x03\x02\x02" +
		"\x02\xAB\xAD\t\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02" +
		"\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\x1F\x03\x02\x02" +
		"\x02\xB0\xB2\x07\r\x02\x02\xB1\xB3\x05\x1E\x10\x02\xB2\xB1\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x07\r\x02" +
		"\x02\xB5!\x03\x02\x02\x02\xB6\xB7\x07\x12\x02\x02\xB7#\x03\x02\x02\x02" +
		"\xB8\xBA\x07\x0E\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02" +
		"\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC%\x03\x02\x02\x02" +
		"\xBD\xC3\x07\v\x02\x02\xBE\xC3\x07\x0F\x02\x02\xBF\xC3\x07\x10\x02\x02" +
		"\xC0\xC3\x07\x13\x02\x02\xC1\xC3\x05\"\x12\x02\xC2\xBD\x03\x02\x02\x02" +
		"\xC2\xBE\x03\x02\x02\x02\xC2\xBF\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
		"\xC2\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02" +
		"\xC4\xC5\x03\x02\x02\x02\xC5\'\x03\x02\x02\x02\"+/19AEHKRWZ^ckqu\x81\x86" +
		"\x89\x8E\x91\x96\x99\x9E\xA1\xA6\xA9\xAE\xB2\xBB\xC2\xC4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GherkinParser.__ATN) {
			GherkinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GherkinParser._serializedATN));
		}

		return GherkinParser.__ATN;
	}

}

export class FeatureContext extends ParserRuleContext {
	public FEATURE(): TerminalNode { return this.getToken(GherkinParser.FEATURE, 0); }
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public step(): StepContext[];
	public step(i: number): StepContext;
	public step(i?: number): StepContext | StepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StepContext);
		} else {
			return this.getRuleContext(i, StepContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public step(): StepContext[];
	public step(i: number): StepContext;
	public step(i?: number): StepContext | StepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StepContext);
		} else {
			return this.getRuleContext(i, StepContext);
		}
	}
	public examplesBlock(): ExamplesBlockContext | undefined {
		return this.tryGetRuleContext(0, ExamplesBlockContext);
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public examplesBlock(): ExamplesBlockContext {
		return this.getRuleContext(0, ExamplesBlockContext);
	}
	public step(): StepContext[];
	public step(i: number): StepContext;
	public step(i?: number): StepContext | StepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StepContext);
		} else {
			return this.getRuleContext(i, StepContext);
		}
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
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
	public givenStep(): GivenStepContext | undefined {
		return this.tryGetRuleContext(0, GivenStepContext);
	}
	public whenStep(): WhenStepContext | undefined {
		return this.tryGetRuleContext(0, WhenStepContext);
	}
	public thenStep(): ThenStepContext | undefined {
		return this.tryGetRuleContext(0, ThenStepContext);
	}
	public andStep(): AndStepContext | undefined {
		return this.tryGetRuleContext(0, AndStepContext);
	}
	public butStep(): ButStepContext | undefined {
		return this.tryGetRuleContext(0, ButStepContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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


export class WhenStepContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(GherkinParser.WHEN, 0); }
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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


export class ThenStepContext extends ParserRuleContext {
	public THEN(): TerminalNode { return this.getToken(GherkinParser.THEN, 0); }
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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
	public text(): TextContext {
		return this.getRuleContext(0, TextContext);
	}
	public docString(): DocStringContext | undefined {
		return this.tryGetRuleContext(0, DocStringContext);
	}
	public tags(): TagsContext | undefined {
		return this.tryGetRuleContext(0, TagsContext);
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


export class DocStringContentsContext extends ParserRuleContext {
	public ANGLE_BRACKET_WORD(): TerminalNode[];
	public ANGLE_BRACKET_WORD(i: number): TerminalNode;
	public ANGLE_BRACKET_WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.ANGLE_BRACKET_WORD);
		} else {
			return this.getToken(GherkinParser.ANGLE_BRACKET_WORD, i);
		}
	}
	public DOC_STRING_TEXT(): TerminalNode[];
	public DOC_STRING_TEXT(i: number): TerminalNode;
	public DOC_STRING_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.DOC_STRING_TEXT);
		} else {
			return this.getToken(GherkinParser.DOC_STRING_TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_docStringContents; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitDocStringContents) {
			return visitor.visitDocStringContents(this);
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
	public docStringContents(): DocStringContentsContext | undefined {
		return this.tryGetRuleContext(0, DocStringContentsContext);
	}
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


export class MarkdownContext extends ParserRuleContext {
	public MARKDOWN(): TerminalNode { return this.getToken(GherkinParser.MARKDOWN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_markdown; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitMarkdown) {
			return visitor.visitMarkdown(this);
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


export class TextContext extends ParserRuleContext {
	public TEXT_CHARACTER(): TerminalNode[];
	public TEXT_CHARACTER(i: number): TerminalNode;
	public TEXT_CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.TEXT_CHARACTER);
		} else {
			return this.getToken(GherkinParser.TEXT_CHARACTER, i);
		}
	}
	public QUOTED_TEXT(): TerminalNode[];
	public QUOTED_TEXT(i: number): TerminalNode;
	public QUOTED_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.QUOTED_TEXT);
		} else {
			return this.getToken(GherkinParser.QUOTED_TEXT, i);
		}
	}
	public ESCAPED_CHAR(): TerminalNode[];
	public ESCAPED_CHAR(i: number): TerminalNode;
	public ESCAPED_CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.ESCAPED_CHAR);
		} else {
			return this.getToken(GherkinParser.ESCAPED_CHAR, i);
		}
	}
	public ANGLE_BRACKET_PLACEHOLDER(): TerminalNode[];
	public ANGLE_BRACKET_PLACEHOLDER(i: number): TerminalNode;
	public ANGLE_BRACKET_PLACEHOLDER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GherkinParser.ANGLE_BRACKET_PLACEHOLDER);
		} else {
			return this.getToken(GherkinParser.ANGLE_BRACKET_PLACEHOLDER, i);
		}
	}
	public markdown(): MarkdownContext[];
	public markdown(i: number): MarkdownContext;
	public markdown(i?: number): MarkdownContext | MarkdownContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MarkdownContext);
		} else {
			return this.getRuleContext(i, MarkdownContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GherkinParser.RULE_text; }
	// @Override
	public accept<Result>(visitor: GherkinParserVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


