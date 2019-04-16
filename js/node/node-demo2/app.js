const http = require('http')
const querystring = require('querystring')

const serve = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json')

    const url = req.url
    const method = req.method
    const resData = {
        url,
        method
    }

    if (method === 'GET') {
        const reqData = querystring.parse(url.split('?')[1])
        resData.reqData = reqData
        res.end(JSON.stringify(resData))
    }
    if (method === 'POST') {
        const postData = ''
        req.on('data', chunk => {
            console.log(chunk)
            postData += chunk.toString()
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }

})

serve.listen(8000)
console.log('serve is running in 8000')