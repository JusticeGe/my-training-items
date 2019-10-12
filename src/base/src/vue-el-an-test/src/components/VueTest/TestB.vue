<template>
  <div>
    <child-b :show.sync="show"></child-b>
    <button @click="show = true">打开model</button>
  </div>
</template>
<script>
import ChildB from "./ChildB";
export default {
  components: {
    ChildB
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
