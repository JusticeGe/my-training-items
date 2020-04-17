const minify = require('minify')
const fs = require('fs')
const join = require('path').join

// 读取文件夹下所有的js/css脚本
// 封装一个minify函数
// 输出到文件

/**
 * 读取所有文件夹下所有文件
 * @param jsonPath
 * @returns {[]}
 */
function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) {
                jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    // console.log(jsonFiles);
    return jsonFiles
}

const fileList =  getJsonFiles("js")

// 问了压缩文件封装的promise
const minifyJs = (fileName) => minify(fileName)

Promise.all(fileList.map(minifyJs)).then(res => {
    res.map((el, index) => {
        // const fileName = `${fileList[index].split('\\')[1].split('.')[0]}-minify.js`
        const file = fileList[index].split('\\')[1].split('.')
        const fileName = `${file[0]}mini.${file[1]}`
        fs.writeFile(fileName, el, 'UTF-8', function(err) {
            if(err) {
                console.log(`${err}in${fileName}`)
            } else {
                console.log(`${fileName}success`)
            }
        })
    })
})