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
ONLY_TAG: '@only';
SKIP_TAG: '@skip';
TODO_TAG: '@todo';
FAIL_TAG: '@fail';

TAG: '@' [a-zA-Z0-9_]+;
COMMENT: '#' ~[\r\n]* -> skip;

TEXT_CHARACTER: ~[\r\n|] -> pushMode(TEXT_CHARACTER_MODE);
NEWLINE: [\r\n];
//WS: [\r\n]+ -> skip;
//WSS: [ \r\n\t]+ -> skip;
WSS: [ \t]+ -> skip;

//DOC_STRING_QUOT: '"""' -> pushMode(DOC_STRING_MODE);

fragment DOC_STRING_QUOT: '"' | '`';

DOC_STRING: DOC_STRING_QUOT DOC_STRING_QUOT DOC_STRING_QUOT .*? DOC_STRING_QUOT DOC_STRING_QUOT DOC_STRING_QUOT;


mode TEXT_CHARACTER_MODE;
    TEXT_CHARACTER2: ~[\r\n|]+ -> type(TEXT_CHARACTER), popMode;

//mode DOC_STRING_MODE;
//    STRING: '"' ( ~["\r\n] | '""' )* '"' -> type(TEXT_CHARACTER);
//    QUOTED_STRING: '"""' .*? '"""' -> type(TEXT_CHARACTER);
//    DOC_STRING_QUOT_2: '"""' -> type(DOC_STRING_QUOT), popMode;
//    WS2: [ \t\r\n]+ -> skip;