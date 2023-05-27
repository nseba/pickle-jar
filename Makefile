.DEFAULT_GOAL := rebuild
.PHONY: all build rebuild watch clean test test-prod test-watch lint start doc

build:
	npx tsc	
	npx cpx "src/**/*{.jsx?, .css}" "dist/"

rebuild:
	$(MAKE) clean
	$(MAKE) build

watch:
	$(MAKE) build
	(trap 'kill 0' SIGINT; npx tsc-watch & npx cpx "src/**/*{.jsx?, .css}" "dist/" --watch)

start:
	$(MAKE) build
	(trap 'kill 0' SIGINT; npx tsc-watch & npx cpx "src/**/*{.jsx?,.css}" "dist/" --watch & nodemon -r dotenv/config dist/bin/index.js)

clean:
	rm -rfv ./dist
	rm -vf *.tsbuildinfo

test:
	npx jest

test-prod:
	npx jest --coverage --no-cache

test-watch:
	npx jest --watch

lint:
	npx eslint '*/**/*.{js,ts,tsx}' --fix

doc:
	npx typedoc src/index.ts

grammar:
	npx antlr4ts -visitor -no-listener ./src/grammar/GherkinLexer.g4
	npx antlr4ts -visitor -no-listener ./src/grammar/GherkinParser.g4

all:
	$(MAKE) clean
	$(MAKE) build
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) doc
