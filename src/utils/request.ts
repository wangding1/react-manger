// 引入 axios
import axios, { AxiosError } from 'axios'
import { IConfig } from '../types/api'

// 创建一个 axios 实例
const instance = axios.create({
  timeoutErrorMessage: '请求超时，请稍后再试', // 设置超时错误提示信息
  timeout: 8000, // 设置请求超时时间
  withCredentials: true, // 允许跨域请求携带 cookie
  headers: {
    icode: '',
  },
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default {
  get<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.get(url, { params, ...options })
  },
  post<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, params, options)
  },
  downloadFile(url: string, data: any, filename: string = 'download.file') {
    instance
      .post(url, data, {
        responseType: 'blob',
      })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
  },
}
