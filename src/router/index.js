import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout"
import Home from "@/views/common/home"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect:"/home",
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
  routes
})

export default router
