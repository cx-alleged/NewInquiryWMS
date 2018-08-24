export default{
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
        debugger
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
     //打开遮罩层
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
     //依据生日计算年龄
    GetAgeByBrithday:function(birthdayStr){
        var age=-1;
        var today=new Date();
        var todayYear=today.getFullYear();
        var todayMonth=today.getMonth()+1;
        var todayDay=today.getDate();
        var birthday = new Date(birthdayStr);
        if(typeof(birthday) == "object"){
           var birthdayYear=birthday.getFullYear();
           var birthdayMonth=birthday.getMonth();
           var birthdayDay=birthday.getDate();
            if(todayYear-birthdayYear<0){
                alert("出生日期选择错误!");
            }else{
                if(todayMonth*1-birthdayMonth*1<0){
                    age = (todayYear*1-birthdayYear*1)-1;
                }else{
                    if(todayDay-birthdayDay>=0){//alert(thisDay+'-'+brithd+"_ddd");
                        age = (todayYear*1-birthdayYear*1);
                    }else{
                        age = (todayYear*1-birthdayYear*1)-1;
                    }
                }
            }
            return age*1;
        }else{
            return -1;
        }
       }
}