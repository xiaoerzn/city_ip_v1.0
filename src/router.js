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
    meta: {
      title: "首页",
    },
    component:() => import('./views/Home.vue'),
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
  /* 路由发生变化修改页面title */
  if (to.params.id) {
    document.title = to.meta.title + to.params.id + "详情";
  } else {
    document.title = to.meta.title;
  }
  // console.log(to)
  next();
});
export default router
