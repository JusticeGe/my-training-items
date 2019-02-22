// let p = new Promise(function (resolve, reject) {
//   console.log('start')
//   resolve('data1')
// })

// p.then(
//   (v) => {
//     console.log('success' + v)
//   },
//   (v) => {
//     console.log('error' + v)
//   })
// console.log('end')

function myPromise(executor) {
  let self = this
  self.status = 'pending'
  self.value = null
  self.error = null

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'onFulfilled'
      console.log('resolve')
    }
  }

  function reject(error) {
    if (self.status === 'pending') {
      self.error = error
      self.status = 'onRejected'
      console.log('reject')
    }
  }
  executor(resolve, reject)
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  if (self.status === 'onFulfilled')
    onFulfilled(self.value)
  if (self.status === 'onRejected')
    onRejected(self.error)
}

let p = new myPromise(function (resolve, reject) {
  console.log('start')
  resolve('data1')
})

p.then(
  (v) => {
    console.log('success' + v)
  },
  (v) => {
    console.log('error' + v)
  })
console.log('end')