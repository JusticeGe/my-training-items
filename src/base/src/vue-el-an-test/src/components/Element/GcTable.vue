<template>
  <el-card>
    <el-collapse slot="header">
      <el-collapse-item name="choose" title="筛选" style="text-align: left">
        <el-select
            v-model="value"
            multiple
            filterable
            placeholder="请选择隐藏列">
            <el-option
              v-for="item in table.col"
              :key="item.prop"
              :label="item.label"
              :value="item.prop">
            </el-option>
        </el-select>
      </el-collapse-item>
    </el-collapse>
    <el-table size='mini' :data="table.data" :fit=true border stripe >
      <el-table-column v-if="table.selection" type="selection"></el-table-column>
      <el-table-column v-if="table.index" fixed type="index" ></el-table-column>
      <el-table-column v-for="col in tableCol" 
        :width="col.width || 100" 
        :label="col.label" 
        :prop="col.prop" 
        sortable 
        :fixed="col.fixed || false" 
        :key="col.prop">
        <template slot-scope="scope">
          {{scope.row | parseTableData(col.prop) }}
        </template>
      </el-table-column>
      <el-table-column align="right" min-width="200" fixed="right">
        <!-- 固定表头方法 -->
        <template slot="header">
          <el-select size="mini" v-model="fixed" placeholder="固定表头">
            <el-option
              v-for="item in tableCol"
              :key="item.prop"
              :label="item.label"
              :value="item.prop">
            </el-option>
          </el-select>
        </template>
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
      table: {
        selection: true,
        index: true,
        col: [
          {label: '姓名', prop: 'name', func: ['', '', '']},
          {label: '年龄', prop: 'age'},
          {label: "学校", prop: 'school'},
          {label: "地址", prop: 'address'},
          {label: "成绩", prop: "chengji"},
          {label: "学科", prop: "object"},
          {label: "爱好", prop: "lov"},
          {label: "工作", prop: "work"},
          {label: "薪资", prop: "pay"},
          {label: "存款", prop: "money"},
          {label: "状态", prop: "status"}
        ],
        data: [ 
          { name: 'gc', age: 18 , school: "合肥许上海分院北京终极", address: "上海市普陀区锦绣大道2999hap", chengji: '1000', object: 'CAD，ug，机械', lov: '打游戏，看电影，打篮球，踢足球'},
          { name: 'cm', age: 16  , school: "合肥许上海分院北京终极", address: "上海市普陀区锦绣大道2999", chengji: '1000', object: 'CAD，ug，机械',lov: '打游戏，看电影，打篮球，踢足球'}
        ]
      },
      value: [],
      fixed: ''
    };
  },
  watch: {
    value: function(val, oldVal) {
      if(val.length === this.table.col.length){
        this.$message.warning('至少展示一列')
        this.value = oldVal
      }
    },
    fixed: function(val) {
      if(val) {
        this.tableCol.map(
        item => {
          if(item.prop === val) {
            item = Object.assign(item, {fixed: true});
          }else {
            item.fixed = false;
          }
        })
      }
    }
  },
  computed: {
    tableCol: function() {
      if(this.value.indexOf(this.fixed) > -1) {
        this.fixed = "";
      }
      return this.table.col.filter(
        item => this.value.indexOf(item.prop) === -1
      );
    }
  }
};
</script>
