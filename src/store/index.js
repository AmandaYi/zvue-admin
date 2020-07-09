import Vue from 'vue'
import Vuex from 'vuex'
import { getStore, setStore } from "@/util/store"
import apiService from "@/api/"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户登陆token
    token: getStore("token") || "",
    isLogin: false  


  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setStore("token", token)
      state.isLogin = true 
    }
  },
  actions: {
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        apiService.loginByUserName(data).then(value=>{
          commit("SET_TOKEN",value)
          resolve(value)
        }).catch(ex=>{
          reject(ex)
        })

      })
    }
  },
  modules: {
  }
})
