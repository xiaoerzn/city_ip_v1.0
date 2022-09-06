<template>
  <div class="body">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>自治域系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/ASinfo' }">AS查询</el-breadcrumb-item>
      <el-breadcrumb-item>AS{{this.$route.params.id}}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 头部 -->
    <div class="headinfo" height="600px">
      <!-- 基本信息栏 -->
      <base-info ></base-info>
    </div>
    <!-- 中部 -->
    <div class="MidInfo" height="1080px">
      <el-row :gutter="8">
        <!-- 注册信息 -->
        <el-col class="mid" :span="8">
          <whois></whois>
        </el-col>
        <!-- 变化情况 -->
        <el-col class="mid" :span="16">
          <change-info :test='test'></change-info>
        </el-col>
      </el-row>
    </div>
    <!-- 底部 -->
    <div class="RelationInfo" height="900px">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="商业关系" name="first">
          <commerce></commerce>
        </el-tab-pane>
        <el-tab-pane label="IXP" name="second">
          <ixp></ixp>
        </el-tab-pane>
        <el-tab-pane label="IP前缀" name="third">
          <ip></ip>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Commerce from '../../components/ASDetails/ASrelation/Commerce.vue'
import ip from '../../components/ASDetails/ASrelation/IPR.vue'
import ixp from '../../components/ASDetails/ASrelation/IXP.vue'
import Whois from '../../components/ASDetails/ASInfo/Whois.vue'
import ChangeInfo from '../../components/ASDetails/ASInfo/ChangeInfo.vue'
import BaseInfo from '../../components/ASDetails/ASInfo/BaseInfo.vue'

export default {
  data () {
    return {
      activeName: 'first',
      test: 'Test'
    }
  },
  name: 'detail',
  components: {
    Commerce,
    ip,
    ixp,
    Whois,
    ChangeInfo,
    BaseInfo
  },
  mounted () {
    // this.showDetail();
  },
  methods: {

    handleClick (tab, event) {
      // console.log(tab, event);
    },
    open () {
      this.$alert('搜索帮助,格式为', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  padding: 20px;
}

.headinfo .MidInfo {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.RelationInfo {
  // background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  width: 100%;
  padding: 0 !important;
}
/deep/ .el-tabs__item {
  font-size: 18px;
}
</style>
