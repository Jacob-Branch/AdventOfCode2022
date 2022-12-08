import { readFileSync } from "fs";

const test = false;

const data = readFileSync(test ? "./test" : "./input", "utf-8")
  .trim()
  .split("\n")
  .map((i) => i.split("").map((i) => Number(i)));

let visTrees = 0;
data.forEach((v, i, a) => {
  v.forEach((val, ind, arr) => {
    if (i !== 0 && i !== a.length - 1 && ind !== 0 && ind !== arr.length - 1) {
      const toTop = [];
      const toBottom = [];
      const toLeft = [];
      const toRight = [];

      for (let x = 0; x < i; x++) {
        toTop.push(a[x][ind]);
      }
      for (let x = i + 1; x < a.length; x++) {
        toBottom.push(a[x][ind]);
      }
      for (let x = 0; x < ind; x++) {
        toLeft.push(a[i][x]);
      }
      for (let x = ind + 1; x < arr.length; x++) {
        toRight.push(a[i][x]);
      }
      // console.log(val + ": ", toTop, toBottom, toLeft, toRight);
      if (
        toTop.every((value) => val > value) ||
        toBottom.every((value) => val > value) ||
        toLeft.every((value) => val > value) ||
        toRight.every((value) => val > value)
      ) {
        visTrees++;
      }
    }
  });
});
visTrees += data.length * 2 + data[0].length * 2 - 4;
console.log(visTrees);
