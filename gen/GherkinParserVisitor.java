// Generated from /Users/seba/dev/_personal/pickle-jar/src/grammar/GherkinParser.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link GherkinParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface GherkinParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link GherkinParser#feature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFeature(GherkinParser.FeatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#background}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBackground(GherkinParser.BackgroundContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#scenario}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitScenario(GherkinParser.ScenarioContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#scenarioOutline}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitScenarioOutline(GherkinParser.ScenarioOutlineContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#examplesBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExamplesBlock(GherkinParser.ExamplesBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#tableHeader}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableHeader(GherkinParser.TableHeaderContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#tableRow}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableRow(GherkinParser.TableRowContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#cell}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCell(GherkinParser.CellContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#step}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStep(GherkinParser.StepContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#givenStep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGivenStep(GherkinParser.GivenStepContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#whenStep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhenStep(GherkinParser.WhenStepContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#thenStep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitThenStep(GherkinParser.ThenStepContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#andStep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAndStep(GherkinParser.AndStepContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#butStep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitButStep(GherkinParser.ButStepContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#docStringContents}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDocStringContents(GherkinParser.DocStringContentsContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#docString}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDocString(GherkinParser.DocStringContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#markdownContents}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMarkdownContents(GherkinParser.MarkdownContentsContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#markdown}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMarkdown(GherkinParser.MarkdownContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#tags}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTags(GherkinParser.TagsContext ctx);
	/**
	 * Visit a parse tree produced by {@link GherkinParser#text}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitText(GherkinParser.TextContext ctx);
}