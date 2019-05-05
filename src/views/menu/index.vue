<template>
  <el-container class="menu" style="height:100%;">
    <!-- 头部区域 -->
    <el-header height="40px">
      <menu-header></menu-header>
    </el-header>
    <!-- 主体 -->
    <el-container style="height:calc(100% - 40px);">
      <!-- 侧边栏 -->
      <el-aside width="auto">
        <menu-aside></menu-aside>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <menu-main></menu-main>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">
  .menu {
    .el-header {
      background-color: #ffffff;
      color: #666666;
      padding: 0;
      box-shadow: 0 2px 2px rgba(0, 0, 0, .4);
      position: relative;
    }
    .el-aside {
      background-color: #2b333e;
      color: #ffffff;
      text-align: left;
      height: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
    }
    .el-menu{
      background-color: #2b333e;
      color: #ffffff;
      text-align: center;
      border-right: none;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      height: 100%;
      padding: 0;
    }
  }
</style>
<style scoped lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>
