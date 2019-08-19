
function isWeiXin() {
  const ua = window.navigator.userAgent.toLowerCase()
  // console.log('ua',ua)
  // console.log('ua.match(/MicroMessenger/i)',ua.match(/MicroMessenger/i)[0])
  if (!ua.match(/MicroMessenger/i)) return false
  if (ua.match(/MicroMessenger/i)[0] === 'micromessenger') {
    return true
  }
  return false
}

function test() {
  // console.log('test')
}
function addMark(List,type){
  let timeArr = []
  // console.log('addMark---List',List)
  if(List.length==0){
    return List
  }
  let y = List[0].createTime.substring(0,4)
  let m = List[0].createTime.substring(5,7)
  let day = List[0].createTime.substring(8,10)
  timeArr.push({
    y:y,
    m:m,
    day:day
  })
  let idxx = 0
  // console.log(timeArr)
  //按月划分组别
  List.map((d,idx)=>{
    let dy = d.createTime.substring(0,4)
    let dm = d.createTime.substring(5,7)
    let dday = d.createTime.substring(8,10)          
    let dd = timeArr[idxx]  
    //||dday!=dd['day']
    if(dy!=dd['y']||dm!=dd['m']){
      idxx++
      d.top = true
      timeArr.push({
        y:dy,
        m:dm,
        day:dday
      }) 
      if(idx == 0 ){
        return 
      }            
      List[idx-1].bottom = true
    }        
  })
  List[0].top = true
  List[List.length - 1].bottom = true
  return List
}
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = `${o[k]}`
      // eslint-disable-next-line no-use-before-define
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return (`00${str}`).substr(str.length)
}
function add0(m) { return m < 10 ? `0${m}` : m }
function format(timer, type) {
// shijianchuo是整数，否则要parseInt转换
  const time = new Date(timer)
  const y = time.getFullYear()
  const m = time.getMonth() + 1
  const d = time.getDate()
  const h = time.getHours()
  const mm = time.getMinutes()
  const s = time.getSeconds()
  if (type === 2) {
    return `${y}-${add0(m)}-${add0(d)} ${add0(h)}:${add0(mm)}:${add0(s)}`
  }
  return `${y}-${add0(m)}-${add0(d)}`
}
function isNull(str) {
  if (str === '' || str === undefined || str === null) {
    return true
  }
  return false
}

function checkPhoneNum(phone) {
  const validRule = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/gi.test(
    phone,
  ) // 手机号码校验规则
  return validRule
}

/**
 * 
 * @param {Object} value 
 * value.t : Type; Type === 1 数值两位小数截取 
 *                      === 2 数值不能小于0
 * value.v : value; value 对应的值 
 */
function strChange(value) {
  let v = {...value}
  if(v.t==1){
    v.v = v.v+''
    let Didx = v.v.indexOf('.') 
    let Dlen = v.v.slice(Didx,v.v.length-1)
    let Num = v.v.slice(0,Didx)
    if(Dlen.length>2){
      Dlen = Dlen.slice(0,3)
      value.v = (Num+Dlen)*1
      return value                   
    }
  }
  if(v.t==2){
    if(v.v<0){
      value.v = 0
      return value
    }
  }
  return null
}

/* 验证邮箱格式 */
/**
 * 
 * @param {*} email 
 */
function checkEmail(email) {
  const validRule = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
    email,
  ) // 邮箱校验规则
  return validRule
}

export {
  isWeiXin,
  test,
  formatDate,
  isNull,
  checkPhoneNum,
  checkEmail,
  format,
  addMark,
  strChange
}
