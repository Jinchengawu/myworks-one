<template>
  <div class="home"></div>
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
      positionX: 0,
      positionY: 0
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
    //罗马数字转十进制
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
      let num = null;
      let fnum = 0;
      let nums = s.split("");
      let numObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
      for (let i in nums) {
        if (nums[i] == "I" || nums[i] == "X" || nums[i] == "C") {
          if (numObj[nums[i]] < numObj[nums[i * 1 + 1]]) {
            fnum += numObj[nums[i]];
            continue;
          }
        }
        num += numObj[nums[i]];
      }
      return num - fnum;
    },
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
      let xt = x > 0 ? true : false;
      let nx = 0;
      x = !xt ? x : x * -1;
      x = (x + "").split("");
      for (let i = x.length; i < 0; i--) {
        nx += x[i];
      }
      return xt ? nx : nx * -1;
    },
    fn(x) {
      let xt = x > 0 ? true : false;
      let nx = '';
      x = xt ? x : (x * -1);
      x = (x + "").split("");
      function subsum(x){
        x.length = x.length-1
        if(x[x.length - 1]=='0') return subsum(x)
        else return x
      }
      //要有去零的过程      
      if(x[x.length - 1]=='0')x = subsum(x)
      //转换
      for (let i = x.length; i > 0; i--) {
        console.log(x[i - 1]);        
        nx += (x[i - 1]);
      }
      console.log('nx',nx)
      return xt ? nx : nx * -1;
    },
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
  #app1 {
    position: relative; /*定位*/
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #666; /*设置一下背景*/
  }
}
</style>
