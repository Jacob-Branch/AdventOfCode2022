import { readFileSync } from "fs";

const data = readFileSync("./input", "utf-8");
const parsedData = data
  .trim()
  .split("\n")
  .map((i) => i.split(",").map((i) => i.split("-").map((i) => Number(i))));

let sum = 0;
parsedData.forEach((v, i, arr) => {
  const range1 = [];
  for (let y = v[0][0]; y <= v[0][1]; y++) {
    range1.push(y);
  }
  const range2 = [];
  for (let y = v[1][0]; y <= v[1][1]; y++) {
    range2.push(y);
  }

  if (
    range1.every((x) => range2.includes(x)) ||
    range2.every((x) => range1.includes(x))
  ) {
    console.log(true);
    sum++;
  }
});
console.log(sum);
