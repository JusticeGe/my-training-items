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
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import GcTable from "../components/Element/GcTable";
import GcForm from "@/components/Element/GcForm";
export default {
  name: "home",
  components: {
    GcTable,
    GcForm
  },
  data() {
    return {
      activeName: "form"
    };
  }
};
</script>
