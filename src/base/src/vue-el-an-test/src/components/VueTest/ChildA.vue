<template>
  <div v-show="show">
    <div>
      <p>这是一个Model框</p>
      <input type="text" v-model="value" />
      {{ value }}
      <button @click="closeModel">关闭model</button>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "show",
    event: "close"
  },
  props: ["show"],
  data() {
    return {
      value: 10
    };
  },
  methods: {
    closeModel() {
      this.$emit("close", false);
    }
  }
};
</script>
