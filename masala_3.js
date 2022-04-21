const arr = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

let n = '4E6'
let a = 16
function binnary(n, a) {
  let num = 0
  for(let l in n) {
     num += arr[n[l]] * (a ** Math.abs(l - (n.length - 1)))
  }
  return num
}

console.log(binnary(n, a))