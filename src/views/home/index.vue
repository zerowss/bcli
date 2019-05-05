<template>
    <div class="home" > 
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-blur">
                    <p>
                        <font-awesome-icon icon="dollar-sign" class="icon-c" /> 
                        <span>总金额(元)</span>
                    </p>
                    <p>1345.00</p>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-blur-dark">
                   <p>
                        <font-awesome-icon icon="dollar-sign" class="icon-c" /> 
                        <span>总访问量(次)</span>
                    </p>
                    <p>2124.00</p> 
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                   <p>
                        <font-awesome-icon icon="dollar-sign" class="icon-c" /> 
                        <span>总访问量(次)</span>
                    </p>
                    <p>2124.00</p> 
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <p>
                        <font-awesome-icon icon="dollar-sign" class="icon-c" /> 
                        <span>总访问量(次)</span>
                    </p>
                    <p>2124.00</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
