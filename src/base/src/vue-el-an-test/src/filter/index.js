/**
 * 表格数据过滤器
 * @param {Object} row 行数据
 * @param {Object} argObj 属性 包括prop/substr
 * @param {Array}} funcArr 过滤器方法集合
 */

export function parseTableData(row, prop, funcArr) {
  let value = parseData(row, prop);
  if (value === undefined) {
    value = "--";
  } else {
    if (funcArr) {
      funcArr.forEach(it => {
        value = it(value, prop);
      });
    }
  }
  return value;
}

/**
 * table数据获取工具
 * @param {Object} row 数据原型
 * @param {String} obj 属性值以.分割
 */
function parseData(row, obj) {
  let prop = obj.prop || obj;
  let arr = prop.split(".");
  arr.forEach(item => {
    if (row) {
      row = row[item];
    }
  });
  return row;
}

/**
 * 值转换方法
 * @param {*} val 需要被转换的值
 * @param {*} argObj 参数值转换的map
 */
export function mapObj(val, argObj) {
  let valArr = val.split(",");
  let map = argObj.map;
  let retMap = map.filter(item => {
    valArr.indexOf(item.key) > -1;
  });
  let returnVal = "";
  retMap.forEach(item => {
    returnVal += item.key;
  });
  return returnVal;
}
