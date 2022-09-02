<template>
  <div>
    <h4><i class="el-icon-s-platform"></i>&nbsp;端口服务</h4>
    <el-tag v-for="item in ipPortInfo" :key="item.index" size="small">{{ item.server }}</el-tag>
    <el-divider></el-divider>
    <div v-for="item in ipPortInfo" :key="item.index" class="info">
      <el-row>
        <el-col :span="12">{{ item.server }}</el-col>
        <el-col :span="12" style="text-align: right"><i class="el-icon-time"></i>&nbsp;{{ item.date }}</el-col>
        <!-- 动态补齐空位 -->
        <el-row :gutter="20">
          <el-col :span="12" v-if="!!item.title"><i class="el-icon-c-scale-to-original"></i>&nbsp;网站标题:{{ item.title }}</el-col>
          <el-col :span="12" v-if="!!item.device"><i class="el-icon-printer"></i>&nbsp;设备名称:{{ item.device }}</el-col>

          <el-col :span="12" v-if="!!item.evice_type"><i class="el-icon-box"></i>&nbsp;设备类型:{{ item.device_type }}</el-col>
          <el-col :span="12" v-if="!!item.model"><i class="el-icon-notebook-2"></i>&nbsp;设备型号:{{ item.model }}</el-col>

          <el-col :span="12" v-if="!!item.brand"><i class="el-icon-camera"></i>&nbsp;品牌名称:{{ item.brand }}</el-col>
          <el-col :span="12" v-if="!!item.manufacture"><i class="el-icon-office-building"></i>&nbsp;厂商名称:{{ item.manufacture }}</el-col>

          <el-col :span="12" v-if="!!item.country"><i class="el-icon-school"></i>&nbsp;设备原产地:{{ item.country }}</el-col>
          <el-col :span="12" v-if="!!item.os"><i class="el-icon-monitor"></i>&nbsp;操作系统:{{ item.os }}</el-col>

          <el-col :span="12" v-if="!!item.os"><i class="el-icon-monitor"></i>&nbsp;OS名称:{{ item.os }}</el-col>
          <el-col :span="12" v-if="!!item.component"><i class="el-icon-printer"></i>&nbsp;组件名称:{{ item.component }}</el-col>
        </el-row>
      </el-row>

      <!-- 标签 -->
      <i class="el-icon-collection-tag"></i>&nbsp;&nbsp;&nbsp;
      <!-- <el-tag :key="tag" v-for="tag in dynamicTags(item)" v-show="tag"  :disable-transitions="false" > -->
      <el-tag :key="tag" v-for="tag in [item.country, item.device, item.manufacture, item.component]" v-show="tag" :disable-transitions="false" size="medium">
        {{ tag }}
      </el-tag>
      <el-tag :key="tag" v-for="tag in dynamicTags" v-show="tag" :disable-transitions="false" size="medium">
        {{ tag }}
      </el-tag>
      <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"> </el-input>
      <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ 用户自定义标签</el-button>
      <!--SSL-->
      <div class="ssl">
        <pre>{{ item.ssl }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ipPortInfo: {},
      inputVisible: false,
      inputValue: '',
      dynamicTags: []
      // dynamicTags:[item.country, item.device, item.manufacture, item.component],
    }
  },
  created () {
    this.getportinfo()
  },
  mounted () {
    // this.dynamicTags=this.$refs.ipPortInfo
  },

  methods: {
    async getportinfo () {
      const { data: res } = await this.$http.get('ip/portinfo', {
        params: { ip: this.$route.params.id }
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }
      // console.log(res)
      this.ipPortInfo = res.data
      // this.$nextTick(()=>{
      //   this.dynamicTags=this.$refs.ipPortInfo
      //   console.log(this.dynamicTags)

      // })
    },
    // dynamicTags(item) {
    //   let a = [item.country, item.device, item.manufacture, item.component]
    //   return a
    // },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput[0].$refs.input.focus()
      })
    },
    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="less" scoped>
.el-tag {
  margin-right: 8px;
}

.info {
  i {
    color: rgb(4 82 180);
    font-size: 16px;
    font-weight: 600;
  }
  .el-col {
    line-height: 20px;
    font-size: 14px;
    padding-bottom: 16px;
    color: rgba(0, 0, 0, 0.65);
    word-break: break-all;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
.ssl {
  border: 1px solid #eee;
  color: rgba(0, 0, 0, 0.65);
  min-height: 17px;
  max-height: 207px;
  overflow: hidden;
  margin-top: 16px;
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 0px 12px;
    width: 829px;
    margin-right: calc(100% - 100vw);
  }
}
.ssl:hover {
  overflow: auto;
}
</style>
