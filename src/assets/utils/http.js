import axios from 'axios'
import qs from 'qs'


// 测试地址
const API = {
    local:'http://139.129.118.14:8085',
    online:'http://139.129.118.14:8085'
}

//production 为生产环境
axios.defaults.baseURL = API.online;
axios.defaults.timeout = 6000;

//http request 拦截器（对发送的数据做提前处理）
axios.interceptors.request.use(
    config => {
      if(config.method!="get"){
        if(typeof(config.data)=="object"){
          console.log(JSON.stringify(config.data));
          config.data = JSON.stringify(config.data);
        }
        config.headers = {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }else{
        config.data = qs.stringify(config.data);
        config.headers = {
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }

      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

//http response 拦截器（对返回的数据做一些处理）
axios.interceptors.response.use(
    response => {
        if(response.status == 200){
            return response.data;
        }
    },
    error => {
        return Promise.reject(error.data)
    }
)
function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
      return response
      // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
      status: 404,
      msg: '网络异常'
    }
  }
  
  function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === 404) {
      // alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
      // alert(res.data.error_msg)
    }
    return res
  }
//简单封装axios 的get post 方法
// export default {
//     post (url, data) {
//       return axios({
//         method: 'post',
//         baseURL: localhosts,
//         url,
//         data: qs.stringify(data),
//         timeout: 10000,
//         headers: {
//            'X-Requested-With': 'XMLHttpRequest',
//            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//          }
//       }).then(
//         (response) => {
//           return checkStatus(response)
//         }
//       ).then(
//         (res) => {
//           return checkCode(res)
//         }
//       )
//     },
//     get (url, params) {
//         console.log("@@@@@@@@@"+params);
//       return axios({
//         method: 'get',
//         baseURL: localhosts,
//         url,
//         params, // get 请求时带的参数
//         timeout: 10000,
//         headers: {
//            'X-Requested-With': 'XMLHttpRequest'
//         }
//       }).then(
//         (response) => {
//           return checkStatus(response)
//         }
//       ).then(
//         (res) => {
//           return checkCode(res)
//         }
//       )
//     }
//   }