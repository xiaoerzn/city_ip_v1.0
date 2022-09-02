<template>
  <div class="linkdiv">
    <div v-for="item in linkDomaindata" :key="item.index" >
      <el-button @click="handleClick(item)" type="text" >{{ item }}</el-button>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkDomaindata: ''
    }
  },
  created () {
    this.getlinkDomaindata()
  },
  methods: {
    async getlinkDomaindata () {
      const { data: res } = await this.$http.get('domain/related', {
        params: { domain_name: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // console.log(res)
      this.linkDomaindata = res.data
      // console.log(res)
    },
    handleClick (item) {
      this.CommonFunction.OpenNewBlank(item,'DomainDetail',this)
      // this.$router.push({ path: `/DomainDetail/${item}` })
    }
  }
}
</script>

<style lang="less" scoped>
.linkdiv{
  height:500px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: auto;
  // margin: 0px 0px 10px 10px;
}
.el-divider{
  margin: 5px 0;
}

</style>
