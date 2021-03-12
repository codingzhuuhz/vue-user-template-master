import request from '@/utils/request'
export default {
  getIndexHotCourse(){
    return request({
      url:"eduservice/index/indexCourse",
      method:'get'
    })
  },
  getIndexHotTeacher(){
    return request({
      url:"eduservice/index/indexTeacher",
      method:'get'
    })
  },
  register(userQuery){
    return request({
      url:'userservice/user/register',
      method:'post',
      data:userQuery
    })
  },
  login(userQuery){
    return request({
      url:'userservice/user/login',
      method:'post',
      data:userQuery
    })
  },
  getUserInfoByToken(){
    return request({
      url:'userservice/user/getUserInfo',
      method:'get',
      // data:userQuery
    })
  }

}
