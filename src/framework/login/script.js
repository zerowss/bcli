import userLogin from "./user-login";
import userRegister from "./user-register";
export default {
  components: {
    userLogin,
    userRegister
  },
  data() {
    return {
      activity: 1
    };
  },
  methods: {
    // 注册
    resetClick(num) {
      this.activity = num;
    },
    weChatLogin() {
      this.$http.get("/api/wechat/redirect", {});
    }
  }
};
