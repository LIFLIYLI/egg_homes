
import axios from 'axios'
let http = axios.create({
        timeout:3000,
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    }) 

    // 添加请求拦截器
    http.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        console.log('请求之前拦截器')
        return config;
      }, function (error) {
        // 对请求错误做些什么
        console.log('请求错误')
        return Promise.reject(error);
      });
    
    // 添加响应拦截器
    http.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        console.log('数据 响应拦截器')
        return response;
      }, function (error) {
        // 对响应错误做点什么
        console.log('响应失败')
        return Promise.reject(error);
      });
export default http
