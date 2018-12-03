import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import Cookies from "js-cookie";
import routes from "./integration";
Vue.use(VueRouter);
const router = new VueRouter({ routes });
console.log("routes", routes);
router.beforeEach((to, from, next) => {
  Nprogress.start();
  console.log(to, "to");
  console.log(from, "from");
  if (!Cookies.get("userName") && to.name !== "login") {
    // 判断是否已经登录且前往的页面不是登录页
    return next({
      name: "login"
    });
  } else {
    return next();
  }
});
router.afterEach(() => {
  Nprogress.done(); // 结束Progress
});

export default router;
