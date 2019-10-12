<template>
  <el-card>
    <el-row>
      <el-select size="mini"> </el-select>
      <gc-form :span="5" :items="items" :form="form"></gc-form>
      <!-- <demo v-if='count > 10'></demo> -->
      <el-button size="mini" type="primary"> +() </el-button>
    </el-row>
  </el-card>
</template>
<script>
import GcForm from "../../GcForm/Components/index";
export default {
  components: { GcForm },
  name: "Demo",
  data() {
    return {
      items: [
        { el: "input", prop: "name" },
        { el: "input", prop: "age" },
        { el: "input", prop: "sex" }
      ],
      form: {
        name: "gc",
        age: 18,
        sex: "男"
      },
      test: ["", "", ""],
      count: 0
    };
  }
};
</script>
