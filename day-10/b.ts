import { readFileSync } from "fs";

const test = false;

const input = readFileSync(test ? "./test" : "./input", "utf-8")
  .trim()
  .split("\n");

let X = 1;

const values = [];

let sum = 0;

const CRT = [[]]
let line = 0

input.forEach((v, i) => {
  if (v === "noop") {
    values.push(X);
    if (CRT[line].length <= X + 1 && CRT[line].length >= X - 1) {
      CRT[line].push("#")
    } else {
      CRT[line].push(".")
    }
    
    console.log(values.length%40);
    
    if (values.length%40 === 0 && values.length > 2) {
      line++
      CRT.push([])
    }

  } else {
    const instruction = v.split(" ");
    for (let x = 2; x > 0; x--) {
      values.push(X)
      if (CRT[line].length <= X + 1 && CRT[line].length >= X - 1) {
        CRT[line].push("#")
      } else {
        CRT[line].push(".")
      }

      console.log(values.length%40);
      if (values.length%40 === 0 && values.length > 2) {
        line++
        CRT.push([])
      }
    }
    X += Number(instruction[1]);
  }
});

console.log(CRT.map((i) => i.join("")));

