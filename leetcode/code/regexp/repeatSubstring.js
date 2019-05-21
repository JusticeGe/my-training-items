export default repeatSubstring = function (str) {
  let reg = /^(\w+)\1+$/
  return str.test(reg)
}
