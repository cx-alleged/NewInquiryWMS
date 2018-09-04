export default {
    data() {
      return {
          //来源地
        b_country:null,
        placeDate:{},
        province:[],
        city:[],
        //出生地
        s_country:null,
        sourceProvince:[],
        sourceCity:[],
        rules: {
            height: [
              { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            weight:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            age:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            quitSmokeTime:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            dailyDrink:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            quitDrinkTime:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            pregnant:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            birth:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
          },
        basicInfo: {
            "id": null,
            "patientId": null,
            "certificatesType": null,
            "certificatesNumber": null,
            "pname": null,
            "gender": null,
            "age": null,
            "birthday": null,
            "nationality": null,
            "national": null,
            "incunabulum": null,
            "residence": null,
            "height": null,
            "weight": null,
            "occupation": null,
            "marriage": null,
            "religiousBelief": null,
            "eatingHabits": null,
            // "eatingHabits": [],
            "ehRemark": null,
            "heredityHistory": null,
            // "heredityHistory": [],
            "hhRemark": null,
            "infectionHistory": null,
            // "infectionHistory": [],
            "ihRemark": null,
            "traumaHistory": null,
            // "traumaHistory": [],
            "surgeryHistory": null,
            "familyHistory": null,
            "contactHistory": null,
            // "contactHistory": [],
            "chRemark": null,
            "meAllergy": null,
            // "meAllergy": [],
            "meallRemark": null,
            "allergy": null,
            // "allergy": [],
            "allRemark": null,
            "bloodTrans": null,
            "smoke": null,
            "dailySmoke": null,
            "quitSmoke": null,
            "pregnant": null,
            "birth": null,
            "prematureLabour": null,
            "abortion": null,
            "insertDate": 1534608000000,
            "sourceProvince": 10,
            "sourceCity": 1001,
            "incuProvince": null,
            "incuCity": null,
            "quitSmokeTime": null,
            "contraception": null,
            "drink": null,
            "dailyDrink": null,
            "quitDrink": null,
            "quitDrinkTime": null,
            "iqDate": null
          }
      }
    },
    computed: {
        birthday() {
    　　　　return this.basicInfo.birthday
    　　}
    },
    watch: {
        birthday(newValue, oldValue) {
    　　　　var age  = this.$common.GetAgeByBrithday(newValue);
            this.basicInfo.age = age;
    　　}
    },
    created () {
       this.$common.getPlace(this,this.getBrxxinfo);
    },
    methods: {
         /**
     * 跳转病历管理页面
     * 
     */
    gotoBlglpage() {
        //跳转组件并且 传递pid
        var pathParams = window.localStorage.getItem("prePathParams");
        var prePathParams = window.localStorage.getItem("pathParams");
        //缓存 目标跳转页面的参数
        this.$store.dispatch("setPathParams", pathParams);
        this.$store.dispatch("setPrePathParams", prePathParams);
        //缓存 跳转页面的参数
        this.$common.GotoPage("brglpage",JSON.parse(pathParams),this);
      },
    clearAllCheckbox(val){
        if(val){
            this.basicInfo.allergy = ["无"];
        }
    },
    setAllCheckbox(val){
        if(val){
            var index = this.basicInfo.allergy.indexOf("无");
            if(index != -1){
                this.basicInfo.allergy.splice(index,1);
            }
        }
    },
    clearConCheckbox(val){
        if(val){
            this.basicInfo.contactHistory = ["无"];
        }
    },
    setConCheckbox(val){
        if(val){
            var index = this.basicInfo.contactHistory.indexOf("无");
            if(index != -1){
                this.basicInfo.contactHistory.splice(index,1);
            }
        }
    },
    clearinCheckbox(val){
        if(val){
            this.basicInfo.infectionHistory = ["无"];
        }
    },
    setInCheckbox(val){
        if(val){
            var index = this.basicInfo.infectionHistory.indexOf("无");
            if(index != -1){
                this.basicInfo.infectionHistory.splice(index,1);
            }
        }
    },
    cLearhCheckbox(val){
       if(val){
           this.basicInfo.heredityHistory = ["无"];
       }
    },
    sethCheckBox(val){
        if(val){
            var index = this.basicInfo.heredityHistory.indexOf("无");
            if(index != -1){
                this.basicInfo.heredityHistory.splice(index,1);
            }
        }
    },
    /**
     * 依据选择的省份渲染 城市
     * 
     * @param {any} type 
     */
    setCityList(type){
        if(type == 1){
            this.city = this.$common.setCityList(this.basicInfo.incuProvince,this);
            this.basicInfo.incuCity = null;
            
        }else{
            this.sourceCity = this.$common.setCityList(this.basicInfo.sourceProvince,this);
            this.basicInfo.sourceCity = null;
        }
    },
     /**
      * 依据选择的国家渲染 省份
      * 
      * @param {any} type 
      */
     setProList(type){
        if(type  == 1){
            this.province = this.$common.setProList(this.b_country,this);
            this.basicInfo.incuProvince = null;
            this.basicInfo.incuCity = null;
        }else{
            this.sourceProvince = this.$common.setProList(this.s_country,this);
            this.basicInfo.sourceProvince = null;
            this.basicInfo.sourceCity = null;
        }
     },
      /**
       * 处理病人的出生地和来源地数据的绑定
       * 
       */
      detailBrbrth(obj){
        if(obj.sourceProvince){
            this.s_country = this.$common.isChinaProvince(obj.sourceProvince,this);
            this.sourceProvince = this.$common.setProList(this.s_country,this);
            this.sourceCity = this.$common.setCityList(obj.sourceProvince,this);
        }
        if(obj.incuProvince){
            this.b_country = this.$common.isChinaProvince(obj.incuProvince,this);
            this.province = this.$common.setProList(this.b_country,this);
            this.city = this.$common.setCityList(obj.incuProvince,this);
        }
       
      },
      /**
       * 设置空数组
      /**
       *
       *
       * @param {*} t_obj
       * @returns
       */
      setNullArray:function(t_obj){
        var obj = JSON.parse(JSON.stringify(t_obj));
        for(var key in obj){
            if(obj[key] == "" || !obj[key]){
                obj[key] = null;
            }
        }
        var arry_name = ["eatingHabits","heredityHistory","infectionHistory","traumaHistory","contactHistory","meAllergy","allergy"];
        for(var key in arry_name){
            if(!obj[arry_name[key]]){
                obj[arry_name[key]]= new Array();
            }else{
                try {
                    obj[arry_name[key]] = JSON.parse(obj[arry_name[key]])
                } catch (error) {
                    obj[arry_name[key]] = new Array();
                }
                
            }
        }
        return obj;
      },
      /**
       * 获取病人信息
       * 
       */
      getBrxxinfo(){
         var param = JSON.parse(window.localStorage.getItem("pathParams"));
         var _that = this;
         var url = "/patientManage/getPatientInfo";
         _that.$http.get(url,{
             params: param.data
            }).then(function (response) {
                 //得到个人信息的数据，对个人信息进行处理后绑定
                 if(response.code == "1"){
                     _that.detailBrbrth(response.data.patientInfo);
                     _that.basicInfo = _that.setNullArray(response.data.patientInfo);
                 }else{
                     _that.$common.openErrorMsgBox("获取病人信息失败",_that);
                 }
             }).catch(function (error) {
                _that.$common.openErrorMsgBox("error",_that);
             });
      },
      setSuBmitParams(obj){
         var params_obj = JSON.parse(JSON.stringify(obj));
         var arry_name = ["eatingHabits","heredityHistory","infectionHistory","traumaHistory","contactHistory","meAllergy","allergy"];
         for(var key in arry_name){
           var temp_str = JSON.stringify(params_obj[arry_name[key]]);
           temp_str = this.$common.decodeToStr(temp_str);
           params_obj[arry_name[key]] = temp_str;
        }
        return params_obj;
      },
      /** 
       * 表单提交
       * 
      */
      onSubmit(){
        var _that = this; 
        this.$refs["formName"].validate((valid) => {
            if (valid) {
                var params = _that.setSuBmitParams(this.basicInfo);
                _that.$http.put("/patientManage/updatePatientInfo",params).then(function(response){
                      //数据提交
                      if(response.code == '1'){
                          _that.$common.openSuccessMsgBox("更新病人信息成功！，即将返回病人管理",_that);
                          _that.goTobrglpage();
                      }
                }).catch(function(error){
                  _that.$common.openErrorMsgBox("error",_that);
                });
            } else {
              _that.$common.openErrorMsgBox("数据项校验未通过",_that);
              return false;
            }
          });
      },
      /**
       * 返回病人管理页面
       */
      goTobrglpage:function(){
        //跳转组件并且 传递pid
        var pathParams = window.localStorage.getItem("prePathParams");
        var prePathParams = window.localStorage.getItem("pathParams");
        //缓存 目标跳转页面的参数
        this.$store.dispatch("setPathParams", pathParams);
        this.$store.dispatch("setPrePathParams", prePathParams);
        //缓存 跳转页面的参数
        this.$common.GotoPage("brglpage",JSON.parse(pathParams),this);
      },
    }
  }