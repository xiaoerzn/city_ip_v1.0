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
    :category="'domain'"
    @getFaterList="getDomainList()"
  >
    <template v-slot:aside>
        <home-left></home-left>
    </template>
    <template v-slot:main>
                <div v-show="resultflag">
          <el-card v-for="item in Domainlist" :key="item.id" :body-style="{ padding: '20px 10px' }">
            <!-- 头 -->
            <div slot="header">
              <el-row>
                <el-col :span="8" style="text-align: left; font-weight: bold"
                  >{{ item.DomainName }}&nbsp;<el-button type="text" icon="el-icon-view" @click="view_details(item.DomainName)" size="mini">查看详情</el-button></el-col
                >
                <!-- 国旗 -->
                <el-col :span="8"><img :src="`http://10.15.1.192:8000/static/${item.country}.png`" onerror="javascript:this.src='';"/></el-col>
                <el-col :span="8" style="text-align: right"><i class="iconfont iconshijian"></i>&nbsp; {{ item.DisplayTime }}</el-col>
              </el-row>
            </div>
            <!-- body -->
            <el-row class="Domainbase" :gutter="10">
              <el-col :span="7" style="text-align: left" :title="item.location"><i class="iconfont iconicon-dingwei"></i>&nbsp;&nbsp;国家地区 : {{ item.location }}&nbsp;&nbsp; </el-col>
              <el-col :span="4"><i class="iconfont icondiqiu"></i>&nbsp;&nbsp;自治域编号 :{{ item.asn }}</el-col>
              <el-col :span="4"><i class="iconfont iconzizhiyu1"></i>&nbsp;&nbsp;自治域 :{{ item.asnname }}</el-col>
              <el-col :span="5"><i class="iconfont iconyunyingshang"></i>&nbsp;&nbsp;运营商 :{{ item.registration_authority }}</el-col>
              <el-col :span="4"><i class="iconfont iconIP"></i>&nbsp;&nbsp;解析IP数量 :{{ item.ipnum }}</el-col>
            </el-row>
          </el-card>
        </div>
        <div v-show="!resultflag">无结果</div>
    </template>
    </search>
</template>


<script>
import HomeLeft from '../Domain/DomainHomeLeft.vue'
import search from "../../components/common/search.vue";
export default {
      data() {
    return {
      asidewidth: "288px",
      dialogVisible: false,
      searchtips:
        "支持域名、国家、地区搜索，搜索格式为：domain:605.tw;country:CN;region:LA",
      SystemName: "域名",
      link: "/node1",
      total: 100,
      query_time: "",
      currentPage: 1,
      queryInfo: {
        query: "",
        eachpage: 10,
        pagenum: 1,
      },
      loading: false,
      Domainlist: [
          {
            id: '1',
            DomainName: 'www.sohu.com',
            DisplayTime: '2021-08-18 20:45:55',
            country: 'US',
            region: ' California',
            city: '洛杉矶',
            registrationauthority: 'xxxxx',
            organization: 'xxxx',
            result: 'sd.werdgjddf.net.',
          },
          {
            id: '2',
            DomainName: 'www.sohu.com',
            DisplayTime: '2021-08-18 20:45:55',
            country: 'US',
            region: ' California',
            city: '洛杉矶',
            registrationauthority: 'xxxxx',
            organization: 'xxxx',
            result: 'xxxx',
          },
          {
            id: '3',
            DomainName: 'www.sohu.com',
            DisplayTime: '2021-08-18 20:45:55',
            country: 'US',
            region: ' California',
            city: '洛杉矶',
            registrationauthority: 'xxxxx',
            organization: 'xxxx',
            result: 'xxxx',
          },],
      resultflag: true,
    };
  },
    components: {
    HomeLeft,
    search
  },
    created () {
    this.getDomainList()
  },
  methods:{
      async getDomainList () {
      this.loading = false
      const { data: res } = await this.$http.get('/domain/page', {
        params: this.queryInfo
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // this.$message.success('hahahahah')
      // console.log(res)
      if (res.data.length != 0) {
        this.Domainlist = res.data
        this.total = res.datanum
        this.query_time = res.Query_time
        this.resultflag = true
        // console.log(document.querySelector(".body").parentNode.scrollTop)
        document.querySelector('.body').parentNode.scrollTop = 0
        this.loading = false
      } else {
        this.total = 0
        this.query_time = 0
        this.resultflag = false
        this.loading = false
      }
    },
        view_details (DomainName) {
      this.CommonFunction.OpenNewBlank(DomainName,'DomainDetail',this)
    },
  }


};
</script>

<style lang="less" scoped>

.searchtips {
  margin: 0 auto;
}

/deep/ .el-card__header {
  padding: 0px 30px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}

.el-card {
  border-bottom: 6px solid #e5e5e5;
  .el-col {
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space:nowrap;
  }
}
.Domainbase {
  .el-col {
    line-height: 24px;
    height: 24px;
    font-size: 15px;
    text-align: left;
    color: #606266;
  }
}
.el-table {
  /deep/ th {
    padding: 0;
  }
}
.el-pagination {
  margin-top: 20px;
  float: right;
  padding: 0px 5px 15px 5px;
}
</style>
