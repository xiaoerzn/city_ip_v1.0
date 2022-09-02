<template>
  <div class="body">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>域名系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/node1' }">域名查询</el-breadcrumb-item>
      <el-breadcrumb-item>域名{{ this.$route.params.id }}详情</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      <span class="domainname">域名&nbsp;{{ this.$route.params.id }}&nbsp;详情</span>
    </p>
    <!-- 基础信息 -->
    <p><img class="icon" src="../../assets/domain/domainbase.png" />&nbsp;<span class="lable">基础信息</span></p>
    <domain-base></domain-base>

    <!--第二层  -->
    <el-row :gutter="20">
      <!-- Whois -->
      <el-col :span="12">
        <p><img class="icon" src="../../assets/domain/network.png" />&nbsp;<span class="lable">Whios信息</span></p>
        <domain-whios></domain-whios>
      </el-col>
      <!-- IPlist -->

      <el-col :span="12">
        <p><img class="icon" src="../../assets/domain/IP.png" />&nbsp;<span class="lable">解析IP信息</span></p>
        <el-tabs type="border-card" stretch>
          <el-tab-pane label="当前解析IP">
            <current-ip-list></current-ip-list>
          </el-tab-pane>
          <el-tab-pane label="历史解析IP">
            <history-ip></history-ip>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <!-- 第三层 -->

    <el-row :gutter="10">
      <p><img class="icon" src="../../assets/domain/liebiao.png" />&nbsp;<span class="lable">域名谱系关系</span></p>
      <el-col :span="6">
        <el-tabs type="border-card" stretch class="tabtwo">
          <el-tab-pane label="子域名">
            <sub-domain></sub-domain>
          </el-tab-pane>
          <el-tab-pane label="关联域名">
            <link-domain></link-domain>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="10">
        <parse-path></parse-path>
      </el-col>
      <el-col :span="8" >
        <domainssl></domainssl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CurrentIpList from '../../components/DomainDetail/CurrentIpList.vue'
import HistoryIp from '../../components/DomainDetail/HistoryIp.vue'
import LinkDomain from '../../components/DomainDetail/LinkDomain.vue'
import ParsePath from '../../components/DomainDetail/ParsePath_v2.vue'
import SubDomain from '../../components/DomainDetail/SubDomain.vue'
import domainssl from '../../components/DomainDetail/DomainSSL.vue'
import DomainWhios from '../../components/DomainDetail/DomainWhios.vue'
import DomainBase from '../../components/DomainDetail/DomainBase.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    CurrentIpList,
    HistoryIp,
    LinkDomain,
    ParsePath,
    SubDomain,
    domainssl,
    DomainWhios,
    DomainBase
  },
  created () {},
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  padding: 20px;
}

.domainname {
  background-color: #eaf6ff;
  color: #1d79c2;
  padding: 5px 0px;
  font-size: 20px;
}

.icon {
  height: 24px;
  width: 24px;
  // vertical-align: baseline;
}
.lable {
  font-size: 18px;
  color: #1d79c2;
}
/deep/ .el-tabs__item {
  font-size: 16px;
}
.tabtwo{
  height: 558px;
}

</style>
