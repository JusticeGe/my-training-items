const fs = require('fs')

const readStream = fs.createReadStream('./file.txt')
// const writeStream = fs.createWriteStream('./file1.txt')

// readStream.pipe(writeStream)
readStream.on('data',function(chunk) {
    console.log(chunk.toString())
})