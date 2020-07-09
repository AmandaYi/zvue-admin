<template>
  <div>  
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu v-for="(item) in menu" :key="item.id" :index="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="(itemInner) in item.list" :key="itemInner.id" :index="itemInner.id" @click="toggleView(itemInner)">
            <span>{{itemInner.name}}</span>
        </el-menu-item>
      </el-submenu>
      
    </el-menu>
  
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  data(){
    return {
    
    }
  },
  computed:{
    ...mapState({
       menu: 'menu'
    })
  },
  created(){
    console.log(this.menu)
  },
  methods:{
    toggleView(itemInner){
      console.log(itemInner)
      this.$router.push({
        name:itemInner.name
      })
    }
  }
}
</script>