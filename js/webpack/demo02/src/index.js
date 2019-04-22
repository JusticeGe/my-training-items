const c = require('./test.jpg')
const a = 1
const b = 2

console.log(c)
const img = new Image()

img.src = c

img.classList.add('hello')

const l = document.getElementById('root')

l.append(img)