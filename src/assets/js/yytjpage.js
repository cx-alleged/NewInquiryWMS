export default {
    data() {
      return {
        wzqkpage:'wzqkpage',
        rangeDate:null,
        search_obj:{
            startDate:null,
            endDate:null,
            medicine:null,
            pageNum:1,
            pageSize:10
          },
        tableData: {
            list1:[],
            list2:[],
            list3:[]
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
      //跳转到药方界面
      gotoWzqkPage(pagename) {
        var  _that = this,
            prePath = "";
        var pathParams = {path:pagename,data:{}};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"yytjpage",data:_that.search_obj};
        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$common.GotoPage(pagename,pathParams,_that);
      },
      //初始化当前组件
      initPage(){
        //从缓存中取出当前页面的参数
        var i_params = JSON.parse(window.localStorage.getItem("pathParams"));
        if(i_params.data.pageNum){
            this.search_obj.pageNum = i_params.data.pageNum;
        }
        if(i_params.data.pageSize){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        if(i_params.data.startDate){
          this.search_obj.startDate = i_params.data.startDate;
        }
        if(i_params.data.endDate){
          this.search_obj.endDate = i_params.data.endDate;
        }
        if(i_params.data.medicine){
            this.search_obj.medicine = i_params.data.medicine;
        }
        this.getYytjList();
      },
      /**
       * 获取用药统计列表
       */
      getYytjList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/dataStatistics/drugUse";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
               if(response.code == "1"){
                   _that.setThreeList(response.data.pageInfo.list);
               }
            }).catch(function (error) {
                console.log(error);
            });
      },
      //跳转到药方界面
      gotoWzqkPage(pagename) {
        var  _that = this,
            prePath = "";
        var pathParams = {path:pagename,data:{}};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"yytjpage",data:_that.search_obj};
        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$common.GotoPage(pagename,pathParams,_that);
      },
      setThreeList(list){
          debugger
          //第一步 判断是否整除3
          if(JSON.stringify(list) != "[]"){
              //第二步 不能整除 补齐整除数组
              if(list.length%3 != 0){
                var l_number = 3- list.length%3;
                for( var i = 0; i < l_number; i++){
                    var temp_obj = new Object();
                    temp_obj.dose = null;
                    temp_obj.medicine = null;
                    list.push(temp_obj);
                }
              }
              var index = list.length/3;
              this.tableData.list1 = list.slice(0,index-1);
              this.tableData.list2 = list.slice(index,index*2-1);
              this.tableData.list3 = list.slice(index*2,list.length-1);
          }
      }
    }
  }