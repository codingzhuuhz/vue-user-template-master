import request from '@/utils/request'
export default {
  getBanner(){
    return request({
      url:"cmsservice/userbanner/getAllBanner",
      method:'get'
    })
  }
}
