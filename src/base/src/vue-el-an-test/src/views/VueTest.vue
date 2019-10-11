<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane name="v-model" label="v-model">
        <test-a></test-a>
      </el-tab-pane>
      <el-tab-pane name=".sync" label=".sync">
        <test-b></test-b>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TestA from "@/components/VueTest/TestA";
import TestB from "@/components/VueTest/TestB";
export default {
  components: {
    TestA,
    TestB
  },
  data() {
    return {
      activeName: "v-model"
    };
  }
};
</script>
