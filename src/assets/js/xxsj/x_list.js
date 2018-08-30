export default {
    data() {
      return {
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        input5:'',
        currentPage4:1,
        search_obj:{
          pname:"",
          startDate:null,
          endDate:null,
          pageNum:1,
          pageSize:10
        },
        // tableData: {
        //   list:[],
        //   pageNum:1,
        //   pageSize:10,
        //   total:0
        // }
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
      },
      /**
       *下载文件
       *
       */
      downLoadFile(){
        var _that = this;
        this.$http.get('/infoGather/getPatientInfoFile',{
          responseType:'blob'
        })
        .then(function (res) {
            let blob = new Blob([res.data],{type:"application/octet-stream"});
            let objectUrl = URL.createObjectURL(blob);
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = objectUrl
            var fileName = "";
            if(_that.search_obj.startDate){
              fileName = fileName+_that.search_obj.startDate;
            }
            if(_that.search_obj.endDate){
              fileName = fileName+_that.search_obj.endDate;
            }
            if(fileName == ""){
              fileName = "导出病历列表";
            }
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    }
  }