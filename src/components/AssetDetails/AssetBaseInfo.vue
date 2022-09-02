<template>
  <el-card class="box-card" :body-style="{ margin: '28px 34px', padding:'0' }" >
    <div slot="header" class="clearfix">
      <span style="font-size: 28px;color: rgba(0,0,0,.85);font-weight: 600;">{{ this.$route.params.id }}</span>
      <el-button type="primary" size="mini" style="float:right">查看源数据</el-button>
    </div>
    <div>
      <el-row>
        <el-col :span="12">
          <!-- 统计 -->
          <el-row class="tongji">
            <el-col :span="6" v-for="item in ipBaseInfo.mess" :key="item.index">
              <el-row>
                <el-col :span="8">
                  <img :src="require('../../assets/asset/svg' + item.name + '.svg')" />
                </el-col>
                <el-col :span="16">
                  <el-row style="height:30px;lineHeight:30px;fontWeight: 700;fontSize: 22px;color: #000;">{{ item.num }}</el-row>
                  <el-row style="height:30px ;color: rgba(0,0,0,.45);font-size: 14px;">{{ item.describe }}</el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <!-- 信息 -->
          <el-row class="info">
            <el-col :span="4"> <i class="iconfont iconicon-dingwei"></i>&nbsp;国家地区 : </el-col>
            <el-col :span="20">
              {{ ipBaseInfo.country }}
            </el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="4"> <i class="iconfont iconwangluodizhi"></i>&nbsp;经度,纬度 : </el-col>
            <el-col :span="20"> {{ ipBaseInfo.longitude }},{{ ipBaseInfo.latitude }} </el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="4"> <i class="iconfont iconshujuyuan"></i>&nbsp;运营商 : </el-col>
            <el-col :span="20">
              {{ ipBaseInfo.isp }}
            </el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="4"> <i class="iconfont iconorgan"></i>&nbsp;运营商组织 : </el-col>
            <el-col :span="20">
              {{ ipBaseInfo.org }}
            </el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="4"> <i class="iconfont icontuopu"></i>&nbsp;ASN : </el-col>
            <el-col :span="20">
              {{ ipBaseInfo.asn }}
            </el-col>
          </el-row>
          <el-row class="info">
            <el-col :span="4"> <i class="iconfont icontongjier"></i>&nbsp;设备类型 : </el-col>
            <el-col :span="20">
              {{ ipBaseInfo.device_type }}
            </el-col>
          </el-row>
        </el-col>

        <!-- 地图 -->
        <el-col :span="12">
          <geomap :lat="ipBaseInfo.latitude" :lon="ipBaseInfo.longitude"></geomap>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import geomap from '../../components/common/geomap.vue'

export default {
  data () {
    return {
      ipBaseInfo: {}
    }
  },
  components: {
    geomap
  },
  created () {
    this.getbaseinfo()
  },
  methods: {
    async getbaseinfo () {
      const { data: res } = await this.$http.get('ip/baseinfo', {
        params: { ip: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      console.log(res)
      this.ipBaseInfo = res.data
    }
  }
}
</script>

<style lang="less" scoped>

.box-card{
    margin-bottom: 10px;
}
.map {
  // width: 100%;
  height: 360px;
  /deep/ .anchorBL {
    display: none;
  }
}
img {
  display: inline-block;
}
.tongji {
  margin-bottom: 25px;
}
.info {
  font-size: 15px;
  margin-bottom: 15px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
