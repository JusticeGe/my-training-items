// * 测试二进制转映射
function payAuthorityFormat(string) {
    let payArr = ['拼车', '班车', '租车']
    let arr = (string + '').split('')
    let res = []
    arr.forEach((item, index) => {
        if (+item)
            res.push(payArr[index])
    });
    return res.join(',')
}
console.log(payAuthorityFormat('101'))

function reFormatPayPriveleges(payPriveleges) {
    let arr = payPriveleges.split("");
    let nArr = []
    arr.forEach((item, index) => {
        if (Number(item)) nArr.push(index);
    })
    return nArr;
}

console.log(reFormatPayPriveleges('101'))