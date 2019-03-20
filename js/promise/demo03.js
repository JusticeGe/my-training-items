let aPromise = Promise.resolve(2)
let bPromise = Promise.resolve(1)

// function main() {
//     return Promise.all([aPromise, bPromise])
// }

// main().then(res => console.log(res))

function main() {
    let valAdd = function (results, value) {
        results.push(value)
        return results
    }
    let pushVal = valAdd.bind(null, [])
    return aPromise.then(pushVal).then(bPromise).then(pushVal)
}

main().then(res => {
    res.forEach(item => {})
})