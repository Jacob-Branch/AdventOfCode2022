import { readFileSync } from "fs";

const test = false;

const data = readFileSync(test ? "./test" : "./input", "utf-8");

const parsedData = data.split("\n");

const nonParsedStacks = parsedData.splice(0, test ? 3 : 8);
const stacks = test ? [[], [], []] : [[], [], [], [], [], [], [], [], []];

for (let x = 1; x <= nonParsedStacks[1].length; x += 4) {
  for (let i = nonParsedStacks.length - 1; i >= 0; i--) {
    if (
      nonParsedStacks[i].charAt(x) !== " " &&
      nonParsedStacks[i].charAt(x) !== ""
    )
      stacks[x === 1 ? 0 : (x - 1) / 4].push(nonParsedStacks[i].charAt(x));
  }
}

const instructions = parsedData.splice(2, parsedData.length).map((i) => {
  return i
    .replace("move ", "")
    .replace("from ", "")
    .replace("to ", "")
    .split(" ")
    .map((i) => Number(i));
});

instructions.forEach((v, i) => {
  stacks[v[2] - 1] = [
    ...stacks[v[2] - 1],
    ...stacks[v[1] - 1].splice(stacks[v[1] - 1].length - v[0], v[0]),
  ];
});

console.log(stacks.map((i) => i[i.length - 1]).join(""));
