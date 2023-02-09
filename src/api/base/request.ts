import Axios from 'axios';
import querystring from 'querystring';
import baseConfig from './httpBaseConfig';
import { notification } from 'antd';
// import router from 'umi/router';
import { history } from 'umi';
import { getUserIdFromStorage, getTokenFromStorage } from '../../global/CommonUtils';
let axios = Axios.create({
  baseURL: baseConfig.baseUrl + baseConfig.port + baseConfig.prefix,
  // transformRequest: [function (data) {
  //   // jtxt = JSON.stringify(data.data);
  //   // arr = {data:jtxt};
  //   datas = querystring.stringify(data);
  //   return datas;
  // }],
  //`withCredentails`选项表明了是否是跨域请求
  //withCredentials:true,
  timeout: 120000,
  headers: { 'Content-Type': 'application/json' }
});


//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
  let userId = getUserIdFromStorage();
  let token = getTokenFromStorage();

  //if(token) config.headers.Authorization = "Bearer " + token;
  if (token) config.headers['Authorization'] = token;
  // if (userId && userId !== "undefined") {
  //   // console.log("userId="+userId)
  //   // config.headers.userId = userId
  //   config.headers['Authorization'] = localStorage.getItem("TOKEN")
  //   config.headers['userId'] = localStorage.getItem("USER_ID")
  // }
  //得到参数中的requestname字段，用于决定下次发起请求，取消相应的  相同字段的请求
  //post和get请求方式的不同，使用三木运算处理
  // let requestName = config.method === 'post'?config.data.requestName :config.params.requestName
  // //判断，如果这里拿到上一次的requestName，就取消上一次的请求
  // if(requestName) {
  //     if(axios[requestName]&&axios[requestName].cancel){
  //         axios[requestName].cancel()
  //     }
  //     config.cancelToken = new CancelToken(c => {
  //         axios[requestName] = {}
  //         axios[requestName].cancel = c
  //     })
  // }
  return config
}, error => {
  // console.log("error111=" + JSON.stringify(error))
  return Promise.reject(error)
})
// respone拦截器
axios.interceptors.response.use(
  response => {
    const res = response;

    //这里根据后台返回来设置
    // if (res.msg === "success") {
    // return response;
    // } 
    // else {
    //     return Promise.reject(error);
    // }

    if (res.data.code == 200 || res.data.code === "" || res.data.code === undefined || res.data.code === null) {   //服务端定义的响应code码为0时请求成功
      return Promise.resolve(res.data) //使用Promise.resolve 正常响应
    } else if (response.data.code === 401) {
      notification.error({
        message: response.data.msg,
      })
      // history.push('/user/login')
      return Promise.reject(response.data)
    } else {
      notification.error({
        message: `${response?.data?.data || ''} ${response?.data?.msg}`,
      });
      return Promise.reject(response.data)
    }


  },
  error => {
    console.log("error=" + JSON.stringify(error))
    // if (error.message === 'Network Error') {
    //router.push('/Exception/500');
    // }
    notification.error({
      message: error.message,
    });
    return Promise.reject(error)
  }
)


export default class http {



  static async get(url: string, params?: any, header?: any) {
    /**
     * params{
     *  goods：id，
     *  name：string
     * } ==> ?goods=id&name=string
     */
    let res = null;
    try {
      let query = await querystring.stringify(params)

      if (!params) {
        res = await axios.get(url, { headers: header })
      } else {
        res = await axios.get(url + '?' + query)
      }

    } catch (error) {
      this.handleError(error);
      // alert(error);
    }
    return res;
  }
  static async post(url: string, params?: any) {

    try {
      let res = await axios.post(url, params)
      return res
    } catch (error) {
      // alert(error.message);
      this.handleError(error);
      return error
    }
  }
  static async patch(url: string, params?: any) {
    try {
      let res = await axios.patch(url, params)
      return res
    } catch (error) {
      this.handleError(error);
      return error
    }
  }
  static async put(url: string, params?: any) {
    try {
      let res = await axios.put(url, params)
      return res
    } catch (error) {
      this.handleError(error);
      return error
    }
  }
  static async delete(url: string, params?: any) {
    /**
     * params默认为数组
     */
    try {
      let res = await axios.post(url, params)
      return res
    } catch (error) {
      this.handleError(error);
      return error
    }
  }

  static handleError(error: any) {
    const status = error.name;
    const message = error.message;
    // console.log("status" + status)
    // if (status === 401) {
    //   // @HACK
    //   /* eslint-disable no-underscore-dangle */
    //   window.g_app._store.dispatch({
    //     type: 'login/logout',
    //   });
    //   return;
    // }
    // environment should not be used
    if (status === 403) {
      // router.push('/Exception/403');
      return;
    }
    else if (message === 'Network Error') {
      // router.push('/Exception/500');
      return;
    }
    else if (status >= 404 && status < 422) {
      // router.push('/404');
    } else {
      return error
    }

  }
}

