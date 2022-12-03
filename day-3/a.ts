import { readFileSync } from "fs";

const alphabetCap = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

const getPriorityValue = (v: string) => {
  return v === v.toUpperCase()
    ? alphabetCap.findIndex((i) => i === v) + 27
    : alphabet.findIndex((i) => i === v) + 1;
};

const data = readFileSync("./input", "utf-8");
const parsedData = data
  .trim()
  .split("\n")
  .map((i) => i.split(""))
  .map((i) => Array(i))
  .map((i) => {
    return [
      i[0].slice(0, i[0].length / 2),
      i[0].slice(i[0].length / 2, i[0].length),
    ];
  });

let prioScore = 0;
parsedData.forEach((i, ind) => {
  let common = "";
  i[0].forEach((v) => {
    if (i[1].includes(v)) {
      common = v;
    }
  });
  console.log(ind, common, getPriorityValue(common));
  prioScore += getPriorityValue(common);
});

console.log(prioScore);
