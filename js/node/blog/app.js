const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: '葛晨',
    }

    res.end(JSON.stringify(resData))
}

module.exports = serverHandle