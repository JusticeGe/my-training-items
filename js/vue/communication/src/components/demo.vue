<template>
  <div>
    <p @click="emit">{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '点击女人派发事件'
    }
  },
  created () {
    // this.$on('wash_Goods', (args) => {
    //   console.log(args)
    // })
  },
  methods: {
    emit () {
      this.$emit('wash_Goods', ['fish', true, { name: 'vue', version: '2.4.1' }])
    }
  }
}
</script>
