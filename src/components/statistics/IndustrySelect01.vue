   <template>
    <div>
        <el-radio-group v-model="radio1" @change="select">
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
                    <el-radio-button label="航空"></el-radio-button>
                </el-col>
                <el-col :span="10">
                    <el-radio-button label="能源"></el-radio-button>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
                    <el-radio-button label="电力"></el-radio-button>
                </el-col>
                <el-col :span="10">
                    <el-radio-button label="水利"></el-radio-button>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
                    <el-radio-button label="交通"></el-radio-button>
                </el-col>
                <el-col :span="10">
                    <el-radio-button label="金融"></el-radio-button>
                </el-col>
            </el-row>
            <el-row type="flex" >
                <el-radio-button label="全部" class="all"></el-radio-button>
            </el-row>
        </el-radio-group>
    </div>
</template>

   <script>
export default {
    data() {
        return {
            radio1: '全部',

        };
    },
    methods:{
        select(e){
            this.$emit('SelectIndustry',e)
        }
    }
}
</script>

   <style lang="less" >
   
  
   .el-radio-group {
       width: 100%;
   }
   
   .el-radio-button {
    
       height: 80px;
       width: 200px;
       font-size: 30px;
   
   }
   
   .el-radio-button__inner {
       height: 80px;
       width: 180px;
       font-size: 30px;
       line-height: 54px;
      
   }
   .all{
    .el-radio-button__inner {
        margin-left: 26px;
       height: 60px;
       width: 495px;
       font-size: 30px;
       line-height: 34px;
   }
   }
   .el-row {
       margin-bottom: 20px;
   }
   </style>
