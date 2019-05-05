<template>
    <div class="menu-aside" > 
        <el-menu
          ref="menuAside"
          class="el-menu-vertical-demo"
          unique-opened
          :router="true"
          @open="handleOpen"
          @select="handleSelect"
          :collapse="isCollapse"
          :default-active="activeIndex">
          <div v-for="(item,parentIndex) in menuList" :key="parentIndex">
            <el-submenu
              @click="handleSelect(item.path)"
              :index="item.path"
              :popper-class="item.children && item.children.length ? `` : `submenu-popper-hide`"
              :class="[
                activeIndex == item.path ? 'menu-aside-active': '',
                item.children && item.children.length ? `` : `menu-aside-no-icon`]">
              <template slot="title" >
                <font-awesome-icon  :icon="item.icon" style="color:#fff;margin-right:10px;font-size: 14px;"/>
                <span>{{item.title}}</span>
              </template>
              <template v-if="item.children && item.children.length">
                <el-menu-item v-for="(child,childIndex) in item.children" :key="childIndex" :index="child.path" :route="child.path">
                  {{child.title}}
                </el-menu-item>
              </template>
            </el-submenu>
          </div>
        </el-menu>
    </div>
</template>
<style lang="scss">
  .menu-aside {
    .el-submenu {
      &.menu-aside-no-icon {
        .el-icon-arrow-down {
          display: none;
        }
      }
      .el-submenu__title {
        text-align: left;
        padding: 0 8px !important;
        .el-icon-arrow-down {
          display: none;
        }
        .el-icon-arrow-right{
          display: none;
        }
      }
      .el-menu-item{
        color: #ffffff;
        min-width: auto;
        padding: 0 20px !important;
      }
    }
    .el-menu--collapse{
      width: 32px;
    }
    .el-submenu__title:hover {
      background-color: #64afaf;
    }
    .el-menu-item:hover, .el-menu-item:focus {
      background-color: #64afaf;
    }
  }
  .submenu-popper-hide {
    display: none;
  }
</style>

<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
