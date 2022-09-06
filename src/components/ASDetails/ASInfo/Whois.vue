<template>
  <el-card :body-style="{ padding:'0px 5px', height: '1000px'}">
    <div slot="header" class="clearfix">
      <strong>WHOIS信息</strong>
    </div>
    <pre id="whoisInfo"></pre>
  </el-card>
</template>

<script>
export default {
  created () {
    this.getWhois()
    // console.log(this.$route.params.id)
  },
  methods: {

    async getWhois () {
      const { data: res } = await this.$http.get('as_whois', {
        params: { asn: this.$route.params.id }
      })
      // console.log(res)
      // console.log(this.$route.params.id)
      if (res.meta.status !== 200) {
        return this.$message.error('获取Whios信息失败！')
      }
      var h = document.getElementById('whoisInfo')
      h.innerHTML = res.asWhois
    }
  }
}
</script>

<style lang="less" scoped>
#whoisInfo{
  margin: 0 0 0 10px;
}
pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    height:990px;
    overflow:auto;
}
</style>
