<template>
    <div class="brxx-info-container">
        <el-form :model="formInline" label-width="170px">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="病人编号">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="col-no-padding">
                    <el-col :span="12">
                    <el-form-item label="身高">
                        <el-input v-model="formInline.user" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">cm</span>
                    </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="体重">
                            <el-input v-model="formInline.user" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">kg</span>
                        </el-form-item>
                    </el-col>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="证件类型">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="职业">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="证件编号">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="婚姻史">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="3">已婚</el-radio>
                            <el-radio :label="6">未婚</el-radio>
                            <el-radio :label="9">离异</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="宗教信仰">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="two-col-container">
                <div class="frist-col-container">
                    <el-row :gutter="20"> 
                        <el-col :span="24">
                            <el-form-item label="性别">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">男</el-radio>
                                    <el-radio :label="6">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                     <el-row :gutter="20">
                         <el-col :span="16">
                              <el-form-item label="生日">
                                <!-- <label class="el-form-item__label" style="width: 200px;">生日</label> -->
                                <el-date-picker type="date" placeholder="请选择日期" v-model="formInline.user" format="yyyy-MM-dd" style="width:100%;"></el-date-picker>
                              </el-form-item>   
                         </el-col>
                         <el-col :span="8">
                             <el-form-item label="年龄" label-width="100px" class="age-sm-screen">
                                <el-input v-model="formInline.user"  placeholder="年龄"></el-input>
                             </el-form-item>
                         </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                         <el-col :span="24">
                             <el-form-item label="国籍">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                             </el-form-item>
                         </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                         <el-col :span="24">
                             <el-form-item label="民族">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                             </el-form-item>
                         </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                         <el-col :span="24">
                             <el-form-item label="出生地点">
                                 <el-select v-model="value" placeholder="请选择" style="width:32%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择" style="width:32%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择" style="width:32%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                             </el-form-item>
                         </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                         <el-col :span="24">
                             <el-form-item label="来源地">
                                 <el-select v-model="value" placeholder="请选择" style="width:32%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择" style="width:32%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="请选择" style="width:32%;">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                             </el-form-item>
                         </el-col>
                     </el-row>
                </div>
                <div class="seconde-col-container">
                    <el-row :gutter="20"> 
                        <el-col :span="24">
                            <el-form-item label="饮食习惯" style="margin-bottom:0px;">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="非素食者"></el-checkbox>
                                    <el-checkbox label="完全素食者"></el-checkbox>
                                    <el-checkbox label="奶蛋素食"></el-checkbox>
                                    <el-checkbox label="半素食"></el-checkbox>
                                    <el-checkbox label="鱼素食"></el-checkbox>
                                    <el-checkbox label="果素食"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="备注"></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                    <el-row :gutter="20"> 
                        <el-col :span="24">
                            <el-form-item label="遗传病史" style="margin-bottom:0px;">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="无"></el-checkbox>
                                    <el-checkbox label="高血压"></el-checkbox>
                                    <el-checkbox label="糖尿病"></el-checkbox>
                                    <el-checkbox label="心脑血管疾病"></el-checkbox>
                                    <el-checkbox label="肿瘤"></el-checkbox>
                                    <el-checkbox label="心脏病"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="备注"></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                    <el-row :gutter="20"> 
                        <el-col :span="24">
                            <el-form-item label="传染病史" style="margin-bottom:0px;">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="无"></el-checkbox>
                                    <el-checkbox label="肝炎"></el-checkbox>
                                    <el-checkbox label="结核"></el-checkbox>
                                    <el-checkbox label="痢疾"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="备注"></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                </div>
            </div>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="外伤史">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="手术史">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="家人病史">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="接触史">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="无"></el-checkbox>
                            <el-checkbox label="疫区"></el-checkbox>
                            <el-checkbox label="疫情"></el-checkbox>
                            <el-checkbox label="疫水"></el-checkbox>
                            <el-checkbox label="牧区"></el-checkbox>
                            <el-checkbox label="矿山"></el-checkbox>
                            <el-checkbox label="高氟区"></el-checkbox>
                            <el-checkbox label="低碘区"></el-checkbox>
                            <el-checkbox label="化学物质"></el-checkbox>
                            <el-checkbox label="放射物质"></el-checkbox>
                            <el-checkbox label="有毒物质接触史"></el-checkbox>
                            <el-checkbox label="吸毒史"></el-checkbox>
                            <el-checkbox label="冶游史"></el-checkbox>
                        </el-checkbox-group>
                         <el-input v-model="formInline.user" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="药物过敏">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="无"></el-checkbox>
                        </el-checkbox-group>
                         <el-input v-model="formInline.user" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="过敏物">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="无"></el-checkbox>
                            <el-checkbox label="海鲜"></el-checkbox>
                            <el-checkbox label="粉尘"></el-checkbox>
                            <el-checkbox label="牛奶"></el-checkbox>
                            <el-checkbox label="鸡蛋"></el-checkbox>
                            <el-checkbox label="酒精"></el-checkbox>
                            <el-checkbox label="葱"></el-checkbox>
                            <el-checkbox label="姜"></el-checkbox>
                            <el-checkbox label="蒜"></el-checkbox>
                            <el-checkbox label="花生"></el-checkbox>
                            <el-checkbox label="霉菌"></el-checkbox>
                            <el-checkbox label="大豆"></el-checkbox>
                            <el-checkbox label="柳絮"></el-checkbox>
                            <el-checkbox label="橡胶"></el-checkbox>
                            <el-checkbox label="芒果"></el-checkbox>
                        </el-checkbox-group>
                         <el-input v-model="formInline.user" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-col :span="10">
                    <el-form-item label="输血史">
                         <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <el-col :span="12">
                        <el-form-item label="吸烟史">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    
                </el-col>
                <el-col :span="12">
                    <el-col :span="10">
                        <el-form-item label="戒烟">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                   </el-col> 
                   <el-col :span="9">
                        <el-form-item label="戒烟时长" label-width="200px">
                            <el-input v-model="formInline.user" placeholder="备注"></el-input>
                        </el-form-item>
                   </el-col> 
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <el-col :span="12">
                        <el-form-item label="饮酒史">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="10" :sm="12">
                        <el-form-item label="每日" label-width="120px">
                            <el-input v-model="formInline.user" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">两</span>
                        </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="12">
                    <el-col :span="10">
                        <el-form-item label="戒酒">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                   </el-col> 
                   <el-col :span="9">
                        <el-form-item label="戒酒时长" label-width="200px">
                            <el-input v-model="formInline.user" placeholder="备注"></el-input>
                        </el-form-item>
                   </el-col> 
                </el-col>
            </el-row>
             <el-row>
                 <el-col :span="24">
                    <el-col :lg="5" :sm="4">
                        <el-form-item label="孕" label-width="170px">
                             <el-input v-model="formInline.user" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="4" :sm="5">
                        <el-form-item label="产" label-width="80px">
                             <el-input v-model="formInline.user" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :lg="4" :sm="5">
                        <el-form-item label="早产" label-width="120px">
                              <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                              </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="4" :sm="5">
                        <el-form-item label="流产" label-width="120px">
                              <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                              </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="4" :sm="5">
                        <el-form-item label="避孕" label-width="120px">
                              <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                              </el-select>
                        </el-form-item>
                    </el-col>
                 </el-col>
             </el-row>
            <el-row>
                <el-form-item style="text-align:center;margin-top:40px;">
                    <el-button type="primary" @click="onSubmit" class="btn-blue" >提交</el-button>
                </el-form-item>
            </el-row>
     </el-form>
    </div>
</template>
<style lang="scss">
    //兼容平板
    @media screen and (max-width: 1024px) {
        .brxx-info-container{
            .age-sm-screen{
                label{
                max-width: 50px !important; 
                }
                .el-form-item__content{
                    margin-left: 50px !important;
                }
            }
            .el-form-item__label{
                width: 70px !important;
            }
            .el-form-item__content{
                margin-left: 70px !important;
            }
            .el-checkbox+.el-checkbox{
                margin-left: 0px;
            }
            .el-checkbox{
                margin-right: 20px;
            }
        }
    }
    //特殊划分为两列
    @media screen and (min-width:1024px) and (max-width:1600px){
        .suffix-input-width{
            width: calc(100% - 24px);
        }
    }
    .brxx-info-container{
        padding: 40px 6%;
        .two-col-container{
            width: 100%;
            height: 100%;
            display: flex;
            .frist-col-container,.seconde-col-container{
                width: 50%;
            }
            .seconde-col-container{
                padding-left: 10px;
            }
           
        }
         
    }
    @media screen and (min-width:1600px){
        .brxx-info-container{
            .el-select{
                width: 100%;
            }
            .btn-blue{
                width:200px;
                border-radius:8px;
                height:70px;
                line-height:30px;
                font-size: 30px;
            }
            .seconde-col-container .el-row{
                &:last-child{
                    .el-form-item{
                        margin-bottom: 0px;
                    }
                }
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
            .suffix-input-width{
                width: calc(100% - 55px);
            }
            .suffix-input-span{
                    font-family: PingFangSC-Medium;
                    font-size: 38px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #5e6d82;
                    height: 60px;
            }
            .col-no-padding{
                padding: 0px 0px !important;
            }
            .el-checkbox-group{
                span.el-checkbox__input{
                    line-height: 3;
                    vertical-align: middle;
                }
                span.el-checkbox__inner{
                        width: 27px;
                        height: 27px;
                        border-radius: 6.8px;
                }
                .el-checkbox__input.is-checked .el-checkbox__inner::after{
                    height: 18px;
                    left: 8px;
                    top: 0px;
                    width: 10px;
                }
                .el-checkbox__label{
                    font-family: PingFangSC-Regular;
                    font-size: 34px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #1f2d3d;
                    line-height: 34px;
                }
                .el-checkbox__input.is-checked+.el-checkbox__label{
                    color: #409EFF;
                }
                .el-checkbox{
                    margin-right: 20px;
                    margin-left: 0px;
                }
                .el-checkbox+ .el-checkbox{
                    margin-left: 0px;
                }
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
            
            .el-select-dropdown__item {
                font-size: 42px;
                height: 60px;
                line-height: 60px;
            }
            textarea{
                font-family: PingFangSC-Medium;
                font-size: 36px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #20a0ff;
            }
        }
    }
</style>

<script>
  export default {
    data() {
      return {
         radio2:"",
         value:"",
         options: [{
          value: '1',
          label: '中国'
        }, {
          value: '2',
          label: '外国'
        }],
         checkList:[],
         formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      //跳转到药方界面
      gotoyfpage(row,pagename) {
        this.$router.push({
             name: pagename,
             params:row
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>