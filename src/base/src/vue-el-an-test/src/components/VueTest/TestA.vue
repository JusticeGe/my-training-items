<template>
  <div class="hello">
    <button @click="show = true">打开model</button>
    <child-a v-model="show"></child-a>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
export default {
  name: "hello",
  components: {
    ChildA
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
