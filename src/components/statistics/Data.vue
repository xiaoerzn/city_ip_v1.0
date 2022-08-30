<template>
    <div>
        <el-row type="flex" justify="space-around">
            <el-col :span="10">
                <el-card class="asset-box-card">
                    <div slot="header" class="clearfix">
                        <span>资产总量</span>
                        <el-radio-group v-model="radio1" style="float: right; " @change="change_time">
                            <el-radio-button label="2022"></el-radio-button>
                            <el-radio-button label="2021"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                        <div>
                            <span class="num">{{Number(AssetNum).toLocaleString('en-US') }}</span>
                            <i v-if="AssetRate" class="el-icon-top"></i><i v-else class="el-icon-bottom"></i>
                            <span :class="[Number(AssetRate)?'rate1':'rate0']">{{ AssetRate }}%</span>
                        </div>
                        <div>

                        </div>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>资产总量</span>
                        <el-radio-group v-model="radio2" style="float: right; ">
                            <el-radio-button label="2022"></el-radio-button>
                            <el-radio-button label="2021"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">

            </el-col>
            <el-col :span="12">

            </el-col>
        </el-row>
    </div>

</template>

<script>


export default {
    props: ["AssetNum","AssetRate"],
    data() {
        return {
            radio1: '2022',
            radio2: '2022',


        };
    },
    methods:{
        change_time(e){
            this.$emit('time_select',e)
        },

    }
}
</script>

<style lang="less" scoped>
.asset-box-card {
    border-radius: 8px;
    border-top: 4px solid rgb(98, 54, 255);
}

.num {
    letter-spacing: 1px;
    margin-right: 12px;
    font-size: 40px;
    color: #36383b;
}
.el-icon-top{
    color: green;
    font-weight: 1000;
    font-size: 30px;
}
.el-icon-bottom{
        color: red;
    font-weight: 1000;
    font-size: 30px;
}
.rate1{
    font-size: 20px;
    color: green;
}
.rate0{
    font-size: 20px;
    color: red;
}
</style>