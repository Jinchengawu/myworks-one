<template>
  <div class="addVisit">
    <div class="container">
      <van-cell-group :border="false">
        <van-field
          v-model="form.visitName"
          label="拜访人姓名"
          type="text"
          input-align="right"
          placeholder="请输入拜访人姓名（必填）"
          :error="false"
          :border="false"
          :readonly="true"
        />
        <van-field
          v-model="form.companyName"
          label="拜访客户"
          type="text"
          input-align="right"
          placeholder="请输入拜访客户（必填）"
          :error="false"
          :border="false"
          :readonly="true"
        />

        <div class="select-list">
          <div class="list">
            <div class="left">
              拜访类型
            </div>
            <div class="right">
              <select
                v-model="form.visitType"
                v-placeholder="{color: form.visitType}"
              >
                <option value="">
                  请选择
                </option>
                <option value="1">
                  拜访
                </option>
                <option value="2">
                  回访
                </option>
              </select>
            </div>
            <div
              v-sanjiao="{color: form.visitType}"
              class="saojiao"
            />
          </div>
        </div>

        <div class="select-list">
          <div
            class="list"
            @click="startTimeClick()"
          >
            <div class="left">
              拜访时间
            </div>
            <div
              class="right"
              :class="{'selectPlaceholder':form.visitTime== ''}"
            >
              {{ form.visitTime== '' ? '请选择' : form.visitTime }}
            </div>
            <div class="timeBox">
              <span
                class="iconfont iconrili"
                style="color:#aebab4"
              />
            </div>
          </div>
        </div>

        <van-field
          v-model="form.visitContent"          
          label="拜访内容"
          type="textarea"
          input-align="right"
          placeholder="请输入拜访内容"
          rows="1"
          autosize
          :border="false"
          :readonly="upType==2"
        />
        
        <div class="select-list">
          <div class="list">
            <div class="left">
              拜访方式
            </div>
            <div class="right">
              <select
                v-model="form.visitMode"
                v-placeholder="{color: form.visitMode}"
              >
                <option value="">
                  请选择
                </option>
                <option value="电话">
                  电话
                </option>
                <option value="现场">
                  现场
                </option>
                <option value="其他">
                  其他
                </option>
              </select>
            </div>
            <div
              v-sanjiao="{color: form.visitMode}"
              class="saojiao"
            />
          </div>
        </div>

        <div
          v-show="form.visitMode=='现场'"
          class="select-list"
        >
          <div class="list">
            <div class="left">
              签到
            </div>
            <div class="right">
              <select
                v-model="form.visitSigned"
                v-placeholder="{color: form.visitSigned}"
              >
                <option value="">
                  请选择
                </option>
                <option value="1">
                  是
                </option>
                <option value="2">
                  否
                </option>                
              </select>
            </div>
            <div
              v-sanjiao="{color: form.visitSigned}"
              class="saojiao"
            />
          </div>
        </div>
        <div
          v-show="form.visitMode=='现场'"
          id="container"
          style="width:100%; height:300px"
          class="body"
        />
        <iframe
          id="geoPage"
          width="0"
          height="0"
          frameborder="0"
          style="display:none;"
          scrolling="no"
          src="https://apis.map.qq.com/tools/geolocation?key=S3RBZ-LJ76D-AQ54R-H73AR-L6ZEF-CHFCI&referer=myapp"
        />
        <div
          v-if="!isCPT"
          class="select-list"
        >
          <div class="list">
            <div class="left">
              添加事件1
            </div>
            <div class="right">
              <select
                v-model="setIsType1"
                v-placeholder="{color: setIsType1}"
                @change="setIsTypeChange(1)"
              >
                <option
                  v-for="(itm,idx) in callList"
                  :key="idx"
                  :value="itm.val"
                >
                  {{ itm.name }}
                </option>
              </select>
            </div>
            <div
              v-sanjiao="{color: setIsType1}"
              class="saojiao"
            />
          </div>
        </div>
        <add-const
          :is-type="setIsType1"
          :up-ing="upIng"
          :is-no="1"
          @callBack="constCallBack"
        />
        <div
          v-if="!isCPT"
          class="select-list"
        >
          <div class="list">
            <div class="left">
              添加事件2
            </div>
            <div class="right">
              <select
                v-model="setIsType2"
                v-placeholder="{color: setIsType2}"
                @change="setIsTypeChange(2)"
              >
                <option
                  v-for="(itm,idx) in callList"
                  :key="idx"
                  :value="itm.val"
                >
                  {{ itm.name }}
                </option>
              </select>
            </div>
            <div
              v-sanjiao="{color: setIsType2}"
              class="saojiao"
            />
          </div>
        </div>
        <add-const
          :is-type="setIsType2"
          :up-ing="upIng"
          :is-no="2"
          @callBack="constCallBack"
        />
      </van-cell-group>

      <div class="footer">
        <van-button
          class="gradual-btn"
          style="width:100%;"
          type="primary"
          @click="clickAdd"
        >
          确认信息
        </van-button>
      </div>
    </div>

    <!-- 时间选择 -->
    <van-popup
      v-model="selectStartTime"
      position="bottom"
      :overlay="true"
    >
      <van-datetime-picker
        v-model="currentTime"
        type="date"
        :max-date="maxDate"
        :min-date="minDate"
        :formatter="formatter"
        @confirm="startconfirm($event)"
        @cancel="startconfirm()"
      />
    </van-popup>
    <!-- 关联操作 -->
  </div>
</template>
<script>
// import { addVisit, putVisit, getVisit, idProject,menuProject } from '@/service/customer'
// import { mapState } from 'vuex'
import addConst from '@views/addConst/addConst.vue'
import { txMap } from '../../txMap.js'
import { formatDate, isNull } from '@/utils'

export default {
  name: 'Visit',
  components: {
    'add-const': addConst,
  },
  props:{
    //iscomponent
    isCPT:{
      type:Boolean,
      default:false
    },
    //回收数据isCallDataType
    isCDT:{
      type:Boolean,
      default:false
    },
  },
  data() {
    return {
      form: {
        visitName: this.$store.getters.userInfo.name,
        visitUserId:this.$store.getters.userInfo.id,
        companyName:this.$store.getters.userData.companyName,
        visitType: '',
        visitContent: '',
        visitMode: '',
        visitSigned: '',
        visitTime:'',
        projectDTOS:[],
      },
      callList:[{
        name:'立项',
        val:'1'
      },{
        name:'报价',
        val:'2'
      },{
        name:'尽调',
        val:'3'
      },{
        name:'上会',
        val:'4'
      },{
        name:'签约',
        val:'5'
      },],
      setIsType1:'0',//事件1关联的事件id
      isType1D:{},
      setIsType2:'0',//事件2关联的事件id
      isType2D:{},
      selectStartTime: false,
      maxDate: new Date(),
      minDate: '',
      currentTime: new Date(),
      companyName: '',
      duty: '',
      mobile: '',
      visitType: -1, // 拜访类型
      visitWay: -1, // 拜访方式
      contactNumber: -1, // 第几联系人      
      upType: 1,//关联菜单标识
      upIng:false,//回收数据通讯标识
      uped:false,//回收数据态
    }
  },
  computed: {},
  watch: {
    isCDT(newV,oldV){
      console.log(newV,oldV,this.form)
      this.form.userId = this.$store.getters.userInfo.id
      this.form.userName = this.$store.getters.userInfo.name
      this.$emit('VisitChange',this.form)
      return
    }
  },
  mounted() {
    window.wx.ready(() => {
      //  TODO: 设置功能
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          console.log('jssdk获取当前定位', res)
          var latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed // 速度，以米/每秒计
          var accuracy = res.accuracy // 位置精度
        }
      })
    })
    window.addEventListener('message', function (event) {
      // 接收位置信息
      var loc = event.data
      // console.log('location', loc)
    }, false)
    txMap().then((qq) => {
      // console.log(qq)
      const map = new qq.maps.Map(document.getElementById('container'), {
        // 地图的中心地理坐标。
        center: new qq.maps.LatLng(31.22352, 121.45591),
        zoom: 15,                       //设置缩放级别
        draggable: false,               //设置是否可以拖拽
        scrollwheel: false,             //设置是否可以滚动
        disableDoubleClickZoom: true,    //设置是否可以双击放大
        scaleControl: false,
        mapTypeControlOptions: {
          mapTypeIds: [
          ],
        },//置空地图类型        
        zoomControl: false,  //设置是否可以缩放
      })
      var marker = new qq.maps.Marker({
        //设置Marker的位置坐标
        position: new qq.maps.LatLng(31.22352, 121.45591),
        //设置显示Marker的地图
        map: map
      })
    })

    // showPosition();
    function showPosition(position) {
      // console.log('position',position)
      var lat = position.coords.latitude
      var lng = position.coords.longitude
      //调用地图命名空间中的转换接口   type的可选值为 1:GPS经纬度，2:搜狗经纬度，3:百度经纬度，4:mapbar经纬度5:google经 纬度，6:搜狗墨卡托
      qq.maps.convertor.translate(new qq.maps.LatLng(lat, lng), 1, function (res) {
        //取出经纬度并且赋值
        latlng = res[0]
        // console.log('res',res)
        var map = new qq.maps.Map(document.getElementById("container"), {
          center: latlng,
          zoom: 17
        })
        //设置marker标记
        var marker = new qq.maps.Marker({
          map: map,
          position: latlng
        })
      })
    }
    function getLocation() {
      //判断是否支持 获取本地位置
      if (navigator.geolocation) {
        console.log('支持', showPosition)
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        x.innerHTML = "浏览器不支持定位."
      }
    }
    getLocation()
    
  },
  created() {
    console.log('this.$route.query.id', this.$route.query)
    if (this.$route.query.id) {
      this.getIdProject(this.$route.query.id)
      this.upType = 2
    }
    const nowDate = new Date(new Date().toLocaleDateString()) // 获取当前时间
    this.minDate = new Date(nowDate.getTime() - 2 * 24 * 60 * 60 * 1000)
    if (this.$route.query.id) {
      this.getVT(this.$route.query.id)
    }
  },
  methods: {
    //触发关联菜单
    setIsTypeChange(who){
      if(who==1){
        this.isType1D.isSet = true
      }else{
        this.isType2D.isSet = true
      }
    },
    //获取关联组件的返回值
    constCallBack(e){
      // if(e){
      //   this.uped = !this.upIng
      // }
      // console.log('获取关联组件的返回值',e)
      this.form.projectDTOS[e.isNo-1] = e      
      console.log('this.form.projectDTOS',this.form)
    },
    //根据id获取目标详情
    getIdProject(id) {
      idProject({ id: id }).then(res => {
        // console.log('idProject',res)
        this.form = res.information
      })
    },
    clickAdd() {
      console.log('子组件',this.$refs)
      this.upIng = !this.upIng
      if (this.$route.query.id) {
        this.putVT()
      } else {
        this.addVT()
      }
    },
    addVT() {
      const params = this.form
      params.visitUserId = this.$store.getters.userInfo.id
      addVisit(params).then((res) => {
        console.log('addVisit', res)
        this.$router.go(-1)
      })
    },
    putVT() {
      const params = this.form
      params.visitUserId = this.$store.getters.userInfo.id
      putVisit(params).then((res) => {
        console.log('putVisit', res)
        this.$router.go(-1)
      })
    },
    getVT(id) {
      getVisit({ id }).then((res) => {
        console.log('getVisit', res)
        this.form = res.data
      })
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`
      } if (type === 'month') {
        return `${value}月`
      }
      return `${value}日`
    },
    
    startTimeClick() {
      this.selectStartTime = true
    },
    startconfirm(e) {
      // 选开始时间
      if (isNull(e)) {
        this.selectStartTime = false
      } else {
        const time = formatDate(new Date(e), 'yyyy-MM-dd', 'special')
        const timeStr = time.split('-')
        this.form.visitTime = ` ${timeStr[0]}-${timeStr[1]}-${timeStr[2]}`
        this.selectStartTime = false
      }
    },
    onRead1() {

    },
    onRead2() {

    },
  },
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  padding-bottom: 100px;
  .select-map {
    width: 100%;
    padding: 0px 10px 0px 15px;
    box-sizing: border-box;
    .title-header {
      width: 100%;
      height: 40px;
      display: flex;
      line-height: 40px;
      background-color: #fff;
      color: #323233;
      font-size: 14px;
      overflow: hidden;
      color: #323233;
      font-size: 14px;
      box-sizing: border-box;
      padding-right: 15px;
    }
    .body {
      width: 100%;
      height: 240px;
      background: #f4f4f4;
    }
    .uploadFile {
      width: 100px;
      height: 100px;
      border: 1px dashed #979797;
      position: relative;
      .uploadIcon {
        font-size: 30px;
        position: absolute;
        top: 15px;
        left: 35px;
        color: #979797;
      }
      .uploadText {
        width: 65px;
        font-size: 16px;
        position: absolute;
        top: 50px;
        left: 20px;
        color: #979797;
      }
    }
  }
  .select-list {
    width: 100%;
    padding: 0px 0px 0px 15px;
    box-sizing: border-box;
    .addborder {
      border-bottom: 1px solid #f5f6f8;
    }
    .list {
      width: 100%;
      height: 40px;
      display: flex;
      line-height: 40px;
      background-color: #fff;
      color: #323233;
      font-size: 14px;
      overflow: hidden;
      color: #323233;
      font-size: 14px;
      box-sizing: border-box;
      padding-right: 15px;
      .left {
        max-width: 90px;
        height: 40px;
      }
      .right {
        flex: 1;
        height: 40px;
        text-align: right;
        select {
          width: 100%;
          height: 40px;
          text-align: right;
          border: none;
          outline: none;
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          -ms-appearance: none;
          direction: rtl;
          text-indent: 5px;
          background: #ffffff;
        }
      }
    }
    .saojiao {
      width: 0;
      height: 0;
      border-width: 6px;
      border-style: solid;
      border-color: #323233 transparent transparent transparent;
      margin-top: 17px;
    }
    .timeBox {
      width: 25px;
      height: 40px;
      text-align: right;
    }
  }
  .show-more {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #999999;
    text-align: center;
    .downIcon {
      font-size: 8px;
      position: relative;
      left: 3px;
      top: -1px;
    }
  }
  .footer {
    width: 100%;
    height: 70px;
    background: #fcfcfc;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>
