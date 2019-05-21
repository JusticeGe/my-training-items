let letterArr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
]

let letterCombinations = function (digits) {
  if (!digits) { return -1 }
  let numArr = digits.split('')
  // let times = numArr.length
  // let newArr = []
  let newLetterArr = []
  for (let i = 0; i < numArr.length; i++) {
    newLetterArr[i] = letterArr[numArr[i] - 2]
  }
  while (newLetterArr.length > 1) {
    twoArrSplice(newLetterArr)
  }
  return newLetterArr[0]
}

let twoArrSplice = function (arr) {
  let res = []
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      res.push(arr[0][i] + arr[1][j])
    }
  }
  arr.splice(0, 2, res)
}

export default letterCombinations
// console.log(letterCombinations('2345'))
