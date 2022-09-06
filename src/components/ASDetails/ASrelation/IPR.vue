<template>
  <el-table
    :data="iprdata"
    :height="this.tableData.length?900:100"
    style="width: 100%"
    :default-sort="{ prop: 'num', order: 'descending' }"
    :row-class-name="tabRowClassName"
  >
    <el-table-column label="序号" type="index" width="50"> </el-table-column>
    <el-table-column
      prop="prefix_type"
      label="前缀类型"
      :filters="[
        { text: 'Originated', value: 'Originated' },
        { text: 'Announced', value: 'Announced' },
      ]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column prop="description" label="前缀描述" width="350"> </el-table-column>
    <el-table-column prop="prefix" label="前缀"> </el-table-column>
    <el-table-column
      prop="ip_type"
      label="地址类型"
      :filters="[
        { text: 'ipv4', value: 'ipv4' },
        { text: 'ipv6', value: 'ipv6' },
        {text: 'ALL', value: 'ALL'}
      ]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column prop="lastdata_count" label="上次处理监测点数目" sortable>
    </el-table-column>
    <el-table-column prop="alldata_count" label="累计处理检测点数目" sortable>
    </el-table-column>
    <el-table-column prop="first_seen" label="最早发现"> </el-table-column>
    <el-table-column prop="last_seen" label="最近发现"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  created () {
    this.getIPRdata()
  },
  data () {
    return {
      iprdata: [],
      tableData: [
        {
          prefix_type: 'Announced',
          prefix: '2602:801:3000::/48',
          ip_type: 'ALL',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Originated',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV4',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Announced',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV6',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Originated',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV4',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Announced',
          prefix: '2602:801:3000::/48',
          ip_type: 'ALL',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Originated',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV6',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Announced',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV4',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Originated',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV6',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Announced',
          prefix: '2602:801:3000::/48',
          ip_type: 'ALL',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        },
        {
          prefix_type: 'Originated',
          prefix: '2602:801:3000::/48',
          ip_type: 'IPV6',
          lastdata_count: '9999',
          alldata_count: '9999',
          first_seen: '2001-8-16 15:07:26',
          last_seen: '2001-8-16 15:07:26'
        }
      ]
    }
  },
  methods: {
    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
    },
    tabRowClassName ({ row, rowIndex }) {
      const index = rowIndex + 1
      if (index % 2 == 0) {
        return 'warning-row'
      }
    },
    async getIPRdata () {
      const { data: res } = await this.$http.get('as_prefix', {
        params: { asn: this.$route.params.id }
      })
      // console.log(res)
      // console.log(this.$route.params.id)
      if (res.meta.status !== 200) {
        return this.$message.error('获取信息失败！')
      }
      this.iprdata = res.as_prefix
    }
  }
}
</script>
<style lang="less" scoped>
.el-table__column-filter-trigger i{
  font-size: 16px !important
}
</style>
