<template>
  <div>
    <el-table
      :height="200"
      :data="HistoryIPData"
      style="width: 100%"
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '0px', fontSize: '14px' }"
      :header-row-style="{ height: '44px' }"
      :header-cell-style="{ padding: '0px', fontSize: '14px' }"
    >
      <el-table-column prop="ip" label="IP">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">{{ scope.row.ip }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="adress" label="有效期"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      HistoryIPData: [
        // {
        //   ip: '198.168.1.2',
        //   adress: '中国台湾台北',
        //   location: '121.3,22.9',
        //   asn: '125',
        //   org: 'Level 3 Parent, LLC',
        //   time: '2021.1.1-2021.12.12',
        // },
      ]
    }
  },
  created () {
    this.getHistoryIPData()
  },

  methods: {
    handleClick (row) {
      //   console.log(row)
      this.$router.push({ path: `/Assetdetail/${row.ip}` })
    },
    async getHistoryIPData () {
      const { data: res } = await this.$http.get('domain/history_ip', {
        params: { domain_name: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // console.log(res)
      this.HistoryIPData = res.data.history_ip

      // console.log(res)
    }

  }
}
</script>

<style lang="less" scoped>
</style>
