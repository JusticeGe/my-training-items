/**
 *? @description Math.floor 向下取整
 */
const {Stack} = require('./20190819-Stack01')

function decimalToBinary(decNumber) {

  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''

  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

decimalToBinary()

function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber
  let rem
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

console.log(baseConverter(100345, 2))