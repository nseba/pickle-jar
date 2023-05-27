// Generated from /Users/seba/dev/_personal/pickle-jar/src/grammar/GherkinParser.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link GherkinParser}.
 */
public interface GherkinParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link GherkinParser#feature}.
	 * @param ctx the parse tree
	 */
	void enterFeature(GherkinParser.FeatureContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#feature}.
	 * @param ctx the parse tree
	 */
	void exitFeature(GherkinParser.FeatureContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#background}.
	 * @param ctx the parse tree
	 */
	void enterBackground(GherkinParser.BackgroundContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#background}.
	 * @param ctx the parse tree
	 */
	void exitBackground(GherkinParser.BackgroundContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#scenario}.
	 * @param ctx the parse tree
	 */
	void enterScenario(GherkinParser.ScenarioContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#scenario}.
	 * @param ctx the parse tree
	 */
	void exitScenario(GherkinParser.ScenarioContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#scenarioOutline}.
	 * @param ctx the parse tree
	 */
	void enterScenarioOutline(GherkinParser.ScenarioOutlineContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#scenarioOutline}.
	 * @param ctx the parse tree
	 */
	void exitScenarioOutline(GherkinParser.ScenarioOutlineContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#examplesBlock}.
	 * @param ctx the parse tree
	 */
	void enterExamplesBlock(GherkinParser.ExamplesBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#examplesBlock}.
	 * @param ctx the parse tree
	 */
	void exitExamplesBlock(GherkinParser.ExamplesBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#tableHeader}.
	 * @param ctx the parse tree
	 */
	void enterTableHeader(GherkinParser.TableHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#tableHeader}.
	 * @param ctx the parse tree
	 */
	void exitTableHeader(GherkinParser.TableHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#tableRow}.
	 * @param ctx the parse tree
	 */
	void enterTableRow(GherkinParser.TableRowContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#tableRow}.
	 * @param ctx the parse tree
	 */
	void exitTableRow(GherkinParser.TableRowContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#cell}.
	 * @param ctx the parse tree
	 */
	void enterCell(GherkinParser.CellContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#cell}.
	 * @param ctx the parse tree
	 */
	void exitCell(GherkinParser.CellContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#step}.
	 * @param ctx the parse tree
	 */
	void enterStep(GherkinParser.StepContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#step}.
	 * @param ctx the parse tree
	 */
	void exitStep(GherkinParser.StepContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#givenStep}.
	 * @param ctx the parse tree
	 */
	void enterGivenStep(GherkinParser.GivenStepContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#givenStep}.
	 * @param ctx the parse tree
	 */
	void exitGivenStep(GherkinParser.GivenStepContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#whenStep}.
	 * @param ctx the parse tree
	 */
	void enterWhenStep(GherkinParser.WhenStepContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#whenStep}.
	 * @param ctx the parse tree
	 */
	void exitWhenStep(GherkinParser.WhenStepContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#thenStep}.
	 * @param ctx the parse tree
	 */
	void enterThenStep(GherkinParser.ThenStepContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#thenStep}.
	 * @param ctx the parse tree
	 */
	void exitThenStep(GherkinParser.ThenStepContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#andStep}.
	 * @param ctx the parse tree
	 */
	void enterAndStep(GherkinParser.AndStepContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#andStep}.
	 * @param ctx the parse tree
	 */
	void exitAndStep(GherkinParser.AndStepContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#butStep}.
	 * @param ctx the parse tree
	 */
	void enterButStep(GherkinParser.ButStepContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#butStep}.
	 * @param ctx the parse tree
	 */
	void exitButStep(GherkinParser.ButStepContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#docStringContents}.
	 * @param ctx the parse tree
	 */
	void enterDocStringContents(GherkinParser.DocStringContentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#docStringContents}.
	 * @param ctx the parse tree
	 */
	void exitDocStringContents(GherkinParser.DocStringContentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#docString}.
	 * @param ctx the parse tree
	 */
	void enterDocString(GherkinParser.DocStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#docString}.
	 * @param ctx the parse tree
	 */
	void exitDocString(GherkinParser.DocStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#markdownContents}.
	 * @param ctx the parse tree
	 */
	void enterMarkdownContents(GherkinParser.MarkdownContentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#markdownContents}.
	 * @param ctx the parse tree
	 */
	void exitMarkdownContents(GherkinParser.MarkdownContentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#markdown}.
	 * @param ctx the parse tree
	 */
	void enterMarkdown(GherkinParser.MarkdownContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#markdown}.
	 * @param ctx the parse tree
	 */
	void exitMarkdown(GherkinParser.MarkdownContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#tags}.
	 * @param ctx the parse tree
	 */
	void enterTags(GherkinParser.TagsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#tags}.
	 * @param ctx the parse tree
	 */
	void exitTags(GherkinParser.TagsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GherkinParser#text}.
	 * @param ctx the parse tree
	 */
	void enterText(GherkinParser.TextContext ctx);
	/**
	 * Exit a parse tree produced by {@link GherkinParser#text}.
	 * @param ctx the parse tree
	 */
	void exitText(GherkinParser.TextContext ctx);
}