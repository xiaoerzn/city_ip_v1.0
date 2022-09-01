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
axios.defaults.baseURL = "http://10.15.1.192:8000/apis";
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