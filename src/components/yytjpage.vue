<template>
<div class="sjtj-yytj-container">
    <div class="search-row">
        <div class="search-row-btn-group">
          <el-button class="btn-default wzqk-btn">每日问诊情况</el-button>
          <el-button class="btn-default yytj-btn">用药统计</el-button>
        </div>
        <div class="search-input-item">
          <el-input placeholder="请输入药名" v-model="input5">
              <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="search-rangedate-item">
            <el-date-picker
            class="yytj-range-date"
                v-model="input5"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
      </div>
        <div class="search-row-btn-group"><el-button class="btn-default" style="width:200px">打印</el-button></div>
    </div>
    <div class="table-continer">
        <el-table
        :data="tableData.list"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;">
        <el-table-column
        prop="sequenceId"
        label="序号"
        width="130">
        </el-table-column>
        <el-table-column
        prop="medicine"
        label="药名"
        width="200">
        </el-table-column>
        <el-table-column
        prop="sequenceId"
        label="药量(g)"
        width="176">
        </el-table-column>
    </el-table>
    <el-table
        :data="tableData.list"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;">
        <el-table-column
        prop="sequenceId"
        label="序号"
        width="130">
        </el-table-column>
        <el-table-column
        prop="medicine"
        label="药名"
        width="200">
        </el-table-column>
        <el-table-column
        prop="sequenceId"
        label="药量(g)"
        width="176">
        </el-table-column>
    </el-table>
    <el-table
        :data="tableData.list"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;">
        <el-table-column
        prop="sequenceId"
        label="序号"
        width="130">
        </el-table-column>
        <el-table-column
        prop="medicine"
        label="药名"
        width="200">
        </el-table-column>
        <el-table-column
        prop="sequenceId"
        label="药量(g)"
        width="176">
        </el-table-column>
    </el-table>
  </div>

</div> 
</template>
<style lang="scss">
.sjtj-yytj-container{
  padding: 40px;
  margin: 0px;
  .search-row-btn-group{
    padding: 0px;
    .btn-default{
      border: solid 1px #20a0ff;
      height: 70px;
      span{
        font-family: PingFangSC-Regular;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 23.8px;  
        letter-spacing: 0px;
        color: #20a0ff;
      }
    }
    .wzqk-btn{
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    //   background-color: #f0f9ff;
      border: solid 1px #dcdfe6;
      span{
          color: #303133;
      }
    }
    .yytj-btn{
      margin-left: -6px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: #f0f9ff;
      border-right: solid 1px #20a0ff;
      border-top: solid 1px #20a0ff;
      border-bottom: solid 1px #20a0ff;
      span{
        color: #303133;
      }
    }
  }

  .search-row{
    width: 100%;
    max-width: 1581px;;
    margin-left: 170px;
    height: 72px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-input-item{
        width: 384px;
        input.el-input__inner{
        font-family: PingFangSC-Regular;
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #99a9bf;
        line-height: 70px;
        height: 70px;
        }
        i.el-icon-search{
        font-size: 27px;
        }
  }
  .yytj-range-date{
      width: 510px;
      height: 72px;
      i{
        font-size: 25px;
      }
      input{
        width: 45%;
        font-family: PingFangSC-Regular;
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #99a9bf;
      }
      span.el-range-separator{
        font-size: 30px;
        line-height: 70px;
        width: 6%;
      }
    }
  }
  .btn-font-default{
    font-family: PingFangSC-Regular;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 34px;
    letter-spacing: 0px;
    color: #20a0ff;
  }
  .bnt-font-color{
    color: #ff4949;
  }

  .table-continer{
      max-width: 1520px;
      max-height:714px;
      margin-left: 203px;
      overflow-y:  auto;
      overflow-x: hidden;
      display: flex;
      .el-table{
          overflow: visible;
      }
      .el-table__header-wrapper{
        background: #e5e9f2;
      }
      .el-table__body-wrapper{
        overflow: hidden;
      }
      .el-table .headerClassname,rowClassname {
        background: #f0f9eb;
        height: 76px;
    }
    .el-table .headerClassname th{
        background-color: #e5e9f2;

    }
    .el-table .headerClassname th>.cell{
        font-family: PingFangSC-Medium;
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #475669;
        line-height: 42px;
    }
    .el-table .rowClassname .cell{
        font-family: PingFangSC-Regular;
        font-size: 34px;
        line-height: 34px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #1f2d3d;
    }
  }

  
}
</style>

<script>
  export default {
    data() {
      return {
        bryfpage:'bryfpage',
        table_edit:'test',
        input5:'',
        currentPage4:1,
        tableData: {
        "pageNum": 1,
        "pageSize": 1,
        "total": 1,
        "pages": 1,
        "list": [
          {
          "dose": 100000,
          "medicine": "中药名称",
          "sequenceId": '001'
        },
        {
          "dose": 100000,
          "medicine": "中药名称",
          "sequenceId": '001'
        },
        {
          "dose": 100000,
          "medicine": "中药名称",
          "sequenceId": '001'
        },
         {
          "dose": 100000,
          "medicine": "中药名称",
          "sequenceId":'001'
        },
        {
          "dose": 100000,
          "medicine": "中药名称",
          "sequenceId": 1
        },
        {
          "dose": 100000,
          "medicine": "中药名称",
          "sequenceId": '001'
        },
         {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
        {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
        {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
         {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
        {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
        {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
         {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
        {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        },
        {
          "dose": 20,
          "medicine": "丹参",
          "sequenceId": 1
        }
        ]
      }
      }
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      //跳转到药方界面
      gotoyfpage(row,pagename) {
        this.$router.push({
             name: pagename,
             params:row
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
