export default {
    data() {
      return {
        brxxpage:"brxxpage",
        grblglpage:"grblglpage",
        bryfpage:'bryfpage',
        table_edit:'bryfpage',
        search_obj:{
          pname:"",
          pageNum:1,
          pageSize:10
        },
        tableData: {
          list:[],
          pageNum:1,
          pageSize:10,
          total:0
        }
      }
    },
    created () {
      //获取页面的初始化数据  
      this.initPage();
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
      /**
       * 封装跳转页面参数
       * @param {object} row 病人信息对象
       * @param {string} pagename 跳转路径名
       */
      gotoyfpage(row,pagename) {
        var params = {},
            _that = this,
            prePath = "";
            params.pId = row.pId;
        var pathParams = {path:pagename,data:params};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"brglpage",data:_that.search_obj};
        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$common.GotoPage(pagename,params,_that);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.search_obj.pageNum = val;
        this.getBrList(this.search_obj);
      },
      //初始化当前组件
      initPage(){
        //从缓存中取出当前页面的参数
        var i_params = JSON.parse(window.localStorage.getItem("pathParams"));
        if(i_params.data.pname!=""){
            this.search_obj.pname = i_params.data.pname;
        }
        if(i_params.data.pageNum){
            this.search_obj.pageNum = i_params.data.pageNum;
        }
        if(i_params.data.pageSize){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        this.getBrList(this.search_obj);
      },
      /**
       * 获取病人列表
       * @param {object} search_obj  查询参数 姓名，当前页 当前页大小
       */
      getBrList(search_obj){
        var _that = this;
        var url = "/patientManage/getPatientList";
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
         * 新建问诊 返回问诊id
         * 
         * @param {String} brid 病人id
         * 
         * return 问诊id
         */
      newInquiry_new(brid){
        var _that = this;
        var param ={patientId:brid};
        this.$http.post('/inquiry/newInquiry?patientId='+brid,param).then(function (response) {
            var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
            _that.getLastInquiry(brinfo);
        }).catch(function (error) {
          console.log(error);
          setTimeout(function(){loading.close(); }, 1000);
        });
      },
      /**
       * 获取病人最近一次问诊信息
       * 
       */
      getLastInquiry(brinfo){
          var url= "/inquiry/getLatestInquiryInfo?patientId="+brinfo.pId;
          var _that = this;
          var inquiryID = '';
          this.$http.get(url)
            .then(function (response) {
              if(response.code == "1"){
                  if(JSON.stringify(response.data)!="{}"){
                      if(response.data.inquiryInfo.inquiryId){
                          brinfo.lastinquiryId = response.data.inquiryInfo.inquiryId;
                      }else{
                          brinfo.lastinquiryId = "";
                      }
                      //跳转组件并且 传递pid
                      var pathParams = new Object();
                      pathParams.path = 'bryfpage';
                      pathParams.data = brinfo;
                      //缓存 目标跳转页面的参数
                      _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                      var prePathParams = new Object();
                      prePathParams.path = 'brglpage';
                      prePathParams.data = _that.search_obj;
                      //缓存 跳转页面的参数
                      _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
                      _that.$common.GotoPage("bryfpage",brinfo,_that);
                  }
              }
          }).catch(function (error) {
              setTimeout(function(){
                  _that.openErrorMsgBox(error);
               }, 1000);
          });
          
      }
    }
  }