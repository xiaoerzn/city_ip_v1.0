<template>
  <div class="container">
    <el-card class="box-card" :body-style="elcardbody">
      <div slot="header" class="clearfix"><span>国家</span></div>
      <p v-show="isOpenCountry || index < max" v-for="(item, index) in TopCountryList" :key="index">
        <span :style="cardspanleft">{{ item.country }}</span>
        <span :style="cardspanright">{{ item.count }}</span>
      </p>
      <p :style="arrow">
        <i v-show="!isOpenCountry && list.length > max" @click="isOpenCountry = !isOpenCountry" class="el-icon-arrow-down"></i>
        <i v-show="isOpenCountry && list.length > max" @click="isOpenCountry = !isOpenCountry" class="el-icon-arrow-up"></i>
      </p>
    </el-card>

    <el-card class="box-card" :body-style="elcardbody">
      <div slot="header" class="clearfix"><span>服务协议</span></div>
      <p v-show="isOpenService || index < max" v-for="(item, index) in list" :key="index">
        <span :style="cardspanleft">{{ item.label }}</span><span :style="cardspanright">{{ item.value }}</span>
      </p>
      <p :style="arrow">
        <i v-show="!isOpenService && list.length > max" @click="isOpenService = !isOpenService" class="el-icon-arrow-down"></i>
        <i v-show="isOpenService && list.length > max" @click="isOpenService = !isOpenService" class="el-icon-arrow-up"></i>
      </p>
    </el-card>

    <el-card class="box-card" :body-style="elcardbody">
      <div slot="header" class="clearfix"><span>运营商</span></div>
      <p v-show="isOpenOperator || index < max" v-for="(item, index) in list" :key="index">
        <span :style="cardspanleft">{{ item.label }}</span><span :style="cardspanright">{{ item.value }}</span>
      </p>
      <p :style="arrow">
        <i v-show="!isOpenOperator && list.length > max" @click="isOpenOperator = !isOpenOperator" class="el-icon-arrow-down"></i>
        <i v-show="isOpenOperator && list.length > max" @click="isOpenOperator = !isOpenOperator" class="el-icon-arrow-up"></i>
      </p>
    </el-card>

    <el-card class="box-card" :body-style="elcardbody">
      <div slot="header" class="clearfix"><span>自治域编号</span></div>
      <p v-show="isOpenAS || index < max" v-for="(item, index) in list" :key="index">
        <span :style="cardspanleft">{{ item.label }}</span><span :style="cardspanright">{{ item.value }}</span>
      </p>
      <p :style="arrow">
        <i v-show="!isOpenAS && list.length > max" @click="isOpenAS = !isOpenAS" class="el-icon-arrow-down"></i>
        <i v-show="isOpenAS && list.length > max" @click="isOpenAS = !isOpenAS" class="el-icon-arrow-up"></i>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 3, // 默认最多显示的个数；最大行数*每行显示的个数 Number
      isOpenCountry: false, // 是否展开全部信息的标识 Boolean 默认false
      isOpenService: false,
      isOpenOperator: false,
      isOpenAS: false,
      elcardbody: { padding: "7px 10px", height: "100%", fontSize: "14px" },
      cardspanright: {
        color: "#7F7F7F",
        width: "50%",
        display: "inline-block",
        textAlign: "right",
      },
      cardspanleft: { color: "#409eff", width: "50%", display: "inline-block" },
      arrow: { textAlign: "center", margin: "0px" },
      list: [
        { label: "美国", value: "77,267,505" },
        { label: "日本", value: "6,540,566" },
        { label: "印度", value: "11,773,029" },
        { label: "中国台湾", value: "1,751,108" },
        { label: "韩国", value: "11,773,029" },
        { label: "英国", value: "1,773,029" },
        { label: "德国", value: "11,773,029" },
        { label: "俄罗斯", value: "1,773,029" },
        { label: "哈萨克斯坦", value: "11,773,029" },
      ],
      TopCountryList: [],
    };
  },
  created() {
    this.getTopCountryInfo();
  },
  methods: {
    async getTopCountryInfo() {
      const { data: res } = await this.$http.get("domain/tops_country");
      if (res.meta.status !== 200) {
        return this.$message.error("获取默认列表失败！");
      }
      this.TopCountryList = res.data;
      // console.log(res)
    },
  },
};
</script>

<style lang="less" scoped>
.el-card {
  border-bottom: 6px solid #e5e5e5;
  padding: 0px 10px;
}
/deep/ .el-card__header {
  padding: 0px 10px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Songti SC";
  font-weight: bold;
  text-align: left;
}
</style>
