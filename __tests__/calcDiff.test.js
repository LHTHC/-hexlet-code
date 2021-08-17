import { readFileSync } from 'fs';
import path from 'path';
import { expect } from '@jest/globals';
import calcDiff from '../src/calcDiff';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const firstAnswerPath = path.resolve(__dirname, '__fixtures__/plain.txt');
const firstAnswer = readFileSync(firstAnswerPath, 'utf-8');
test('calcDiff', () => {
  expect(calcDiff('file1.json', 'file2.json')).toEqual(firstAnswer);
});
