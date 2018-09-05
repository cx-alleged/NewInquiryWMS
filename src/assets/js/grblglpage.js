export default {
    data() {
      return {
        search_obj:{
            pname:null,
            patientId:null,
            pageNum:1,
            pageSize:10
          },
        diagnoseLabels:"诊断标签：",
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
          var _that = this;
          var brinfo = {pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:'',pname:this.search_obj.pname};
           //跳转组件并且 传递pid
           var pathParams = new Object();
           pathParams.path = 'bryfpage';
           pathParams.data = brinfo
           //缓存 目标跳转页面的参数
           _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
           var prePathParams = new Object();
           prePathParams.path = 'grblglpage';
           prePathParams.data = this.search_obj;;
           //缓存 跳转页面的参数
           _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
           _that.$common.GotoPage("bryfpage",brinfo,_that);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         this.search_obj.pageNum = val;
         this.getBrList(this.search_obj);
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
      },
      /** 
       * 从缓存中取出当前页面的数据
      */
      initPage(){
        //从缓存中取出当前页面的参数
        var i_params = JSON.parse(window.localStorage.getItem("pathParams"));
        
        if(i_params.data.pId!="" && i_params.data.pId){
            this.search_obj.patientId = i_params.data.pId;
        }
        if(i_params.data.patientId!="" && i_params.data.patientId){
            this.search_obj.patientId = i_params.data.patientId;
        }
        if(i_params.data.pname!=""){
            this.search_obj.pname = i_params.data.pname;
        }
        if(i_params.data.pageNum){
            this.search_obj.pageNum = i_params.data.pageNum;
        }
        if(i_params.data.pageSize){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        this.getBrDiagnoseLabels(this.search_obj.patientId);
        this.getBrList(this.search_obj);
      },
      /**
       * 获取病人的所有诊断标签
       * @param {*} pId 
       */
      getBrDiagnoseLabels(pId){
          var _that = this;
          _that.$http.get("/inquiry/getOnePatientLabels?patientId="+pId).then(function (response) {
                if(response.code == "1"){
                    var str = JSON.stringify(response.data.diagnoseLabels);
                    str = str.replace(/[\[\]\"]*/g, '');  
                    _that.diagnoseLabels = _that.diagnoseLabels+str;
                }
            }).catch(function (error) {
                console.log(error);
            });
      },
      /**
       * 获取病人的病历列表
       * @param {*} search_obj 
       */
      getBrList(search_obj){
        var _that = this;
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
      GobackPage(){
          this.$common.GoBackPrePage("grblglpage",this.search_obj,this);
      }
    }
}