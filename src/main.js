import Vue from "vue";
import request from "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./main.scss";

Vue.prototype.$http = request;
Vue.config.productionTip = false;

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
      if (res.data.status != "success") {
        const message = res.data.desc ? res.data.desc : "系统错误";
        return vm.$message.error(message, 0);
      }
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
    // vm.$message.error(`系统错误: ${errMsg}`, 0)
    vm.$alert(`系统错误: ${errMsg}`, "系统提示信息", {
      confirmButtonText: "确定",
      customClass: "re-alert-error-message"
    });
  }
});
