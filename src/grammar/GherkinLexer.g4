lexer grammar GherkinLexer;

FEATURE: 'Feature:' | 'FEATURE';
SCENARIO: 'Scenario:' | 'SCENARIO';
SCENARIO_OUTLINE: 'Scenario Outline:' | 'SCENARIO_OUTLINE' | 'Scenario Template:';
GIVEN: 'Given' | 'GIVEN';
AND_GIVEN: 'And given' | 'AND_GIVEN';
WHEN: 'When' | 'WHEN';
AND_WHEN: 'And when' | 'AND_WHEN';
THEN: 'Then' | 'THEN';
AND: 'And' | 'AND';
BUT: 'But' | 'BUT';
EXAMPLES: 'Examples:' | 'EXAMPLES';
BACKGROUND: 'Background:' | 'BACKGROUND';

PIPE: '|';
TAG: '@' [a-zA-Z0-9_]+;
COMMENT: '#' ~[\r\n]* -> skip;

TEXT_CHARACTER: ~[\r\n"|] -> pushMode(TEXT_CHARACTER_MODE);
WS: [\r\n]+ -> skip;
WSS: [ \t\r\n]+ -> skip;


DOC_STRING_QUOT: '"""' -> pushMode(DOC_STRING_MODE);

mode TEXT_CHARACTER_MODE;
    TEXT_CHARACTER2: ~[\r\n"|]+ -> type(TEXT_CHARACTER), popMode;

mode DOC_STRING_MODE;
    DOC_STRING_TEXT: ~["]+;
    DOC_STRING_WS: [ \t\r\n]+;
    DOC_STRING_QUOT_2: '"""' -> type(DOC_STRING_QUOT), popMode;
