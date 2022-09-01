   <template>
    <div>
        <el-radio-group v-model="radio1" @change="select">
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
                    <p><i class="iconfont icon-hangkonghangtian"></i></p>
                    <el-radio-button label="航 空"></el-radio-button>
                </el-col>
                <el-col :span="10">
                    <p><i class="iconfont icon-nengyuanhuagong"></i></p>
                    <el-radio-button label="能 源"></el-radio-button>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
                    <p><i class="iconfont icon-dianlijituan"></i></p>
                    <el-radio-button label="电 力"></el-radio-button>
                </el-col>
                <el-col :span="10">
                    <p><i class="iconfont icon-shuiliqiye"></i></p>
                    <el-radio-button label="水 利"></el-radio-button>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
                    <p><i class="iconfont icon-zuoce-jiaotongxianjiezhuanye"></i></p>
                    <el-radio-button label="交 通"></el-radio-button>
                </el-col>
                <el-col :span="10">
                    <p><i class="iconfont icon-jinrong"></i></p>
                    <el-radio-button label="金 融"></el-radio-button>
                </el-col>
            </el-row>
            <el-row type="flex" >
                <el-radio-button label="所有行业" class="all"></el-radio-button>
            </el-row>
        </el-radio-group>
    </div>
</template>

   <script>
export default {
    data() {
        return {
            radio1: '所有行业',

        };
    },
    methods:{
        select(e){
            this.$emit('SelectIndustry',e)
        }
    }
}
</script>

   <style lang="less" scoped>
   
  
   /deep/.el-radio-group {
       width: 100%;
   }
   
   /deep/.el-radio-button {
    
       height: 80px;
       width: 200px;
       font-size: 30px;
   
   }
   
   /deep/.el-radio-button__inner {
       height: 80px;
       width: 261px;
       font-size: 30px;
       line-height: 54px;
      
   }
   /deep/.all{
    .el-radio-button__inner {
    margin-left: 26px;
       height: 60px;
       width:575px;
       font-size: 30px;
       line-height: 34px;
   }
   }
   .el-row {
       margin-bottom: 20px;
   }
   p{
    margin-bottom: 10px;
   }
   </style>
