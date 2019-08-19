<template>
  <div class="home">
    <div class="box">
      2333
      <div
        class="box-itm"
        :style="itm.style"
        :ref="'pic'+idx"
        @click="m1(idx)"
        @mousedown="m2(idx,itm)"
        v-for="(itm,idx) in ds"
        :key="idx"
      >{{itm.p}}</div>
    </div>
    <div id="app1" @dragstart="move">       <!--绑定按下事件-->
        {{positionX}}  
        {{positionY}}
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { isNull, addMark } from "@/utils";
import {} from "@/service/home";
import { setTimeout, clearTimeout } from "timers";

function rpx(v) {
  if (typeof v === "string") return v.slice(0, v.length - 2) * 1;
}

export default {
  name: "Home",
  components: {},
  data() {
    return {
      ds: [
        {
          p: "1",
          t: false,
          style: {
            left: "0px",
            top: "0px"
          }
        },
        {
          p: "2",
          t: false,
          style: {
            left: "0px",
            top: "0px"
          }
        },
        {
          p: "3",
          t: false,
          style: {
            left: "0px",
            top: "0px"
          }
        }
      ],
      positionX:0,
        positionY:0,
    };
  },
  watch: {},
  created() {},
  mounted() {
    let that = this;
  },
  destroyed() {},
  updated() {},
  methods: {
    m1(e) {
      console.log("m1", e);
    },
    m2(idx, itm) {
      console.log("m2", this.$refs["pic" + idx]);
      let ot = rpx(itm.style.top);
      this.ds[idx].style.top = ot + 20 + "px";
      // this.$set(this.ds[idx].style,'top',itm.style.top+20+'px')
      console.log({ ...this.ds[idx] });
    },
    m3() {
      console.log("m3");
    },
    move(e) {
      console.log(e)
      let odiv = e.target; //获取目标元素

      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  .box {
    border: 1px solid rgba(9, 90, 27, 0.133);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .box-itm {
      margin-top: 20px;
      border: 1px solid rgba(9, 90, 27, 0.133);
      height: 30px;
      width: 30px;
      text-align: center;
      line-height: 30px;
      position: relative;
      transition: top 2s;
    }
  }
  #app1{
        position: relative;     /*定位*/
        top: 10px;
        left: 10px;
        width: 200px;
        height: 200px;
        background: #666;       /*设置一下背景*/
    }
}
</style>
