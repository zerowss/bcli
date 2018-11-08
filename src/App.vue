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
    getMsg() {
      this.axios
        .get("/api/example/get")
        .then(response=>{
          const data = response.data.data.examples;
          this.msg = data[0]['msg'];
        })
        .catch(error=> {
          console.log(error);
        });
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
