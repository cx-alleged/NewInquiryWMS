<template>
   <div class="from-container-div">
      <div class="base-form-c">
        <el-form ref="form" :model="form" label-width="156px" label-position="left">
          <el-form-item label="姓名">
            <el-input v-bind:class="index-input" v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别">
             <el-radio-group v-model="form.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-row>
              <el-col :span="6"><el-input class="full-width" v-model="form.name"  placeholder="请输入"></el-input></el-col>
              <el-col :span="18">
                <label class="el-form-item__label" style="width: 124px;padding-left:20px;padding-right:20px;">生日</label>
                <el-date-picker type="date" placeholder="请选择日期" v-model="form.date1" format="yyyy/MM/dd" style="width: calc(100% - 124px);"></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="来源地">
             <el-row class="lyd">
               <el-col :span="8">
                  <el-select v-model="form.country" style="margin-right:10px;width(100% - 10px);">
                    <el-option label="中国" value="中国"></el-option>
                    <el-option label="外国" value="外国"></el-option>
                    
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select v-model="form.province" style="margin-right:10px;margin-left:10px;width(100% - 20px);">
                    <el-option label="四川" value="四川"></el-option>
                    <el-option label="四川" value="四川"></el-option>
                    
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select v-model="form.city" style="margin-left:10px;width(100% - 10px);">
                    <el-option label="成都市" value="成都市"></el-option>
                    <el-option label="宜宾市" value="宜宾市"></el-option>
                  </el-select>
               </el-col>
             </el-row>
          </el-form-item>
          <div class="el-form-item">
            <div class="el-form-item__content" style="height:70px;text-align:center;line-height:70px;">
              <button type="button" class="el-button el-button--primary normal-btn-primary"><span>初诊</span></button> 
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
          province:'',
          city:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        value1:"2018-07-01"
      }
    },
    methods: {
      input() {
         console.log('index!');
      },
      index() {
         console.log('index!');
      },
      onSubmit() {
        console.log('submit!');
      }
    }
}
  </script>  

  <style lang="scss">
  .no-padding{
    padding: 0px 0px;
  }
  .full-width{
    width: 100%;
  }
  .normal-btn-primary{
    width: 200px;
    height: 70px;
    background-color: #20a0ff;
    border-radius: 8px;
    text-align: center;
    span{
      width: 146px;
      height: 24px;
      font-family: PingFangSC-Regular;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 23.8px;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }
  .normal-btn-default{
    width: 200px;
    height: 70px;
    border-radius: 8px;
    border: solid 1px #20a0ff;
    background-color: #ffffff;
    text-align: center;
    span{
      width: 170px;
      height: 27px;
      font-family: PingFangSC-Regular;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 23.8px;
      letter-spacing: 0px;
      color: #20a0ff;
    }
  }
  
  .from-container-div{
    width: 100%;
    height: calc(100% - 88px);
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
     justify-content:center;
      align-items: center;
  }
  .el-select-dropdown__item{
      font-size: 42px;
      height: 60px;
      line-height:60px;
  }
  .base-form-c{
    width: 736px;
    height: auto;
    
    .el-form-item{
      margin-bottom: 30px;

    }
    .el-form-item__label{
      float: left;
      font-family: PingFangSC-Medium;
      font-size: 42px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #5e6d82;
      padding: 0;
      line-height: 72px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-right: 30px;
    }
    .el-input__inner{
          height: 72px;
          line-height: 72px;
          border-radius: 8px;
          font-size:38px; 
	        border: solid 1px #c0ccda;
          color: #20a0ff;
    }
    .el-radio-group {
        height: 72px;
        display: inline-block;
        line-height: 88px;
        vertical-align: middle;
        font-size: 0;
    }
    .el-radio__input{
        line-height: 41px;
    }
    .el-radio__inner{
          width: 27px;
          height: 27px;
    }
    .el-radio__inner::after{
       width: 10px;
                height: 10px;
    }
    .el-radio__label{
      width: 34px;
      height: 48px;
      font-family: PingFangSC-Regular;
      font-size: 34px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #1f2d3d;
    }
  }

</style>