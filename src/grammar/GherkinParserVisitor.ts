// Generated from ./src/grammar/GherkinParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FeatureFileContext } from "./GherkinParser";
import { FeatureContext } from "./GherkinParser";
import { BackgroundContext } from "./GherkinParser";
import { ScenarioContext } from "./GherkinParser";
import { ScenarioOutlineContext } from "./GherkinParser";
import { ExamplesBlockContext } from "./GherkinParser";
import { TableHeaderContext } from "./GherkinParser";
import { TableRowContext } from "./GherkinParser";
import { CellContext } from "./GherkinParser";
import { StepContext } from "./GherkinParser";
import { GivenStepContext } from "./GherkinParser";
import { AndGivenStepContext } from "./GherkinParser";
import { WhenStepContext } from "./GherkinParser";
import { AndWhenStepContext } from "./GherkinParser";
import { ThenStepContext } from "./GherkinParser";
import { AndStepContext } from "./GherkinParser";
import { ButStepContext } from "./GherkinParser";
import { DocStringContext } from "./GherkinParser";
import { TagsContext } from "./GherkinParser";
import { ThenTagsContext } from "./GherkinParser";
import { ContentTextContext } from "./GherkinParser";
import { MultilineTextContext } from "./GherkinParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GherkinParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GherkinParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GherkinParser.featureFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureFile?: (ctx: FeatureFileContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.feature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeature?: (ctx: FeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.background`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackground?: (ctx: BackgroundContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.scenario`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScenario?: (ctx: ScenarioContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.scenarioOutline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScenarioOutline?: (ctx: ScenarioOutlineContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.examplesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExamplesBlock?: (ctx: ExamplesBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.tableHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableHeader?: (ctx: TableHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.tableRow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRow?: (ctx: TableRowContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.cell`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell?: (ctx: CellContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStep?: (ctx: StepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.givenStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGivenStep?: (ctx: GivenStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.andGivenStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndGivenStep?: (ctx: AndGivenStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.whenStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenStep?: (ctx: WhenStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.andWhenStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndWhenStep?: (ctx: AndWhenStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.thenStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThenStep?: (ctx: ThenStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.andStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndStep?: (ctx: AndStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.butStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitButStep?: (ctx: ButStepContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.docString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocString?: (ctx: DocStringContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.tags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTags?: (ctx: TagsContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.thenTags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThenTags?: (ctx: ThenTagsContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.contentText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContentText?: (ctx: ContentTextContext) => Result;

	/**
	 * Visit a parse tree produced by `GherkinParser.multilineText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineText?: (ctx: MultilineTextContext) => Result;
}

