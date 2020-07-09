import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout"
import Home from "@/views/common/home"
import Login from "@/views/common/login"
import store from "@/store/"
import { getStore } from "@/util/store"
Vue.use(VueRouter)

const commonRoutes = [{
  path: "/login", name: "layout", component: Login
}]

const selfRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [...commonRoutes, ...selfRoutes]
})

router.beforeEach((to, form, next) => {
  console.log(store.state.token)
  // 如果登陆过了，那么就正常走路
  if (store.state.token) {
    next()
  } else {
    // 这里都是没有登陆情况下，如果没有登陆的话，判断是不是登陆页面，如果是登录页面的话，就放行
    // 否则的话，你需要权限的，就应该去登陆
    if (to.path === "/login") {
      next()
    } else {
      next("/login")
    }
  }
})
export default router
