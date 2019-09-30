<template>
  <div v-show="show">
    这是一个test
    <button @click="closeModel">关闭</button>
  </div>
</template>
<script>
export default {
  props: ['show'],
  methods: {
    closeModel() {
      this.$emit("update:show", false)
    }
  }
}
</script>