import { readFileSync } from "fs";

const testInput = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const test = false;

const input = test ? testInput : readFileSync("./input", "utf-8");

let found = 0;
input
  .trim()
  .split("")
  .forEach((v, i, arr) => {
    if (i > 2) {
      const testArr = [arr[i - 1], arr[i - 2], arr[i - 3], v];
      if (found === 0 && new Set(testArr).size === testArr.length) {
        found = i + 1;
      }
    }
  });

console.log(found);
