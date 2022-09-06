<template>
  <el-table :data="ixpdata" :height="this.tableData.length ? 900 : 100" style="width: 100%" :default-sort="{ prop: 'num', order: 'descending' }" :row-class-name="tabRowClassName">
    <el-table-column type="index" label="序号" width="50"> </el-table-column>
    <el-table-column prop="ixp_name" label="IXP名称" sortable> </el-table-column>
    <el-table-column prop="website" label="IXP网址" sortable> </el-table-column>
    <el-table-column prop="country" label="国家" sortable width="150"> </el-table-column>
    <el-table-column prop="city" label="城市" width="150" sortable> </el-table-column>
    <el-table-column prop="ipv4" label="IPV4地址前缀" width="180"> </el-table-column>
    <el-table-column prop="ipv6" label="IPV6地址前缀" width="180"> </el-table-column>
    <el-table-column prop="bandwidth" label="交换带宽" width="100" sortable> </el-table-column>
    <el-table-column prop="technical_contact" label="技术支持联系方式"> </el-table-column>
    <el-table-column prop="policy_contact" label="官方联系方式"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  created () {
    this.getIXPdata()
  },
  data () {
    return {
      ixpdata: [],
      tableData: [
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '30gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Brizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '40gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '7b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Crizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '60gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '10gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '5b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '110gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '6b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '15gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },

        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '17gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '14gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '19gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '10gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
        },
        {
          ixp_name: '4b42 Internet Exchange Point',
          website: 'http://www.ams-ix.net/',
          country: 'China',
          city: 'Arizona-Flagstaff-2700 S. Woodlands Village Blvd',
          ipv4: '185.1.125.0/24',
          ipv6: '2001:7f8:d0::/64',
          bandwidth: '10gb',
          technical_contact: 'noc@4ixp.com | +4971157609038',
          policy_contact: 'noc@4ixp.com | +4971157609038'
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
    async getIXPdata () {
      const { data: res } = await this.$http.get('ixp', {
        params: { asn: this.$route.params.id }
      })

      // console.log(this.$route.params.id)
      if (res.meta.status !== 200) {
        return this.$message.error('获取信息失败！')
      }
      // console.log(res)
      this.ixpdata = res.IXP
    }
  }
}
</script>

<style lang="less" scoped>
.el-table__column-filter-trigger i {
  font-size: 16px !important;
}
</style>
