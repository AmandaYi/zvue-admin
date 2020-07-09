<template>
  <div>
    我是{{userInfo.name}},我的技能是JS，等级是{{userInfo.js}}
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState({
      userInfo:"userInfo"
    })
  }
}
</script>