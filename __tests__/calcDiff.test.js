import { readFileSync } from 'fs';
import path from 'path';
import { expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import calcDiff from '../src/index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const firstAnswerPath = path.resolve(__dirname, '__fixtures__/nested.txt');
const firstAnswer = readFileSync(firstAnswerPath, 'utf-8');
const secondAnswerPath = path.resolve(__dirname, '__fixtures__/plain.txt');
const secondAnswer = readFileSync(secondAnswerPath, 'utf-8');
test('calcDiff Nested JSON', () => {
  expect(calcDiff('file1.json', 'file2.json', 'stylish')).toEqual(firstAnswer);
});

test('calcDiff Nested YAML', () => {
  expect(calcDiff('file1.yaml', 'file2.yml', 'stylish')).toEqual(firstAnswer);
});

test('calcDiff Plain YAML', () => {
  expect(calcDiff('file1.yaml', 'file2.yml', 'plain')).toEqual(secondAnswer);
});

test('calcDiff Plain JSON', () => {
  expect(calcDiff('file1.json', 'file2.json', 'plain')).toEqual(secondAnswer);
});
