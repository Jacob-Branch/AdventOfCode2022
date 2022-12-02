import { readFileSync } from "fs"

// A, X = rock = 1p
// B, Y = paper = 2p
// c, Z = scissors = 3p
// win = 6p, draw = 3p, loss = 0p

const data = readFileSync("./input", "utf-8")

const parsedData = data.trim().split("\n").map((i) => (i.split(" ")))

const getWinner = (a: string, b:string) => {
  if (a==="A") {
    if (b==="X") return 3
    if (b==="Y") return 6
    return 0
  } else if (a==="B") {
    if (b==="Y") return 3
    if (b==="Z") return 6
    return 0
  } else {
    if (b==="Z") return 3
    if (b==="X") return 6
    return 0
  }
}

const getItemScore = (a: string) => {
  switch (a) {
    case "X": return 1
    case "Y": return 2
    case "Z": return 3
  }
}

let score = 0
parsedData.forEach((i) => {
  score += getItemScore(i[1]) + getWinner(i[0], i[1])
})

console.log(score)
