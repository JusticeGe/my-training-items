const c = require('./test.jpg')
import imgC from './index.scss'

const img = new Image()
img.src = c
img.classList.add('img')

const root = document.getElementById('root')

root.append(img)