<template>
<div class="blgl-container">
    <div class="search-row">
        <div class="search-row-input-item">
          <el-input></el-input>
        </div>
    </div>
    <div class="table-div-continer">
    <div class="table-continer">
            <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            :data="tableData"
            :header-row-class-name="headerClassname"
            :row-class-name="rowClassname"
            stripe
            style="width:968px;border:1px solid #ebeef5;overflow-y:auto;">
            <el-table-column
                type="selection"
                width="96">
                </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="250">
            </el-table-column>
            <el-table-column
            prop="date"
            label="最近就诊时间"
            width="360">
            </el-table-column>
            <el-table-column
            label="操作"
            width="260">
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
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    <div class="search-row-btn-group">
       <el-button class="btn-blue">导出病历</el-button>
       <el-button class="btn-default">返回</el-button>
    </div>
  </div>
  
</div> 
</template>
<style lang="scss">
.blgl-container{
  padding: 40px 30px 20px 30px;
  padding-top: 40px;
  margin: 0px;
  .search-row{
  width: 100%;
  height: 72px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .search-row-input-item{
    width: 1584px;
    margin: 0 auto;
    input.el-input__inner{
      font-family: PingFangSC-Regular;
      font-size: 34px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #1f2d3d;
      line-height: 70px;
      height: 70px;
      border-radius: 8px;
    }
    i.el-icon-search{
      font-size: 27px;
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
.foot-container{
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-row-btn-group{
  padding-left: 50px;
  width: 418px;
  .btn-blue{
    width: 200px;
    height: 70px;
    background-color: #20a0ff;
    border-radius: 8px;
    border: 0px;
    span{
      font-family: PingFangSC-Regular;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 23.8px;
      letter-spacing: 0px;
      color: #ffffff;
    }

  }
  .btn-default{
    width: 200px;
    height: 70px;
    border: solid 1px #20a0ff;
    height: 70px;
    border-radius: 8px;
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
}
.table-div-continer{
    display: flex;
    justify-content: center;
}
.table-continer{
    width: 968px;
    max-height: 620px;
    overflow:  auto;
    .el-table__header-wrapper{
      background: #e5e9f2;
    }
    .el-table__body-wrapper{
      max-height: 540px;
      overflow-y:auto;
    }
    .el-checkbox__inner{
        width: 25px;
        height: 25px;
    }
    .el-checkbox__inner::after{
        height: 14px;
        left: 9px;
        top: 3px;
    }
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
    line-height: 32px;
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
 .page-container{
   text-align: center;
   width: 768px;
   margin-top: 0px;
    .el-pager li{
      width: 48px;
	    height: 47px;
      line-height: 47px;
      border: solid 1px #d3dce6;
      margin: 0px;
    }
    .el-pagination button{
      width: 48px;
      height: 47px;
    }
    span.el-pagination__total{
        font-family: HelveticaNeue;
         font-size: 22px;
         height: 47px;
         line-height: 47px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #475669;
    }
    span.el-pagination__jump{
      font-family: HelveticaNeue;
       font-size: 22px;
         height: 47px;
         line-height: 47px;
         font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #475669;
         input {
           font-family: HelveticaNeue;
           font-size: 22px;
           font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #475669;
         }
    }
 }
}



</style>

<script>
  export default {
    data() {
      return {
        input5:'',
        currentPage4:1,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          sex:'男',
          age:28,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sex:'男',
          age:28,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          sex:'男',
          age:28,
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          sex:'男',
          age:28,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sex:'男',
          age:28,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          sex:'男',
          age:28,
          address: '上海市普陀区金沙江路 1516 弄'
        }]
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>
