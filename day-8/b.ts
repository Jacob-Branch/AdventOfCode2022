import { readFileSync } from "fs";

const test = false;

const data = readFileSync(test ? "./test" : "./input", "utf-8")
  .trim()
  .split("\n")
  .map((i) => i.split("").map((i) => Number(i)));

let scenic = 0;
data.forEach((v, i, a) => {
  v.forEach((val, ind, arr) => {
    if (i !== 0 && i !== a.length - 1 && ind !== 0 && ind !== arr.length - 1) {
      let toTop = 0;
      let toBottom = 0;
      let toLeft = 0;
      let toRight = 0;

      for (let x = 0; x < i; x++) {
        if (a[i - 1 - x][ind] < val) {
          toTop++;
        } else {
          toTop++;
          break;
        }
      }
      for (let x = i + 1; x < a.length; x++) {
        if (a[x][ind] < val) {
          toBottom++;
        } else {
          toBottom++;
          break;
        }
      }
      for (let x = 0; x < ind; x++) {
        if (a[i][ind - 1 - x] < val) {
          toLeft++;
        } else {
          toLeft++;
          break;
        }
      }
      for (let x = ind + 1; x < arr.length; x++) {
        if (a[i][x] < val) {
          toRight++;
        } else {
          toRight++;
          break;
        }
      }
      console.log(val + ": ", toTop, toBottom, toLeft, toRight);
      if (toTop * toBottom * toLeft * toRight > scenic) {
        scenic = toTop * toBottom * toLeft * toRight;
      }
    }
  });
});
console.log(scenic);
