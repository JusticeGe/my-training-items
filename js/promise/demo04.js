function timePromiseTest(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay)
        }, delay)
    })
}

var startTime = Date.now()

Promise.race([timePromiseTest(1), timePromiseTest(12), timePromiseTest(24)]).then(res => {
    console.log(Date.now() - startTime, res)
})