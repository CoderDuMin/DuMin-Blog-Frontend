import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  if(config.headers.showLoading === '1'){
    
  }
  // 3.params/data序列化的操作
  // console.log("请求被拦截");

  return config;
}, err => {

});

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        alert("未授权访问");
        window.localStorage.clear()
        window.location.href = 'http://1.117.247.44:5505'
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return Promise.reject(err.response.data) ;
});

export default instance;