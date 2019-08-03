<template>
  <div class="hello">
    <div
      class="item"
      draggable="true"
      @dragstart="dragstart($event, item)"
      @dragend="dragend"
      v-for="(item, index) in items"
      :key="index"
    >{{ item.label }}</div>

    <div class="drop-field" @drop="drop" @dragover.prevent>
      <div class="item" v-if="droppedItem !== ''">{{ droppedItem }}</div>
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
      droppedItem: "",
      items: [
        {
          id: 1,
          label: "模块一"
        },
        {
          id: 2,
          label: "模块二"
        },
        {
          id: 3,
          label: "模块三"
        }
      ]
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
    drop (event) {
        this.droppedItem = event.dataTransfer.getData('item')
        console.log('drop1',event)
    },
    dragstart (event, item) {
        event.dataTransfer.setData('item', item.label)
        console.log('dragstart2',event)
    },
    dragend (event) {
        event.dataTransfer.clearData()
        console.log('dragend3',event)
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
