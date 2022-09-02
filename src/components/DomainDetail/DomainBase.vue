<template>
  <div>
    <el-card>
      <el-row class="content">
        <el-col :span="8">
          <el-row>
            <el-col :span="5" :offset="0">注册国家 : </el-col>
            <el-col :span="19" :offset="0">{{ this.DomainBaseInfo.registrant_country }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="5" :offset="0">注册日期 : </el-col>
            <el-col :span="19" :offset="0">{{ this.DomainBaseInfo.creation_date }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="5" :offset="0">证书是否过期 : </el-col>
            <el-col :span="19" :offset="0">{{ this.DomainBaseInfo.ssl_expire }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="2" :offset="0">使用者 : </el-col>
            <el-col :span="22" :offset="0">{{ this.DomainBaseInfo.ssl_user }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="2" :offset="0">失效日期 : </el-col>
            <el-col :span="22" :offset="0">{{ this.DomainBaseInfo.expiration_date }}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      DomainBaseInfo: ''
    }
  },
  created () {
    this.getDomainBaseInfo()
  },
  methods: {
    async getDomainBaseInfo () {
      const { data: res } = await this.$http.get('domain/base_info', {
        params: { domain_name: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // console.log(res)
      this.DomainBaseInfo = res.data

      // console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.el-col {
  .el-row {
    .el-col {
      height: 30px;
      line-height: 30px;
      color: #606266;
    }
  }
}
</style>
