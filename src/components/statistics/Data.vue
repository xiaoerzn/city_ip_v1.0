<template>
    <div class="DataDIV">
        <el-row type="flex" justify="space-around">
            <el-col :span="10">
                <el-card class="asset-box-card">
                    <div slot="header" class="clearfix">
                        <span>资产总量-{{ kind }}</span> &nbsp;<el-button type="text" icon="el-icon-view" @click="view_asset()" >查看详情</el-button>
                        <el-radio-group v-model="radio1" style="float: right; " @change="change_time">
                            <el-radio-button label="2022"></el-radio-button>
                            <el-radio-button label="2021"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="card_body">
                        <div>
                            <span class="num">{{ Number(AssetNum).toLocaleString('en-US') }}</span>
                            <i v-if="Number(AssetRate) > 0" class="el-icon-top"></i><i v-else
                                class="el-icon-bottom"></i>
                            <span :class="[Number(AssetRate) > 0 ? 'rate1' : 'rate0']">{{ AssetRate }}%</span>
                        </div>
                        <div>
                            <img src="../../assets/sta/staPic/purple.png" alt="">
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="Domain-box-card">
                    <div slot="header" class="clearfix">
                        <span>域名总量-{{ kind }}</span>&nbsp;<el-button type="text" icon="el-icon-view" @click="view_domain()" >查看详情</el-button>
                        <el-radio-group v-model="radio2" style="float: right; " @change="change_time">
                            <el-radio-button label="2022"></el-radio-button>
                            <el-radio-button label="2021"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="card_body">
                        <div>
                            <span class="num">{{ Number(DomainNum).toLocaleString('en-US') }}</span>
                            <i v-if="Number(DomainRate) > 0" class="el-icon-top"></i><i v-else
                                class="el-icon-bottom"></i>
                            <span :class="[Number(DomainRate) > 0 ? 'rate1' : 'rate0']">{{ DomainRate }}%</span>
                        </div>
                        <div>
                            <img src="../../assets/sta/staPic/yellow.png" alt="">
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col :span="10">
                <el-card class="AS-box-card">
                    <div slot="header" class="clearfix">
                        <span>AS总量-{{ kind }}</span>&nbsp;<el-button type="text" icon="el-icon-view" @click="view_AS()" >查看详情</el-button>
                        <el-radio-group v-model="radio3" style="float: right; " @change="change_time">
                            <el-radio-button label="2022"></el-radio-button>
                            <el-radio-button label="2021"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="card_body">
                        <div>
                            <span class="num">{{ Number(ASNum).toLocaleString('en-US') }}</span>
                            <i v-if="Number(ASRate) > 0" class="el-icon-top"></i><i v-else class="el-icon-bottom"></i>
                            <span :class="[Number(ASRate) > 0 ? 'rate1' : 'rate0']">{{ ASRate}}%</span>
                        </div>
                        <div>
                            <img src="../../assets/sta/staPic/blue.png" alt="">
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="News-box-card">
                    <div slot="header" class="clearfix">
                        <span>相关资讯数-{{ kind }}</span>&nbsp;<el-button type="text" icon="el-icon-view" @click="view_news()" >查看详情</el-button>
                        <el-radio-group v-model="radio4" style="float: right; " @change="change_time">
                            <el-radio-button label="2022"></el-radio-button>
                            <el-radio-button label="2021"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="card_body">
                        <div>
                            <span class="num">{{ Number(NewsNum).toLocaleString('en-US') }}</span>
                            <i v-if="Number(NewsRate) > 0" class="el-icon-top"></i><i v-else class="el-icon-bottom"></i>
                            <span :class="[Number(NewsRate) > 0 ? 'rate1' : 'rate0']">{{ NewsRate }}%</span>
                        </div>
                        <div>
                            <img src="../../assets/sta/staPic/tiffany.png" alt="">
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<script>


export default {
    props: ["AssetNum", "AssetRate", "DomainNum", "DomainRate","ASNum", "ASRate","NewsNum", "NewsRate","kind"],
    data() {
        return {
            radio1: '2022',
            radio2: '2022',
            radio3: '2022',
            radio4: '2022',
        };
    },
    methods: {
        change_time(e) {
            this.$emit('time_select', e)
        },
        view_asset(){
            this.CommonFunction.OpenNewBlank('','Asset',this)
        },
        view_domain(){
            this.CommonFunction.OpenNewBlank('','Domain',this)
        },
        view_AS(){
            this.CommonFunction.OpenNewBlank('','ASinfo',this)
        },
        view_news(){
            this.CommonFunction.OpenNewBlank('','News',this)
        }

    }
}
</script>

<style lang="less" scoped>
    .DataDIV{
        margin-top: 50px;
        
    }
    .el-row{
        margin-bottom: 70px;
    }
.asset-box-card {
    border-radius: 8px;
    border-top: 4px solid rgb(98, 54, 255);
}
.Domain-box-card {
    border-radius: 8px;
    border-top: 4px solid #f7ab4f;
}

.AS-box-card {
    border-radius: 8px;
    border-top: 4px solid #5bbef9;
}
.News-box-card {
    border-radius: 8px;
    border-top: 4px solid #3ffcfe;
}


/deep/.el-card__header {
    padding: 38px 30px 12px 30px;
    border-bottom: 0px
}
/deep/.el-card__body {
    padding: 30px;
}

.clearfix {
    font-size: 24px;
    color: #36383b;
    font-weight: 500;
}

.card_body {
    padding: 0px 10px;
}

.num {
    letter-spacing: 1px;
    margin-right: 12px;
    font-size: 40px;
    color: #36383b;
}

.el-icon-top {
    color: green;
    font-weight: 1000;
    font-size: 30px;
}

.el-icon-bottom {
    color: red;
    font-weight: 1000;
    font-size: 30px;
}

.rate1 {
    font-size: 20px;
    color: green;
}

.rate0 {
    font-size: 20px;
    color: red;
}
</style>