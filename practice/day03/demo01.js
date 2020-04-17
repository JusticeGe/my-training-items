const http = require('http')

http.createServer((req, res) => {
    // let body = []
    // req.on('data', chunk => {
    //     body.push(chunk)
    // })
    //
    // req.on('end', () => {
    //     body = Buffer.concat(body)
    //     const json = body.toString()
    //     res.end(typeof json)
    // })
    // console.log('hello node')
    res.writeHead(200, {'Content-Type': 'text/plain'})
    console.log(req.url)
    req.on('data', _ => {
        res.write(_)
    })

    req.on('end', () => {
       res.end()
    })

}).listen(800)