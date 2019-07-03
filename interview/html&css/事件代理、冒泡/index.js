const ul = document.querySelector('#ul')
ul.addEventListener('click', (event) => {
  console.log(event)
  // console.log(ul.children)
}, false)
const lis = ul.children
Array.prototype.slice.call(lis).map(li => {
  li.addEventListener('click', (event) => {
    event.stopImmediatePropagation()
    console.log('冒泡')
  }, false),
  li.addEventListener('click', (event) => {
    
    console.log('捕获')
  }, true)
  li.addEventListener('click', (event) => {
    console.log('又出现')
  }, true)
})