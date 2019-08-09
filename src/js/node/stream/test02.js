const fs = require('fs')
const http = require('http')
const path = require('path')

const app = http.createServer(function(req,res) {
    let method = req.method
    if(method === 'GET'){
        let fileName = path.resolve(__dirname, 'file1.txt')
        fs.readFile(fileName, function(err,data){
            res.end(data)
        })
    }
})

app.listen(8000)