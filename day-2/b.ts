import { readFileSync } from "fs"

// A = rock = 1p
// B = paper = 2p
// c = scissors = 3p
// win = 6p, draw = 3p, loss = 0p

// P2: X = loss, Y = draw, Z = win

const data = readFileSync("./input", "utf-8")

const parsedData = data.trim().split("\n").map((i) => (i.split(" ")))

const getWinner = (a: string, b:string) => {
  if (a==="A") {
    if (b==="X") return 3
    if (b==="Y") return 4
    return 8
  } else if (a==="B") {
    if (b==="X") return 1
    if (b==="Y") return 5
    return 9
  } else {
    if (b==="X") return 2
    if (b==="Y") return 6
    return 7
  }
}

let score = 0
parsedData.forEach((i) => {
  score += getWinner(i[0], i[1])
})

console.log(score)
