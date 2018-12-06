import { local } from "../../common/units/storage";

export default {
  components: {},
  data() {
    return {
      userName: ""
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const userInfo = local.getItem("userInfo");
      this.userName = userInfo.username;
    }
  }
};
