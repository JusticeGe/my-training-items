const http = require('http')

const port = 8000
const severHandle = require('../app')

const server = http.createServer(severHandle)
server.listen(port)