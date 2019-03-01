<template>
  <div>
    <!--<input v-model="something"/>-->
    <!--<input :value="something" @input="input($event)"/>-->
    <button @click="show=true">展示model</button>
    <four-demo-a :value="show"></four-demo-a>
  </div>
</template>

<script>
import FourDemoA from './FourDemoA'
export default {
  name: 'four',
  components: {FourDemoA},
  data () {
    return {
      something: '',
      show: false
    }
  },
  methods: {
    // input (val) {
    //   console.log(val)
    // }
  }
}
</script>

<style scoped>

</style>
