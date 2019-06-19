//! 并发 并行

function *test(x) {
    let y = 2 * (yield (x+1))
    let z = yield(y/3)
    return (x+y+z)
}

let jt = test(5)

// console.log(jt.next(), jt.next(), jt.next())

console.log(jt.next(), jt.next(5), jt.next(12))