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
    weChatLogin() {
      const a =
        "https://open.weixin.qq.com/connect/qrconnect?appid=wx39c379788eb1286a&scope=snsapi_login&redirect_uri=http%3A%2F%2Fmp.weixin.qq.com%2Fdebug%2Fcgi-bin%2Fsandbox%3Ft%3Dsandbox%2Flogin";
      this.getUrl().then(url => {
        window.location.href = url ? url : a;
      });
    },
    async getUrl() {
      const res = await this.$http.get("/api/wechat/redirect", {});
      if (res.data && res.data.code == 0) {
        return res.data.url;
      }
    }
  }
};
