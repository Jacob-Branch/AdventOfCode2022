import { readFileSync } from "fs";

const test = false;

const data = readFileSync(test ? "./test" : "./input", "utf-8");

const parsedData = data.trim().split("\n");

const nonParsedStacks = parsedData.splice(0, test ? 3 : 8);
const stacks = test ? [[], [], []] : [[], [], [], [], [], [], [], [], []];

for (let x = 1; x <= nonParsedStacks[1].length; x += 4) {
  for (let i = nonParsedStacks.length - 1; i >= 0; i--) {
    if (nonParsedStacks[i].charAt(x) !== " ")
      stacks[x === 1 ? 0 : (x - 1) / 4].push(nonParsedStacks[i].charAt(x));
  }
}

const instructions = parsedData.splice(2, parsedData.length).map((i) => {
  console.log(i);
  return i
    .replace("move ", "")
    .replace("from ", "")
    .replace("to ", "")
    .split(" ")
    .map((i) => Number(i));
});

console.log(parsedData.splice(10, parsedData.length), instructions);

instructions.forEach((v) => {
  for (let x = v[0]; x > 0; x--) {
    stacks[v[2] - 1].push(stacks[v[1] - 1].pop());
  }
});

console.log(stacks.map((i) => i[i.length - 1]).join(""));
