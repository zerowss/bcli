/*
 * @Author: wangss 
 * @Date: 2018-11-08 15:25:14 
 * @Last Modified by: wangss
 * @Last Modified time: 2018-11-09 14:35:06
 */
module.exports = {
  lintOnSave: false,
  outputDir: "bcli",
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
