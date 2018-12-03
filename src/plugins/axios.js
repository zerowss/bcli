"use strict";

import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
console.log(process.env, "环境");
let cancels = [];
// 初始化 设置钩子函数
let _before, _error, _success, _complete;

function handleError(err) {
  const isCanceled = err && err.message && err.message.canceled;
  if (isCanceled) return;
  _error(err);
}

function setOptions(axiosInstance) {
  axiosInstance.interceptors.request.use(
    config => {
      // 在发送请求之前做某事
      _before();
      return config;
    },
    error => {
      // 请求错误时做些事
      // _error(error)
      _complete();
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    response => {
      _success(response);
      _complete();
      return response;
    },
    error => {
      _complete();
      handleError(error);
      return Promise.reject(error);
    }
  );
}

let fetch = (options = {}) => {
  const { globalHandle = true, isTransformRequest = true } = options;
  const CancelToken = axios.CancelToken;
  const token = Cookies.get("token");
  const config = {
    cancelToken: new CancelToken(c => {
      // 一个执行器函数接收一个取消函数作为参数
      cancels.push(c);
    }),
    method: options.method
  };
  if (isTransformRequest) {
    config.transformRequest = [
      data => {
        data = qs.stringify(data);
        return data;
      }
    ];
  }
  if (options.method == "post") {
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    };
  }
  const _axios = axios.create(config);
  _axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  if (globalHandle) {
    setOptions(_axios);
  }
  return _axios;
};

export default {
  init(options) {
    const defaultOptions = {
      before() {},
      error() {},
      success() {},
      complete() {}
    };
    options = Object.assign({}, defaultOptions, options);
    _before = options.before;
    _error = options.error;
    _success = options.success;
    _complete = options.complete;
  },
  get(url, params, options) {
    return fetch(options).get(url, {
      params: params
    });
  },
  post(url, params, options) {
    const opt = {
      options: options || {},
      method: "post"
    };
    return fetch(opt).post(url, params);
  }
};
