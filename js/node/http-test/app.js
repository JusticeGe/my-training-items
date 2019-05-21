const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 设置返回格式为json
    res.setHeader('content-type', 'application/json')

    const resData = {
        method,
        url,
        path,
        query
    }

    if (method === 'GET') {
        res.end(JSON.stringify(resData))
    }

    if (method === 'POST') {
        let postData = ''
        res.on('data', chunk => {
            // console.log(chunk)
            postData += chunk.toString()
        })
        res.on('end', () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
})

server.listen(8080, () => console.log('server is running on 8080'))