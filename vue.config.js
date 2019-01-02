/*
 * @Author: wangss 
 * @Date: 2018-11-08 15:25:14 
 * @Last Modified by: wangss
 * @Last Modified time: 2018-12-25 14:42:34
 */
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, ".", dir);
};

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
    // const svgRule = config.module.rule("svg");
    // svgRule.uses.clear();
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons/svg")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  },
  lintOnSave: false,
  devServer: {
    port: 8088, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
