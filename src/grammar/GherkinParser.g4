parser grammar GherkinParser;

options {
  tokenVocab=GherkinLexer;
}

feature: FEATURE text (background)? (scenario | scenarioOutline)*;

background: BACKGROUND text (step)*;

scenario: SCENARIO text (step)* (examplesBlock)? (docString)? (tags)?;

scenarioOutline: SCENARIO_OUTLINE text (step)* examplesBlock (docString)? (tags)?;

examplesBlock: EXAMPLES (tableHeader)? tableRow+;

tableHeader: tableRow;

tableRow: PIPE cell+ (PIPE cell+)* PIPE;

cell: text;

step: givenStep | whenStep | thenStep | andStep | butStep;

givenStep: GIVEN text (docString)? (tags)?;
whenStep: WHEN text (docString)? (tags)?;
thenStep: THEN text (docString)? (tags)?;
andStep: AND text (docString)? (tags)?;
butStep: BUT text (docString)? (tags)?;

docStringContents: (ANGLE_BRACKET_WORD | DOC_STRING_TEXT)+;
docString: DOC_STRING_QUOT docStringContents? DOC_STRING_QUOT;

tags: TAG+;

text: (TEXT_CHARACTER | QUOTED_TEXT | ESCAPED_CHAR | ANGLE_BRACKET_PLACEHOLDER)+;