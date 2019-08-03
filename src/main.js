import Vue from 'vue'
import Vant, { Toast, } from 'vant'

import App from './App.vue'
import router from './router'
import store from './store'
import { isNull, isWeiXin, } from '@/utils'
import 'vant/lib/index.css'
import './assets/css/reset.css'
// eslint-disable-next-line import/extensions
// 引入自定义组件。index.js是组件的默认入口

Vue.use(Vant)

Vue.config.productionTip = false


Vue.directive('placeholder', {
  inserted(el) {
    el.className = 'selectPlaceholder'
  },
  update(el, binding) {
    if (binding.value.color === -1) {
      el.className = 'selectPlaceholder'
    } else {
      el.className = ' '
    }
  },
})
Vue.directive('sanjiao', {
  inserted(el) {
    el.className += ' selectborder'
  },
  update(el, binding) {
    if (binding.value.color === -1) {
      el.className += ' selectborder'
    } else {
      el.classList.remove('selectborder')
    }
  },
})

// 跳转前更新
router.beforeEach((to, from, next) => {
  Toast.clear()
  // console.log(to, from)

  next()
})


// 全局路由跳转后监听
router.afterEach((to, from) => {

  // console.log(window.location.href ,1111)
  // 微信签名
  // TODO: 判断是否为微信环境
  if (to.name == 'home') {
    store.commit('SET_ACTIVE', 0)
    store.commit('SET_USER_DATA', null)
  }


})
// 自定义this原型链方法
/**
 * methods:$Clog
 * 输出
 */
Vue.prototype.$Clog = res => console.log(res)
Vue.prototype.$isNull = (str) => {
  if (str === '' || str === undefined || str === null) {
    return true
  }
  return false
}
// eslint-disable-next-line func-names
Vue.prototype.$checkFrom = function (data, from) {
  // console.log(data, from)
  let type = true
  //eslint-disable-next-line no-restricted-syntax
  for (let i in from) {
    if (isNull(data[i])) {
      console.log(i, data[i])
      this.$notify(`${from[i]}为必填项`)
      type = false
    }
  }
  return type
}
// eslint-disable-next-line func-names
Vue.prototype.$baseUrl = function () {
  //正式
  // return 'http://scrm.ocheng.me/v2/api/storage/download?remoteFilename='
  //测试
  return 'http://v2.ocheng.me/api/storage/download?remoteFilename='
}

Vue.prototype.$notifySty = function (str, fontsize, bgd) {
  str = str || '提示'
  fontsize = fontsize || 1000
  bgd = bgd || 'green'
  this.$notify({
    message: str,
    duration: fontsize,
    background: bgd,
  })
}
new Vue({
  router,
  store,
  directives: {
    drag: {
      // 指令的定义
      bind: function (el) {
        let odiv = el;   //获取当前元素
        oDiv.onmousedown = (e) => {
          //算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft;
          let disY = e.clientY - odiv.offsetTop;

          document.onmousemove = (e) => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;

            //绑定元素位置到positionX和positionY上面
            this.positionX = top;
            this.positionY = left;

            //移动当前元素
            odiv.style.left = left + 'px';
            odiv.style.top = top + 'px';
          };
          document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  },
  render: h => h(App),
}).$mount('#app')
