export default {
    data() {
      return {
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        rangeDate:null,
        search_obj:{
            pname:null,
            startDate:null,
            endDate:null,
            keyWords:null,
            patientId:null,
            pageNum:1,
            pageSize:10,
        },
        tableData: {
            list:[],
            pageNum:1,
            pageSize:10,
            total:0
          }
      }
    },
    //计算属性
    computed: {

    },
    watch: {
        rangeDate: function (newQuestion, oldQuestion) {
          this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');   
          this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd');   
        }
    },
    created ()  {
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.search_obj.pageNum = val;
        this.getblList();
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
        if(i_params.data.keyWords){
          this.search_obj.keyWords = i_params.data.keyWords;
        }
        if(i_params.data.startDate){
          this.search_obj.startDate = i_params.data.startDate;
        }
        if(i_params.data.endDate){
          this.search_obj.endDate = i_params.data.endDate;
        }
        if(i_params.data.patientId){
          this.search_obj.patientId = i_params.data.patientId;
        }
        
        this.getblList();
      },
      //获取病例table列表
      getblList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/MrManage/getMrList";
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
       * 查看病历的问诊信息
       * @param {*} row 
       */
      gotoWzxxPage(row){
        var _that = this;
        var brinfo = {pId:row.pId,inquiryId:row.inquiryId};
         //跳转组件并且 传递pid
         var pathParams = new Object();
         pathParams.path = 'wjxxpage';
         pathParams.data = brinfo
         //缓存 目标跳转页面的参数
         _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
         var prePathParams = new Object();
         prePathParams.path = 'blglpage';
         prePathParams.data = this.search_obj;;
         //缓存 跳转页面的参数
         _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
         _that.$common.GotoPage("wjxxpage",brinfo,_that);
      },
      /** 
       * 查看某次的药方病例
      */
      gotoyfpage(row){
        var _that = this;
        var brinfo = {pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:''};
         //跳转组件并且 传递pid
         var pathParams = new Object();
         pathParams.path = 'bryfpage';
         pathParams.data = brinfo
         //缓存 目标跳转页面的参数
         _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
         var prePathParams = new Object();
         prePathParams.path = 'blglpage';
         prePathParams.data = this.search_obj;;
         //缓存 跳转页面的参数
         _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
         _that.$common.GotoPage("bryfpage",brinfo,_that);
      }
    }
  }