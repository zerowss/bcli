<template lang='pug'>
    div.login
        div.login-icon
            img(src="../../assets/logo.png")
            h5 后台管理系统
        div.login-content
            div.login-wrap
                el-tabs( v-model="activeName" @tab-click="handleClick")
                    el-tab-pane( label="登录" name="login")
                        el-form( :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" )   
                            el-form-item( label="用户名" prop="username" )
                                el-input( v-model="ruleForm.username" placeholder="请输入用户名" style="width:240px;" )
                            el-form-item( label="密码" prop="password" )
                                el-input( v-model="ruleForm.password" type="password" placeholder="请输入密码" style="width:240px;" )
                            el-form-item( label="" label-width="120px")    
                                el-button( type="primary" @click="submintForm('ruleForm')" ) 提交
                                el-button( @click="resetForm('ruleForm')" ) 重置
                    el-tab-pane( label="注册" name="register")
                       el-form( :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="80px" class="demo-ruleForm" )   
                            el-form-item( label="用户名" prop="username" )
                                el-input( v-model="registerForm.username" placeholder="请输入用户名" style="width:240px;" )
                            el-form-item( label="密码" prop="password" )
                                el-input( v-model="registerForm.password" type="password" placeholder="请输入密码" style="width:240px;" )
                            el-form-item( label="确认密码" prop="checkPass" )
                                el-input( v-model="registerForm.checkPass" type="password" placeholder="请输入密码" style="width:240px;" )
                            el-form-item( label="" label-width="120px")
                                el-button( type="primary" @click="submintRegisterForm('registerForm')" ) 提交
                                el-button( @click="resetRegisterForm('registerForm')" ) 重置 
                    
</template>
<style lang="scss">
.login{
    .login-content{
        .login-wrap{
            .el-tabs__header{
                width: 100px;
                margin: 10px auto;
            }
            .el-tabs__active-ba{
                background-color:#ffffff;
            }
            .el-tabs__nav-wrap::after{
                background-color:#ffffff;
            }
            
        }
    }
}
</style>
<style scoped lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>

