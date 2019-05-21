const getList = (author, keyword) => {
  return [
    { id: 1, title: 'b', content: 'b', createTime: '2019-12-1' },
    { id: 2, title: 'a', content: 'b', createTime: '2019-12-1' },
    { id: 3, title: 'c', content: 'b', createTime: '2019-12-1' },
    { id: 4, title: 'd', content: 'b', createTime: '2019-12-1' },
    { id: 5, title: 'e', content: 'b', createTime: '2019-12-1' }
  ]
}

module.exports = {
  getList,
}