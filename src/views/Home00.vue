<template>
<el-container>
  <el-tabs  type="card" @tab-click="handleClick">
    <el-tab-pane v-for="item in labelname" :key="item.index" :label="item.name" :name="item.link" >
      <router-view></router-view>
    </el-tab-pane>
  </el-tabs>
</el-container>


</template>

<script>
export default {
data(){
  return{
    labelname:[{name:"网络空间数据统计",link:'/statistics'},{name:"网络空间地图展示",link:'/map'}]
  }
},
methods:{
  handleClick(tab, event) {
        this.$router.push(tab.name)
      }
}
}

</script>

<style lang="less" scoped>
</style>