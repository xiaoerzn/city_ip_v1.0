import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    meta: {
      title: "登录认证",
    },
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/home',
    redirect: "/statistics",
    meta: {
      title: "首页",
    },
    component:() => import('./views/Home.vue'),
    children: [
      {
        path: "/map",
        component: () => import('./views/map.vue'),
        meta: {
          title: "可视化地图",
        },
      },
      {
      path: "/statistics",
      component: () => import('./views/statistics.vue'),
      meta: {
        title: "统计",
      },
    },

    
  ]
    
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  // 获取token
  const tokenStr = window.localStorage.getItem("token");
  if (!tokenStr) return next("/login");
  // console.log(to)
  next();
});
export default router
