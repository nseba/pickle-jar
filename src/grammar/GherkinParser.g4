parser grammar GherkinParser;

options {
  tokenVocab=GherkinLexer;
}

featureFile: feature*;

feature: FEATURE contentText (background? | (scenario | scenarioOutline)*);

background: (tags)? BACKGROUND contentText givenStep andGivenStep* (scenario | scenarioOutline)*;

scenario: (tags)? SCENARIO contentText step;

scenarioOutline: (tags)? SCENARIO_OUTLINE contentText step examplesBlock;

examplesBlock: EXAMPLES tableHeader tableRow+;

tableHeader: tableRow;

tableRow: PIPE cell+ (PIPE cell+)* PIPE;

cell: contentText;

step: givenStep andGivenStep* whenStep andWhenStep* thenStep andStep* butStep*;

givenStep: (tags)? GIVEN contentText docString?;

andGivenStep: (tags)? AND_GIVEN contentText docString?;

whenStep: (tags)? WHEN contentText  docString?;

andWhenStep: (tags)?AND_WHEN contentText docString?;

thenStep: (tags)? THEN contentText docString?;

andStep: (tags)? AND contentText docString?;

butStep: (tags)? BUT contentText docString?;

docString: DOC_STRING_QUOT DOC_STRING_TEXT? DOC_STRING_QUOT;

tags: TAG+;

contentText: TEXT_CHARACTER+;
