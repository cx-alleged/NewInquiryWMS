<template>
<div class="grblgl-container">
    <div class="search-row">
        <div class="search-row-input-item">
          <el-input v-model="diagnoseLabels" :readonly=true></el-input>
        </div>
    </div>
    <div class="table-div-continer">
    <div class="table-continer">
            <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            :data="tableData.list"
            :header-row-class-name="headerClassname"
            :row-class-name="rowClassname"
            stripe
            style="width:968px;border:1px solid #ebeef5;overflow-y:auto;">
            <el-table-column
                type="selection"
                width="96">
            </el-table-column>
            <el-table-column
            prop="pName"
            label="姓名"
            width="250">
            </el-table-column>
            <el-table-column
            prop="inquiryDate"
            label="最近就诊时间"
            width="360">
            </el-table-column>
            <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" class="btn-font-default">查看病例</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
    </div>
  <div class="foot-container">
      <div class="page-container">
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="search_obj.pageNum"
        :page-size="search_obj.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableData.total">
      </el-pagination>
    </div>
    <div class="search-row-btn-group">
       <el-button class="btn-blue">导出病历</el-button>
       <el-button class="btn-default"  @click="GobackPage()">返回</el-button>
    </div>
  </div>
  
</div> 
</template>
<style lang="scss">
    @import '../assets/css/grblglpage.scss';
</style>

<script src="../assets/js/grblglpage.js">

</script>
