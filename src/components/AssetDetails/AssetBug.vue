<template>
  <div>
    <h4><i class="el-icon-s-marketing"></i>&nbsp;漏洞信息</h4>
    <!-- 漏洞统计 -->
    <div class="box">
      <h4><i class="el-icon-s-grid"></i>&nbsp;已验证漏洞</h4>
      <el-row>
        <el-col :span="6">
          <h5>{{ BugInfoData.bugsum }}</h5>
          <p>总数量</p>
        </el-col>
        <el-col :span="6">
          <h5>{{ BugInfoData.highrisk }}</h5>
          <p><i class="el-icon-warning" style="color:red"></i>高危</p>
        </el-col>
        <el-col :span="6">
          <h5>{{ BugInfoData.mediumrisk }}</h5>
          <p><i class="el-icon-warning" style="color: orange"></i>中危</p>
        </el-col>
        <el-col :span="6">
          <h5>{{ BugInfoData.lowrisk }}</h5>
          <p><i class="el-icon-warning" style="color: #52c41a"></i>低危</p>
        </el-col>
      </el-row>
    </div>

    <h4><i class="el-icon-s-data"></i>&nbsp;漏洞列表</h4>
    <!-- 漏洞信息 -->
    <el-table :data="BugInfoData.buglist" style="width: 100%">
      <el-table-column prop="name" label="名称" width="280"> </el-table-column>
      <el-table-column  label="等级" width="100">
        <template slot-scope="scope">
          <span :style="{color:scope.row.color }">{{ scope.row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="150">
      </el-table-column>
      <el-table-column prop="id" label="CVE"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BugInfoData: {},
    };
  },
  created() {
    this.getBugInfo();
  },
  methods: {
    async getBugInfo() {
      const { data: res } = await this.$http.get("ip/bugmess", {
        params: { ip: this.$route.params.id },
      });
      if (res.meta.status !== 200) {
        return this.$message.error("获取数据失败，请刷新重试");
      }
      this.BugInfoData = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 50%;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  padding: 12px;
  h4 {
    margin: 0 0 10px 0;
  }
}

h5 {
  margin: 0 0 10px 0;
  text-align: center;
}
p {
  text-align: center;
  font-size: 14px;
  margin: 0;
}
.el-row {
  color: rgba(0, 0, 0, 0.65);
}
</style>
