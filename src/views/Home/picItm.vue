<template>
  <div class="webId">
    <!-- 1.1 如果碰到滑动问题，请检查这里是否属于同一点。 -->
    <!-- 悬浮的HTML -->
    <div
      v-if="!isShow"
      class="xuanfu"
      :id="itm.id"
      @mousedown="down"
      @touchstart="down"
      @mousemove="move"
      @touchmove="move"
      @mouseup="end"
      @touchend="end"
    >
      <div class="yuanqiu">{{itm.id}}</div>
       <img style="width:100%;height:100%;" :src="itm.picUrl" alt="">
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
  props:{
    itm:{
      type: Object,
      default:()=>{
        return {}
      }
    }
  },
  name: "picItm",
  components: {},
  data() {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      isShow:false,            
    };
  },
  watch: {},
  created() {},
  mounted() {
    let that = this;
    let dom = document.getElementById(this.itm.id)
      // console.log('moveDiv',this.itm.id,dom,document.getElementById(this.itm.id))
  },
  destroyed() {},
  updated() {},
  methods: {
    // 实现移动端拖拽
    down() {
      // console.log('down-event',event)
      let dom = document.getElementById(this.itm.id)
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = dom.offsetLeft;
      this.dy = dom.offsetTop;
    },
    move() {
      // console.log('move-event',event,)
      let dom = document.getElementById(this.itm.id)
      
      
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        dom.style.left = this.xPum + "px";
        dom.style.top = this.yPum + "px";
        //阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function() {
            // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
            // event.preventDefault(); //jq 阻止冒泡事件
            event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    }
  }
};
</script>
<style lang="less" scoped>

.xuanfu {
  height: 4.5rem;
  width: 4.5rem;
  /*1.3  如果碰到滑动问题，请检查 z-index。z-index需比web大一级*/
  z-index: 999;
  position: fixed;
  top: 4.2rem;
  right: 3.2rem;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.55);
  //  transition: top left right bottom 1s;
}
.yuanqiu {
  height: 2.7rem;
  width: 2.7rem;
  border: 0.3rem solid rgba(140, 136, 136, 0.5);
  margin: 0.65rem auto;
  color: #000000;
  font-size: 1.6rem;
  line-height: 2.7rem;
  text-align: center;
  border-radius: 100%;
  background-color: #ffffff;
}
.box{
  position: relative;
  width: 50px;
  height :150px;
}
</style>
