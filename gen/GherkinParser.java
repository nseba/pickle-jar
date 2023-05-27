// Generated from /Users/seba/dev/_personal/pickle-jar/src/grammar/GherkinParser.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class GherkinParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.12.0", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FEATURE=1, SCENARIO=2, SCENARIO_OUTLINE=3, GIVEN=4, WHEN=5, THEN=6, AND=7, 
		BUT=8, EXAMPLES=9, BACKGROUND=10, TEXT_CHARACTER=11, PIPE=12, DOC_STRING_QUOT=13, 
		MARKDOWN_QUOT=14, TAG=15, QUOTED_TEXT=16, ESCAPED_CHAR=17, COMMENT=18, 
		MARKDOWN=19, ANGLE_BRACKET_PLACEHOLDER=20, WS=21, ANGLE_BRACKET_WORD=22, 
		DOC_STRING_TEXT=23, MARKDOWN_TEXT=24;
	public static final int
		RULE_feature = 0, RULE_background = 1, RULE_scenario = 2, RULE_scenarioOutline = 3, 
		RULE_examplesBlock = 4, RULE_tableHeader = 5, RULE_tableRow = 6, RULE_cell = 7, 
		RULE_step = 8, RULE_givenStep = 9, RULE_whenStep = 10, RULE_thenStep = 11, 
		RULE_andStep = 12, RULE_butStep = 13, RULE_docStringContents = 14, RULE_docString = 15, 
		RULE_markdownContents = 16, RULE_markdown = 17, RULE_tags = 18, RULE_text = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"feature", "background", "scenario", "scenarioOutline", "examplesBlock", 
			"tableHeader", "tableRow", "cell", "step", "givenStep", "whenStep", "thenStep", 
			"andStep", "butStep", "docStringContents", "docString", "markdownContents", 
			"markdown", "tags", "text"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Feature:'", "'Scenario:'", "'Scenario Outline:'", "'Given'", 
			"'When'", "'Then'", "'And'", "'But'", "'Examples:'", "'Background:'", 
			null, "'|'", null, "'```'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FEATURE", "SCENARIO", "SCENARIO_OUTLINE", "GIVEN", "WHEN", "THEN", 
			"AND", "BUT", "EXAMPLES", "BACKGROUND", "TEXT_CHARACTER", "PIPE", "DOC_STRING_QUOT", 
			"MARKDOWN_QUOT", "TAG", "QUOTED_TEXT", "ESCAPED_CHAR", "COMMENT", "MARKDOWN", 
			"ANGLE_BRACKET_PLACEHOLDER", "WS", "ANGLE_BRACKET_WORD", "DOC_STRING_TEXT", 
			"MARKDOWN_TEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "GherkinParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GherkinParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FeatureContext extends ParserRuleContext {
		public TerminalNode FEATURE() { return getToken(GherkinParser.FEATURE, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public BackgroundContext background() {
			return getRuleContext(BackgroundContext.class,0);
		}
		public List<ScenarioContext> scenario() {
			return getRuleContexts(ScenarioContext.class);
		}
		public ScenarioContext scenario(int i) {
			return getRuleContext(ScenarioContext.class,i);
		}
		public List<ScenarioOutlineContext> scenarioOutline() {
			return getRuleContexts(ScenarioOutlineContext.class);
		}
		public ScenarioOutlineContext scenarioOutline(int i) {
			return getRuleContext(ScenarioOutlineContext.class,i);
		}
		public FeatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_feature; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterFeature(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitFeature(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitFeature(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FeatureContext feature() throws RecognitionException {
		FeatureContext _localctx = new FeatureContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_feature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(FEATURE);
			setState(41);
			text();
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BACKGROUND) {
				{
				setState(42);
				background();
				}
			}

			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SCENARIO || _la==SCENARIO_OUTLINE) {
				{
				setState(47);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SCENARIO:
					{
					setState(45);
					scenario();
					}
					break;
				case SCENARIO_OUTLINE:
					{
					setState(46);
					scenarioOutline();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(51);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BackgroundContext extends ParserRuleContext {
		public TerminalNode BACKGROUND() { return getToken(GherkinParser.BACKGROUND, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public List<StepContext> step() {
			return getRuleContexts(StepContext.class);
		}
		public StepContext step(int i) {
			return getRuleContext(StepContext.class,i);
		}
		public BackgroundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_background; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterBackground(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitBackground(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitBackground(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BackgroundContext background() throws RecognitionException {
		BackgroundContext _localctx = new BackgroundContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_background);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(BACKGROUND);
			setState(53);
			text();
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 496L) != 0)) {
				{
				{
				setState(54);
				step();
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScenarioContext extends ParserRuleContext {
		public TerminalNode SCENARIO() { return getToken(GherkinParser.SCENARIO, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public List<StepContext> step() {
			return getRuleContexts(StepContext.class);
		}
		public StepContext step(int i) {
			return getRuleContext(StepContext.class,i);
		}
		public ExamplesBlockContext examplesBlock() {
			return getRuleContext(ExamplesBlockContext.class,0);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public ScenarioContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scenario; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterScenario(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitScenario(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitScenario(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ScenarioContext scenario() throws RecognitionException {
		ScenarioContext _localctx = new ScenarioContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_scenario);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(SCENARIO);
			setState(61);
			text();
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 496L) != 0)) {
				{
				{
				setState(62);
				step();
				}
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXAMPLES) {
				{
				setState(68);
				examplesBlock();
				}
			}

			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_STRING_QUOT) {
				{
				setState(71);
				docString();
				}
			}

			setState(75);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TAG) {
				{
				setState(74);
				tags();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScenarioOutlineContext extends ParserRuleContext {
		public TerminalNode SCENARIO_OUTLINE() { return getToken(GherkinParser.SCENARIO_OUTLINE, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public ExamplesBlockContext examplesBlock() {
			return getRuleContext(ExamplesBlockContext.class,0);
		}
		public List<StepContext> step() {
			return getRuleContexts(StepContext.class);
		}
		public StepContext step(int i) {
			return getRuleContext(StepContext.class,i);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public ScenarioOutlineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scenarioOutline; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterScenarioOutline(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitScenarioOutline(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitScenarioOutline(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ScenarioOutlineContext scenarioOutline() throws RecognitionException {
		ScenarioOutlineContext _localctx = new ScenarioOutlineContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_scenarioOutline);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(SCENARIO_OUTLINE);
			setState(78);
			text();
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 496L) != 0)) {
				{
				{
				setState(79);
				step();
				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(85);
			examplesBlock();
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_STRING_QUOT) {
				{
				setState(86);
				docString();
				}
			}

			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TAG) {
				{
				setState(89);
				tags();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExamplesBlockContext extends ParserRuleContext {
		public TerminalNode EXAMPLES() { return getToken(GherkinParser.EXAMPLES, 0); }
		public TableHeaderContext tableHeader() {
			return getRuleContext(TableHeaderContext.class,0);
		}
		public List<TableRowContext> tableRow() {
			return getRuleContexts(TableRowContext.class);
		}
		public TableRowContext tableRow(int i) {
			return getRuleContext(TableRowContext.class,i);
		}
		public ExamplesBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_examplesBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterExamplesBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitExamplesBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitExamplesBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExamplesBlockContext examplesBlock() throws RecognitionException {
		ExamplesBlockContext _localctx = new ExamplesBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_examplesBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(EXAMPLES);
			setState(94);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(93);
				tableHeader();
				}
				break;
			}
			setState(97); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(96);
				tableRow();
				}
				}
				setState(99); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PIPE );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TableHeaderContext extends ParserRuleContext {
		public TableRowContext tableRow() {
			return getRuleContext(TableRowContext.class,0);
		}
		public TableHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableHeader; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterTableHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitTableHeader(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitTableHeader(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TableHeaderContext tableHeader() throws RecognitionException {
		TableHeaderContext _localctx = new TableHeaderContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_tableHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			tableRow();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TableRowContext extends ParserRuleContext {
		public List<TerminalNode> PIPE() { return getTokens(GherkinParser.PIPE); }
		public TerminalNode PIPE(int i) {
			return getToken(GherkinParser.PIPE, i);
		}
		public List<CellContext> cell() {
			return getRuleContexts(CellContext.class);
		}
		public CellContext cell(int i) {
			return getRuleContext(CellContext.class,i);
		}
		public TableRowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableRow; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterTableRow(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitTableRow(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitTableRow(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TableRowContext tableRow() throws RecognitionException {
		TableRowContext _localctx = new TableRowContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tableRow);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(PIPE);
			setState(105); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(104);
				cell();
				}
				}
				setState(107); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1263616L) != 0) );
			setState(117);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(109);
					match(PIPE);
					setState(111); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(110);
						cell();
						}
						}
						setState(113); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1263616L) != 0) );
					}
					} 
				}
				setState(119);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			setState(120);
			match(PIPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CellContext extends ParserRuleContext {
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public CellContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cell; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterCell(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitCell(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitCell(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CellContext cell() throws RecognitionException {
		CellContext _localctx = new CellContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_cell);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			text();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StepContext extends ParserRuleContext {
		public GivenStepContext givenStep() {
			return getRuleContext(GivenStepContext.class,0);
		}
		public WhenStepContext whenStep() {
			return getRuleContext(WhenStepContext.class,0);
		}
		public ThenStepContext thenStep() {
			return getRuleContext(ThenStepContext.class,0);
		}
		public AndStepContext andStep() {
			return getRuleContext(AndStepContext.class,0);
		}
		public ButStepContext butStep() {
			return getRuleContext(ButStepContext.class,0);
		}
		public StepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_step; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterStep(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitStep(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitStep(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StepContext step() throws RecognitionException {
		StepContext _localctx = new StepContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_step);
		try {
			setState(129);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GIVEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(124);
				givenStep();
				}
				break;
			case WHEN:
				enterOuterAlt(_localctx, 2);
				{
				setState(125);
				whenStep();
				}
				break;
			case THEN:
				enterOuterAlt(_localctx, 3);
				{
				setState(126);
				thenStep();
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 4);
				{
				setState(127);
				andStep();
				}
				break;
			case BUT:
				enterOuterAlt(_localctx, 5);
				{
				setState(128);
				butStep();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GivenStepContext extends ParserRuleContext {
		public TerminalNode GIVEN() { return getToken(GherkinParser.GIVEN, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public GivenStepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_givenStep; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterGivenStep(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitGivenStep(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitGivenStep(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GivenStepContext givenStep() throws RecognitionException {
		GivenStepContext _localctx = new GivenStepContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_givenStep);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(GIVEN);
			setState(132);
			text();
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(133);
				docString();
				}
				break;
			}
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(136);
				tags();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhenStepContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(GherkinParser.WHEN, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public WhenStepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenStep; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterWhenStep(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitWhenStep(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitWhenStep(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhenStepContext whenStep() throws RecognitionException {
		WhenStepContext _localctx = new WhenStepContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_whenStep);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(WHEN);
			setState(140);
			text();
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(141);
				docString();
				}
				break;
			}
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(144);
				tags();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ThenStepContext extends ParserRuleContext {
		public TerminalNode THEN() { return getToken(GherkinParser.THEN, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public ThenStepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_thenStep; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterThenStep(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitThenStep(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitThenStep(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ThenStepContext thenStep() throws RecognitionException {
		ThenStepContext _localctx = new ThenStepContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_thenStep);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(THEN);
			setState(148);
			text();
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(149);
				docString();
				}
				break;
			}
			setState(153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(152);
				tags();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AndStepContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(GherkinParser.AND, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public AndStepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_andStep; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterAndStep(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitAndStep(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitAndStep(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AndStepContext andStep() throws RecognitionException {
		AndStepContext _localctx = new AndStepContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_andStep);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(AND);
			setState(156);
			text();
			setState(158);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(157);
				docString();
				}
				break;
			}
			setState(161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(160);
				tags();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ButStepContext extends ParserRuleContext {
		public TerminalNode BUT() { return getToken(GherkinParser.BUT, 0); }
		public TextContext text() {
			return getRuleContext(TextContext.class,0);
		}
		public DocStringContext docString() {
			return getRuleContext(DocStringContext.class,0);
		}
		public TagsContext tags() {
			return getRuleContext(TagsContext.class,0);
		}
		public ButStepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_butStep; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterButStep(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitButStep(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitButStep(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ButStepContext butStep() throws RecognitionException {
		ButStepContext _localctx = new ButStepContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_butStep);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(BUT);
			setState(164);
			text();
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(165);
				docString();
				}
				break;
			}
			setState(169);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				setState(168);
				tags();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DocStringContentsContext extends ParserRuleContext {
		public List<TerminalNode> ANGLE_BRACKET_WORD() { return getTokens(GherkinParser.ANGLE_BRACKET_WORD); }
		public TerminalNode ANGLE_BRACKET_WORD(int i) {
			return getToken(GherkinParser.ANGLE_BRACKET_WORD, i);
		}
		public List<TerminalNode> DOC_STRING_TEXT() { return getTokens(GherkinParser.DOC_STRING_TEXT); }
		public TerminalNode DOC_STRING_TEXT(int i) {
			return getToken(GherkinParser.DOC_STRING_TEXT, i);
		}
		public DocStringContentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_docStringContents; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterDocStringContents(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitDocStringContents(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitDocStringContents(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DocStringContentsContext docStringContents() throws RecognitionException {
		DocStringContentsContext _localctx = new DocStringContentsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_docStringContents);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(171);
				_la = _input.LA(1);
				if ( !(_la==ANGLE_BRACKET_WORD || _la==DOC_STRING_TEXT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(174); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ANGLE_BRACKET_WORD || _la==DOC_STRING_TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DocStringContext extends ParserRuleContext {
		public List<TerminalNode> DOC_STRING_QUOT() { return getTokens(GherkinParser.DOC_STRING_QUOT); }
		public TerminalNode DOC_STRING_QUOT(int i) {
			return getToken(GherkinParser.DOC_STRING_QUOT, i);
		}
		public DocStringContentsContext docStringContents() {
			return getRuleContext(DocStringContentsContext.class,0);
		}
		public DocStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_docString; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterDocString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitDocString(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitDocString(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DocStringContext docString() throws RecognitionException {
		DocStringContext _localctx = new DocStringContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_docString);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(DOC_STRING_QUOT);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ANGLE_BRACKET_WORD || _la==DOC_STRING_TEXT) {
				{
				setState(177);
				docStringContents();
				}
			}

			setState(180);
			match(DOC_STRING_QUOT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MarkdownContentsContext extends ParserRuleContext {
		public List<TerminalNode> MARKDOWN_TEXT() { return getTokens(GherkinParser.MARKDOWN_TEXT); }
		public TerminalNode MARKDOWN_TEXT(int i) {
			return getToken(GherkinParser.MARKDOWN_TEXT, i);
		}
		public MarkdownContentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_markdownContents; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterMarkdownContents(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitMarkdownContents(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitMarkdownContents(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MarkdownContentsContext markdownContents() throws RecognitionException {
		MarkdownContentsContext _localctx = new MarkdownContentsContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_markdownContents);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(182);
				match(MARKDOWN_TEXT);
				}
				}
				setState(185); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==MARKDOWN_TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MarkdownContext extends ParserRuleContext {
		public List<TerminalNode> MARKDOWN_QUOT() { return getTokens(GherkinParser.MARKDOWN_QUOT); }
		public TerminalNode MARKDOWN_QUOT(int i) {
			return getToken(GherkinParser.MARKDOWN_QUOT, i);
		}
		public MarkdownContentsContext markdownContents() {
			return getRuleContext(MarkdownContentsContext.class,0);
		}
		public MarkdownContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_markdown; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterMarkdown(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitMarkdown(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitMarkdown(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MarkdownContext markdown() throws RecognitionException {
		MarkdownContext _localctx = new MarkdownContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_markdown);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			match(MARKDOWN_QUOT);
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MARKDOWN_TEXT) {
				{
				setState(188);
				markdownContents();
				}
			}

			setState(191);
			match(MARKDOWN_QUOT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TagsContext extends ParserRuleContext {
		public List<TerminalNode> TAG() { return getTokens(GherkinParser.TAG); }
		public TerminalNode TAG(int i) {
			return getToken(GherkinParser.TAG, i);
		}
		public TagsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tags; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterTags(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitTags(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitTags(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TagsContext tags() throws RecognitionException {
		TagsContext _localctx = new TagsContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_tags);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(194); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(193);
					match(TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(196); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextContext extends ParserRuleContext {
		public List<TerminalNode> TEXT_CHARACTER() { return getTokens(GherkinParser.TEXT_CHARACTER); }
		public TerminalNode TEXT_CHARACTER(int i) {
			return getToken(GherkinParser.TEXT_CHARACTER, i);
		}
		public List<TerminalNode> QUOTED_TEXT() { return getTokens(GherkinParser.QUOTED_TEXT); }
		public TerminalNode QUOTED_TEXT(int i) {
			return getToken(GherkinParser.QUOTED_TEXT, i);
		}
		public List<TerminalNode> ESCAPED_CHAR() { return getTokens(GherkinParser.ESCAPED_CHAR); }
		public TerminalNode ESCAPED_CHAR(int i) {
			return getToken(GherkinParser.ESCAPED_CHAR, i);
		}
		public List<TerminalNode> ANGLE_BRACKET_PLACEHOLDER() { return getTokens(GherkinParser.ANGLE_BRACKET_PLACEHOLDER); }
		public TerminalNode ANGLE_BRACKET_PLACEHOLDER(int i) {
			return getToken(GherkinParser.ANGLE_BRACKET_PLACEHOLDER, i);
		}
		public List<MarkdownContext> markdown() {
			return getRuleContexts(MarkdownContext.class);
		}
		public MarkdownContext markdown(int i) {
			return getRuleContext(MarkdownContext.class,i);
		}
		public TextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_text; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).enterText(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof GherkinParserListener ) ((GherkinParserListener)listener).exitText(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof GherkinParserVisitor ) return ((GherkinParserVisitor<? extends T>)visitor).visitText(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TextContext text() throws RecognitionException {
		TextContext _localctx = new TextContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_text);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(203); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(203);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case TEXT_CHARACTER:
						{
						setState(198);
						match(TEXT_CHARACTER);
						}
						break;
					case QUOTED_TEXT:
						{
						setState(199);
						match(QUOTED_TEXT);
						}
						break;
					case ESCAPED_CHAR:
						{
						setState(200);
						match(ESCAPED_CHAR);
						}
						break;
					case ANGLE_BRACKET_PLACEHOLDER:
						{
						setState(201);
						match(ANGLE_BRACKET_PLACEHOLDER);
						}
						break;
					case MARKDOWN_QUOT:
						{
						setState(202);
						markdown();
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
				setState(205); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u00d0\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0001\u0000\u0003"+
		"\u0000,\b\u0000\u0001\u0000\u0001\u0000\u0005\u00000\b\u0000\n\u0000\f"+
		"\u00003\t\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u00018\b\u0001"+
		"\n\u0001\f\u0001;\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002"+
		"@\b\u0002\n\u0002\f\u0002C\t\u0002\u0001\u0002\u0003\u0002F\b\u0002\u0001"+
		"\u0002\u0003\u0002I\b\u0002\u0001\u0002\u0003\u0002L\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0005\u0003Q\b\u0003\n\u0003\f\u0003T\t\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003X\b\u0003\u0001\u0003\u0003\u0003"+
		"[\b\u0003\u0001\u0004\u0001\u0004\u0003\u0004_\b\u0004\u0001\u0004\u0004"+
		"\u0004b\b\u0004\u000b\u0004\f\u0004c\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0004\u0006j\b\u0006\u000b\u0006\f\u0006k\u0001\u0006\u0001"+
		"\u0006\u0004\u0006p\b\u0006\u000b\u0006\f\u0006q\u0005\u0006t\b\u0006"+
		"\n\u0006\f\u0006w\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u0082\b\b\u0001\t\u0001"+
		"\t\u0001\t\u0003\t\u0087\b\t\u0001\t\u0003\t\u008a\b\t\u0001\n\u0001\n"+
		"\u0001\n\u0003\n\u008f\b\n\u0001\n\u0003\n\u0092\b\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0003\u000b\u0097\b\u000b\u0001\u000b\u0003\u000b\u009a"+
		"\b\u000b\u0001\f\u0001\f\u0001\f\u0003\f\u009f\b\f\u0001\f\u0003\f\u00a2"+
		"\b\f\u0001\r\u0001\r\u0001\r\u0003\r\u00a7\b\r\u0001\r\u0003\r\u00aa\b"+
		"\r\u0001\u000e\u0004\u000e\u00ad\b\u000e\u000b\u000e\f\u000e\u00ae\u0001"+
		"\u000f\u0001\u000f\u0003\u000f\u00b3\b\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0004\u0010\u00b8\b\u0010\u000b\u0010\f\u0010\u00b9\u0001\u0011"+
		"\u0001\u0011\u0003\u0011\u00be\b\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0004\u0012\u00c3\b\u0012\u000b\u0012\f\u0012\u00c4\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0004\u0013\u00cc\b\u0013\u000b"+
		"\u0013\f\u0013\u00cd\u0001\u0013\u0000\u0000\u0014\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0000"+
		"\u0001\u0001\u0000\u0016\u0017\u00e3\u0000(\u0001\u0000\u0000\u0000\u0002"+
		"4\u0001\u0000\u0000\u0000\u0004<\u0001\u0000\u0000\u0000\u0006M\u0001"+
		"\u0000\u0000\u0000\b\\\u0001\u0000\u0000\u0000\ne\u0001\u0000\u0000\u0000"+
		"\fg\u0001\u0000\u0000\u0000\u000ez\u0001\u0000\u0000\u0000\u0010\u0081"+
		"\u0001\u0000\u0000\u0000\u0012\u0083\u0001\u0000\u0000\u0000\u0014\u008b"+
		"\u0001\u0000\u0000\u0000\u0016\u0093\u0001\u0000\u0000\u0000\u0018\u009b"+
		"\u0001\u0000\u0000\u0000\u001a\u00a3\u0001\u0000\u0000\u0000\u001c\u00ac"+
		"\u0001\u0000\u0000\u0000\u001e\u00b0\u0001\u0000\u0000\u0000 \u00b7\u0001"+
		"\u0000\u0000\u0000\"\u00bb\u0001\u0000\u0000\u0000$\u00c2\u0001\u0000"+
		"\u0000\u0000&\u00cb\u0001\u0000\u0000\u0000()\u0005\u0001\u0000\u0000"+
		")+\u0003&\u0013\u0000*,\u0003\u0002\u0001\u0000+*\u0001\u0000\u0000\u0000"+
		"+,\u0001\u0000\u0000\u0000,1\u0001\u0000\u0000\u0000-0\u0003\u0004\u0002"+
		"\u0000.0\u0003\u0006\u0003\u0000/-\u0001\u0000\u0000\u0000/.\u0001\u0000"+
		"\u0000\u000003\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u000012\u0001"+
		"\u0000\u0000\u00002\u0001\u0001\u0000\u0000\u000031\u0001\u0000\u0000"+
		"\u000045\u0005\n\u0000\u000059\u0003&\u0013\u000068\u0003\u0010\b\u0000"+
		"76\u0001\u0000\u0000\u00008;\u0001\u0000\u0000\u000097\u0001\u0000\u0000"+
		"\u00009:\u0001\u0000\u0000\u0000:\u0003\u0001\u0000\u0000\u0000;9\u0001"+
		"\u0000\u0000\u0000<=\u0005\u0002\u0000\u0000=A\u0003&\u0013\u0000>@\u0003"+
		"\u0010\b\u0000?>\u0001\u0000\u0000\u0000@C\u0001\u0000\u0000\u0000A?\u0001"+
		"\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000BE\u0001\u0000\u0000\u0000"+
		"CA\u0001\u0000\u0000\u0000DF\u0003\b\u0004\u0000ED\u0001\u0000\u0000\u0000"+
		"EF\u0001\u0000\u0000\u0000FH\u0001\u0000\u0000\u0000GI\u0003\u001e\u000f"+
		"\u0000HG\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IK\u0001\u0000"+
		"\u0000\u0000JL\u0003$\u0012\u0000KJ\u0001\u0000\u0000\u0000KL\u0001\u0000"+
		"\u0000\u0000L\u0005\u0001\u0000\u0000\u0000MN\u0005\u0003\u0000\u0000"+
		"NR\u0003&\u0013\u0000OQ\u0003\u0010\b\u0000PO\u0001\u0000\u0000\u0000"+
		"QT\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000"+
		"\u0000SU\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000UW\u0003\b\u0004"+
		"\u0000VX\u0003\u001e\u000f\u0000WV\u0001\u0000\u0000\u0000WX\u0001\u0000"+
		"\u0000\u0000XZ\u0001\u0000\u0000\u0000Y[\u0003$\u0012\u0000ZY\u0001\u0000"+
		"\u0000\u0000Z[\u0001\u0000\u0000\u0000[\u0007\u0001\u0000\u0000\u0000"+
		"\\^\u0005\t\u0000\u0000]_\u0003\n\u0005\u0000^]\u0001\u0000\u0000\u0000"+
		"^_\u0001\u0000\u0000\u0000_a\u0001\u0000\u0000\u0000`b\u0003\f\u0006\u0000"+
		"a`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000d\t\u0001\u0000\u0000\u0000ef\u0003\f"+
		"\u0006\u0000f\u000b\u0001\u0000\u0000\u0000gi\u0005\f\u0000\u0000hj\u0003"+
		"\u000e\u0007\u0000ih\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000"+
		"ki\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000lu\u0001\u0000\u0000"+
		"\u0000mo\u0005\f\u0000\u0000np\u0003\u000e\u0007\u0000on\u0001\u0000\u0000"+
		"\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000"+
		"\u0000\u0000rt\u0001\u0000\u0000\u0000sm\u0001\u0000\u0000\u0000tw\u0001"+
		"\u0000\u0000\u0000us\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000"+
		"vx\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000xy\u0005\f\u0000\u0000"+
		"y\r\u0001\u0000\u0000\u0000z{\u0003&\u0013\u0000{\u000f\u0001\u0000\u0000"+
		"\u0000|\u0082\u0003\u0012\t\u0000}\u0082\u0003\u0014\n\u0000~\u0082\u0003"+
		"\u0016\u000b\u0000\u007f\u0082\u0003\u0018\f\u0000\u0080\u0082\u0003\u001a"+
		"\r\u0000\u0081|\u0001\u0000\u0000\u0000\u0081}\u0001\u0000\u0000\u0000"+
		"\u0081~\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0081"+
		"\u0080\u0001\u0000\u0000\u0000\u0082\u0011\u0001\u0000\u0000\u0000\u0083"+
		"\u0084\u0005\u0004\u0000\u0000\u0084\u0086\u0003&\u0013\u0000\u0085\u0087"+
		"\u0003\u001e\u000f\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0086\u0087"+
		"\u0001\u0000\u0000\u0000\u0087\u0089\u0001\u0000\u0000\u0000\u0088\u008a"+
		"\u0003$\u0012\u0000\u0089\u0088\u0001\u0000\u0000\u0000\u0089\u008a\u0001"+
		"\u0000\u0000\u0000\u008a\u0013\u0001\u0000\u0000\u0000\u008b\u008c\u0005"+
		"\u0005\u0000\u0000\u008c\u008e\u0003&\u0013\u0000\u008d\u008f\u0003\u001e"+
		"\u000f\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000"+
		"\u0000\u0000\u008f\u0091\u0001\u0000\u0000\u0000\u0090\u0092\u0003$\u0012"+
		"\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000"+
		"\u0000\u0092\u0015\u0001\u0000\u0000\u0000\u0093\u0094\u0005\u0006\u0000"+
		"\u0000\u0094\u0096\u0003&\u0013\u0000\u0095\u0097\u0003\u001e\u000f\u0000"+
		"\u0096\u0095\u0001\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000"+
		"\u0097\u0099\u0001\u0000\u0000\u0000\u0098\u009a\u0003$\u0012\u0000\u0099"+
		"\u0098\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a"+
		"\u0017\u0001\u0000\u0000\u0000\u009b\u009c\u0005\u0007\u0000\u0000\u009c"+
		"\u009e\u0003&\u0013\u0000\u009d\u009f\u0003\u001e\u000f\u0000\u009e\u009d"+
		"\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u00a1"+
		"\u0001\u0000\u0000\u0000\u00a0\u00a2\u0003$\u0012\u0000\u00a1\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u0019\u0001"+
		"\u0000\u0000\u0000\u00a3\u00a4\u0005\b\u0000\u0000\u00a4\u00a6\u0003&"+
		"\u0013\u0000\u00a5\u00a7\u0003\u001e\u000f\u0000\u00a6\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a8\u00aa\u0003$\u0012\u0000\u00a9\u00a8\u0001\u0000\u0000"+
		"\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u001b\u0001\u0000\u0000"+
		"\u0000\u00ab\u00ad\u0007\u0000\u0000\u0000\u00ac\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000"+
		"\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u001d\u0001\u0000\u0000"+
		"\u0000\u00b0\u00b2\u0005\r\u0000\u0000\u00b1\u00b3\u0003\u001c\u000e\u0000"+
		"\u00b2\u00b1\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001\u0000\u0000\u0000"+
		"\u00b3\u00b4\u0001\u0000\u0000\u0000\u00b4\u00b5\u0005\r\u0000\u0000\u00b5"+
		"\u001f\u0001\u0000\u0000\u0000\u00b6\u00b8\u0005\u0018\u0000\u0000\u00b7"+
		"\u00b6\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9"+
		"\u00b7\u0001\u0000\u0000\u0000\u00b9\u00ba\u0001\u0000\u0000\u0000\u00ba"+
		"!\u0001\u0000\u0000\u0000\u00bb\u00bd\u0005\u000e\u0000\u0000\u00bc\u00be"+
		"\u0003 \u0010\u0000\u00bd\u00bc\u0001\u0000\u0000\u0000\u00bd\u00be\u0001"+
		"\u0000\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf\u00c0\u0005"+
		"\u000e\u0000\u0000\u00c0#\u0001\u0000\u0000\u0000\u00c1\u00c3\u0005\u000f"+
		"\u0000\u0000\u00c2\u00c1\u0001\u0000\u0000\u0000\u00c3\u00c4\u0001\u0000"+
		"\u0000\u0000\u00c4\u00c2\u0001\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c5%\u0001\u0000\u0000\u0000\u00c6\u00cc\u0005\u000b\u0000"+
		"\u0000\u00c7\u00cc\u0005\u0010\u0000\u0000\u00c8\u00cc\u0005\u0011\u0000"+
		"\u0000\u00c9\u00cc\u0005\u0014\u0000\u0000\u00ca\u00cc\u0003\"\u0011\u0000"+
		"\u00cb\u00c6\u0001\u0000\u0000\u0000\u00cb\u00c7\u0001\u0000\u0000\u0000"+
		"\u00cb\u00c8\u0001\u0000\u0000\u0000\u00cb\u00c9\u0001\u0000\u0000\u0000"+
		"\u00cb\u00ca\u0001\u0000\u0000\u0000\u00cc\u00cd\u0001\u0000\u0000\u0000"+
		"\u00cd\u00cb\u0001\u0000\u0000\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000"+
		"\u00ce\'\u0001\u0000\u0000\u0000\"+/19AEHKRWZ^ckqu\u0081\u0086\u0089\u008e"+
		"\u0091\u0096\u0099\u009e\u00a1\u00a6\u00a9\u00ae\u00b2\u00b9\u00bd\u00c4"+
		"\u00cb\u00cd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}