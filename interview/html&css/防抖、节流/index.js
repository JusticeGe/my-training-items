let debounceEl = document.querySelector('#debounce')
let throttleEl = document.querySelector('#throttle')


function debounce(fn){
  let timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, 1000)
  }
}

function sayHi() {
  console.log('防抖!')
}

function throttle(fn){
  let canRun = true
  return function() {
    if(!canRun){
      return
    }
    canRun = false 
    setTimeout( () => {
      fn.apply(this, arguments)
      canRun = true
    }, 500000)
  }
}

function getRes() {
  console.log('节流')
}

debounceEl.addEventListener('click', debounce(sayHi))
throttleEl.addEventListener('click', throttle(getRes))