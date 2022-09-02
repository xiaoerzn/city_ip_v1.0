<template>
  <el-card :body-style="{ padding: '5px 10px', height: '259px'}">
    <pre id="DomainWhoisInfo">whios暂无信息</pre>
  </el-card>
</template>

<script>
export default {
  created () {
    this.getDomainWhois()
    // console.log(this.$route.params.id)
  },
  methods: {
    async getDomainWhois () {
      const { data: res } = await this.$http.get('domain/whois', {
        params: { domain_name: this.$route.params.id }
      })
      // console.log(res)
      // console.log(this.$route.params.id)
      if (res.meta.status !== 200) {
        return this.$message.error('获取SSL证书信息失败！')
      }
      var h = document.getElementById('DomainWhoisInfo')
      h.innerHTML = res.data
    }
  }
}
</script>

<style lang="less" scoped>
#sslInfo {
  margin: 0;
}
pre{
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 233px;
  overflow: hidden;
  // color: rgb(147, 184, 92);
  font-family: 'Consolas';
}
pre:hover {
    overflow: auto;
  }
</style>
