<template>
<div class="brgl-container">
    <div class="search-row">
        <div class="search-row-input-item">
          <el-input placeholder="请输入病人名字" v-model="search_obj.panme">
              <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="search-row-btn-group">
          <el-button class="btn-default">同步基本信息</el-button>
        </div>
    </div>
    <div class="table-continer">
        <el-table
        :data="tableData.list"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;overflow-y:auto;">
        <el-table-column
        prop="pName"
        label="姓名"
        width="250">
        </el-table-column>
        <el-table-column
        prop="latestDate"
        label="最近就诊时间"
        width="363">
        </el-table-column>
        <el-table-column
        prop="gender"
        label="性别"
        width="130">
        </el-table-column>
        <el-table-column
        prop="age"
        label="年龄"
        width="130">
        </el-table-column>
        <el-table-column
        prop="residence"
        label="来源地"
        width="300">
        </el-table-column>
        <el-table-column
        label="操作"
        width="659.99">
        <template slot-scope="scope">
            <el-button @click="gotoyfpage(scope.row,brxxpage)" type="text" class="btn-font-default">基本信息</el-button>
            <el-button @click="gotoyfpage(scope.row,bryfpage)" type="text" class="btn-font-default">查看药方</el-button>
            <el-button @click="gotoyfpage(scope.row,table_edit)" type="text" class="btn-font-default">新建复诊</el-button>
            <el-button type="text" class="btn-font-default bnt-font-color">移除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>

  <div class="page-container">
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tableData.pageNum"
      :page-size="tableData.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="tableData.total">
    </el-pagination>
  </div>
</div> 
</template>

<style lang="scss">
   @import '../assets/css/brglpage.scss';
</style>

<script src="../assets/js/brglpage.js">
  
</script>
