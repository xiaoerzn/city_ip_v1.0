<template>
  <el-card :body-style="{ padding: '0px', height: '1000px' }">
    <div slot="header" class="clearfix">
      <strong>变化信息</strong>
    </div>
    <div>{{test}}</div>
  </el-card>
</template>

<script>
export default {
  props: ['test'],
  data () {
    return {

    }
  }

}
</script>

<style lang="less" scoped>

</style>
