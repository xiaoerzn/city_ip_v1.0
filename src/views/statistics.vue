<template>
  <div>
    <el-row class="select">
      <el-col :span="8">
        <div class="city">
          <city-select @SelectCity="city($event)"></city-select>
        </div>
        <div class="industry">
          <IndustrySelect @SelectIndustry="industry($event)"></IndustrySelect>
        </div>

      </el-col>
      <el-col :span="16">
        <Data @time_select="timeSelect($event)" :AssetNum="asset_num" :AssetRate="asset_rate" :kind="Kind"></Data>
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
      Kind:'全部'
    }
  },
  methods: {
    city(e) {
      // console.log(e)
    },
    industry(e) {
      this.Kind=e
      // console.log(e)
    },
    timeSelect(e) {
      console.log(e)
    }
  }

}
</script>

<style lang="less" scoped>
.city {

  margin-bottom: 250px;
}

.industry {
  height: 60%
}
</style>