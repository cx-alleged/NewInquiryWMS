<template>
   <div class="from-container-div">
      <div class="base-form-c">
        <el-form ref="form" :model="form" :rules="rules" label-width="156px" label-position="right">
          <el-form-item label="姓名" prop="name">
            <el-input class="index-input" v-model="form.pname" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别">
             <el-radio-group v-model="form.gender">
              <el-radio label="男" value="男"></el-radio>
              <el-radio label="女" value="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-row>
              <el-col :span="6"><el-input class="full-width" v-model="form.age"  placeholder="请输入"></el-input></el-col>
              <el-col :span="18">
                <label class="el-form-item__label" style="width: 124px;padding-left:20px;padding-right:20px;">生日</label>
                <el-date-picker type="date" placeholder="请选择日期" v-model="form.birthday" format="yyyy/MM/dd" style="width: calc(100% - 124px);"></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="来源地">
             <el-row class="lyd">
               <el-col :span="8">
                  <el-select v-model="form.country" style="margin-right:10px;width(100% - 10px);" @change="setProList">
                    <el-option label="中国" value="0"></el-option>
                    <el-option label="外国" value="1"></el-option>
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select v-model="form.sourceProvince" style="margin-right:10px;margin-left:10px;width(100% - 20px);" @change="setCityList">
                     <el-option
                        v-for="item in province"
                        :key="item.id"
                        :label="item.provName"
                        :value="item.id">
                      </el-option>
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select v-model="form.sourceCity" style="margin-left:10px;width(100% - 10px);">
                    <el-option
                        v-for="item in city"
                        :key="item.cityId"
                        :label="item.cityName"
                        :value="item.cityId">
                      </el-option>
                  </el-select>
               </el-col>
             </el-row>
          </el-form-item>
          <div class="el-form-item">
            <div class="el-form-item__content" style="height:70px;text-align:center;line-height:70px;">
              <button type="button" class="el-button el-button--primary normal-btn-primary" @click="czSubmit"><span>初诊</span></button> 
              <button type="button" class="el-button el-button--default normal-btn-default"><span>复诊</span></button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
</template>
 <script>
 export default {
  name: 'xjczbr',
  data() {
      return {
        form: {
          country:'',
          sourceProvince:null,
          sourceCity:null,
          age:'',
          pname: '',
          birthday: '',
          gender: '男',
        },
        placeDate:{},
        country:[],
        province:[],
        city:[],
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
        },
        value1:"2018-07-01"
      }
    },
    created () {
     
    },
    beforeMount () {
       //获取地址请求
      this.getPlace();
    },
    
    computed: {
        birthday() {
    　　　　return this.form.birthday
    　　}
    },  
    watch: {
        birthday(newValue, oldValue) {
    　　　　var age  = this.$common.GetAgeByBrithday(newValue);
            this.form.age = age;
    　　}
    },

    methods: {
      //联动设置 城市 设置为外国时表单的值
      setCityList(value){
        //第一次遍历省份列表
         var proNameList = this.$store.getters.gettersPlaceData.placeList;
         this.form.sourceCity=null;
         this.city = [];
         for(var key in proNameList){
           if(proNameList[key].id == value){
             this.city = proNameList[key].cityList;
             break;
           }
         }
      },
      //联动设置 省份
      setProList(selectvalue){
        //依据值修改省份的下拉值
          this.province = [];
          this.city = [];
          this.form.sourceProvince=null;
          this.form.sourceCity=null;
        if(selectvalue=="0"){
          //代表国内 
          var proNameList = this.$store.getters.gettersPlaceData.placeList;
          proNameList = proNameList.slice(1,proNameList.length-1);
          this.province = proNameList;
        }else{
          //国外
          var proNameList = this.$store.getters.gettersPlaceData.placeList;
          this.province = proNameList[0].cityList;
        }
      },
      //重置外国的字段 不一致
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
      //获取相应的国家省份地址
      getPlace(){
         var placeData = this.$store.getters.gettersPlaceData;
          if(placeData && JSON.stringify(placeData) == "{}"){
            var _that = this;
            this.$http.get('/index/getPlace')
            .then(function (response) {
              placeData = response.data;
              placeData.placeList[0].cityList = _that.updateWgzdm(placeData.placeList[0].cityList);
              _that.$store.dispatch("changePlaceData", placeData);
              _that.placeDate = _that.$store.getters.gettersPlaceData;
            })
            .catch(function (error) {
              console.log(error);
            });
          }
      },
      //return  false 属性有空， true时 校验通过
      allRequired(formData){
        var boolean_swt = true;
          //遍历对象
          for(var key in formData){
            if(!formData[key] || formData[key] ==""){
                if(key=='sourceCity' && formData.country=="1"){
                  continue;
                }
                boolean_swt = false;
                break;
            }
          }
          return boolean_swt;
      },
      //新增问诊获取问诊id
      newInquiry(brid){
        var _that = this;
        var loading = this.$common.openLoading("新建问诊中",_that);
        var param ={patientId:brid};
        this.$http.post('/inquiry/newInquiry?patientId='+brid,param).then(function (response) {
            loading.close();
            _that.$common.openSuccessMsgBox("初诊成功，请开处方",_that);
            var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
            //跳转组件并且 传递pid
            var pathParams = new Object();
            pathParams.path = 'bryfpage';
            pathParams.data = brinfo;
            //缓存 目标跳转页面的参数
            _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
            debugger
            var prePathParams = new Object();
            prePathParams.path = 'xjczbr';
            prePathParams.data = {};
            //缓存 跳转页面的参数
            _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
            _that.$common.GotoPage("bryfpage",brinfo,_that);
        }).catch(function (error) {
          console.log(error);
          setTimeout(function(){loading.close(); }, 1000);
        });
      },
      //提交初访
      czSubmit() {
         var _that = this;
        //初诊数据提交，都必须填写 数据项校验
        var swt_btn = this.allRequired(this.form);
        if(!swt_btn){
          this.$common.openErrorMsgBox("请完整填写基本信息!",_that);
          return;
        }
        //打开加载层
        var loading = this.$common.openLoading("初诊中",_that);
        var param = this.form;
        //特殊处理一下表单  来源为外国的数据
        if(!param.sourceCity && param.country=="1"){
            param.sourceCity = param.sourceProvince;
            param.sourceProvince = param.country;
        }
        this.$http.post('/index/firstDiag',param).then(function (response) {
          if(response.code == "1"){
            loading.close();
            //新建病人信息完成，再次新增问诊信息
            _that.newInquiry(response.data.pId);
          }
        }).catch(function (error) {
          console.log(error);
          setTimeout(function(){loading.close(); }, 1000);
        });
      }
    }
}
  </script>  

  <style lang="scss">
    @import '../assets/css/homepage.scss';
  </style>