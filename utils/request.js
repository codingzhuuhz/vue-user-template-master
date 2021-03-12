import axios from 'axios'
import cookie from 'js-cookie'
//创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001/', // api 的 base_url
  timeout: 5000 // 请求超时时间
})
service.interceptors.request.use(config => {
  if(cookie.get("token")){
    config.headers['token'] = cookie.get("token")
  }
  return config
},error =>{
    console.log(error)
})
export default service
