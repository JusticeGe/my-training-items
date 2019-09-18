/**
 * @description call可以手动的将函数绑定到指定的对象上去
 */

function Person(name, age) {
  this.name = name
  this.age = age
}

function Student(name, age, school) {
  // Person.call(this,name,age)
  // Person.apply(this, [name, age])
  this.bind({name, age})
  this.school = school
}

let s = new Student('葛晨', 18, '清北复交')

console.log(s)
