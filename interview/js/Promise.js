// !promise还需要花时间去整理
function MyPromise(executor) { 
  let self = this
  self.status = 'pending'
  function resolve(value){
    self.status = 'resolved'
  }
  function reject(value){
    self.status = 'rejected'
  }
  executor(resolve, reject)
}

MyPromise.prototype.then = function(onFulfilled, onRejected){
  let self = this
  if(self.status === 'resolved'){
    onFulfilled()
  }
  if(self.status === 'rejected'){
    onRejected()
  }
}

function Promise(executor){
  let self = this
  self.status = 'pending'
}