   <template>
    <div>
        <el-radio-group v-model="radio1">
            <el-row :gutter="20">
                <el-col :span="12" :offset="0"> <el-radio-button label="上海"></el-radio-button></el-col>
                <el-col :span="12" :offset="0"><el-radio-button label="北京"></el-radio-button></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="0"><el-radio-button label="广州"></el-radio-button></el-col>
                <el-col :span="12" :offset="0"><el-radio-button label="深圳"></el-radio-button></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="0"><el-radio-button label="深1"></el-radio-button></el-col>
                <el-col :span="12" :offset="0"><el-radio-button label="深2"></el-radio-button></el-col>
            </el-row>

        </el-radio-group>
    </div>
</template>
   
   <script>
export default {
    data() {
        return {
            radio1: '上海',
            radio2: '上海',
            radio3: '上海',
            radio4: '上海'
        };
    }
}
</script>
   
   <style>
   .el-radio-button {
       margin-right: 50px;
   }
   </style>
