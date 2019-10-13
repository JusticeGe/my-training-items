<template>
  <div>
    <el-row>
      <el-input></el-input>
    </el-row>
  </div>
</template>
<script>
// import GcForm from "../../GcForm/Components/index";
export default {
  // components: { GcForm },
  name: "Demo",
  props: {
    func: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newFunc: {}
    };
  },
  created() {
    this.newFunc = JSON.parse(JSON.stringify(this.func));
  },
  methods: {
    add() {
      this.func.children.push(this.newFunc);
      console.log(this.func, this.newFunc);
    }
  }
};
</script>
