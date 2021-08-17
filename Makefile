install:
	npm install
publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js
lint: #run eslint
	npx eslint .
test:
	npm test