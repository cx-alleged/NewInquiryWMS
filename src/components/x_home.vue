<style lang="scss">
    .x-home-from-container{
        width: 100%;
        height: calc(100% - 88px);
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
    }
    @media screen and (max-width: 1600px){
            .btn-group-container{
                text-align:center;
                margin-left: 80px;
            }
    }
    @media screen and (min-width:1600px) and (max-width:1920px){
        .x-home-form{
            width:620px;
            height: auto;
            .btn-group-container{
                text-align:center;
                margin-top:78px;
            }
            .btn-default{
                width:257px;
                border-radius:8px;
                height:70px;
                line-height:30px;
                font-size: 30px;
                border: 1px solid #20a0ff;
                background-color: #ffffff;
                color: #20a0ff;
                &:first-child{
                    margin-right: 40px;
                }
            }
            .btn-blue{
                 background-color: #20a0ff;
                 color: #ffffff;
            }
            label.el-form-item__label{
                font-family: PingFangSC-Medium;
                font-size: 38px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #5e6d82;
                line-height: 60px;
                height: 60px;
            }
            input.el-input__inner{
                height: 60px;
                line-height: 60px;
                border-radius: 8px;
                border: solid 1px #c0ccda;
                // max-width: 500px;
                font-family: PingFangSC-Medium;
                font-size: 36px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #20a0ff;
            }
            .el-radio-group{
                .el-radio__inner{
                    width: 27px;
                    height: 27px;
                }
                .el-radio__inner::after{
                    width: 10px;
                    height: 10px;
                }
                label.el-radio{
                    height: 60px;
                    line-height: 60px;
                    .el-radio__input{
                        line-height: 60px;
                    }
                    .el-radio__label{
                        font-family: PingFangSC-Regular;
                        font-size: 34px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                    }
                }
            }
        }
    }
</style>
<template>
   <div class="x-home-from-container">
      <div class="x-home-form">
        <el-form ref="form" :model="form" label-width="120px">
            <el-row>
                <el-form-item label="姓名">
                    <el-input v-bind:class="index-input" v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="年龄">
                    <el-input v-bind:class="index-input" v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
            </el-row>
            <el-row class="btn-group-container">
                    <el-button type="primary" @click="onSubmit" class="btn-default btn-blue" >已填写基本资料</el-button>
                    <el-button type="primary" @click="onSubmit" class="btn-default" >未填写基本资料</el-button>
            </el-row>
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

