const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
    req.path = req.url.split('?')[0]
    res.query = querystring.parse(req.url.split('?')[1])

    res.setHeader('Content-type', 'application/json')

    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(JSON.stringify(blogData))
        return
    }

    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(JSON.stringify(userData))
        return
    }

    // 未命中路由返回404

    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write("404 Not Found\n")
    res.end()

}

module.exports = serverHandle