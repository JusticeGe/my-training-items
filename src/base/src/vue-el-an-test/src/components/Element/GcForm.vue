<template>
  <el-form :model="obj" :label-position="form.labelPostion || 'left'" size="mini" :inline="form.inline || false" align='left'>
    <el-form-item v-for="item in form.items" :label="item.label" :key="item.prop" style="margin-left: 20px">
      <!-- input输入框 -->
      <el-input
        :readonly="form.detail || item.detail "
        v-if="item.el === 'input'" 
        :type="item.type || 'text'" 
        v-model="obj[item.prop]"
        clearable>
      </el-input>
      <!-- 下拉选择 -->
      <el-select v-if="item.el === 'select'" 
        :readonly="form.detail || item.detail "
        clearable
        v-model="obj[item.prop]">
        <el-option 
          v-for="option in item.map" 
          :key="option.value" 
          :label="option.label" 
          :value="option.value">
        </el-option>
      </el-select>
      <!-- CheckBox -->
      <el-checkbox v-for="option in item.checkGroup"
        :readonly="form.detail || item.detail "
        :key="option.value" 
        :label="option.label" 
        :value="option.value"
      ></el-checkbox>
      <!-- CheckBoxGroup -->
      <el-checkbox-group v-model="obj[item.prop]">
        <el-checkbox v-for="option in item.checkGroup"
          :readonly="form.detail || item.detail "
          :key="option.value" 
          :label="option.label" 
          :value="option.value"
        ></el-checkbox>
      </el-checkbox-group>
      <!-- radio -->
      <el-radio-group v-model="obj[item.prop]" 
        :readonly="form.detail || item.detail ">
        <el-radio v-for="option in item.radioGroup"
          :key="option.value" 
          :label="option.label" 
          :value="option.value"
        ></el-radio>
      </el-radio-group>
      <!-- Radio -->
      <el-radio v-for="option in item.radioGroup"
        :readonly="form.detail || item.detail "
        :key="option.value" 
        :label="option.label" 
        :value="option.value"
      ></el-radio>
      <!--  -->
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        labelPosition: "",
        labelWidth: "",
        inline: true,
        items: [
          {label: '姓名:', prop: 'name', el: 'input', detail: true},
          {label: '年龄:', prop: 'age', el: 'input'},
          {label: '手机号:', prop: 'mobile', el: 'input'},
          {label: '地址:', prop: 'address', type: 'textarea', el: 'input'},
          {label: '学校:', prop: 'school', el: 'select', map: [{label: '合肥', value: 'hf'}]},
          {label: '爱好:', prop: 'fav', el: 'input'}
        ]
      },
      obj: {
        name: "阿拉伯酋长国之过往的的儿子的儿子的女儿",
        age: 123123123123123123123,
        mobile: 13093455502,
        address: "上海市浦东陪你感兴趣普度及",
        school: "清华北大上交大",
        fav: "篮球排球弹子球"
      }
    };
  },
};
</script>
