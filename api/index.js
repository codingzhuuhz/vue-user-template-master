import request from '@/utils/request'
export default {
  getIndex(){
    return request({
      url:"eduservice/index/index",
      method:'get'
    })
  }
}
