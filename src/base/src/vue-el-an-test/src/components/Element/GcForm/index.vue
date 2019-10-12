<template>
  <el-card>
    <gc-form
      num="3"
      :items="items"
      :form="form"
      label-position="left"
      label-width="100px"
    >
      <template #test>
        <el-form-item label="try:">
          <el-input v-model="form.test"></el-input>
        </el-form-item>
      </template>
    </gc-form>
  </el-card>
</template>
<script>
import GcForm from "./Components/index";
export default {
  components: { GcForm },
  data() {
    return {
      items: [
        { label: "姓名:", prop: "name", el: "input" },
        { label: "年龄:", prop: "age", el: "input" },
        { label: "性别:", prop: "sex", el: "input" },
        { label: "已婚", prop: "marital", el: "checkbox" },
        {
          label: "生日:",
          prop: "birth",
          el: "datePicker"
        },
        {
          label: "科目类型:",
          prop: "choose",
          el: "select",
          map: [
            { label: "文科", value: "arts" },
            { label: "理科", value: "math" }
          ]
        },
        { el: "slot", name: "test" }
      ],
      form: {
        name: "葛晨",
        age: 19,
        sex: "boy",
        marital: false,
        choose: ""
      }
    };
  }
};
</script>
