<template>
  <el-card>
    <gc-table
      @selection-change="selectRow"
      :cols="cols"
      :data="data"
      :page="page"
    ></gc-table>
    <gc-table
      @selection-change="selectRow"
      :cols="cols"
      :data="data"
      :page="page"
    ></gc-table>
  </el-card>
</template>
<script>
import GcTable from "./components/index";
export default {
  components: { GcTable },
  data() {
    return {
      page: {
        currentPage: 1,
        size: 10,
        total: 100
      },
      cols: [
        { type: "index", prop: "a", label: "序号" },
        { type: "selection", prop: "cc", label: "全选" },
        { label: "姓名", prop: "name" },
        { label: "年龄", prop: "age" },
        { label: "学校", prop: "school" },
        { label: "地址", prop: "address" },
        { label: "成绩", prop: "chengji" },
        { label: "学科", prop: "object" },
        { label: "爱好", prop: "lov" },
        { label: "工作", prop: "work" },
        { label: "薪资", prop: "pay" },
        { label: "存款", prop: "money" },
        { label: "状态", prop: "status" }
      ],
      data: [
        {
          name: "gc",
          age: 18,
          school: "合肥许上海分院北京终极",
          address: "上海市",
          chengji: "1000",
          object: "CAD，ug，机械",
          lov: "打游戏，看电影，打篮球，踢足球"
        },
        {
          name: "cm",
          age: 16,
          school: "合肥许上海分院北京终极",
          address: "上海市普陀区锦绣大道2999",
          chengji: "1000",
          object: "CAD，ug，机械",
          lov: "打游戏，看电影，打篮球，踢足球"
        }
      ]
    };
  },
  methods: {
    selectRow: function(rows) {
      console.log(rows);
    }
  }
};
</script>
