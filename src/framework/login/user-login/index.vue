<template>
    <div class="login-form">
        <h4 class="form-title">登 录</h4>
        <el-form ref="form" :model="ruleForm" label-width="0" :rules="rules">
            <div class="form-items">
                <el-row class="form-item">
                    <el-col>
                        <el-form-item prop="username">
                            <div class="form-line">
                                <svg-icon icon-class="login" class-name="normall-icon"></svg-icon>
                                <el-input placeholder="昵称/邮箱" v-model="ruleForm.username"></el-input>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="form-item">
                    <el-col>
                        <el-form-item prop="password">
                        <div class="form-line">
                            <svg-icon icon-class="password" class-name="normall-icon"></svg-icon>
                            <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
                        </div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class=form-item>
                    <el-col>
                        <el-form-item>
                            <el-checkbox class="checkbox">记住账号</el-checkbox>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="form-item">
                    <el-button type="primary" class="submit-btn" size="small" @click="submintForm('form')">登 录</el-button>
                </el-row>
            </div>
            
        </el-form>
    </div>
</template>

<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
