import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送前做一些处理，例如添加认证信息等
    console.log('请求拦截器');
    return config;
  },
  (error) => {
    // 请求错误处理
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在响应返回后做一些处理，例如处理错误状态码、统一格式等
    console.log('响应拦截器');
    return response;
  },
  (error) => {
    // 响应错误处理
    console.error('响应拦截器错误:', error);
    return Promise.reject(error);
  }
);

export default instance;
