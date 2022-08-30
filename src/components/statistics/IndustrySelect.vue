<template>
    <div>
        <el-row type="flex" justify="space-around">
            <el-col :span="10">
                <el-button  @click="change" >航空</el-button>
            </el-col>
            <el-col :span="10">
                <el-button type="primary">能源</el-button>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col :span="10">
                <el-button type="primary">电力</el-button>
            </el-col>
            <el-col :span="10">
                <el-button type="primary">水利</el-button>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col :span="10">
                <el-button type="primary">交通</el-button>
            </el-col>
            <el-col :span="10">
                <el-button type="primary">金融</el-button>
            </el-col>
        </el-row>

    </div>

</template>

<script>
export default {
data(){
    return{
        f1:true,
        f2:false
    }
},
methods:{
    change(){
        this.f1=!this.f1
        this.f2=!this.f2
    }
}
}
</script>

<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
}

.el-button {
    height: 80px;
    width: 200px;
    font-size: 30px;

    border: 0px;
}
.type1{
  background-color: #1d4266
}
.type1:active{
    background-color: #355677
}

.type2{
  background-color: #597b9e
}
.type2:active{
    background-color: #355677
}

</style>