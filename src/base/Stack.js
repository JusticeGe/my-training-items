class Stack {

    constructor() {
        this.items = []
    }

    // 添加一个元素到栈顶
    push (element) {
        if (this.isEmpty()) {
            this.items[0] = element
        } else {
           let i = this.size()
           for (; i > 0 ; i--) {
               this.items[i] = this.items[i - 1]
           }
           this.items[0] = element
        }
    }

    // 移除栈顶的元素
    pop () {
        if(this.isEmpty()){
            return
        }
        let l = this.size() - 1
        for (let i = 0 ; i < l ; i++) {
            this.items[i] = this.items[i + 1]
        }
        this.items[l] = null
    }

    // 返回栈顶的元素
    peek () {
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }

    isEmpty () {
        return !Boolean(this.size())
    }

    //  清除所有的元素
    clear () {
         let l = this.size()
        for (let i = 0 ; i < l ; i++){
            this.items[i] = null
        }
    }

    size () {
        return this.items.length
    }
}