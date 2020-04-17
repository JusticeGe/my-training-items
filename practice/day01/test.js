function cb(val) {
    console.log('开始渲染页面', val)
}

class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

class Watcher {
    constructor() {
        Dep.target = this
    }

    update() {
        console.log('更新视图啦')
    }
}

Dep.target = null


function defineReactive(obj, key, val) {

    const dep = new Dep()

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(Dep.target)
            dep.addSub(Dep.target)
            return val
        },
        set(newVal) {
            if(newVal === val) return
            console.log(dep)
            dep.notify()
        }
    })
}

function observer (value) {
    if(!value && typeof value !== 'object'){
        return
    }
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key])
    })
}

class Vue {
    constructor(options) {
        this._data = options.data
        observer(this._data)
        new Watcher()
        console.log('render', this._data.test)
    }
}

let o = new Vue({
    data: {
        test: 'this is my house'
    }
})


o._data.test = '123123'