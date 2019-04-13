<template>
  <div v-show="value">
    <div>
      <p>这是一个dialog</p>
      <button @click="close">关闭model</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourDemoA',
  props: ['value'],
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>

</style>
