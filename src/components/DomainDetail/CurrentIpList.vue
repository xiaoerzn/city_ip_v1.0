<template>
  <div>
    <el-table
      :height=200
      :data="CurrentIPData"
      style="width: 100%"
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '0px', fontSize: '14px' }"
      :header-row-style="{ height: '44px' }"
      :header-cell-style="{ padding: '0px', fontSize: '14px' }"
    >
      <el-table-column prop="ip" label="IP" >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" >{{ scope.row.ip }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="location" label="国家地区" > </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      CurrentIPData: [
        // {
        //   ip: '198.168.1.2',
        //   adress: '中国台湾台北',
        //   location: '121.3,22.9',
        //   asn: '125',
        //   org: 'Level 3 Parent, LLC',
        // },
      ]
    }
  },
  created () {
    this.getCurrentIPData()
  },
  methods: {
    handleClick (row) {
      //   console.log(row)
      this.CommonFunction.OpenNewBlank(row.ip,'Assetdetail',this)
      // this.$router.push({ path: `/Assetdetail/${row.ip}` })
    },
    async getCurrentIPData () {
      const { data: res } = await this.$http.get('domain/current_ip', {
        params: { domain_name: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // console.log(res)
      this.CurrentIPData = res.data.current_ip

      // console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.ip {
  color: #1d79c2;
}
</style>
