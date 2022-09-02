<template>
<div>
  <h4><i class="el-icon-s-management"></i>&nbsp;标签分类</h4>
    <el-descriptions :column="1"  border>
    <el-descriptions-item  label="业务/产品" label-class-name="my-label" content-class-name="my-content">
        <span v-if="TagInfo.model&&!TagInfo.model[0]">--</span>
        <el-tag v-else size="small" v-for="item in TagInfo.model" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item  label="支撑层" label-class-name="my-label" content-class-name="my-content">
      <span v-if="TagInfo.brace&&!TagInfo.brace[0]">--</span>
      <el-tag v-else size="small" v-for="item in TagInfo.brace" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item  label="服务层" label-class-name="my-label" content-class-name="my-content">
      <span v-if="TagInfo.service_type&&!TagInfo.service_type[0]">--</span>
      <el-tag v-else size="small" v-for="item in TagInfo.service_type" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item  label="系统层" label-class-name="my-label" content-class-name="my-content">
      <span v-if="TagInfo.os&&!TagInfo.os[0]">--</span>
      <el-tag v-else size="small" v-for="item in TagInfo.os" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item  label="硬件层" label-class-name="my-label" content-class-name="my-content">
      <span v-if="TagInfo.device&&!TagInfo.device[0]">--</span>
      <el-tag v-else size="small" v-for="item in TagInfo.device" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item  label="结构层" label-class-name="my-label" content-class-name="my-content">
      <span v-if="TagInfo.formation&&!TagInfo.formation[0]">--</span>
      <el-tag v-else size="small" v-for="item in TagInfo.formation" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item  label="其他" label-class-name="my-label" content-class-name="my-content">
      <span v-if="TagInfo.other&&!TagInfo.other[0]">--</span>
      <el-tag v-else size="small" v-for="item in TagInfo.other" :key="item.index">{{item}}</el-tag>
    </el-descriptions-item>
  </el-descriptions>
</div>

</template>

<script>
export default {
  data(){
    return{
      TagInfo:{}
    }
  },
  created(){
    this.getTagInfo()
  },
methods:{
      async getTagInfo () {
      const { data: res } = await this.$http.get('ip/tag', {
        params: { ip: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // for(let i of res.data.model){
           
      // }
      this.TagInfo = res.data
      //  console.log(res.data.brace[0])
    },
}
}
</script>

<style lang="less" scoped>
  /deep/.my-label {
    width: 30px;
  }

</style>