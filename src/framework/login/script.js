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
  mounted() {},
  methods: {
    // 注册
    resetClick(num) {
      this.activity = num;
    },
    async weChatLogin() {
      const res = await this.$http.get("/api/wechat/redirect", {});
      if (res.data && res.data.code == 0) {
        window.location.href = res.data.url;
      }
    }
  }
};
