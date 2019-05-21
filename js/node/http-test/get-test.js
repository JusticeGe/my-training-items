const http = require('http')
const querystring = require('querystring')

// !/favion.ico 浏览器发送的页面标签的标识
const server = http.createServer((req, res) => {
    console.log('req: ', req.method)
    const url = req.url
    console.log('url: ', url);
    req.query = querystring.parse(url.split('?')[1])
    console.log(' req.query: ', req.query);
    res.end(JSON.stringify(req.query))
})

server.listen(8000, () => {
    console.log("server is running on 8000")
})