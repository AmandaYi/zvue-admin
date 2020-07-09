import Vue from 'vue'
import Vuex from 'vuex'
import { getStore, setStore } from "@/util/store"
import apiService from "@/api/"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户登陆token
    token: getStore("token") || "",
    menu:[]


  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setStore("token", token) 
    },
    SET_MENU(state,menu){
      state.menu = menu
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
    },
    LogOut({commit}){
      commit("SET_TOKEN","")
    },
    GetMenu({commit}){
      return new Promise((resolve,reject)=>{
        apiService.menu().then(value=>{
          commit("SET_MENU",value)
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
