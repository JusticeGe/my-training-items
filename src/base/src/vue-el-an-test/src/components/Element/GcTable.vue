<template>
  <el-card>
    <el-select v-model="value" multiple filterable placeholder="请选择隐藏列">
      <el-option
        v-for="item in cols"
        :key="item.prop"
        :label="item.label"
        :value="item.prop"
      >
      </el-option>
    </el-select>
    <el-table size="mini" :data="data" :fit="true" border stripe>
      <el-table-column v-if="selection" type="selection"></el-table-column>
      <el-table-column v-if="index" fixed type="index"></el-table-column>
      <el-table-column
        v-for="col in tableCol"
        :width="col.width || 100"
        :label="col.label"
        :prop="col.prop"
        sortable
        :fixed="col.fixed || false"
        :key="col.prop"
      >
        <template slot-scope="scope">
          {{ scope.row | parseTableData(col.prop) }}
        </template>
      </el-table-column>
      <el-table-column align="right" min-width="200" fixed="right">
        <!-- 固定表头方法 -->
        <template slot-scope="scope">
          <slot :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "GcTable",
  data() {
    return {
      selection: true,
      index: true,
      cols: [
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
          address: "上海市普陀区锦绣大道2999hap",
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
      ],
      value: [],
      fixed: ""
    };
  },
  watch: {
    value: function(val, oldVal) {
      if (val.length === this.table.col.length) {
        this.$message.warning("至少展示一列");
        this.value = oldVal;
      }
      if (val.indexOf(this.fixed) > -1) {
        this.fixed = "";
      }
    },
    fixed: function(val) {
      if (val) {
        this.tableCol.map(item => {
          if (item.prop === val) {
            item = Object.assign(item, { fixed: true });
          } else {
            item.fixed = false;
          }
        });
      }
    }
  },
  computed: {
    tableCol: function() {
      return this.cols.filter(item => this.value.indexOf(item.prop) === -1);
    }
  }
};
</script>
