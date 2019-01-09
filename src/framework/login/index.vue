<template>
    <div class="user-login">
        <div class="user-login-bg" ></div>
            <div class="content-wrapper">
            <h2 class="slogan">
                欢迎使用 <br /> zero管理系统
            </h2>
            <div class="form-container">
                <userLogin v-if="activity === 1"></userLogin> 
                <userRegister v-else-if="activity === 2" :changTab="resetClick"></userRegister>
                <el-row class="tips">
                    <span class="link" v-if="activity === 1">没有账号？<a href="javascript:;"  @click="resetClick(2)">立即注册</a></span>
                    <span class="link" v-else-if="activity === 2"><a href="javascript:;"  @click="resetClick(1)">已有账号登录</a></span>
                    <span class="line">|</span>
                    <a href="javascript:;" class="link">忘记密码</a>
                </el-row>
                <el-row class="oauth-box">
                    <div class="hint">第三方账号登录：</div>
                    <div class="oauth">
                        <div class="oauth-bg" @click="weChatLogin">
                            <svg-icon icon-class="wechat" class-name="wechat-icon"></svg-icon>
                        </div>
                    </div>
                </el-row>
            </div>
        </div>
    </div>            
</template>
<style lang="scss">
    .user-login {
        .el-checkbox__label {
            color: #999;
            font-size: 13px;
        }
        .el-form-item {
            margin-bottom: 15px;
        }
        .el-input {
            width: 240px;
            input {
                border: none;
                margin: 0;
                padding-left: 10px;
                font-size: 13px;
            }
        }
    }
</style>
<script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>

