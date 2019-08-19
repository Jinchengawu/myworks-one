<template>
  <div id="webId">
    <img
      class="bg"
      style
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564815535655&di=33ea559bd9b257ff5f5636d65768b016&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201508%2F07%2F20150807230802_tXAaH.jpeg"
      alt
    />
    <zhezhao></zhezhao>
    <div>你的web页面</div>
    <div class="z1" v-if="type.z1">
      <img src="https://i.loli.net/2019/08/03/te8g64OMpVqAUSC.png" alt />
    </div>
    <!-- 1.1 如果碰到滑动问题，请检查这里是否属于同一点。 -->
    <!-- 悬浮的HTML -->
    <div v-for="(itm,idx) in datas[pages-1].pics" :key="idx">
      <pic-Itm :itm="itm" />
    </div>
    <div style="color:#fff;" class="txt">
      <p>评价老师:{{datas[pages-1].txts.name}}</p>
      <p>老师评价:{{datas[pages-1].txts.txt}}</p>
    </div>
    <van-button class="but" type="primary" size="small" @click="()=>{
      pages++
    }" v-if="pages<3">下一页</van-button>
    <van-button  class="but"  style="left:100px;" type="primary" size="small" @click="()=>{
      pages--
    }" v-if="pages>1">上一页</van-button>
    <div
      class="zhezhao"
      type="primary"
      size="small"
      @click="()=>{
      type.z1 = !type.z1
      this.isActive = !this.isActive
    }"
    >
      <div class="fang1" v-bind:class="{ borderactive: isActive }">
        <div class="fang2" v-bind:class="{ active: isActive }"></div>
      </div>
      <button class="fang3">辅助线</button>
    </div>
    <!-- <button
    class="fanhuitiaozhan"      
    >返回挑战</button>-->
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
import zhezhao from "./zhezhao";
function rpx(v) {
  if (typeof v === "string") return v.slice(0, v.length - 2) * 1;
}

export default {
  name: "Home",
  components: {
    picItm,
    zhezhao
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
      }, //遮招层状态
      isActive: false
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
  width: 100%;
  height: 100%;
  // transform: rotate(90deg)
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
    width: 129%;
    height: 116%;
    position: absolute;
    top: -10%;
    left: -14%;
  }
}
.zhezhao {
  width: 92px;
  height: 36px;
  position: absolute;
  bottom: 21.7px;
  left: 22.7px;
  background: rgba(78, 78, 78, 0.72);
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  border: 0 solid #5f5f5f;
  border-radius: 1px;
}
.fang1 {
  width: 14px;
  height: 14px;
  border: 1px solid rgba(147, 149, 146, 1);
  transform: rotate(45deg);
}
.fang2 {
  width: 10px;
  height: 10px;
  background: rgba(147, 149, 146, 1);
  margin: 2px 0 0 2px;
}
.fang3 {
  width: 48px;
  height: 22px;
  color: #ffffff;
  font-size: 16px;
  line-height: 22px;
  margin-left: 10px;
}
.active {
  background: #e0c200;
}
.borderactive {
  border: 1px solid #a2974b;
}
.fanhuitiaozhan {
  width: 104px;
  height: 36px;
  line-height: 22px;
  font-size: 16px;
  color: #fff;
  position: absolute;
  right: 39px;
  bottom: 22px;
  background: rgba(78, 78, 78, 0.72);
  border: 0 solid #5f5f5f;
  border-radius: 1px;
}
.but{
  position: absolute;
  top:50px;
}
.txt{
  color:#fff;
  position: absolute;
  top: 0px;
}
</style>
