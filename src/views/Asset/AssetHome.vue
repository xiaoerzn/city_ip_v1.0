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
    :category="'ip'"
    @getFaterList="getAssetList()"
  >
    <!-- left  排名-->
    <template v-slot:aside>
      <rank
        :category="'网关'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'gateway', top_number: '5' }"
      ></rank>
      <rank
        :category="'端口'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'port', top_number: '5' }"
      ></rank>
      <rank
        :category="'自治域编号'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'asn', top_number: '5' }"
      ></rank>
      <rank
        :category="'设备'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'device', top_number: '5' }"
      ></rank>
      <rank
        :category="'协议类型'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'protocol_type', top_number: '5' }"
      ></rank>
      <rank
        :category="'操作系统'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'os', top_number: '5' }"
      ></rank>
      <rank
        :category="'组织机构'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'org', top_number: '5' }"
      ></rank>
      <rank
        :category="'服务提供商'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'isp', top_number: '5' }"
      ></rank>
      <rank
        :category="'中间件'"
        :path="'ip/top'"
        :rankrequest="{ top_name: 'middleware', top_number: '5' }"
      ></rank>
    </template>
    <!-- main -->
    <template v-slot:main>
      <el-card
        :body-style="{ padding: '20px 20px 10px 20px' }"
        v-for="item in AssetList"
        :key="item.index"
      >
        <el-row class="infohead">
          <el-col :span="8" style="font-size: 18px; font-weight: 600"
            >{{ item.ip }} &nbsp;
            <el-button
              type="text"
              icon="el-icon-view"
              @click="view_details(item.ip)"
              size="mini"
              >查看详情</el-button
            >
          </el-col>
          <el-col :span="8">
            <el-tag v-if="!!item.protocol_type">{{
              item.protocol_type
            }}</el-tag>
            &nbsp;
            <el-tag v-if="!!item.service_type">{{ item.service_type }}</el-tag>
          </el-col>
          <el-col :span="8" style="text-align: right"
            ><i class="iconfont iconshijian"></i>&nbsp; {{ item.date }}
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" class="infoleft">
            <el-row>
              <img :src="`http://10.15.1.192:8000/static/${item.iso}.png`" />-{{
                item.country
              }}-{{ item.province }}
            </el-row>
            <el-row v-if="!!item.title">
              <i class="el-icon-s-platform"></i> 网站标题 : {{ item.title }}
            </el-row>
            <el-row v-if="!!item.org" :title="item.org">
              <i class="el-icon-mobile"></i> 证书持有机构 : {{ item.org }}
            </el-row>
            <el-row v-if="!!item.device">
              <i class="el-icon-cpu"></i> 设备名称 : {{ item.device }}
            </el-row>
            <el-row v-if="!!item.os">
              <i class="el-icon-receiving"></i> 操作系统 : {{ item.os }}
            </el-row>
            <el-row v-if="!!item.isp">
              <i class="el-icon-tickets"></i> 运营商 : {{ item.isp }}
            </el-row>
            <el-row v-if="!!item.server">
              <i class="el-icon-edit"></i> Server : {{ item.server }}
            </el-row>
            <!-- <el-row v-if="!!item.date"> <i class="el-icon-edit"></i> 探测时间 : {{ item.date }} </el-row> -->
            <el-row v-if="!!item.bugdict" style="overflow: visible">
              <i class="el-icon-edit"></i> 漏洞:
              <el-badge
                :value="`${item.bugdict.highrisk}`"
                class="item"
                type="danger"
              >
                高
              </el-badge>
              <el-badge
                :value="`${item.bugdict.mediumrisk}`"
                class="item"
                type="warning"
              >
                中
              </el-badge>
              <el-badge
                :value="`${item.bugdict.lowrisk}`"
                class="item"
                type="primary"
              >
                低
              </el-badge>
            </el-row>
            <el-row>
              <!-- <el-tooltip effect="dark" content="查看详情" placement="top">
                <el-avatar shape="square" :size="20" icon="el-icon-search" @click.native="view_details(item.ip)"></el-avatar>
              </el-tooltip> -->
              <el-tooltip effect="dark" content="证书内容" placement="top">
                <el-avatar
                  shape="square"
                  :size="20"
                  icon="el-icon-rank"
                  @click.native="open(item.ssl)"
                ></el-avatar>
              </el-tooltip>
              <el-avatar
                shape="square"
                :size="20"
                icon="el-icon-data-board"
              ></el-avatar>
            </el-row>
          </el-col>
          <!-- right -->
          <el-col :span="16" class="main_right">
            <pre>{{ item.ssl }}</pre>
          </el-col>
        </el-row>
      </el-card>
    </template>
  </search>
</template>

<script>
import search from "../../components/common/search.vue";
import rank from "../../components/common/rank.vue";
export default {
  data() {
    return {
      asidewidth: "353px",
      dialogVisible: false,
      searchtips:
        "支持资产、国家、地区搜索，搜索格式为:ip:203.66.143.165;gateway:118.69.253.206;port:8080",
      SystemName: "资产",
      link: "/IPlocating1",
      total: 100,
      query_time: "",
      currentPage: 1,
      queryInfo: {
        query: "",
        eachpage: 10,
        pagenum: 1,
      },
      loading: false,
      AssetList: ['1'],
      resultflag: true,
    };
  },
  components: {
    search,
    rank,
  },
  created() {
    this.getAssetList();
  },
  mounted() {
    // console.log(this.CommonFunction);
  },
  methods: {
    async getAssetList() {
      this.loading = false;
      const { data: res } = await this.$http.get("/ip/page", {
        params: this.queryInfo,
      });

      if (res.meta.status !== 200) {
        return this.$message.error("获取默认列表失败！");
      }
      // console.log(res)
      if (res.data.length != 0) {
        this.AssetList = res.data;
        this.total = res.datanum;
        this.query_time = res.Query_time;
        this.resultflag = true;
        console.log(document.querySelector(".body").parentNode,document.querySelector(".body").parentNode.scrollTop)
        // document.querySelector(".body").parentNode.scrollTop = 0;
        
        this.loading = false;
      } else {
        this.total = 0;
        this.query_time = 0;
        this.resultflag = false;
        this.loading = false;
      }
    },
    view_details(ip) {
      this.CommonFunction.OpenNewBlank(ip, "Assetdetail", this);
      //   const { href } = this.$router.resolve({
      //     path: `/AssetDetail/${ip}`,
      //   });
      //   window.open(href, "_blank");
      //   // console.log('111')
      //   // this.$router.push({ path: `/Assetdetail/${ip}` })
    },
    open(ssl) {
      this.$alert('详情', "证书详情", {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.infohead {
  margin-bottom: 20px;
}
.infoleft {
  .el-row {
    text-align: left;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    height: 21px;
    line-height: 21px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.el-avatar {
  margin-right: 5px;
  :hover {
    background-color: #409eff;
  }
  :active {
    background-color: #002c6a;
  }
}
.item {
  margin-right: 20px;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 0px 12px;
  width: 829px;
  margin-right: calc(100% - 100vw);
}

.main_right {
  border: 1px solid #eee;
  color: rgba(0, 0, 0, 0.65);
  min-height: 17px;
  max-height: 207px;
  overflow: hidden;
}
.main_right:hover {
  overflow: auto;
}

.el-tag {
  height: auto;
  font-weight: 400;
  line-height: 22px;
  vertical-align: text-top;
  font-size: 12px;
}
</style>
<style>
.el-tooltip__popper.is-dark {
  opacity: 0.8;
}
</style>
