const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    let path = req.path
    let param = req.query

    if (method === 'GET' && path === '/api/blog/list') {
        let author = param.author
        let keyword = param.keyword
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    if (method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '这是获取博客详情的接口'
        }
    }

    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '这是新增博客的接口'
        }
    }

    if (method === 'POST' && path === '/api/blog/del') {
        return {
            msg: '这是删除博客列表的接口'
        }
    }
}

module.exports = handleBlogRouter