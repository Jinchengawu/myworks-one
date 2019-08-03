import visit from './visit.vue'
// 这里是重点
const Loading = {
    install: function(Vue){
        Vue.component('visit',visit)
    }
}

// 导出组件
export default visit