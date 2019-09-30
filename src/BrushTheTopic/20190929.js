/**
 *给定一副牌，每张牌上都写着一个整数。
  此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
  每组都有 X 张牌。
  组内所有的牌上都写着相同的整数。
  仅当你可选的 X >= 2 时返回 true。
 * @param {*} arr
 */
/**
 *  遍历数组，寻找出相似的值，并添加到原数组中
 *
 * @param {*} arr
 */
function hasGroupsSizeX(arr) {
  // 去重
  let indexArr = arr.filter((item, index, iArr) => iArr.indexOf(item) === index);
  let doubleArr = []
  indexArr.forEach((item, index) => {
    doubleArr[index] = []
  })
  arr.forEach((element) => {
    doubleArr[indexArr.indexOf(element)].push(element)
  });
  let a = doubleArr[0].length;
  doubleArr.forEach(it => {
    if(it.length < a){
      a = it.length
    }
  })
  if ( a >= 2) {
    return true
  }
  return false 
}

let arr = [1,2,3,1,2,3,1,2,3,123,123,123]

console.log(hasGroupsSizeX(arr))