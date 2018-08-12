<template>
    <div class="br-list-div">
        <div class="br-list-container">
            <div class="search-row">
                <div class="search-range-date-item">
                    <el-date-picker
                        class="rq-input"
                        v-model="input5"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="search-row-btn-group">
                    <el-button class="btn-default btn-deault-size btn-color-blue" @click="gotoyfpage(wzqkpage)">查询</el-button>
                </div>
            </div>
            <div class="table-continer">
                <el-table
                    :data="tableData.list"
                    :header-row-class-name="headerClassname"
                    :row-class-name="rowClassname"
                    stripe
                    style="border:1px solid #ebeef5;overflow-y:auto;height:100%;">
                    <el-table-column
                        type="selection"
                        width="96">
                    </el-table-column>
                    <el-table-column
                    prop="inquiryDate"
                    label="就诊时间"
                    width="340">
                    </el-table-column>
                    <el-table-column
                    prop="pName"
                    label="姓名"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    label="操作">
                <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" class="btn-font-default">查看</el-button>
                        <el-button @click="gotoyfpage(scope.row,bryfpage)" type="text" class="btn-font-default">删除</el-button>
                </template>
                    </el-table-column>
                </el-table>
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
                    :pager-count=5
                    layout="total, prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
                </div>
                <div class="search-row-btn-group">
                <el-button class="btn-default btn-deault-size btn-color-blue">导出病历</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .br-list-div{
        width: 100%;
        height: calc(100% - 88px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 1600px){
        .br-list-container{
            width: 100%;
            max-width: 900px;
            height: 100%;
            .search-row{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 40px 30px 30px 30px;
            }
            .table-continer{
                margin: 0px 30px;
                max-height: calc(100% - 241px);
                overflow:  auto;
                .el-table__header-wrapper{
                    background: #e5e9f2;
                }
            }
             .foot-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 30px 30px 0px 30px;
             }
        }
    }
    @media screen and (min-width:1600px) and (max-width:1920px){
    .br-list-container{
        width: 1000px;
        height: 100%;
        .search-row-btn-group{
            padding: 0px;
            .btn-default{
            border: solid 1px #20a0ff;
            line-height: 31px;
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
            .btn-deault-size{
                width: 200px;
            }
            .btn-color-blue{
                background-color: #20a0ff;
                span{
                    color: #ffffff
                }
            }
        }
        .search-row{
            width: 100%;
            height: 60px;
            margin-bottom: 30px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .search-input-item{
                input.el-input__inner{
                    height: 70px;
                    border-radius: 8px;
                    border: solid 1px #c0ccda;
                    background-color: #ffffff;
                    font-family: PingFangSC-Medium;
                    font-size: 32px;
                    line-height: 32px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #475669;
                }
            }
            .rq-input{
            width: 510px;
            height: 60px;
            margin-right: 40px;
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
                line-height: 55px;
                width: 6%;
            }
            }

        }
        .foot-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
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
                font-family: HelveticaNeue;
                font-size: 22.2px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
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
        .btn-font-default{
            font-family: PingFangSC-Regular;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 34px;
            letter-spacing: 0px;
            color: #20a0ff;
        }

        .table-continer{
            max-height: calc(100% - 241px);
            overflow:  auto;
            .el-table__header-wrapper{
                background: #e5e9f2;
            }
            .el-table__body-wrapper{
                max-height: calc(100% - 76px);
                overflow-x: hidden;
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
    }
       }
</style>
<script>
  export default {
    data() {
      return {
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        input5:'',
        currentPage4:1,
        tableData: {
        "pageNum": 1,
        "pageSize": 1,
        "total": 1,
        "pages": 1,
        "list": [
            {
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }

            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
            }
            ,{
            "pName": "丁克",
            "pId": 1,
            "inquiryDate": "2017.08.09  12:20",
            "inquiryId": 1,
            "gender": "男",
            "residence": "中国四川成都",
            "age": "20"
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
      gotoyfpage(pagename) {
        this.$router.push({
             name: pagename
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


