<template>
  <div class="element">
    <el-tabs v-model="activeName">
      <el-tab-pane label="el-table" name="table">
        <gc-table>
          <el-row>
            <el-button type="text">删除</el-button>
          </el-row>
        </gc-table>
      </el-tab-pane>
      <el-tab-pane label="el-form" name="form">
        <gc-form></gc-form>
      </el-tab-pane>
      <el-tab-pane label="el-table-test" name="el-table-test">
        <test-row-click></test-row-click>
      </el-tab-pane>
      <el-tab-pane label="test-sortable-table" name="test-sortable-table">
        <template>
          <test-sortable-table
            :col="col"
            :dropCol="dropCol"
            :tableData="tableData"
            ref="testSort"
          ></test-sortable-table>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import GcTable from "../components/Element/GcTable";
import GcForm from "@/components/Element/GcForm";
import TestRowClick from "@/components/Element/TestRowClick";
import TestSortableTable from "@/components/Element/TestSortableTable";
export default {
  name: "home",
  components: {
    GcTable,
    GcForm,
    TestRowClick,
    TestSortableTable
  },
  data() {
    return {
      activeName: "table"
    };
  },
  mounted() {}
};
</script>
