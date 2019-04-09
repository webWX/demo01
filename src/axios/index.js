import axios from 'axios';
import store from '@/store';

import util from './util';

let TIME_OUT = 10000;
let BASE_URL;

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://api.dolabank.club/';
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'https://api.dolabank.club/';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://www.dolabank.com/apigateway/';
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    'X-Dola-Time': util.getSeconds(),
    'X-Dola-ClientID': util.getGuid()
  }
});

// post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
instance.interceptors.request.use(config => {
  if (config.showLoading) {
    util.showFullScreenLoading(config.loadingText);
  }

  return config;
}, error => {
  return Promise.error(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  if (response.config.showLoading) {
    util.tryHideFullScreenLoading();
  }
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, error => {
  return Promise.reject(error.response);
});

/**
 * 请求
 * @method $http
 * @param { String } method 请求方式
 * @param { String } url 请求接口
 * @param { Object } params 请求参数
 * @returns { Object } 请求返回结果
 */
export const $http = ({ method = 'get', url, params, notShowLoading, loadingText }) => {
  let codekey = util.getRrandomStr();
  let token = store.state.token;
  let platform = store.state.platform;

  platform = platform || 'wechat';
  params = util.getParams(platform, token, params);
  console.log(params);
  params = util.encryption(codekey, params, 'code');

  return new Promise((resolve, reject) => {
    instance[method](url, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': codekey
      },
      showLoading: !notShowLoading,
      loadingText: loadingText
    }).then(res => {
      let key = res.headers['x-dola-edoc'];
      let data = res.data;
      let str = util.decrypt(key, data, 'code');

      data = JSON.parse(str);

      if (data.code === 0) {
        resolve(data.data);
      } else {
        // error
      }
    }).catch(err => {
      reject(err);
    });
  });
};
