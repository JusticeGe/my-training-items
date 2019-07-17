let downloadEl = document.querySelector('#download')

let download = function() {
  let imgData = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw=='
  downloadFile('测试.gif',imgData)
}

let downloadFile = function(fileName, content){
  let aLink = document.createElement('a')
  let blob = base64ToBlob(content)
  let evt = document.createEvent('HTMLEvents')
  evt.initEvent('click', true, true)
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
}

let base64ToBlob = function(code){
  // 切割base64
  let parts = code.split(';base64,')
  // 文件类型
  let contentType = parts[0].split(':')[1]
  // atob() 方法用于解码使用 base-64 编码的字符串。
  let raw = window.atob(parts[1]);
  let rawLength = raw.length
  // 一个8位无符号整型数组，创建时内容被初始化为0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素
  let uInt8Array = new Uint8Array(rawLength)
  for(let i = 0; i < rawLength; i++){
    uInt8Array[i] = raw.charCodeAt(i)
    // console.log( raw.charCodeAt(i))
  }
  // console.log(uInt8Array)
  return new Blob([uInt8Array], {type: contentType})
}

downloadEl.addEventListener('click', download)