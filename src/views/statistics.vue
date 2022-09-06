<template>
  <div>
    <el-row class="select">
      <el-col :span="8">
        <div class="city">
          <city-select  :options="CityOptions" @SelectCity="citySelect($event)"></city-select>
        </div>
        <div class="industry">
          <IndustrySelect @SelectIndustry="industrySelect($event)"></IndustrySelect>
        </div>

      </el-col>
      <el-col :span="16">
        <Data @time_select="timeSelect($event)"
        :AssetNum="asset_num"
        :AssetRate="asset_rate" 
        :ASNum="AS_num" 
        :ASRate="AS_rate" 
        :DomainNum="Domain_num" 
        :DomainRate="Domain_rate" 
        :NewsNum="News_num" 
        :NewsRate="News_rate"
        :kind="Kind"></Data>
      </el-col>
    </el-row>

  </div>
</template>

<script>
// import citySelect from '../components/Home/citySelect.vue'

import citySelect from "../components/statistics/citySelect.vue"
import IndustrySelect from "../components/statistics/IndustrySelect01.vue"
import Data from "../components/statistics/Data.vue"
export default {
  components: { citySelect, IndustrySelect, Data },

  data() {
    return {
      asset_num: 12344234,
      asset_rate:'-13',
      AS_num:235435,
      AS_rate :45,
      Domain_num :67345,
      Domain_rate :-20,
      News_num:5478,
      News_rate:57,
      Kind:'所有行业',
      CityOptions:[],
      queryInfo:{city:'',industry:'',time:'2022'}
    }
  },
 created() {
  this.getCityList()
  },
  methods: {
    citySelect(e) {
      this.queryInfo.city=e
      // console.log(e)
    },
    industrySelect(e) {
      this.Kind=e
      this.queryInfo.industry=e
      // console.log(e)
    },
    timeSelect(e) {
      console.log(e)
      // this.queryInfo.time=e
    },
    async getCityList() {
      const { data: res } = await this.$http.get('home/maplist')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.CityOptions = res.data
    },
    async getStaData() {
      const { data: res } = await this.$http.get('as_info_search', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.asset_num = res.data
      this.asset_rate=1;
      this.AS_num=235435;
      this.AS_rate=45;
      this.Domain_num =67345;
      this.Domain_rate =-20;
      this.News_num=5478;
      this.News_rate=57;
      // console.log(res)
    },
  }

}
</script>

<style lang="less" scoped>
.city {
  margin-bottom: 120px;
}

.industry {
  height: 60%
}
</style>






