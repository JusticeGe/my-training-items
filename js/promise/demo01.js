function myPromiseTest(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (a / b > 0) {
        resolve(a / b)
      } else {
        reject(a / b)
      }
    }, 0)
  })
}

myPromiseTest(-1, 1).catch(error => {
  return new Promise(function (resolve, reject) {
    resolve(error)
  })
}).then(val => {
  console.log(val)
}, error => {
  console.log(error, 'then onRejected')
})