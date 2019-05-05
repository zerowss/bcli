import Vue from "vue";
import request from "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./main.scss";
// 引入fontAwesome库
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

import "./components/index"; //加载全局注册组件
import "./icons/index"; //单独注册svg全局组件 因为其需要引入svg文件
Vue.prototype.$http = request;
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

library.add(fas, fab, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

request.init({
  success(res) {
    if (res.data.code === 108) {
      return vm.$router.replace("/login");
    }
    if (res.data && res.data.code !== 0) {
      const message = res.data.desc ? res.data.desc : "系统错误";
      return vm.$message.error(message, 0);
    }
    if (res.data && res.data.code === 0) {
      // Vue.prototype.$operation_time = res.data.version.operation_time;
      // console.log(vm.$operation_time, 'operation_time')
    }
  },
  error(err) {
    if (err && err.response.status === 401) {
      return vm.$router.replace("/login");
    }
    console.log("err:", err.response.data);
    const errMsg = err.response.data.message || err;
    vm.$alert(`系统错误: ${errMsg}`, "系统提示信息", {
      confirmButtonText: "确定",
      customClass: "re-alert-error-message"
    });
  }
});
