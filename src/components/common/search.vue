<!--
 分系统搜索页的组件
 包括搜索框、搜索帮助、导出帮助、左侧区域插槽、main侧区域插槽、页码，页数切换


'SystemName',系统名称中文名 'link',面包屑路径
'queryInfo',搜索信息 'total',统计数目 'query_time'搜索时长,
'searchtips'搜索帮助, 'resultflag'结果状态, 'asidewidth'左侧宽度,
'loading'loading状态,"category"系统名称中文名,

提供一个方法，获取页面数据
    getList () {
      this.$emit('getFaterList')
      //   <child @fatherMethod="fatherMethod"></child>
    },
-->
<template>
  <div class="body" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ SystemName }}系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: link }">{{ SystemName }}检索</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框及说明 -->
    <el-row :gutter="20" class="search">
      <el-col :span="10" :offset="7">
        <el-input placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query">
          <el-button slot="append" icon="el-icon-search" @click="getList()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-button class="btn_help" type="text" @click="dialogVisible = true"> <i class="el-icon-question"></i>帮助 </el-button>
        <el-dialog title="搜索说明" :visible.sync="dialogVisible">
          <span class="searchtips">{{ searchtips }}</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>

    <!-- 统计 -->
    <div class="div_1">
      <span class="statistic"
        >您搜到 <span class="sta_cha">{{ total }}</span> 条数据 , 用时<span class="sta_cha"> {{ query_time }} </span>秒
      </span>
      <!-- 导出 -->
      <span class="export">
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
      </span>
    </div>
    <el-container>
      <el-aside :width="asidewidth">
        <!-- 插槽aside -->
        <slot name="aside"></slot>
      </el-aside>
      <el-main>
        <div v-show="resultflag">
          <!-- 插槽main -->
          <slot name="main"> </slot>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :hide-on-single-page="true"
            :current-page="queryInfo.pagenum"
            :page-sizes="[10, 20, 50]"
            :page-size="queryInfo.eachpage"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            background
          >
          </el-pagination>
        </div>
        <div v-show="!resultflag">无结果</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ['SystemName', 'link', 'queryInfo', 'total', 'query_time', 'searchtips', 'resultflag', 'asidewidth', 'loading',"category",],
  data () {
    return {
      // loading: true,
      dialogVisible: false
    }
  },
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
    getList () {
      this.$emit('getFaterList')
      //   <child @fatherMethod="fatherMethod"></child>
    },
    handleSizeChange (newSize) {
      this.queryInfo.eachpage = newSize
      this.getList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getList()
    },
    handleCommand () {
      // console.log('下载')
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  padding: 20px;
}

.div_1 {
  position: relative;
  margin-bottom: 10px;
}
// 高度塌陷
.div_1:after {
  content: '';
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}
.searchtips {
  margin: 0 auto;
}
body > .el-container {
  margin-bottom: 40px;
}
.search {
  margin-bottom: 20px;
}
.statistic {
  font-size: 12px;
  margin-right: 280px；;
}
.export {
  float: right;
}
.sta_cha {
  color: #409eff;
}
.el-main {
  color: #333;
  // text-align: center;
  line-height: 20px !important;
  padding: 0px 0 20px 20px;
  height: 100%;
}
.el-pagination {
  margin-top: 20px;
  float: right;
  padding: 0px 5px 15px 5px;
}
.el-aside{
  overflow: hidden;
}
</style>
