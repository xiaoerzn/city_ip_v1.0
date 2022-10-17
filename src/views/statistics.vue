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
        :ASNum="as_num"
        :ASRate="as_rate"
        :DomainNum="domain_num"
        :DomainRate="domain_rate"
        :NewsNum="news_num"
        :NewsRate="news_rate"
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
      as_num:235435,
      as_rate :45,
      domain_num :67345,
      domain_rate :-20,
      news_num:5478,
      news_rate:57,
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
      let type=e.replace(/[^a-zA-Z]/g,'')
      let year=e.replace(/[^\d]/g,'')
      // console.log(kind)
      // console.log(year)
      // this.queryInfo.time=e
    },
    async getCityList() {
      const { data: res } = await this.$http.get('home/maplist')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.CityOptions = res.data
    },
    async getStaData(city,industry,type,year) {
      const { data: res } = await this.$http.get('as/as_info_search', {
        params: {city:'',industry:'',type:'',year:'2022'}
      })
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this[ type+ "_num"]=res.data
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






