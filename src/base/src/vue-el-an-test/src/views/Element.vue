<template>
  <div class="element">
    <el-tabs v-model="activeName">
      <el-tab-pane label="el-table" name="table">
        <gc-table :size.sync="size" :page.sync="page" :total="total">
          <template type="primary" size="mini" v-slot:try="row">
            <el-button size="mini" type="primary">click</el-button>
          </template>
        </gc-table>
      </el-tab-pane>
      <el-tab-pane label="el-form" name="form">
        <gc-form> </gc-form>
      </el-tab-pane>
      <el-tab-pane label="demo01" name="demo01">
        <demo-01></demo-01>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import GcTable from "../components/Element/GcTable/index";
import GcForm from "@/components/Element/GcForm/index";
import Demo01 from "@/components/Element/Demo01/index";
export default {
  name: "home",
  components: {
    GcTable,
    GcForm,
    Demo01
  },
  data() {
    return {
      activeName: "demo01",
      page: 1,
      size: 20,
      total: 50
    };
  },
  methods: {},
  mounted() {}
};
</script>
