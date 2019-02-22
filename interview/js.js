// console.log(['1', '2', '3'].map(parseInt))
// [ 1, NaN, NaN ]

['1', '2', '3'].map(item => {
  console.log(item)
  console.log(parseInt(item))
})