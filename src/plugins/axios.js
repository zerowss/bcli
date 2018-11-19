"use strict";

import axios from "axios";
import qs from "qs";
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
  const config = {
    cancelToken: new CancelToken(c => {
      // 一个执行器函数接收一个取消函数作为参数
      cancels.push(c);
    })
  };
  if (isTransformRequest) {
    config.transformRequest = [
      data => {
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        data = qs.stringify(data);
        return data;
      }
    ];
  }
  const _axios = axios.create(config);
  _axios.defaults.headers.get["Cache-Control"] = "no-cache";
  _axios.defaults.headers.get["Pragma"] = "no-cache";
  _axios.defaults.headers.common["Accept"] = "";
  _axios.defaults.headers.get["Content-Type"] =
    "application/x-www-form-urlencoded charset=utf-8";
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
    return fetch(options).post(url, {
      params: params
    });
  },
  storageSet(key, data) {
    const dataStr = JSON.stringify(data);
    localStorage.setItem(key, dataStr);
  },
  storageGet(key) {
    if (!localStorage.getItem(key)) {
      return "";
    }
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  },
  storageRemove(key) {
    localStorage.removeItem(key);
  }
};
