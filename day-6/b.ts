import { readFileSync } from "fs";

const testInput = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const test = false;

const input = test ? testInput : readFileSync("./input", "utf-8");

let found = 0;
input
  .trim()
  .split("")
  .forEach((v, i, arr) => {
    if (i > 12) {
      const testArr = [];
      for (let x = 1; x < 14; x++) {
        testArr.push(arr[i - 14 + x]);
      }
      testArr.push(v);
      if (found === 0 && new Set(testArr).size === testArr.length) {
        found = i + 1;
      }
    }
  });

console.log(found);
