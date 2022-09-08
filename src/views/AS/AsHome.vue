<template>
  <search
    :loading="loading"
    :SystemName="SystemName"
    :link="link"
    :queryInfo="queryInfo"
    :total="total"
    :query_time="query_time"
    :searchtips="searchtips"
    :resultflag="resultflag"
    :asidewidth="asidewidth"
    :category="'as'"
    @getFaterList="getASList()"
  >
  <template v-slot:main >
    <el-card v-for="item in ASlist" :key="item.id" :body-style="{ padding: '7px 30px'}">
      <div slot="header">
        <el-row>
          <el-col :span="2" style="text-align: left; font-weight: bold">ASN {{ item.asn }}</el-col>
          <el-col :span="4" style="text-align: left"><el-button type="text" icon="el-icon-view" @click="view_details(item.asn)" size="mini">查看详情</el-button></el-col>
          <el-col :span="6" style="text-align: left; text-overflow: ellipsis; white-space: nowrap; overflow: hidden">{{ item.as_name }}</el-col>
          <el-col :span="8" style="text-align: left"> {{ item.country }}-{{ item.city }}&nbsp;&nbsp;<img :src="`http://10.15.1.192:8888/static/${item.iso}.png`" /></el-col>
          <el-col :span="4"><i class="iconfont iconshijian"></i>&nbsp; {{ item.last_seen }}</el-col>
        </el-row>
      </div>
      <!-- 信息内容 -->
      <el-row class="content">
        <el-col class="des" :span="6" :title="item.as_org"><i class="iconfont iconorgan"></i>&nbsp;&nbsp;所属组织 : {{ item.as_org }}</el-col>
        <el-col class="des" :span="6"
          ><i class="iconfont iconwangluodizhi"></i>&nbsp;&nbsp;地址类型 :
          <i v-if="item.ip_type == 0" class="iconfont iconi4"></i>
          <i v-else-if="item.ip_type == 1" class="iconfont iconi6"></i>
          <i v-else><i class="iconfont iconi4"></i><i class="iconfont iconi6"></i></i>
          <!-- <i v-else class="iconfont iconall"></i> -->
        </el-col>
        <el-col class="des" :span="6"><i class="iconfont iconquanzhong"></i>&nbsp;&nbsp;权重 : {{ item.weight }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont icontuopu"></i>&nbsp;&nbsp;邻居AS数量 : {{ item.weight }}</el-col>
      </el-row>
      <el-row class="content">
        <el-col class="des" :span="6"><i class="iconfont iconshujuyuan"></i>&nbsp;&nbsp;注册信息来源 : {{ item.source }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont iconcengcibuju"></i>&nbsp;&nbsp;层次 : {{ item.level }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont icontongjier"></i>&nbsp;&nbsp;IP地址数量 : {{ Number(item.ipv4_count) + Number(item.ipv6_count) }}</el-col>
        <el-col class="des" :span="6"><i class="iconfont iconIP"></i>&nbsp;&nbsp;前缀数量 : {{ item.prefix_count }}</el-col>
      </el-row>
    </el-card>
  </template>
  </search>
</template>

<script>
import search from "../../components/common/search.vue";
export default {
  components: { search },
    data() {
    return {
      asidewidth: "-20px",
      dialogVisible: false,
      searchtips:"支持ASN、国家、地区搜索，搜索格式为：asn:6556;country:United States;",
      SystemName: "AS",
      link: "/ASinfo",
      total: 100,
      query_time: "",
      currentPage: 1,
      queryInfo: {
        query: "",
        eachpage: 10,
        pagenum: 1,
      },
      loading: false,
      ASlist: ['1'],
      resultflag: true,
    };
    
  },
  //   created () {
  //   this.getASList()
  //   // console.log(document.querySelector(".body").scrollTop)
  // },
  methods:{
          async getASList () {
      this.loading = false
      const { data: res } = await this.$http.get('as/as_info_search', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      this.ASlist = res.data.data
      this.total = res.data.datanum
      this.query_time = res.data.query_time
      document.querySelector('.body').parentNode.scrollTop = 0
      this.loading = false
      // console.log(res)
    },
        view_details (asn) {
      this.CommonFunction.OpenNewBlank(asn,'AsDetail',this)
      // this.$router.push({ path: `/AsDetail/${asn}` })
    },
  }
}
</script>

<style lang="less" scoped>

/deep/ .el-card__header {
  padding: 0px 30px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.el-card {
  border-bottom: 6px solid #e5e5e5;
}

.sort_icon {
  display: inline-flex;
  flex-direction: column;
}
/deep/ .el-main{
    padding: 0;
}
.content {
  .el-col {
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    i {
      height: 24px;
      line-height: 24px;
    }
  }
  line-height: 24px;
  height: 24px;
}
.des {
  text-align: left;
  font-size: 14px;
  color: #606266;
  height: 28px;
  line-height: 28px;
}
</style>
