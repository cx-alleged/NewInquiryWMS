export default{
  /**
   * 字符串 转义 " 转义为 \"
   * @param {*} str
   */
   decodeToStr(str){
     var r_str = "";
     if (str.length == 0) return r_str;
     r_str = str.replace("\"([^\"]*)\"", "\"");
     return r_str;
   },
   /**
    * 将时间对象转化为string
    * @param {Date} date_obj Date对象
    * @param {String} fmt 格式
    */
   dateFormatStr(date_obj,fmt){
      var o = {
        "M+" : date_obj.getMonth()+1,                 //月份
        "d+" : date_obj.getDate(),                    //日
        "h+" : date_obj.getHours(),                   //小时
        "m+" : date_obj.getMinutes(),                 //分
        "s+" : date_obj.getSeconds(),                 //秒
        "q+" : Math.floor((date_obj.getMonth()+3)/3), //季度
        "S"  : date_obj.getMilliseconds()             //毫秒
      };
      if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date_obj.getFullYear()+"").substr(4 - RegExp.$1.length));
      for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      return fmt;
   },
    /**
     * 判断省份是否在国内，
     *
     * @param {number} value
     * @param {any} _that
     * @returns 0 代表中国， 1 代表外国
     */
    isChinaProvince(value,_that){
      if(value){
        var btn_switch = 1;
        var proNameList = _that.$store.getters.gettersPlaceData.placeList;
         for(var key in proNameList){
            if(proNameList[key].id == value){
              btn_switch = 0;
              break;
            }
          }
          return btn_switch;
      }else{
        return null;
      }
    },
    /**
       * 联动设置， 更新城市一栏的值
       *
       * @param {any} selectvalue
       */
    setCityList(value,_that){
        //第一次遍历省份列表
         var proNameList = _that.$store.getters.gettersPlaceData.placeList;
          var city_list = new Array();
          for(var key in proNameList){
            if(proNameList[key].id == value){
              city_list = proNameList[key].cityList;
              break;
            }
          }
         return JSON.parse(JSON.stringify(city_list));
      },

      /**
       * 联动设置， 依据国家 更新省份一栏的值
       *
       * @param {any} selectvalue
       */
      setProList(selectvalue,_that){
        //依据值修改省份的下拉值
        // _that.province = [];
        // _that.city = [];
        // this.form.sourceProvince=null;
        // this.form.sourceCity=null;
        if(selectvalue=="0"){
          //代表国内
          var proNameList = _that.$store.getters.gettersPlaceData.placeList;
          proNameList = proNameList.slice(1,proNameList.length-1);
          return JSON.parse(JSON.stringify(proNameList));
        }else{
          //国外
          var proNameList = _that.$store.getters.gettersPlaceData.placeList;
          return JSON.parse(JSON.stringify(proNameList[0].cityList));
        }
      },
      /**
       * 处理外国字段名 和 国内省份的命名规则不一致的问题
       *
       * @param {any} proList
       * @returns
       */
      updateWgzdm(proList){
        var newList = new Array();
        for(var key in proList){
          var tmpObj = new Object();
          tmpObj.id = proList[key].cityId;
          tmpObj.provName = proList[key].cityName;
          tmpObj.cityList = [];
          newList.push(tmpObj);
        }
        return newList;
      },
      /**
       * 获取国家 省份 城市数据
       *
       */
      getPlace(_that,callback,urlpath){
         var url = '/index/getPlace';
         if(urlpath){
          url = urlpath;
         }
         var placeData = _that.$store.getters.gettersPlaceData;
          if(placeData && JSON.stringify(placeData) == "{}"){
            _that.$http.get(url)
            .then(function (response) {
              placeData = response.data;
              placeData.placeList[0].cityList = _that.$common.updateWgzdm(placeData.placeList[0].cityList);
              _that.$store.dispatch("changePlaceData", placeData);
              _that.placeDate = _that.$store.getters.gettersPlaceData;
              if(typeof callback  == 'function'){
                callback();
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          }else{
            _that.placeDate = placeData;
            if(typeof callback  == 'function'){
              callback();
            }
          }
      },
    /**
     * 组件路径跳转
     * @param {String} pagename 路径名称
     * @param {object} param 参数对象
     * @param {object} _that  this
     */
    GotoPage(pagename,param,_that) {
        _that.$router.push({
             name: pagename,
             params:param
        });
    },
    /**
     * 返回上一个页面
     * @param {Sting} pathName 当前页面名
     * @param {obj} param 当前页面参数对象
     * @param {object} _that this
     */
    GoBackPrePage(pathName,param,_that){

        var prePageObj = JSON.parse(window.localStorage.getItem("prePathParams"));
       //跳转组件并且 传递pid
       var pathParams = prePageObj
       //缓存 目标跳转页面的参数
       _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
       var prePathParams = new Object();
       prePathParams.path = pathName;
       prePathParams.data = param;
       //缓存 跳转页面的参数
       _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$router.push({
            name: prePageObj.path,
            params:prePageObj.data
       });
    },
    //弹出操作成功的信息提示
    openSuccessMsgBox(msg,_that){
        _that.$message({
         message: msg,
         type: 'success'
       });
     },

     /**
      * 加载遮罩层
      *
      * @param {String} msg
      * @param {any} _that
      * @returns
      */
     openLoading(msg,_that){
         const loading = _that.$loading({
         lock: true,
         text: msg,
         spinner: 'el-icon-loading',
         background: 'rgba(0, 0, 0, 0.7)'
       });
       return loading;
     },
      //弹出操作失败的信息提示
     openErrorMsgBox(msg,_that) {
        _that.$message.error(msg);
     },
     /**
      * 打开询问操作
      *
      * @param {any} msg
      * @param {any} callback
      * @param {any} _that

      *
      */
     openComfigDialog(msg,callback,cal_params,_that){
        _that.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass:"qcMessage"
        }).then(() => {
          callback(cal_params);
        }).catch(() => {
          _that.$message({
            type: 'info',
            message: '操作已取消'
          });
        });
     },
     /**
      * 依据出生日期计算年龄
      */
     GetAgeByBrithday:function(birthdayStr){
        var age=-1;
        var today=new Date();
        var todayYear=today.getFullYear();
        var todayMonth=today.getMonth()+1;
        var todayDay=today.getDate();
        var birthday = new Date(birthdayStr);
        if(typeof(birthday) == "object"){
           var birthdayYear=birthday.getFullYear();
           var birthdayMonth=birthday.getMonth()+1;
           var birthdayDay=birthday.getDate();
            if(todayYear-birthdayYear<0){
                age=0;
            }else{
                if(todayMonth*1-birthdayMonth*1<0){
                    age = (todayYear*1-birthdayYear*1);
                }else{
                    if(todayDay-birthdayDay>=0){//alert(thisDay+'-'+brithd+"_ddd");
                        age = (todayYear*1-birthdayYear*1);
                    }else{
                        age = (todayYear*1-birthdayYear*1);
                    }
                }
            }
            return age*1;
        }else{
            return 0;
        }
       },
       /**
        * 新建问诊id
        */
      newInquiry_new:function(brid,_that){
        var param ={patientId:brid};
        _that.$http.post('/inquiry/newInquiry',param).then(function (response) {
          if(response.code=="1"){
            var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
            _that.$common.getLastInquiry(brinfo,_that);
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          setTimeout(function(){
            _that.$common.openErrorMsgBox(error,_that);
           }, 1000);
        });
      },
      /**
       * 获取病人最近一次问诊信息
       *
       */
      getLastInquiry(brinfo,_that){
          var url= "/inquiry/getLatestInquiryInfo?patientId="+brinfo.pId;
          var inquiryID = '';
          _that.$http.get(url)
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
                      prePathParams.path = 'newwz';
                      prePathParams.data = {};
                      prePathParams.data.xzfz = "new";
                      //缓存 跳转页面的参数
                      _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
                     _that.initPage();
                      //请求药方数据
                      _that.getyfDate();
                  }
              }else{
                _that.$common.openErrorMsgBox(response.msg,_that);
              }
          }).catch(function (error) {
              setTimeout(function(){
                 _that.$common.openErrorMsgBox(error,_that);
               }, 1000);
          });
      },
}
