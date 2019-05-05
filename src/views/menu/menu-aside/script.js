export default {
  name: "menu-aside",
  data() {
    return {
      activeIndex: "/home",
      isCollapse: false,
      menuList: [
        {
          index: "1",
          title: "首页",
          icon: "home",
          path: "/home"
        },
        {
          index: "2",
          title: "我的工作台",
          icon: "desktop",
          path: "/about"
        },
        {
          index: "3",
          title: "文章编辑",
          icon: "briefcase",
          path: "/article-edit"
        },
        {
          index: "4",
          title: "管理平台",
          icon: "layer-group",
          path: "",
          children: [
            {
              index: "4-1",
              title: "文章列表",
              path: "/management-platform/article-management"
            },
            {
              index: `4-2`,
              title: "项目管理",
              path: ""
            }
          ]
        }
      ]
    };
  },
  props: {},
  mounted() {
    this.$bus.$on("collapse", h => {
      this.isCollapse = h;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      this.activeIndex = key;
      console.log("open", key, keyPath);
      console.log("as", this.$refs.menuAside);
      console.log(`ac`, this.activeIndex);
      this.$router.push(key);
    },
    handleClose(key, keyPath) {
      console.log("close", key, keyPath);
    },
    handleSelect(key) {
      this.$router.push(key);
    }
  }
};
