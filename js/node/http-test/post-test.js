const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.method === 'POST') {
        console.log('req.method: ', req.method['content-type']);
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()

        })
        req.on('end', () => {
            console.log('postData: ', postData);
            res.end('Hello World!')
        })
    }
})

server.listen(8000, () => {
    console.log("server is running on 8000")
})