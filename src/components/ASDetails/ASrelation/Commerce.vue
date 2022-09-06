<template>
  <el-table
    :data="commercedata"
    :height="this.tableData.length?900:100"
    style="width: 100%"
    :default-sort="{ prop: 'asn', order: 'descending' }"
    :row-class-name="tabRowClassName"
  >
    <el-table-column prop="asn" label="ASN" width="80" sortable>
    </el-table-column>
    <el-table-column prop="as_name" label="AS名称" width="150" sortable>
    </el-table-column>
    <el-table-column prop="as_org" label="所属组织" sortable> </el-table-column>
    <el-table-column prop="level" label="层级" width="80" sortable>
    </el-table-column>
    <el-table-column prop="country" label="国家" width="120" sortable>
    </el-table-column>
    <el-table-column prop="ip_type" label="类型" width="80" sortable>
    </el-table-column>
    <el-table-column prop="ipv4_count" label="IPV4地址数量" width="80"  sortable >
    </el-table-column>
    <el-table-column prop="ipv6_count" label="IPV6地址数量" width="80" sortable >
    </el-table-column>
    <el-table-column prop="first_seen" label="最早发现" sortable>
    </el-table-column>
    <el-table-column prop="last_seen" label="最近发现" sortable>
    </el-table-column>
    <el-table-column prop="source" label="数据来源" width="100">
    </el-table-column>
    <el-table-column
      prop="as_relation"
      label="关系"
      width="90"
      :filters="[
        { text: 'C2P', value: 'C2P' },
        { text: 'P2P', value: 'P2P' },
        { text: 'C2C', value: 'C2C' },
        { text: 'P2C', value: 'P2C' },
      ]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column prop="ixp_count" label="IXP数量" width="100" sortable>
    </el-table-column>
    <el-table-column prop="customer_cone" label="CustomerCone" width="150" sortable>
    </el-table-column>
    <el-table-column prop="number_path" label="NumberPath" width="140" sortable>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      commercedata: [],
      tableData: [
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9499',
          ipv6_count: '4999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '299',
          customer_cone: '9899',
          number_path: '5999'
        },
        {
          asn: '6559',
          as_name: 'AIRGAPPED',
          as_org: 'sZSIGNSHOP LLC(ASS-136)',
          level: '9969',
          country: 'America',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '6999',
          ipv6_count: '9699',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Peer',
          ixp_count: '797',
          customer_cone: '89',
          number_path: '995'
        },
        {
          asn: '6554',
          as_name: 'AIRGAPPED',
          as_org: 'eZSIGNSHOP LLC(ASS-136)',
          level: '997',
          country: 'HK',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '995',
          ipv6_count: '9699',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Provider',
          ixp_count: '7756',
          customer_cone: '564',
          number_path: '4569'
        },
        {
          asn: '6557',
          as_name: 'AIRGAPPED',
          as_org: 'bZSIGNSHOP LLC(ASS-136)',
          level: '949',
          country: 'Indian',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '959',
          ipv6_count: '9599',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Symbling',
          ixp_count: '752',
          customer_cone: '753',
          number_path: '757'
        },
        {
          asn: '5556',
          as_name: 'AIRGAPPED',
          as_org: 'yZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'Janpan',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6526',
          as_name: 'AIRGAPPED',
          as_org: 'aZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'Brizilia',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Peer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '7556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Symbling',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Peer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Provider',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Peer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Provider',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Peer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Symbling',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Symbling',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        },
        {
          asn: '6556',
          as_name: 'AIRGAPPED',
          as_org: 'AZSIGNSHOP LLC(ASS-136)',
          level: '9999',
          country: 'China',
          ip_type: 'ipv4 ipv6',
          ipv4_count: '9999',
          ipv6_count: '9999',
          first_seen: '2001-8-16 15:07:27',
          last_seen: '2001-8-16 15:07:27',
          source: 'APNIC Whois Database',
          as_relation: 'Customer',
          ixp_count: '9999',
          customer_cone: '9999',
          number_path: '9999'
        }
      ]
    }
  },
  created () {
    this.getCommercedata()
  },
  methods: {
    async getCommercedata () {
      const { data: res, status: sta } = await this.$http.get('as_peer', {
        params: { asn: this.$route.params.id }
      })
      // console.log(res)
      // console.log(this.$route.params.id)
      if (sta !== 200) {
        return this.$message.error('获取信息失败！')
      }
      this.commercedata = res.as_peer
    },

    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
    },
    tabRowClassName ({ row, rowIndex }) {
      const index = rowIndex + 1
      if (index % 2 == 0) {
        return 'warning-row'
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .warning-row {
  background:  #e6effb;
}
/* .el-table {
  font-size: 13px !important;
}
.el-table__column-filter-trigger i{
  font-size: 16px !important
} */
</style>
