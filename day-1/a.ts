import { readFileSync } from 'fs';

const data = readFileSync('./input', 'utf-8');
console.log(data);

const parsedData = data
  .trim()
  .split('\n\n')
  .map((i) => i.split('\n').map((i) => Number(i)));

let largestNum = 0;
parsedData.forEach((i) => {
  const sum = i.reduce((a, b) => a + b, 0);
  if (sum > largestNum) {
    largestNum = sum;
  }
});
console.log(largestNum);
