import { readFileSync } from 'fs';

const data = readFileSync('./input', 'utf-8');
console.log(data);

const parsedData = data
  .trim()
  .split('\n\n')
  .map((i) => i.split('\n').map((i) => Number(i)));

const sums = parsedData
  .map((i) => i.reduce((a, b) => a + b))
  .sort((a, b) => b - a);

console.log(sums[0] + sums[1] + sums[2]);
