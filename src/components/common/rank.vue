<!--
  TOP排名组件，传入排名类别、排名接口路径、排名接口参数
-->
<template>
  <el-card class="boxcard" v-loading="rankloading" element-loading-text="拼命加载中">
    <div slot="header" class="clearfix">
      <span>{{ category }}</span>
      <el-select v-model="value" size="mini" @change="change">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </div>
    <div v-for="item in ranklistdata" :key="item.index">
      <el-row class="list">
        <el-col :span="12">
          <span v-if="item.name">{{ item.name }}</span>
          <span v-else>无标记</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          {{ item.count }}
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script>
export default {
  props: ['category', 'path', 'rankrequest'],
  data () {
    return {
      options: [
        {
          value: '5',
          label: 'TOP 5'
        },
        {
          value: '50',
          label: 'TOP 50'
        }
      ],
      value: '5',
      ranklistdata: [],
      rankloading: false
    }
  },
  created () {
    this.getRankList()
  },
  methods: {
    async getRankList () {
      const { data: res } = await this.$http.get(this.path, {
        params: this.rankrequest
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取数据失败！')
      }

      if (res.data.length != 0) {
        //  console.log(res)
        this.ranklistdata = res.data
        this.rankloading = false
      }
    },
    change (data) {
      this.rankrequest.top_number = data
      this.rankloading = false
      this.getRankList()
    }
  }
}
</script>

<style lang="less" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.boxcard {
  width: 100%;
}
/deep/ .el-card__header {
  padding: 6px 24px;
  height: 40px;
  line-height: 27px;
  font-size: 15px;
  font-weight: 600;
  // line-height: 40px;
  border-bottom: 0px solid #e5e5e5;
  box-sizing: border-box;
}

.el-select {
  /deep/.el-input__inner {
    font-size: 14px;
    border: none;
    // padding: 0 -10px 0 0 ;
    padding: 0px;
    width: 78px;
  }

  float: right;
}
.list {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  padding: 5px 0;
  .el-col {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
/deep/.el-card__body {
  overflow: auto;
  max-height: 155px;
  padding: 0 24px 10px 24px;
}
/deep/.el-card__body::-webkit-scrollbar {
  width: 2px;
  height: 10px;
}
/deep/.el-card__body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #409eff;
}
/deep/.el-card__body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
