import { local } from "../../../common/units/storage";
export default {
  name: "menu-header",
  data() {
    return {
      userName: "",
      iconCollapse: "th-large",
      isCollapse: false
    };
  },
  props: {},
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const userInfo = local.getItem("userInfo");
      this.userName = userInfo.username;
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.iconCollapse = "th-list";
      } else {
        this.iconCollapse = "th-large";
      }
      this.$bus.$emit("collapse", this.isCollapse);
    }
  }
};
