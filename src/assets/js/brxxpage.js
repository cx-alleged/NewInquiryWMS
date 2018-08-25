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
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' }
            ],
          },
        basicInfo: {
            "id": 56,
            "patientId": 20180819021020,
            "certificatesType": null,
            "certificatesNumber": null,
            "pname": "髭切",
            "gender": "男",
            "age": 20,
            "birthday": 1217606400000,
            "nationality": null,
            "national": null,
            "incunabulum": null,
            "residence": "吉林/西城区",
            "height": null,
            "weight": null,
            "occupation": null,
            "marriage": null,
            "religiousBelief": null,
            "eatingHabits": null,
            "ehRemark": null,
            "heredityHistory": null,
            "hhRemark": null,
            "infectionHistory": null,
            "ihRemark": null,
            "traumaHistory": null,
            "surgeryHistory": null,
            "familyHistory": null,
            "contactHistory": null,
            "chRemark": null,
            "meAllergy": null,
            "meallRemark": null,
            "allergy": null,
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
        
    },
    created () {
       this.$common.getPlace(this,this.getBrxxinfo);
    },
    methods: {
    /**
     * 依据选择的省份渲染 城市
     * 
     * @param {any} type 
     */
    setCityList(type){
        if(type == 1){
            this.sourceCity = this.$common.setCityList(this.basicInfo.sourceProvince,this);
            this.basicInfo.sourceCity = null;
        }else{
            this.city = this.$common.setCityList(this.basicInfo.incuProvince,this);
            this.basicInfo.incuCity = null;
        }
    },
     /**
      * 依据选择的国家渲染 省份
      * 
      * @param {any} type 
      */
     setProList(type){
        if(type  == 1){
            //代表
            this.sourceProvince = this.$common.setProList(this.s_country,this);
            this.basicInfo.sourceProvince = null;
            this.basicInfo.sourceCity = null;
        }else{
            this.province = this.$common.setProList(this.b_country,this);
            this.basicInfo.incuProvince = null;
            this.basicInfo.incuCity = null;
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
       * 获取病人信息
       * 
       */
      getBrxxinfo(){
         debugger
         var param = JSON.parse(window.localStorage.getItem("pathParams"));
         var _that = this;
         var url = "/patientManage/getPatientInfo";
         _that.$http.get(url,{
             params: param.data
            }).then(function (response) {
                 //得到个人信息的数据，对个人信息进行处理后绑定
                 if(response.code == "1"){
                     _that.detailBrbrth(response.data.patientInfo);
                     _that.basicInfo = response.data.patientInfo;
                 }else{
                     _that.$common.openErrorMsgBox("获取病人信息失败",_that);
                 }
             }).catch(function (error) {
                _that.$common.openErrorMsgBox("error",_that);
             });
      },
      onSubmit(){
          var _that = this; 
          _that.$http.put("/patientManage/updatePatientInfo",this.basicInfo).then(function(response){
                //数据提交
          }).catch(function(error){
            _that.$common.openErrorMsgBox("error",_that);
          });
      }
    }
  }