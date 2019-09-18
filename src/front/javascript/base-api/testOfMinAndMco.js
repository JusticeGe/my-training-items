setTimeout(() => {
  console.log('setTimeOut')
})

new Promise((resolve,reject) => {
  for(var i = 0 ; i < 5 ; i++){
    console.log(i)
  }
  resolve()
}).then(() => {
  console.log('promise')
})