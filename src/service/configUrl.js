// console.log(process.env)
const configUrl = {
  showFile: '', // 展示文件路径
  channelId: null
}
console.log('当前process.env.NODE_ENV',process.env.NODE_ENV)
let webUrl = null
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'v2') {
  // v2环境
  webUrl = 'http://v2.ocheng.me'
  // 图片显示路径
  configUrl.showFile = 'http://v2.ocheng.me/storage/'
} else if (process.env.NODE_ENV == 'stage') {
  webUrl = 'http://stage.ocheng.me'
  // 图片显示路径
  configUrl.showFile = 'http://v2.ocheng.me/storage/'
} else if (process.env.NODE_ENV == 'scrm') {
  webUrl = 'http://scrm.ocheng.me/v2'
  // 图片显示路径
  configUrl.showFile = 'http://scrm.ocheng.me/storage/'
}

configUrl.channelId = 3
configUrl.upload = webUrl + '/api/upload' // 普通上传地址
configUrl.material_upload = webUrl + '/wechat/material' // 微信素材相关上传图片路径
configUrl.coupon_upload = webUrl + '/wechat/coupon/uploadImg' // 微信卡券相关上传图片路径
configUrl.ajax_url = webUrl + '/api/' // 接口路径
configUrl.CheckGate = '/h5/grand-vision/signin.html?cId=66&id=' // 网页地址

console.log('当前aixos-configUrl', {
  ...configUrl
})

export default configUrl
