<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="查询内容">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="查询区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="查询时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                            </el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;">
                            </el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="过滤">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="查询行业">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="能源" name="type"></el-checkbox>
                            <el-checkbox label="电力" name="type"></el-checkbox>
                            <el-checkbox label="水利" name="type"></el-checkbox>
                            <el-checkbox label="交通" name="type"></el-checkbox>
                            <el-checkbox label="金融" name="type"></el-checkbox>
                            <el-checkbox label="航空" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="关系展示">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="地理标记"></el-radio>
                            <el-radio label="频率标记"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即查询</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="16">
                <div id="map"></div>
            </el-col>
        </el-row>

    </div>

</template>

<script>
import 'echarts-gl';

export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            data:require('../../assets/map/flights.json'),
            routes:{}
            // ROOT_PATH :'https://echarts.apache.org/examples',
            // option: {
            //     backgroundColor: '#000',
            //     globe: {
            //         baseTexture: require('https://echarts.apache.org/examples /data-gl/asset/world.topo.bathy.200401.jpg'),
            //         heightTexture: require('https://echarts.apache.org/examples/data-gl/asset/bathymetry_bw_composite_4k.jpg'),
            //         shading: 'lambert',
            //         light: {
            //             ambient: {
            //                 intensity: 0.4
            //             },
            //             main: {
            //                 intensity: 0.4
            //             }
            //         },
            //         viewControl: {
            //             autoRotate: false
            //         }
            //     },
            //     series: {
            //         type: 'lines3D',
            //         coordinateSystem: 'globe',
            //         blendMode: 'lighter',
            //         lineStyle: {
            //             width: 1,
            //             color: 'rgb(50, 50, 150)',
            //             opacity: 0.1
            //         },
            //         data: routes
            //     }
            // }
        }
    },
    created() {
        
    },
    mounted() {
        this.drawChart();
    },
    methods: {
        onSubmit(){
            return
        },
        getdata() {
            this.routes = this.data.routes.map(function (airline) {
                return [this.getAirportCoord(airline[1]), this.getAirportCoord(airline[2])];
            });
        },
        drawChart(){
            this.getdata()
            let myChart = this.$echarts.init(document.getElementById("map"))
            myChart.setOption({
                backgroundColor: '#000',
                globe: {
                    baseTexture: require('../../assets/map/world.topo.bathy.200401.jpg'),
                    heightTexture:require('../../assets/map/bathymetry_bw_composite_4k_v2.jpg'),
                    shading: 'lambert',
                    light: {
                        ambient: {
                            intensity: 0.4
                        },
                        main: {
                            intensity: 0.4
                        }
                    },
                    viewControl: {
                        autoRotate: false
                    }
                },
                series: {
                    type: 'lines3D',
                    coordinateSystem: 'globe',
                    blendMode: 'lighter',
                    lineStyle: {
                        width: 1,
                        color: 'rgb(50, 50, 150)',
                        opacity: 0.1
                    },
                    data: this.routes
                }
            });
        },
        getAirportCoord(idx) {
            return [this.data.airports[idx][3], this.data.airports[idx][4]];
        },

    }
}
</script>

<style lang="less" scoped>
#map {
    width: 1400px;
    height: 750px
}
</style>


