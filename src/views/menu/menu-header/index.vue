<template>
  <div class="menu-header">
    <el-row type="flex" class="row-bg">
      <el-col class="logo">
        <div class="grid-content">
          <h3>zero管理系统</h3>
        </div>
      </el-col>
      <el-col class="show-more">
        <div class="grid-content">
          <font-awesome-icon @click="handleCollapse" :icon="iconCollapse"  style="font-size:16px;cursor: pointer;"/>
        </div>
      </el-col>
      <el-col class="setting">
        <div class="grid-content setting-item">
          <div>
            <font-awesome-icon icon="cog" pulse style="font-size:16px;"/>
          </div>
          <div>
            <el-badge :value="12" class="item">
              <i class="el-icon-bell" style="font-size:16px;"></i>
            </el-badge>
          </div>
          <div>
            <el-badge :value="12" class="item">
              <i class="el-icon-message" style="font-size:16px;"></i>
            </el-badge>
          </div>
          <div>
            <span>{{userName}}</span>
            <el-dropdown style="margin-right:15px;">
              <i class="el-icon-caret-bottom"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
