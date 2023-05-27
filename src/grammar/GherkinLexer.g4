lexer grammar GherkinLexer;

FEATURE: 'Feature:';
SCENARIO: 'Scenario:';
SCENARIO_OUTLINE: 'Scenario Outline:';
GIVEN: 'Given';
WHEN: 'When';
THEN: 'Then';
AND: 'And';
BUT: 'But';
EXAMPLES: 'Examples:';
BACKGROUND: 'Background:';

TEXT_CHARACTER: [a-zA-Z0-9:._`-]+;
PIPE: '|';
DOC_STRING_QUOT: '"""' -> pushMode(DOC_STRING_MODE);
TAG: '@' [a-zA-Z0-9_]+;
QUOTED_TEXT: ('"' | '\'' | '`') (~["'`\\] | ESCAPED_CHAR | '\\' .)* ('"' | '\'' | '`');
ESCAPED_CHAR: '\\' [nrt"\\];
COMMENT: '#' ~[\r\n]* -> skip;
MARKDOWN: '```' .*? '```';
ANGLE_BRACKET_PLACEHOLDER: '<' .*? '>';

WS: [ \t\r\n]+ -> skip;


mode DOC_STRING_MODE;
    ANGLE_BRACKET_WORD: '<' ~('<' | '>')* '>';
    DOC_STRING_TEXT: ~('<')+?;
    DOC_STRING_QUOT_2: '"""' -> type(DOC_STRING_QUOT), popMode;

