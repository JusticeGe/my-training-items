<template>
  <el-card>
    <demo-01 :func="func" :copy="copy"></demo-01>
  </el-card>
</template>
<script>
import Demo01 from "./components/index";
export default {
  components: { Demo01 },
  data() {
    return {
      func: {
        items: ["", "", ""],
        children: []
      },
      copy: {
        items: ["", "", ""],
        children: []
      }
    };
  }
};
</script>
