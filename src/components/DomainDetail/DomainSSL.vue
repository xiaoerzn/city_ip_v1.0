<template>
  <el-card :body-style="{ padding: '10px', height: '480px' }">
    <div slot="header" class="clearfix">
      <strong>SSL证书</strong>
    </div>
    <pre id="sslInfo"></pre>
  </el-card>
</template>

<script>
export default {
  created () {
    this.getSSL()
    // console.log(this.$route.params.id)
  },
  methods: {
    async getSSL () {
      const { data: res } = await this.$http.get('domain/ssl', {
        params: { domain_name: this.$route.params.id }
      })
      // console.log(res)
      // console.log(this.$route.params.id)
      if (res.meta.status !== 200) {
        return this.$message.error('获取SSL证书信息失败！')
      }
      var h = document.getElementById('sslInfo')
      h.innerHTML = res.data
    }
  }
}
</script>

<style lang="less" scoped>
#sslInfo {
  margin: 0;
}

pre {
  height: 480px;
  overflow: hidden;
  font-family: 'Consolas';
}
pre:hover{
  overflow: auto;
}
</style>
