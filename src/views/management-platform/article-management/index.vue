<template>
  <div class="article-management">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题" align="center" min-width="100"></el-table-column>
      <el-table-column label="创建日期" align="center" min-width="100">
        <template slot-scope="scope">{{formatTime(scope.row.creat_time)}}</template>
      </el-table-column>
      <el-table-column label="图片" align="center" min-width="100">
        <template slot-scope="scope">
          <img :src="scope.row.header_cover_url" alt="pic" width="100" height="30">
        </template>
      </el-table-column>
      <el-table-column prop="summary" label="摘要" align="center" min-width="100"></el-table-column>
      <el-table-column prop="is_release" label="是否发布" align="center" min-width="100">
        <template slot-scope="scope">
          <div>{{scope.row.is_release == '0'?'未发布':'已发布'}}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="100">
        <template slot-scope="scope">
            <div>
                <el-button type="text">修改</el-button>
                <el-button type="text">查看</el-button>
            </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
