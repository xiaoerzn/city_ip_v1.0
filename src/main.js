import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// ------------------------------------引入全局样式
import "./assets/css/global.css"


// ----------------------------------axios配置-----------------------------
import axios from "axios";
Vue.prototype.$http = axios;
// 配置请求的根路径
axios.defaults.baseURL = "http://10.15.1.192:8888/apis";
axios.interceptors.request.use((config) => {
  // 将token保存到authorization中
  config.headers.Authorization = window.localStorage.getItem("token");
  // 在最后必须 return config
  return config;
});


// -----------------------------------------Element-ui------------------------------------
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// --------------------------------------------阿里iconfont------------------------------
import './assets/sta/staIcon/iconfont.css'
// ---------------------------------------------------公共方法配置--------------------------------------------------------------
import CommonFunction from "./common.js"
Vue.prototype.CommonFunction=CommonFunction
// ---------------------------------------------百度地图-------------------
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: "HcOsUXOCYNGGuuayQnGXK7EG38pEglSA",
});

// ----------------------------------------------------Echarts配置-----------------------------------------------
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;


// ------------------------------------------------------时间配置----------------------------
Date.prototype.Format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
