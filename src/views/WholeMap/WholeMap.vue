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
                            <el-date-picker align="center" type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                            </el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker align="center" placeholder="选择时间" v-model="form.date2" style="width: 100%;">
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
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import 'leaflet-canvas-marker'

export default {

    data() {
        return {
            map: "",
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },
    mounted() {
        this.initMap();
        // this.addLotMarker()
        this.addLotMarkerrr()
        // this.addLotMarkerr()
    },
    methods: {
        initMap() {
            if (this.map) {
                this.map.remove()
            }
            this.map = L.map("map", {
                center: [40.02404009136253, 116.50641060224784], // 地图中心
                zoom: 2, //缩放比列
                zoomControl: true, //禁用 + - 按钮
                doubleClickZoom: true, // 禁用双击放大
                attributionControl: true // 移除右下角leaflet标识
            });
            L.tileLayer(
                "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
            ).addTo(this.map);

            // marker
            var myIcon = L.icon({
                iconUrl: require('../../assets/map/icon/img-bule.png'),
                iconSize: [38, 38],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
            });
            var marker = L.marker([39.26, 41.03], { icon: myIcon }).addTo(this.map);
            // 形状

            var circle = L.circle([51.508, -0.11], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500000  //b半径
            }).addTo(this.map);
        },

        // 插件生成批量点
        addLotMarker() {
            // 创建图层
            var ciLayer = L.canvasIconLayer({}).addTo(this.map);

            // 定义 Marker
            var marker = L.marker([58.5578, 29.0087], { icon: icon });

            // 把 Marker 添加到图层
            var icon = L.icon({
                iconUrl: require('../../assets/map/icon/imglv.png'),
                iconSize: [20, 18],
                iconAnchor: [10, 9]
            });
            for (var i = 0; i < 100000; i++) {
                var lat = 39.905963 + (Math.random() - Math.random()) * 3;
                var lng = 116.390813 + (Math.random() - Math.random()) * 3;
                var marker = L.marker([lat, lng], {
                    icon: icon
                })
                    .bindPopup("I Am " + i); //绑定气泡窗口
                ciLayer.addLayer(marker);
            }
        },
        addLotMarkerrr() {
            // 创建图层
            var ciLayer = L.canvasIconLayer({}).addTo(this.map);

            // 定义 Marker
            // var marker = L.marker([58.5578, 29.0087], { icon: icon });

            let getMarker = (item,index) => {
                let marker = L.marker([item.lat, item.lng], {
                    icon: L.icon({
                        iconUrl: require('../../assets/map/icon/imglv.png'),
                        iconSize: [25, 25],
                        iconAnchor: [0, 0],
                        popupAnchor: [0, 0]
                    }),
                })
                return marker
            }
            var data = [
                { lat: 23.140833, lng: 13.305649 },
                { lat: 80.138604, lng: 93.306835 },
                { lat: 40.138535, lng: 3.305821 }
            ]
            data.forEach((item,index) => {
                ciLayer.addMarker(getMarker(item).bindPopup(index+'').openPopup())
            })



        },
        addLotMarkerr() {
            var latlng = [
                { lat: 23.140833, lng: 113.305649 },
                { lat: 23.138604, lng: 113.306835 },
                { lat: 23.138535, lng: 113.305821 }
            ]

            var group = L.layerGroup().addTo(this.map)
            for (let i = 0; i < latlng.length; i++) {
                var lat = latlng[i].lat
                var lng = latlng[i].lng
                var blueIcon = L.icon({
                    iconUrl: require('../../assets/map/icon/img-bule.png'),
                    iconSize: [25, 25],
                    iconAnchor: [13, 21]
                })

                var marker = L.marker([lat, lng], {
                    icon: blueIcon
                    // draggable:true,
                    // riseOnHover:true
                }).addTo(group).bindPopup('我是第' + i + "个marker").openPopup()

            }
        },
        onSubmit(){

        }


    }
};
</script>

<style >
#map {
    width: 100%;
    height: calc(80vh);
    z-index: 1;
}
</style>
