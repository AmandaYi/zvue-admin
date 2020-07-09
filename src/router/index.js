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

router.beforeEach ( async (to, form, next) => {
  // 如果登陆过了，那么就正常走路
  if (store.state.token) {
    // 正常走路的时候，做一些事情，
    // 获取用户的信息
    await store.dispatch("UserInfo",{token:store.state.token})
    // 获取菜单栏目
    if(store.state.menu.length === 0){
      try{
        let menu = await store.dispatch("GetMenu")
         let result = [] 
        formatRoutes(menu,result)
        selfRoutes[0].children = result 
        router.addRoutes(selfRoutes)
        next({...to,replace:true})
        return
      }catch(ex){
          store.dispatch("LogOut")
          next("/login")
          return
      }
    }
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
function formatRoutes(menu=[],routes=[]){
  for(let i = 0; i< menu.length ;i++) {
      let route = {
        name:menu[i].name,
        path:menu[i].path,
        component:r => require.ensure([], () => r(require(`@/views${menu[i].path}`), menu[i].name))
      }
      routes.push(route)
      if(menu[i].list && menu[i].list.length > 0) {
        formatRoutes(menu[i].list,routes)
      }
  }
  
}
export default router
