import { readFileSync } from "fs";

const test = false;

const input = readFileSync(test ? "./test" : "./input", "utf-8")
  .trim()
  .split("\n");

let X = 1;

const values = [];

let sum = 0;

input.forEach((v, i) => {
  if (v === "noop") {
    values.push(X);
  } else {
    const instruction = v.split(" ");
    for (let x = 2; x > 0; x--) {
      values.push(X);
      // console.log(
      //   "instruction: " + i,
      //   "cycle: " + (values.length - 1),
      //   "X value: " + X,
      //   "instruction add: " + Number(instruction[1])
      // );
    }
    X += Number(instruction[1]);
  }
});

for (let i = 19; i < 220; i += 40) {
  console.log(i, values[i], values[i] * i);
  sum += values[i] * (i + 1);
}

console.log(sum);
