<template>
  <div class="hello">
    <demo @wash_Goods=demo></demo>
    <infinite-scroll :on-infinite=loadData
                     ref="infinite">
      <ul slot='list'>
        <li v-for='(n,index) in numArr'
            :key="index">{{n}}</li>
      </ul>
    </infinite-scroll>
    <button @click="show=true">打开model</button>
    <demo-a v-model="show"></demo-a>
  </div>
</template>

<script>
import Demo from './demo'
import InfiniteScroll from './infinite-scroll'
import DemoA from './demoA'
export default {
  name: 'HelloWorld',
  components: {
    Demo,
    InfiniteScroll,
    DemoA
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Number: 10,
      show: false
    }
  },
  computed: {
    numArr () {
      let arr = []
      for (let i = 0; i < this.Number; i++) { arr.push(i) }
      return arr
    }
  },
  methods: {
    demo () {
      console.log('demo')
    },
    onInfinite () {
      console.log('onInfinite')
    },
    loadData () {
      setTimeout(() => {
        this.Number = 20
        this.$refs.infinite.$emit('loadDone')
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
