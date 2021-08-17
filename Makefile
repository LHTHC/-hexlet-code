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
test-coverage:
	npm test -- --coverage --coverageProvider=v8
test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch