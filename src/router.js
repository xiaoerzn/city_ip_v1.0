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
    redirect: "/home_statistics",
    meta: {
      title: "首页",
    },
    component:() => import('./views/Home.vue'),
    children: [
      {
        path: "/home_map",
        component: () => import('./views/map.vue'),
        meta: {
          title: "首页-可视化地图",
        },
      },
      {
      path: "/home_statistics",
      component: () => import('./views/statistics.vue'),
      meta: {
        title: "首页-统计",
      },
    },
    {
      path: "/Asset",
      component: () => import('./views/Asset/AssetHome.vue'),
      meta: {
        title: "网络资产",
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
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});


export default router
