<template>
  <div>
    <i class="el-icon-info" style="color: #409eff" @click="open_info"></i>
    <el-dropdown @command="Download">
      <span class="el-dropdown-link">
        导出文件<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="json">json</el-dropdown-item>
        <el-dropdown-item command="csv">csv</el-dropdown-item>
        <el-dropdown-item command="xml">xml</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: ["category", "queryInfo"],
  methods: {
    open_info() {
      const h = this.$createElement;
      this.$notify({
        title: "导出帮助",
        message: h(
          "i",
          { style: "color: teal;white-space:normal" },
          "点击导出，导出当前查询条件下的当前页面结果到本地，文件命名格式为： EXP-RES" +
            this.category +
            "-yyyMMddhhmmss.XXX"
        ),
        duration: 0,
      });
    },
    Download(command) {
      var date= new Date().Format("yyyy-MM-dd hh:mm:ss");
      this.CommonFunction.DownloadFile(
        "http://10.15.1.192:8000/api/"+this.category+"/down?eachpage="+this.queryInfo.eachpage+"&pagenum="+this.queryInfo.pagenum+"&filetype="+command,
        "EXP-RES-" +this.category +this.queryInfo.query+"-"+date+'.'+command
      );
},
  },
};
</script>

<style>
</style>