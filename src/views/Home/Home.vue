<template>
  <div id="webId">
    <img
      class="bg"
      style
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564815535655&di=33ea559bd9b257ff5f5636d65768b016&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807230802_tXAaH.jpeg"
      alt
    />
    <div>你的web页面</div>
    <div class="z1" v-if="type.z1">
      <img src="https://i.loli.net/2019/08/03/te8g64OMpVqAUSC.png" alt />
    </div>
    <!-- 1.1 如果碰到滑动问题，请检查这里是否属于同一点。 -->
    <!-- 悬浮的HTML -->
    <div v-for="(itm,idx) in datas[pages-1].pics" :key="idx">
      <pic-Itm :itm="itm" />
    </div>
    <div style="color:#fff;">
      <p>评价老师:{{datas[pages-1].txts.name}}</p>
      <p>老师评价:{{datas[pages-1].txts.txt}}</p>
    </div>
    <van-button type="primary" size="small" @click="()=>{
      pages++
    }" v-if="pages<3">下一页</van-button>
    <van-button type="primary" size="small" @click="()=>{
      pages--
    }" v-if="pages>1">上一页</van-button>
    <van-button
      type="primary"
      size="small"
      @click="()=>{
      type.z1 = !type.z1
    }"      
    >#字遮招层</van-button>
    <!-- <van-button type="primary" size="small" @click="()=>{
      pages++
    }" v-if="pages<3">下一页</van-button>-->
  </div>
</template>
<script>
// @ is an alias to /src
import { isNull, addMark } from "@/utils";
import {} from "@/service/home";
import { setTimeout, clearTimeout } from "timers";
import picItm from "./picItm";
function rpx(v) {
  if (typeof v === "string") return v.slice(0, v.length - 2) * 1;
}

export default {
  name: "Home",
  components: {
    picItm
  },
  data() {
    return {
      datas: [
        {
          txts: {
            name: "王老师",
            txt: "不错不错",
            id: "w1-1"
          },
          pics: [
            {
              id: "i1-1",
              name: "22",
              picUrl: "https://i.loli.net/2019/08/03/qBV7MxgTNkaHoP2.jpg"
            },
            {
              id: "i1-2",
              name: "33",
              picUrl: "https://i.loli.net/2019/08/03/bGjDgZlOtSf2Yr5.jpg"
            }
          ]
        },
        {
          txts: {
            name: "王老师2",
            txt: "不错不错2",
            id: "w2-1"
          },
          pics: [
            {
              id: "i2-1",
              name: "22",
              picUrl: "https://i.loli.net/2019/08/03/qBV7MxgTNkaHoP2.jpg"
            },
            {
              id: "i2-2",
              name: "33",
              picUrl: "https://i.loli.net/2019/08/03/bGjDgZlOtSf2Yr5.jpg"
            }
          ]
        },
        {
          txts: {
            name: "王老师3",
            txt: "不错不错3",
            id: "w3-1"
          },
          pics: [
            {
              id: "i3-1",
              name: "22",
              picUrl: "https://i.loli.net/2019/08/03/qBV7MxgTNkaHoP2.jpg"
            },
            {
              id: "i3-2",
              name: "33",
              picUrl: "https://i.loli.net/2019/08/03/bGjDgZlOtSf2Yr5.jpg"
            }
          ]
        }
      ],
      pages: 1, //当前页码
      type: {
        z1: false,
        z2: false
      } //遮招层状态
    };
  },
  watch: {},
  created() {},
  mounted() {
    let that = this;
  },
  destroyed() {},
  updated() {},
  methods: {}
};
</script>
<style lang="less" scoped>
#webId {
  background: #9e921;
  position: relative;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 600px;
  z-index: -10;
}
.z1 {
  opacity: 0.5;

  z-index: -1;
  img {
    width: 120%;
    height: 600px;
    position: absolute;
    top: -10%;
    left: -10%;
  }
}
</style>
