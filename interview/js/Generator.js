// function *hello() {
//     yield 100;
//     yield (function () {
//         return 200
//     })();
//     return 300
// }
//
// let h = hello();
//
// // console.log(h.next(),h.next(),h.next(),h.next())
// console.log(h.next(1000),h.next(20000),h.next(13213123),h.next());

// * 了解Symbol
// console.log(Array.prototype.slice);
// console.log(Array.prototype[Symbol.iterator]);
//
// let obj = {}
// obj.a = 100
// obj[Symbol.iterator] = 200
// console.log(obj)
// console.log([1,2,3][Symbol.iterator])

// const  arr = [100,200,300]
// const it = arr[Symbol.iterator]()
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it)
// let i
// for(i of it){
//     console.log(i)
// }

// function *G() {
//     yield 100
// }
//
// const  g= G()
// console.log(g.next())

function *G() {
  const a = yield 100
  console.log('a', a)
  const b = yield 200
  console.log('b',b)
  const c = yield 300
  console.log('c', c)
}

const g = G()

// console.log(g.next(), g.next('111'), g.next('222'), g.next('333'))

// * for...of
function *fibonacci() {
    let [prev, curr] = [0,1]
    for(;;){
        [prev,curr] = [curr, prev+curr]
        yield curr
    }
}
//
// for (let n of fibonacci()){
//     if(n>1000){
//         break
//     }
//     console.log(n)
// }

function *G1() {
    yield 'a'
    yield 'b'
}

function *G2() {
    yield 'x'
    yield *G1()
    yield 'y'
}
let g2 = G2()
// !嵌套也是一步一步执行
console.log(g2.next(), g2.next(), g2.next(), g2.next())