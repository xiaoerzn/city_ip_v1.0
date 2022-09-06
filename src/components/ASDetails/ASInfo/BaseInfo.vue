<template>
  <div>
    <!-- 信息条 -->
    <el-card class="AScard" :body-style="{ padding: '0px',  }">
      <el-row class="infotab">
        <el-col :span="3"> <i class="iconfont icondiqiu"></i> ASN {{ this.asbaseinfo.asn }} </el-col>
        <el-col :span="3">{{ this.asbaseinfo.as_name }}</el-col>
        <el-col :span="9" style="text-align: right"
          ><i class="iconfont iconshijian"></i>
          <time class="time">{{ currentDate }}</time>
        </el-col>
        <el-col :span="5" style="text-align: right">
          <el-button type="primary" size="mini">查看源数据</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="btn_help" type="text" @click="dialog = true"> <i class="el-icon-question"></i>字段含义 </el-button>
          <!-- 含义 -->
          <el-dialog title="字段含义" :visible.sync="dialog">
            <info-desc></info-desc>
          </el-dialog>
        </el-col>
      </el-row>
    </el-card>

    <!-- 基础信息 -->
    <el-card :body-style="{  padding: '30px 20px' }">
      <el-row>
        <!-- 左侧固定信息 -->
        <el-col :span="8" >
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconicon-dingwei"></i>&nbsp;国家地区 : </el-col>
            <el-col :span="14">{{ asbaseinfo.country }}&nbsp; &nbsp;&nbsp;<img :src="`http://10.15.1.192:8000/static/${asbaseinfo.country}.png`"></el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconorgan"></i>&nbsp;所属组织 : </el-col>
            <!-- <el-col :span="14" :title="asbaseinfo.as_org">{{ asbaseinfo.as_org }}</el-col> -->
            <el-col :span="14" >{{ asbaseinfo.as_org }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconid"></i>&nbsp;组织ID : </el-col>
            <el-col :span="14">{{ asbaseinfo.ASOrgId }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconjingweidu"></i>&nbsp;经纬度 : </el-col>
            <el-col :span="14">{{ asbaseinfo.lat }} , {{ asbaseinfo.lon }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconguanchaliang"></i>&nbsp;LookingGlass : </el-col>
            <el-col :span="14">{{ asbaseinfo.looking_glass }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconluyou"></i>&nbsp;Route Server :</el-col>
            <el-col :span="14">{{ asbaseinfo.route_server }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconcengcibuju"></i>&nbsp;层次 :</el-col>
            <el-col :span="14">{{ asbaseinfo.level }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconquanzhong"></i>&nbsp;权重 :</el-col>
            <el-col :span="14">{{ asbaseinfo.weigh }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconwangluodizhi"></i>&nbsp;地址类型:</el-col>
            <el-col :span="14">
              <i v-if="asbaseinfo.ip_type == 0" class="iconfont iconi4"></i>
              <i v-else-if="asbaseinfo.ip_type == 1" class="iconfont iconi6"></i>
              <i v-else class="iconfont iconall"></i>
            </el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="10"><i class="iconfont iconshujuyuan"></i>&nbsp;来源 :</el-col>
            <el-col :span="14">{{ asbaseinfo.source }}</el-col>
          </el-row>
        </el-col>
        <!-- 中部动态信息 -->
        <el-col :span="9">
          <el-row class="row-basinfo">
            <el-col :span="8">前缀 ( Originated ) :</el-col>
            <el-col :span="6"
              ><i class="iconfont iconall"></i>&nbsp;
              {{ asbaseinfo.prefixes_originated_all }}
            </el-col>
            <el-col :span="5"
              ><i class="iconfont iconi4"></i>&nbsp;
              {{ asbaseinfo.prefixes_originated_v4 }}
            </el-col>
            <el-col :span="5"
              ><i class="iconfont iconi6"></i>&nbsp;
              {{ asbaseinfo.prefixes_originated_v6 }}
            </el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">前缀 ( Announced ) :</el-col>
            <el-col :span="6"
              ><i class="iconfont iconall"></i>&nbsp;
              {{ asbaseinfo.prefixes_announced_all }}
            </el-col>
            <el-col :span="5"><i class="iconfont iconi4"></i>&nbsp;{{ asbaseinfo.prefixes_announced_v4 }}</el-col>
            <el-col :span="5"><i class="iconfont iconi6"></i>&nbsp;{{ asbaseinfo.prefixes_announced_v6 }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">RPKI ( Originated ) :</el-col>
            <el-col :span="6"
              ><i class="iconfont iconall"></i>&nbsp;
              {{asbaseinfo.rpki_originated_valid_all}}
              (
              {{ asbaseinfo.rpki_originated_invalid_all }}
              )</el-col
            >
            <el-col :span="5"><i class="iconfont iconi4"></i>&nbsp;{{ asbaseinfo.rpki_originated_valid_v4 }} ( {{ asbaseinfo.rpki_originated_invalid_v4 }} ) </el-col>
            <el-col :span="5"><i class="iconfont iconi6"></i>&nbsp;{{ asbaseinfo.rpki_originated_valid_v6 }} ( {{ asbaseinfo.rpki_originated_invalid_v6 }} )</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">IP地址数量 :</el-col>
            <el-col :span="6"><i class="iconfont iconall"></i>&nbsp;{{ Number(asbaseinfo.ipv4_count) + Number(asbaseinfo.ipv6_count) }}</el-col>
            <el-col :span="5"><i class="iconfont iconi4"></i>&nbsp;{{ asbaseinfo.ipv4_count }}</el-col>
            <el-col :span="5"><i class="iconfont iconi6"></i>&nbsp;{{ asbaseinfo.ipv6_count }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">AS路径数量 :</el-col>
            <el-col :span="6"> <i class="iconfont iconall"></i>&nbsp;{{ Number(asbaseinfo.as_paths_observed_v4) + Number(asbaseinfo.as_paths_observed_v6) }} </el-col>
            <el-col :span="5"><i class="iconfont iconi4"></i>&nbsp;{{ asbaseinfo.as_paths_observed_v4 }} </el-col>
            <el-col :span="5"><i class="iconfont iconi6"></i>&nbsp;{{ asbaseinfo.as_paths_observed_v6 }} </el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">平均路径长度 :</el-col>
            <el-col :span="6"
              ><i class="iconfont iconall"></i>&nbsp;
              {{asbaseinfo.avg_as_path_length_all}}
            </el-col>
            <el-col :span="5"><i class="iconfont iconi4"></i>&nbsp;{{ asbaseinfo.avg_as_path_length_v4 }} </el-col>
            <el-col :span="5"><i class="iconfont iconi6"></i>&nbsp;{{ asbaseinfo.avg_as_path_length_v6 }} </el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">Cone AS数量 :</el-col>
            <el-col :span="16">{{ asbaseinfo.customer_cone_asn }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">Transits数量 :</el-col>
            <el-col :span="16">{{ asbaseinfo.as_transit }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">IX数量 :</el-col>
            <el-col :span="16">{{ asbaseinfo.ixp_count }}</el-col>
          </el-row>
          <el-row class="row-basinfo">
            <el-col :span="8">Global Degree :</el-col>
            <el-col :span="16"
              >{{ Number(asbaseinfo.as_customer) + Number(asbaseinfo.as_provider) + Number(asbaseinfo.as_peer) + Number(asbaseinfo.as_sibling) }} ( {{ asbaseinfo.as_customer }}, {{ asbaseinfo.as_provider }},
              {{ asbaseinfo.as_peer }}, {{ asbaseinfo.as_sibling }} )</el-col
            >
          </el-row>
        </el-col>
        <!-- 地图 -->
        <el-col :span="7">
          <geomap :lat="asbaseinfo.lat" :lon="asbaseinfo.lon"> </geomap>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import NewDtime from '../../../../src/common'
import InfoDesc from './InfoDesc.vue'
import geomap from '../../common/geomap.vue'
export default {
  created () {
    this.getBaseInfo()
    // console.log(this.$route.params.id)
  },
  components: { InfoDesc, geomap },
  data () {
    return {
      //   asbaseinfo: {
      //     asn: "3356",
      //     as_name: "level3",
      //     country: "美国",
      //     region: "波士顿",
      //     city: "洛杉矶",
      //     as_org: "Level 3 Parent,LLc",
      //     lon: "-71.05",
      //     lat: "42.2",
      //     looking_glass: "http://lg.airgapped.io/",
      //     route_server: "http://airgapped.io",
      //     level: "5",
      //     weigh: "3",
      //     ip_type: "0",
      //     source: "APNIC Whois Database",
      //     ASOrgId: "ORG-APNI1-AP",
      //     prefixes_originated_v4: "1022",
      //     prefixes_originated_v6: "1522",
      //     prefixes_announced_v4: "2022",
      //     prefixes_announced_v6: "2522",
      //     rpki_originated_valid_v4: "3022",
      //     rpki_originated_valid_v6: "2022",
      //     rpki_originated_invalid_v4: "8222",
      //     rpki_originated_invalid_v6: "7222",
      //     ipv4_count: "2222",
      //     ipv6_count: "3322",
      //     avg_as_path_length_v4: "1592",
      //     avg_as_path_length_v6: "1992",
      //     customer_cone_asn: "3662",
      //     as_transit: "3622",
      //     ixp_count: "2822",
      //     as_customer: "4444",
      //     as_provider: "5555",
      //     as_peer: "5888",
      //     as_sibling: "2425",
      //     as_paths_observed_v4: "4524",
      //     as_paths_observed_v6: "5345",
      //   },
      asbaseinfo: '',
      dialog: false,
      currentDate: NewDtime.NewDtime
    }
  },
  methods: {
    async getBaseInfo () {
      const { data: res } = await this.$http.get('as_base_info', {
        params: { asn: this.$route.params.id }
      })
      // console.log(res)
      // console.log(this.$route.params.id)
      if (res.meta.status !== 200) {
        return this.$message.error('获取信息失败！')
      }
      this.asbaseinfo = res.asdata
    }
  }

}
</script>

<style lang="less" scoped>
.AScard {
  margin: 20px 0 20px 0;
  padding: 0 10px;
  font-size: 20px;
  color:rgba(0, 0, 0, 0.65)
}
.infotab {
  // display: inline-flex;
  // align-items: center;
  height: 42px;
  line-height: 42px;
  // width: 100%;
}
.btn_help {
  float: right;
}
.row-basinfo {
  // height: 34px;
  .el-col{
        word-wrap: break-word;
        white-space: normal;
        margin-bottom: 16px;
  }
  // line-height: 34px;
}
.time {
  font-size: 18px;
  color: #999;
}
.map {
  // width: 100%;
  height: 360px;
  /deep/ .anchorBL {
    display: none;
  }
}
</style>
