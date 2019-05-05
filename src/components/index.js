/*
 * @Author: wangss 
 * @Date: 2019-02-19 10:08:52 
 * @Last Modified by: wangss
 * @Last Modified time: 2019-02-27 10:20:48
 */

import Vue from "vue";
const contexts = require.context(".", false, /\.vue$/);
contexts.keys().forEach(component => {
  console.log("components", component);
  const componentConfig = contexts(component);
  const ctrl = componentConfig.default || componentConfig;
  Vue.component(ctrl.name, ctrl);
});
