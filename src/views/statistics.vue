<template>
  <div>
    <el-row class="select">
      <el-col :span="8" >
        <div class="city">
          <city-select @SelectCity="city($event)"></city-select>
        </div>
        <div class="industry">
          <IndustrySelect></IndustrySelect>
        </div>

      </el-col>
      <el-col :span="16">

      </el-col>
    </el-row>

  </div>
</template>

<script>
// import citySelect from '../components/Home/citySelect.vue'

import citySelect from "../components/statistics/citySelect.vue"
import IndustrySelect from "../components/statistics/IndustrySelect01.vue"
export default {
  components: { citySelect, IndustrySelect },
  data() {
    return {

    }
  },
  methods: {
    city(e) {
      // console.log(e)
    }
  }

}
</script>

<style lang="less" scoped>

.city{

  margin-bottom: 250px;
}
.industry{
  height:60%
}
</style>