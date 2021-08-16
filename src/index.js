import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export const readFile = (file) => fs.readFileSync(path.resolve(process.cwd(), './__tests__/__fixtures__', file), 'utf-8');

export const calcDiff = (file1, file2) => {
  const data1 = JSON.parse(readFile(file1));
  const data2 = JSON.parse(readFile(file2));

  const keys = _.orderBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = keys.map((key) => {
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}\n`;
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return `  + ${key}: ${data1[key]}\n`;
    }
    if (_.has(data1, key) && _.has(data2, key) && data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${[key]}: ${data2[key]}\n`;
    }
    return `    ${key}: ${data1[key]}\n`;
  });
  return `{\n${result.join('')}}`;
};

export default calcDiff;
