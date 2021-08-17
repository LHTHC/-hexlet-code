import calcDiff from './calcDiff.js';

export default (file1, file2) => {
  const diff = calcDiff(file1, file2);
  return diff;
};
