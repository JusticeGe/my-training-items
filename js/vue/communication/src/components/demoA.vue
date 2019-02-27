<template>
  <div v-show="value">
    <div>
      <p>这是个模态框</p>
      <input type="text"
             v-model="value">
      {{value}}
      <button @click="close">关闭</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['value'],
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
