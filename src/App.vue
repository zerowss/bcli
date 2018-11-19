<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "hello",
      date:''
    };
  },
  created() {
    this.getMsg();
  },
  methods: {
    async getMsg() {
      const res = await this.$http.get("/api/example/get");
      console.log(res,'res');
      if(res.data &&res.data.code == 0){
          this.msg = res.data.data.examples[0]['msg'];
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img{
  width: 200px;
  height: auto;
}
</style>
