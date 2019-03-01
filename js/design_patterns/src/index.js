class Person {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}

let p = new Person('葛晨')

alert(p.getName())
