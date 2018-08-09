<template>
    <div class="wjxx-info-container">
        <el-form :model="formInline" label-width="170px">
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="饭量">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="纳后腹胀">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="饮食习惯">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="食欲">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="纳后腹胀">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="消化">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="饥饿感">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="纳后打嗝">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="入睡快慢">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="做梦频率">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="睡眠质量">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="睡眠时长">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="噩梦否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="午睡否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="起夜次数">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-col :span="16">
                            <el-form-item label="大便频率">
                                <el-input v-model="formInline.user" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">日</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item class="no-label-margin">
                                 <el-input v-model="formInline.user" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">次</span>
                            </el-form-item>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="大便外观">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="颜色">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="造瘘否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="顺畅度">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="便血否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="粘连否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                     <el-col :span="8">
                         <el-form-item label="开塞露否">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="气味">
                                <el-input v-model="value" placeholder=""></el-input>
                            </el-form-item>
                     </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="尿颜色">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="力量强度">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="尿等待">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="尿量">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="尿不急">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="尿频">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                     <el-col :span="8">
                         <el-form-item label="利尿剂否">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                     <el-col :span="8">
                         <el-form-item label="初潮">
                                <el-date-picker type="date" placeholder="请选择日期" v-model="value" format="yyyy-MM-dd" style="width:100%;"></el-date-picker>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="末次月经">
                                <el-date-picker type="date" placeholder="请选择日期" v-model="value" format="yyyy-MM-dd" style="width:100%;"></el-date-picker>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8" class="sczq-label-width">
                        <el-col :span="12">
                            <el-form-item label="时长">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="周期">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                     </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="痛经否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="腰部不适">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="腹部不适">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="周期规律">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="乳房涨否">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="头部不适">
                                 <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="value" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                     <el-col :span="8">
                         <el-form-item label="绝经否">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="绝经年龄">
                                <el-input></el-input>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="绝经原因">
                                <el-input></el-input>
                            </el-form-item>
                     </el-col>
                </el-row>
                <el-row>
                     <el-col :span="8">
                         <el-form-item label="倒经否">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="3">是</el-radio>
                                    <el-radio :label="6">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                </el-row>
                <el-row :gutter="20">
                     <el-form-item style="text-align:center;margin-top:40px;">
                        <el-button type="primary" @click="onSubmit" class="btn-default" >返回</el-button>
                    </el-form-item>
                </el-row>
            </div>
        </el-form>
    </div>
</template>
<style lang="scss">
  @media screen and (max-width: 1024px) {
        .wjxx-info-container{
            .sczq-label-width{
                padding-left: 0px !important; 
                padding-right: 0px !important;
                &:last-child{
                    label{
                        width: 45px !important;
                    }
                    .el-form-item__content{
                        margin-left: 45px !important;
                    }
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
    @media screen and (max-width:1600px){
        .suffix-input-width{
            width: calc(100% - 24px);
        }
        .suffix-input-span{
            text-align: right;
            display: inline-block;
            width: 24px;
        }
    }
    .wjxx-info-container{
        padding: 0px 3%;
        .el-from{
            &:last-child{
                border-bottom:0px;
            }
        }
        .wjxx-item{
                padding-top: 40px;
                padding-bottom: 18px;
                border-bottom: 2px solid #e0e6ed;
        }
        .no-label-margin{
            .el-form-item__content{
                margin-left: 0px !important;
            }
        }
        .el-select{
            width:100%;
        }
    }
    @media screen and (min-width:1600px) and (max-width:1920px){
        .wjxx-info-container{
            
            .el-select{
                width: 100%;
            }
            .btn-default{
                width:200px;
                border-radius:8px;
                height:70px;
                line-height:30px;
                font-size: 30px;
                border: 1px solid #20a0ff;
                background-color: #ffffff;
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
                    width: 55px;
                    display: inline-block;
                    text-align: right;
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
          label: '正常'
        }, {
          value: '2',
          label: '适中'
        }, {
          value: '3',
          label: '异常'
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
