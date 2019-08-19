/**
 * 求数组的中心索引
 * 中心索引: 数组中心索引左侧的所有元素相加的和等于右侧所有元素相加的和
 * @param {number[]} numS
 * @return {number}
 */
const pivotIndex = function (numS) {
    if(!numS){
        return -1
    }
    if(!(numS instanceof Array)){
        return -1
    }
    if(numS.length < 3){
        return -1
    }
    return loop(numS)
}

const loop = function(numS) {
    let nL = numS.length
    let left = 0
    let right = 0
    let median =  -1
    for(let i = 1 ; i < nL - 1 ; i++ ){
        left = calLeft(numS, i - 1)
        right = calRight(numS, i + 1)
        if(left === right) {
            median = i
        }
    }
    return median
}

const calLeft = function (numS, index){
    let sum = 0
    for(; index > -1 ; index --) {
        sum += numS[index]
    }
    return sum
}

const calRight = function (numS, index) {
    let nL = numS.length
    let sum = 0
    for (; index <= nL -1 ; index ++) {
        sum += numS[index]
    }
    return sum
}

let arr = [1,1,1]

console.log(pivotIndex(arr))
