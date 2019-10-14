<template>
  <el-card>
    <el-row>
      <el-input size="mini"> </el-input>
      <!-- <gc-form :span="5" :items="func.items" :form="form"></gc-form> -->
      <template v-for="(item, index) in func.children">
        <demo :func="item" :copy="copy" :key="index"></demo>
      </template>
      <el-button size="mini" type="primary" @click="add"> +() </el-button>
    </el-row>
  </el-card>
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
    },
    copy: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    add() {
      this.func.children.push(JSON.parse(JSON.stringify(this.copy)));
    }
  }
};
</script>
