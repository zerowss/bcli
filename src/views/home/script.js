import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "hello"
    };
  },
  created() {
    this.getMsg();
  },
  methods: {
    async getMsg() {
      const res = await this.$http.get("/api/example/get");
      console.log(res, "res");
      if (res.data && res.data.code == 0) {
        this.msg = res.data.data.examples[0]["msg"];
      }
    }
  }
};
