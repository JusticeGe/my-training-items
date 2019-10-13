<template>
  <el-card style="overflow: auto">
    <demo-01 :func="func"></demo-01>
  </el-card>
</template>
<script>
import Demo01 from "./components/index";
export default {
  components: { Demo01 },
  data() {
    return {
      func: {
        items: [],
        children: []
      }
    };
  }
};
</script>
