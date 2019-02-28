// console.log(['1', '2', '3'].map(parseInt))
// [ 1, NaN, NaN ]

// ['1', '2', '3'].map(item => {
//   console.log(item)
//   console.log(parseInt(item))
// })

// ! 函数传参引用传递
/*
function test1(person) {
  person.age = 26
  person = {
    age: 28
  }
  return person
}

let p1 = {
  age: 22
}

let p2 = test1(p1)

console.log(p1, p2)
*/

// ! symbol
/**
 * 计算时 Symbol.toPrimitive 优先级最高
 *        其次是valueOf
 *        最次是 toString
 */

/**
  * let a = {
  toString() {
    return 2
  },
  valueOf() {
    return 1
  },
  [Symbol.toPrimitive]() {
    return 10
  }
}

console.log(a + 1)
  */

// ? 四则运算  转化成字符串相加
// console.log(typeof (41 + [1, 2, 3]))
// ! 除了加法运算，只要一方是数字，另一方肯定转化成数字
// console.log( + true)

/**
 * ! 比较运算符
 * ?如果是对象，就通过 toPrimitive 转换对象 同上
 * ?如果是字符串，就通过 unicode 字符索引来比较
 */

/**
  * let a = {
  toString() {
    return '10'
  },
  valueOf() {
    return '21'
  }
}

let b = {
  toString() {
    return '20'
  },
  [Symbol.toPrimitive]() {
    return '22'
  }
}

console.log(a > b)
  */


// ! this 问题
/*
var A = function () {}
A.prototype.n = 1
var b = new A()
A.prototype = {
  n: 2,
  m: 3
}
var c = new A()

console.log(b.n, b.m)
console.log(c.n, c.m)
*/
var F = function () {}

F.prototype.a = function () {
  console.log('b')
}

var a = new F()

F.prototype.a = function () {
  console.log('a')
}

a.a()