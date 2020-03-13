import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-type'] = 'application/json'

let baseURL = ''

//请求拦截
axios.interceptors.request.use((config) => {
    return config
}, error => {
    Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(response => response, error => Promise.reject(error))

//定义axios
const http = {
    async ajax (obj = {}) {
      const api = obj.baseUrl ? obj.baseUrl : baseURL
      const result = await axios({
        method: obj.method,
        url: api + obj.url,
        data: obj.data || '',
        responseType: obj.responseType || '',
        headers: obj.headers || {},
        timeout: obj.timeout || 5000
      }).catch(e => ({
        error: {
          message: e.message
        },
        data: {
          message: e.message
        }
      }))
      if (!result.error && (result.data.code === 200 || result.status === 200)) {
        return result.data
      }
      return {
        error: result.data.message || result.message || '服务器异常'
      }
    }
  }
//返回
export default http