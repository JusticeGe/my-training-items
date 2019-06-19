// // !模块化

// !Proxy
// // let p = new Proxy(target, handler)

// let onWatch = (obj, setBind, getLogger) => {
//   let handler = {
//     get(target, property, receiver) {
//       getLogger(target, property)
//       return Reflect.get(target, property, receiver)
//     },
//     set(target, property, value, receiver) {
//       setBind(value, property)
//       return Reflect.set(target, property, value)
//     }
//   }
//   return new Proxy(obj, handler)
// }
// // !可以监听一级数组，无法监听到二级数组
// let obj = [[1, 2], 2, 3]

// let p = onWatch(obj,
//   (v, property) => { console.log(`监听到属性${property}修改成${v}`) },
//   (target, property) => { console.log(`'${property}' = ${target[property]}`) }
// )

// p[0][0] = 3
// p[0]
// // console.log(p)

const arr = [1, 2, 3]
// const mapArray = arr.map(value => value * 2)
// const reduceArray = arr.reduce((acc, current) => {
//   console.log(acc)
//   acc.push(current * 2)
//   return acc
// }, [])
// console.log(arr.reduce((acc, cur) =>if() acc + cur, 10))
// arr.reduce((...args) => console.log(args))

// !不设置初始值从1开始。设置了从0开始
// let x = arr.reduce((acc, cur, idx, array) => {
//   if (idx > 1) {
//     return acc + cur
//   } else {
//     return acc + 0
//   }
// }
// )

// console.log(x)

// arr.reduce((a, b, c) => console.log(c))