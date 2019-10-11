<template>
  <el-card style="text-align: center">
    <el-row style="margin-bottom: 10px">
      <el-col :span="operate" style="text-align: left">
        <slot><span>&nbsp;</span></slot>
      </el-col>
      <el-col :span="columnOp" style="text-align: right">
        <el-select
          style="margin-right: 20px"
          size="mini"
          v-model="value"
          multiple
          filterable
          placeholder="请选择隐藏列"
        >
          <el-option
            v-for="item in cols"
            :key="item.prop"
            :label="item.label"
            :value="item.prop"
          >
          </el-option>
        </el-select>
        <el-select
          size="mini"
          v-model="fixed"
          placeholder="固定表头"
          style="margin-right: 20px"
        >
          <el-option
            v-for="item in tableCol"
            :key="item.prop"
            :label="item.label"
            :value="item.prop"
          ></el-option>
        </el-select>
        <el-button
          size="mini"
          @click="
            fixed = '';
            value = [];
          "
          >重置</el-button
        >
      </el-col>
    </el-row>
    <el-table size="mini" :data="data" :fit="true" border stripe>
      <template v-for="col in tableCol">
        <el-table-column
          v-if="col.type"
          :label="col.label"
          :key="col.label"
          :width="col.width || '50'"
          :type="col.type"
          :fixed="col.fixed"
        ></el-table-column>
        <el-table-column
          v-else-if="col.slot"
          :label="col.label"
          :key="col.label"
          :fixed="col.fixed"
        >
          <template slot-scope="scope">
            <slot :name="col.slot" :row="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :label="col.label"
          :key="col.label"
          sortable
          :fixed="col.fixed"
          :prop="col.prop"
          :width="col.width || ''"
        >
          <template slot-scope="scope">
            <el-tooltip
              :content="scope.row | parseTableData(col.prop, ['toStr'])"
              placement="top"
              effect="light"
            >
              <span>{{
                scope.row | parseTableData(col.prop, col.funcArr)
              }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="sizes"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "GcTable",
  props: ["page", "size", "total"],
  data() {
    return {
      operate: 12,
      columnOp: 12,
      cols: [
        { type: "index", prop: "a", label: "序号" },
        { type: "selection", prop: "cc", label: "全选" },
        { label: "姓名", prop: "name" },
        // { slot: "try", label: "try", prop: "xx", fixed: "right" },
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
      fixed: "",
      tableCol: [],
      sizes: [10, 20, 30, 40, 50]
    };
  },
  watch: {
    value: function(val, oldVal) {
      if (val.length === this.cols.length) {
        this.$message.warning("至少展示一列");
        this.value = oldVal;
      }
      if (val.indexOf(this.fixed) > -1) {
        this.fixed = "";
      }
      this.tableCol = this.cols.filter(
        item => this.value.indexOf(item.prop) === -1
      );
    },
    fixed: function(val) {
      this.tableCol.map(item => {
        if (item.prop === val) {
          item = Object.assign(item, { fixed: true });
        } else {
          item.fixed = false;
        }
      });
    }
  },
  methods: {
    columnDrop() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          let fixedIndex = -1;
          this.tableCol.forEach((item, index) => {
            if (this.fixed === item.prop) {
              fixedIndex = index;
            }
          });
          const newIndex =
            evt.newIndex <= fixedIndex ? evt.newIndex - 1 : evt.newIndex;
          const oldIndex =
            evt.oldIndex <= fixedIndex ? evt.oldIndex - 1 : evt.oldIndex;
          const oldItem = this.tableCol[oldIndex];
          if (this.tableCol[newIndex].fixed || this.tableCol[oldIndex].fixed) {
            return;
          }
          this.tableCol.splice(oldIndex, 1);
          setTimeout(() => {
            this.tableCol.splice(newIndex, 0, oldItem);
          });
        }
      });
    },
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleSizeChange", val);
    }
  },
  mounted() {
    this.columnDrop();
  },
  created() {
    this.tableCol = [...this.cols];
  }
};
</script>
