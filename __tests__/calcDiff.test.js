import { readFileSync } from 'fs';
import path from 'path';
import { expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import calcDiff from '../src/index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const firstAnswerPath = path.resolve(__dirname, '__fixtures__/nested.txt');
const firstAnswer = readFileSync(firstAnswerPath, 'utf-8');

test('calcDiff Nested JSON', () => {
  expect(calcDiff('file1.json', 'file2.json')).toEqual(firstAnswer);
});

test('calcDiff Nested YAML', () => {
  expect(calcDiff('file1.yaml', 'file2.yml')).toEqual(firstAnswer);
});
