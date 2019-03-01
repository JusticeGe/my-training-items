<template>
  <div class="hello">
  <router-link :to="{path: 'four'}" tag="button">第四节课</router-link>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Number: 10,
      show: false,
      showB: false
    }
  },
  computed: {
    numArr () {
      let arr = []
      for (let i = 0; i < this.Number; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
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
