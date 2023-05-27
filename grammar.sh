#!/usr/bin/env bash

npx antlr4ts -visitor -no-listener ./src/grammar/GherkinLexer.g4
npx antlr4ts -visitor -no-listener ./src/grammar/GherkinParser.g4

echo "// @ts-nocheck" | cat - ./src/grammar/GherkinLexer.ts > temp && mv temp ./src/grammar/GherkinLexer.ts
echo "// @ts-nocheck" | cat - ./src/grammar/GherkinParser.ts > temp && mv temp ./src/grammar/GherkinParser.ts
