<template>
<div class="brgl-container">
    <div class="search-row">
        <div class="search-row-input-item">
          <el-input placeholder="请输入病人名字" v-model="input5">
              <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="search-row-btn-group">
          <el-button class="btn-default">同步基本信息</el-button>
        </div>
    </div>
    <div class="table-continer">
        <el-table
        :data="tableData"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;overflow-y:auto;">
        <el-table-column
        prop="name"
        label="姓名"
        width="250">
        </el-table-column>
        <el-table-column
        prop="date"
        label="最近就诊时间"
        width="363">
        </el-table-column>
        <el-table-column
        prop="sex"
        label="性别"
        width="130">
        </el-table-column>
        <el-table-column
        prop="age"
        label="年龄"
        width="130">
        </el-table-column>
        <el-table-column
        prop="address"
        label="来源地"
        width="300">
        </el-table-column>
        <el-table-column
        label="操作"
        width="659.99">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" class="btn-font-default">基本信息</el-button>
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
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</div> 
</template>
<style lang="scss">
.brgl-container{
  padding: 40px;
  margin: 0px;
}

.search-row{
  width: 100%;
  height: 72px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .search-row-input-item{
    width: 352px;
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
.search-row-btn-group{
  padding-left: 50px;
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
}
.table-continer{
    max-height: 620px;
    overflow:  auto;
    .el-table__header-wrapper{
      background: #e5e9f2;
    }
    .el-table__body-wrapper{
      max-height: 540px;
      overflow-y:auto;
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
    margin-top: 40px;
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

</style>

<script>
  export default {
    data() {
      return {
        bryfpage:'bryfpage',
        table_edit:'test',
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
