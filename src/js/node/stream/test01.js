const http = require('http')
const fs = require('fs')
const path = require('path')

const serve = http.createServer(function (req, res) {
    let method = req.method
    if (method === 'GET') {
        let fileName = path.resolve(__dirname, 'file.txt')
        fs.readFile(fileName, function (err, data) {
            res.end(data)
        })
    }
})

serve.listen(8000)