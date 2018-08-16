export default{
    GotoPage(pagename,param,_that) {
        _that.$router.push({
             name: pagename,
             params:param
        });
    },
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