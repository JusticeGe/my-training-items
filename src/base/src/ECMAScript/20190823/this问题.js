/**
 * @description 搞清楚this的指向一直是最重要的问题
 * ! 创建一个新对象；
 * ! 构造函数的 prototype 被赋值给这个新对象的 __proto__；
 * ! 将新对象赋给当前的 this；
 * ! 执行构造函数；
 * ! 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象，如果返回的不是对象将被忽略；
 */

// function Foo(this: typeof Foo) {
//   console.log(this)
// }

// let bar = new Foo()
