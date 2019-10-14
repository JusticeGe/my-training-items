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
    <el-table
      size="mini"
      :data="data"
      @selection-change="selectionChange"
      @select-all="selectAll"
      @row-click="rowClick"
      :fit="true"
      :highlight-current-row="true"
      border
    >
      <template v-for="col in tableCol">
        <el-table-column
          v-if="col.type"
          :label="col.label"
          :key="col.label"
          :width="col.width || '50'"
          :type="col.type"
          :fixed="col.fixed"
        >
          <template slot="header">
            <el-button>hello</el-button>
          </template>
        </el-table-column>
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
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <span>{{ scope.row | parseTableData(col.prop, col.funcArr) }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.currentPage"
      :page-sizes="sizes"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "GcTable",
  props: {
    cols: {
      type: Array,
      default: () => [],
      required: true
    },
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    page: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      operate: 12,
      columnOp: 12,
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
      const tables = document.querySelectorAll(".el-table__header-wrapper");
      tables.forEach(item => {
        const wrapperTr = item.querySelector("tr");
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
            if (
              this.tableCol[newIndex].fixed ||
              this.tableCol[oldIndex].fixed
            ) {
              return;
            }
            this.tableCol.splice(oldIndex, 1);
            setTimeout(() => {
              this.tableCol.splice(newIndex, 0, oldItem);
            });
          }
        });
      });
    },
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleSizeChange", val);
    },
    selectionChange(rows) {
      this.$emit("selection-change", rows);
    },
    selectAll(rows) {
      rows.splice(0, rows.length);
    },
    rowClick(...args) {
      console.log(args);
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
