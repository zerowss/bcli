<template>
    <div class="menu-main" > 
       <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
    </div>
</template>
<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
