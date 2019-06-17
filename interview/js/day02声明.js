// function test2() {
//   console.log('2')
//   test1()
// }

// function test1() {
//   console.log('1111')
//   // test2()
// }

// // test2() // 2 1111 函数的作用域提升会在变量声明之前

// function test3() {
//   console.log(3)
//   test4()
// }

// var test4 = function () {
//   console.log(4)
// }

// test3()

// class Person { }

// console.log(Person instanceof Function)
// !原型链继承
// function Person(value) {
//   this.val = value
// }

// Person.prototype.getValue = function () {
//   console.log(this)
//   console.log(this.val)
// }

// function Child(value) {
//   // console.log(value)
//   Person.call(this, value)
// }
// Child.prototype = new Person()

// let child = new Child(1)

// // console.log(child.getValue())

// ! class继承
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}

class Child extends Parent {
  constructor(value) {
    super(value)
  }
}

let child = new Child(1)
child.getValue()
console.log(child instanceof Parent)

