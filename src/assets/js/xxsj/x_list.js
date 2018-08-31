export default {
    data() {
      return {
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        rangDate:null,
        search_obj:{
          startDate:null,
          endDate:null,
          pageNum:1,
          pageSzie:10
        },
        tableData: {
          list:[],
          pageNum:1,
          pageSize:10,
          total:0
        }
      }
    },
    watch: {
        rangeDate: function (newQuestion, oldQuestion) {
          this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');   
          this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd');   
        }
    },
    created ()  {
        this.getBlList();
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      searchBrxx(row){
        var pathParams = {},
        _that = this;
        pathParams.path = "xbrxxpage";
        var params  = JSON.parse(JSON.stringify(row));
        pathParams.data = params;
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
       _that.$common.GotoPage("xbrxxpage",pathParams,_that);
      },
      deleteBlObj(row){
        var _that = this;
        debugger
        var url ='/infoGather/getPatientInfo?inquiryId='+row.inquiryId;
        _that.$http.delete(url).then(function (response) {
          if(response.code=="1"){
            _that.$common.openSuccessMsgBox("病历删除成功!",_that);
            //重新触发列表加载
            _that.getBlList();
          }
        }).catch(function (error) {});
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.search_obj.pageNum = val;
        this.getWzqkList(this.search_obj);
      },
      /**
       * 获取问诊情况列表
       */
      getBlList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/infoGather/getRecordList";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
                if(JSON.stringify(response.data.pageInfo.list)!="[]"){
                    _that.tableData = response.data.pageInfo;
                }
            }).catch(function (error) {
                console.log(error);
            });
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