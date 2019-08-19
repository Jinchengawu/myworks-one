<template>
<div id="app">
  <div class="zhezhao" v-if="this.isif">
    <div class="tiaozhan">
      <h2>完成挑战</h2>
      <div class="dianping">
        <b>教师点评:</b>
        <p>这张图采用九宫格布局,为保持画面布局平稳,素材图片应放在左侧</p>
        <div class="btn">
        <van-button type="default" @click="()=>{this.isif=!this.isif}" class="btn1">截图保存</van-button>
        <van-button type="primary" @click="()=>{this.isif=!this.isif}" class="btn2">下一场景</van-button>
        </div>
      </div>
    </div>
    <van-button type="default" class="btn3" @click="()=>{this.isif=!this.isif}">显示原图</van-button>
  </div>
</div>
</template>
<script>
export default {
  name: "zhezhao",
  data(){
    return{
      isif:true
    }
  }
}
</script>
<style lang="less" scoped>
.zhezhao{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8)
}
.tiaozhan{
    width: 350px;
    height: 205px;
    background: white;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid white;
    border-radius: 2%;
  }
.tiaozhan h2{
  font-size: 22px;
  text-align: center;
  display: block;
  width: 95px;
  height: 30px;
  margin: 13px auto 18px;
}
.dianping{
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.dianping b{
  width: 79px;
  height: 22px;
  display: block;
  font-size: 16px;
  margin-left: 32px;
}
.dianping p{
  width: 282px;
  height: 40px;
  display: block;
  font-size: 14px;
  margin: 0 auto 25px;;
}
.btn1{
  width: 140px;
  height: 40px;
  background: #353535;
  color: white;
  font-size: 14px;
  float: left;
  border: 1px solid #353535;
  border-radius: 5px;
  line-height: 17px;
}
.btn2{
  width: 140px;
  height: 40px;
  font-size: 14px;
  float: right;
  border: 1px solid white;
  border-radius: 5px;
  line-height: 17px;
}
.btn3{
  width: 104px;
  height: 36px;
  background: #444444;
  border: 1px solid #5f5f5f;
  font-size: 14px;
  color: white;
  position: absolute;
  right: 20px;
  bottom: 20px;
  line-height: 22px;
}
.btn{
  width: 290px;
  margin: 0 auto;
}
</style>