import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
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
    component: () => import('./views/Home.vue'),
    children: [{
        path: "/home_map",
        component: () => import('./views/WholeMap/MapHome.vue'),
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
      {
        path: "/AssetDetail/:id",
        component: () => import('./views/Asset/AssetDetail.vue'),
        meta: {
          title: "资产",
        },
      },
      {
        path: "/Domain",
        component: () => import('./views/Domain/DomainHome.vue'),
        meta: {
          title: "网络域名",
        },
      }, {
        path: "/DomainDetail/:id",
        component: () => import('./views/Domain/DomainDetail.vue'),
        meta: {
          title: "域名",
        },
      }, {
        path: "/ASinfo",
        component: ()=>import('./views/AS/AsHome.vue'),
        meta: {
          title: "AS系统-查询页",
        },
      }, {
        path: "/AsDetail/:id",
        component: ()=>import('./views/AS/AsDetail.vue'),
        meta: {
          title: "AS",
        },
      },
      {
        path: "/News",
        component: () => import('./views/News/news.vue'),
        meta: {
          title: "资讯",
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