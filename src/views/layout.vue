<template>
  <div class="self-layout clearfix">
    <div class="self-left">
      <z-scroll-view>
        <self-aside></self-aside>
      </z-scroll-view>
    </div>
    <div class="self-right">
      <self-header></self-header>
      <self-main></self-main>
      <self-footer></self-footer>
    </div>
  </div>
</template>

<script>
import SelfAside from "./components/self-aside";
import SelfHeader from "./components/self-header";
import SelfMain from "./components/self-main";
import SelfFooter from "./components/self-footer";
import ZScrollView from "./../components/z-scroll-view";
export default {
  name: "layout",
  components: {
    SelfAside,
    SelfHeader,
    SelfMain,
    SelfFooter,
    ZScrollView
  }
};
</script>
<style lang="scss" scoped>
.self-layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;

  .self-left {
    height: 100%;
    width: 200px;
    float: left;
    // flex: 1;
    background-color: red;
  }
  .self-right {
    flex: 1;
    // float: left;
    background-color: #f60;
  }
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: block;
  zoom: 1;
  opacity: 0;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>