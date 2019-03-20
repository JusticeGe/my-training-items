Promise.resolve(1).then(val => {
    return val
}).then(val => {
    console.log(val + 1)
})