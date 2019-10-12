<template>
  <el-card>
    <el-form
      :model="form"
      :label-position="labelPosition"
      inline
      size="mini"
      :label-width="labelWidth"
      ref="form"
    >
      <el-row style="text-align: left">
        <el-col
          v-for="item in items"
          :key="item.label"
          :span="item.span || span"
        >
          <el-form-item
            :label="filterLabel(item)"
            :label-width="item.labelWidth || ''"
          >
            <el-input
              v-if="item.el === 'input'"
              v-model="form[item.prop]"
              :disabled="item.disabled"
              clearable
            ></el-input>
            <el-checkbox
              v-else-if="item.el === 'checkbox'"
              :label="item.label"
              v-model="form[item.prop]"
            ></el-checkbox>
            <el-date-picker
              v-else-if="item.el === 'datePicker'"
              v-model="form[item.prop]"
            ></el-date-picker>
            <el-select
              v-model="form[item.prop]"
              v-else-if="item.el === 'select'"
              clearable
            >
              <el-option
                v-for="opt in item.map"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              ></el-option>
            </el-select>
            <slot v-else-if="item.el === 'slot'" :name="item.name"></slot>
            <span v-else>{{ form[item.prop] }}</span>
          </el-form-item>
        </el-col>
        <slot>
          <el-col :span="8">
            <el-button type="primary" @click="reset" size="mini"
              >提交</el-button
            >
          </el-col>
        </slot>
      </el-row>
    </el-form>
  </el-card>
</template>
<script>
export default {
  name: "GcForm",
  props: {
    num: {
      type: String || Number,
      validator: val => {
        const value = Number(val);
        return !isNaN(value);
      }
    },
    // form: {
    //   type: Object,
    //   default: () => {}
    // },
    items: {
      type: Array,
      default: () => []
    },
    labelPosition: {
      type: String,
      validator: val => ["right", "left", "top"].indexOf(val) > -1
    },
    span: {
      type: Number,
      default: 8
    },
    labelWidth: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      form: {
        name: "asdasd"
      }
    };
  },
  methods: {
    filterLabel(item) {
      if (item.el === "checkbox") {
        return "";
      } else {
        return item.label || "";
      }
    },
    reset() {
      console.log(this.$refs.form.resetFields());
    }
  },
  created() {
    console.log(this.form);
  }
};
</script>
<style scoped>
.el-col {
  /* background: red; */
  padding: 5px 10px;
}
</style>
