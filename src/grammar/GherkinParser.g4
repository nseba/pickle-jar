parser grammar GherkinParser;

options {
  tokenVocab=GherkinLexer;
}

featureFile: feature* NEWLINE* EOF;

feature: (tags)?  NEWLINE* FEATURE multilineText background? (scenario | scenarioOutline)* NEWLINE*;

background: (tags)? NEWLINE* BACKGROUND multilineText givenStep andGivenStep*;

scenario: (tags)? NEWLINE* SCENARIO multilineText step;

scenarioOutline: (tags)? NEWLINE* SCENARIO_OUTLINE multilineText step examplesBlock;

examplesBlock: NEWLINE* EXAMPLES NEWLINE+ tableHeader (tableRow)+;

tableHeader: tableRow;

tableRow: PIPE cell (PIPE cell)* PIPE NEWLINE+;

cell: contentText?;

step: givenStep andGivenStep* whenStep andWhenStep* thenStep andStep* butStep*;

givenStep: (tags)? NEWLINE* GIVEN multilineText ((NEWLINE docString NEWLINE+)? | NEWLINE+);

andGivenStep: (tags)? NEWLINE* AND_GIVEN multilineText ((NEWLINE docString NEWLINE+)? | NEWLINE+);

whenStep: (tags)? NEWLINE* WHEN multilineText  ((NEWLINE docString NEWLINE+)? | NEWLINE+);

andWhenStep: (tags)? NEWLINE* AND_WHEN multilineText ((NEWLINE docString NEWLINE+)? | NEWLINE+);

thenStep: (thenTags)? NEWLINE* THEN multilineText ((NEWLINE docString NEWLINE+)? | NEWLINE+);

andStep: (thenTags)? NEWLINE* AND multilineText ((NEWLINE docString NEWLINE+)? | NEWLINE+);

butStep: (thenTags)? NEWLINE* BUT multilineText ((NEWLINE docString NEWLINE+)? | NEWLINE+);

docString: DOC_STRING;

tags: NEWLINE* ((ONLY_TAG | SKIP_TAG | TAG) NEWLINE*)+;

thenTags: NEWLINE* ((ONLY_TAG | SKIP_TAG | FAIL_TAG | TODO_TAG | TAG) NEWLINE*)+;

contentText: TEXT_CHARACTER+;

multilineText: (TEXT_CHARACTER | NEWLINE)+;