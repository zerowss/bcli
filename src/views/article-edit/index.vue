<template>
    <div class="article-edit" > 
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="图片" prop="header_cover_url">
                <el-upload
                    :class="ruleForm.header_cover_url?`avatar-uploader hideCard`:`avatar-uploader`"
                    :file-list="fileList"
                    :action="picAction"
                    :data="picData"
                    :limit="1"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-error="handleError"
                    :before-upload="handleBefore"
                    :on-success="handleSuccess"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus" ></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="ruleForm.header_cover_url" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="标题" prop="title">
               <el-input v-model="ruleForm.title"></el-input> 
            </el-form-item>
            <el-form-item label="摘要" prop="summary">
                <el-input type="textarea" v-model="ruleForm.summary"></el-input>
            </el-form-item>
            <el-form-item label="是否发布" prop="is_release">
                <el-switch 
                    active-value="1"
                    inactive-value="0"
                    v-model="ruleForm.is_release">
                </el-switch>
            </el-form-item>
            <el-form-item label="内容" prop="handbook">
               <div class="mavonEditor">
                    <mavon-editor 
                    :toolbars="markdownOption"
                    defaultOpen="edit"
                    v-model="ruleForm.handbook"/>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
