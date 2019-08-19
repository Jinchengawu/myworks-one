<template>
  <div id="app">
    <router-view id="myiframe" />
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";


console.log('runrun')
function changeFrameHeight() {
  var ifm = document.getElementById("myiframe");
  console.log("ifm", ifm);
  ifm.height = document.documentElement.clientHeight;
}

window.onresize = function() {
  changeFrameHeight();
};
// 利用 CSS3 旋转 对根容器逆时针旋转 90 度
var detectOrient = function() {
  var width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight,
    $wrapper = document.getElementById("app"),
    style = "";
  if (width >= height) {
    // 横屏
    style += "width:" + width + "px;"; // 注意旋转后的宽高切换
    style += "height:" + height + "px;";
    style += "-webkit-transform: rotate(0); transform: rotate(0);";
    style += "-webkit-transform-origin: 0 0;";
    style += "transform-origin: 0 0;";
    console.log(1);
  } else {
    // 竖屏
    style += "width:" + height + "px;";
    style += "height:" + width + "px;";
    style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
    // 注意旋转中点的处理
    style +=
      "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
    style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
    console.log(2);
  }
  $wrapper.style.cssText = style;
};
window.onresize = detectOrient;
detectOrient();
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
#app {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#myiframe {
  position: absolute;
  left: 0;
  top: 0;
  border: none;
  width: 100% !important;
  height: 100% !important;
  z-index: 1800;
}
</style>
