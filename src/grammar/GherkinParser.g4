parser grammar GherkinParser;

options {
  tokenVocab=GherkinLexer;
}

featureFile: feature*;

feature: FEATURE contentText (background)? (scenario | scenarioOutline)*;

background: BACKGROUND contentText step;

scenario: SCENARIO contentText step (tags)?;

scenarioOutline: SCENARIO_OUTLINE contentText step examplesBlock (tags)?;

examplesBlock: EXAMPLES tableHeader tableRow+;

tableHeader: tableRow;

tableRow: PIPE cell+ (PIPE cell+)* PIPE;

cell: contentText;

step: givenStep andGivenStep* whenStep andWhenStep* thenStep andStep* butStep*;

givenStep: GIVEN contentText (tags)? docString?;

andGivenStep: AND_GIVEN contentText (tags)? docString?;

whenStep: WHEN contentText (tags)? docString?;

andWhenStep: AND_WHEN contentText (tags)? docString?;

thenStep: THEN contentText (tags)? docString?;

andStep: AND contentText (tags)? docString?;

butStep: BUT contentText (tags)? docString?;

docString: DOC_STRING_QUOT DOC_STRING_TEXT? DOC_STRING_QUOT;

tags: TAG+;

contentText: TEXT_CHARACTER+;
