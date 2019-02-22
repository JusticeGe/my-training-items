const fs = require('fs')
// fs.unlink('/target.txt', (...args) => console.log(args))
// console.log('end')
let path = '/Users/fullstackdeveloper/Documents/myspace/js/node'
// fs.readdir(path, (err, data) => {
//   console.log(err, data)
// })

// watch(filename, callback(type, filename))
fs.watch('/Users/fullstackdeveloper/Documents/myspace/js/node/target.txt', (...args) => console.log(args))