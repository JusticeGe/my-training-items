function type(delayedTime){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log(delayedTime)
            resolve()
        }, delayedTime)
    })
}

async function asyncFunc() {
    await type(3000)
    await type(2500)
    console.log(1)
}

asyncFunc().then(function() {
    return type(2000)
}).then(function () {
    return type(1500)
})
// function* asyncFunc() {
//     yield type(3000)
//     yield type(2500)
//     console.log(1)
// }
// let it = asyncFunc()

// it.next()
