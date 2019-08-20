const _items = Symbol('stackItems')

class Stack {
  constructor () {
    this[_items] = []
  }

  size() {
    return this[_items].length
  }

  isEmpty() {
    return this[_items] === 0
  }

  push(el) {
    let l = this.size()
    for(; l > 0; l--) {
      this[_items][l] = this[_items][l - 1] 
    }
    this[_items][0] = el
  }

  pop() {
  }

  peek() {

  }

  clear() {

  }
}