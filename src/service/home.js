/**
 * UPM-订单管理
 */
import {
  HttpGet,
  HttpPost,
  HttpPut,
  HttpDelete
} from './index'
import {
  formatDate
} from '@/utils/index'

// 订单相关
const apis = {
  orderList: 'upm/order', // 查询订单
  distribute: 'upm/order/admin/distribute', // 接口描述：行政派单（派给车队）接口
  amount: 'upm/order/amount', // 订单金额
  importOrder: 'upm/employee/import',// 导出订单
  cancel:'upm/order/cancel',//取消订单
}

// 查询订单
export const getOrderList = (params) => HttpGet(apis.orderList, params).then(res => {
  const date = new Date()
  const t1 = formatDate(date, 'yyyy-MM-dd hh:mm:ss').slice(0, 9)
  const t2 = date.getTime()
  if(res.data.data){
    res.data.data.map(d => {
      if (d.status == 3) {
        const t3 = new Date(d.vehicleDay + ' ' + d.vehicleTime).getTime()
        if (d.vehicleDay == t1 && t2 > t3) {
          d.status = 7
        }
      }
      if (!d.price) {
        d.price = 0.00
      }
    })
  }else{
    res.data.data = []
  }
  
  return res.data
})
// 行政派单
export const distribute = (params) => HttpPost(apis.distribute, params)
// 导出订单
export const importOrder = (params) => HttpPost(apis.importOrder, params)
// 修改订单金额
export const amount = (params) => HttpPut(apis.amount, params).then(res => {
  return res.data
})
// 取消订单
export const cancel = (params) => HttpPut(apis.cancel, params)