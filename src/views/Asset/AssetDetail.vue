<template>
  <div class="body">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>资产系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/IPlocating1' }"
        >Asset查询</el-breadcrumb-item
      >
      <el-breadcrumb-item>IP{{ this.$route.params.id }}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 基本信息栏 -->
    <BaseInfo class="headinfo" height="580px"></BaseInfo>

    <!-- 服务漏洞 -->
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="服务和漏洞" name="first">
          <el-row :gutter="30">
            <el-col :span="12" >
              <AssetTag></AssetTag>
              <AssetBug></AssetBug>
            </el-col>
            <el-col :span="12">
              <AssetPortServe></AssetPortServe>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="预留位" name="second"> 未定义 </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import BaseInfo from "../../components/AssetDetails/AssetBaseInfo.vue";
import AssetPortServe from "../../components/AssetDetails/AssetPortServe.vue";
import AssetTag from "../../components/AssetDetails/AssetTag.vue";
import AssetBug from "../../components/AssetDetails/AssetBug.vue";


export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    BaseInfo,
    AssetPortServe,
    AssetTag,
    AssetBug,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.body {
  padding: 20px;
}
/deep/.el-tabs__item {
  line-height: 1.5;
  font-size: 16px;
  font-weight: 600;
}
</style>
