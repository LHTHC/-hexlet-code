import { getExt, readFile } from './utilities.js';
import parse from './parsers.js';
import calcDiff from './calcDiff.js';

export default (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const ext1 = getExt(file1);
  const ext2 = getExt(file2);
  const firstParsed = parse(data1, ext1);
  const secondParsed = parse(data2, ext2);
  const diff = calcDiff(firstParsed, secondParsed);
  return diff;
};
