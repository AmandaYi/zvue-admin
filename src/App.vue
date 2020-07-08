<template>
  <div id="self-app">
    <router-view />
  </div>
</template>
<script>
import Layout from "./views/layout";
export default {
  components: {
    Layout
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body{
   height: 100%;
   width: 100%;
}
#self-app {
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
</style>
