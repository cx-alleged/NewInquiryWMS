<template>
    <div class="bryf-container">
        <div class="info-container">
            <div class="wzwt-info-container">
                <div class="titile-container">
                    <span>
                        基本信息
                    </span>
                    <span>
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                </div>
                <div class="wzwt-input-container">
                     {{yfdata.diagnoseLabels}}
                </div>
            </div>
            <div class="bqms-info-container">
                <div class="titile-container">
                    <span>
                        病情描述
                    </span>
                    <span>
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                </div>
                <div class="bqms-input-container">
                     <el-input
                        type="textarea"
                        :rows="7"
                        placeholder="请输入病情描述"
                        class="bqms"
                        v-model="yfdata.description">
                        </el-input>

                </div>
            </div>
        </div>
        <div class="yf-info-container">
            <div class="yf-header-container">
                <span class="brxm">{{yfdata.pName}}</span>
                 <el-button class="btn-default" @click="addZf">加主方</el-button>
                 <el-button class="btn-default btn-border-red" @click="clearAllYw">清除</el-button>
            </div>
            <div class="mainReList-container-div">
                <!-- 这里循环遍历药品对象，为空时默认生成12个单元格 每四个就添加一列，不足四个补足四个， -->
                <div class="mainReList-container" v-for="(item, mrindex) in mainReList" :key="mrindex">
                    <div class="zf-search-info"><span name="zfname">主方{{mrindex+1}}</span><el-input class="new-yfmc" @keyup.enter.native="addzyfyw($event,mrindex)"></el-input><el-input class="ywfs" v-model="item.amount"></el-input><span>付</span><el-input class="ywbz" v-model="item.remark"></el-input><el-checkbox name="isStock" v-model="item.isStock" class="rk-checkbox">入库</el-checkbox><el-button class="btn-default" type="primary" @click="addZyfff(mrindex)">加副方</el-button><el-button icon="el-icon-delete" @click="openMegBox('是否删除主方','deleteZf',mrindex,'')" class="zf-btn-delete"></el-button></div>
                <div class="mainMeList-container" >
                    <div class="yp-item" v-for="(h, i) in item.mainMeList" :key="i"><input v-model="h.name" @blur="updateMainYw(mrindex,i)"/></div>
                </div>
                <div class="viceReList-container" v-for="(vice, vindex) in item.viceReList" :key="vindex">
                        <div class="zf-search-info"><span name="zfname">副方{{vindex+1}}</span><el-input class="new-yfmc"  @keyup.enter.native="addfyfyw($event,vindex,mrindex)"></el-input><el-input class="ywfs" v-model="vice.amount"></el-input><span>付</span><el-input class="ywbz" v-model="vice.remark"></el-input><el-checkbox name="isStock" v-model="vice.isStock" class="rk-checkbox">入库</el-checkbox><el-button icon="el-icon-delete" @click="openMegBox('是否删除副方','deleteFf',mrindex,vindex)" class="zf-btn-delete"></el-button></div>
                    <div class="mainMeList-container" >
                            <div class="yp-item" v-for="(vim, m) in vice.viceMeList" :key="m"><input v-model="vim.name" @blur="updateViceYw(mrindex,vindex,m)"/></div>
                        </div>
                </div>
                </div>
                <div class="yf-fs-info">
                    <span>共计</span>
                    <el-input class="yf-fs-all "></el-input>
                    <span>付</span>
                </div>
            </div>
            <div class="yf-foot-container">
                 <el-button class="btn-default btn-blue" @click="gotoBryfpage">返回</el-button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
/*全局样式  主要是修改element的样式 局部样式无法修改element 组件样式 通过添加最外层的容器避免重盖*/
.bryf-container{
    .info-container .bqms-info-container .bqms-input-container textarea{
        font-family: PingFangSC-Medium;
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #20a0ff;
        height: 678px;
        padding: 30px;
        resize: none;
    }
    
    .btn-default{
        width: 200px;
        height: 70px;
        border: solid 1px #20a0ff;
        height: 70px;
        border-radius: 8px;
        span{
            font-family: PingFangSC-Regular;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 23.8px;  
            letter-spacing: 0px;
            color: #20a0ff;
        }
    }
    .btn-blue{
        background-color:#20a0ff;
        span{
            color: #ffffff;
        }
    }
    .btn-border-red{
         border: solid 1px #ff4949;
         span{
             color: #ff4949;
         }
    }
    .mainReList-container-div{
        .btn-default{
            width: 134px;
            height: 70px;
            border: solid 1px #20a0ff;
            height: 70px;
            background-color: #ffffff;
            border-radius: 8px;
                span{
                    font-family: PingFangSC-Regular;
                    font-size: 30px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 23.8px;  
                    letter-spacing: 0px;
                    color: #20a0ff;
                }
        }
        .zf-btn-delete {
            width: 60px;
            height: 60px;
            padding: 12px 12px;
            margin-top: 5px;
            margin-left: 18px;
            i{
                font-size: 30px;
            }
        }
    }
    .zf-search-info{
        width: 100%;
        height: 72px;
        line-height: 72px;
        display: flex;
        span{
            height: 42px;
            font-family: PingFangSC-Medium;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #475669;
        }
        span[name="zfname"]{
            min-width: 80px;
            padding-right: 15px;
        }
        span:nth-child(4){
            padding-right: 15px;
        }
        :nth-child(6){
            padding-right: 20px;
        }
        .new-yfmc{
            width: 215px;
            input.el-input__inner{
                width: 185px;
                height: 70px;
                border-radius: 8px;
                border: solid 1px #c0ccda;
                background-color: #ffffff;
                font-family: PingFangSC-Medium;
                font-size: 32px;
                line-height: 32px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
            }
        }
        .ywfs{
            width: 80px;
             margin: 0px 20px 0px 0px;
             input.el-input__inner{
                width: 80px;
                height: 70px;
                border-radius: 8px;
                border: solid 1px #c0ccda;
                background-color: #ffffff;
                font-family: PingFangSC-Medium;
                font-size: 32px;
                line-height: 32px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
            }
        }
        .ywbz{
            width: 480px;
            margin: 0px 20px 0px 0px;
            input.el-input__inner{
                height: 70px;
                border-radius: 8px;
                border: solid 1px #c0ccda;
                background-color: #ffffff;
                font-family: PingFangSC-Medium;
                font-size: 32px;
                line-height: 32px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
            }
        }
        .rk-checkbox{
            span.el-checkbox__inner{
                width: 40px;
                height: 40px;
            }
            span.el-checkbox__input.is-checked{
                width: 40px;
                height: 40px;
                
                span.el-checkbox__inner{
                    width: 40px;
                    height: 40px;
                    padding-right: 0px;
                    border-radius: 8px;
                }
                span.el-checkbox__inner::after{
                    height: 23px;
                    left: 15px;
                    top: 4px;
                    width: 8px;
                    
                }
            }
            span.el-checkbox__label{
                font-family: PingFangSC-Medium;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 33.6px;
                letter-spacing: 0px;
                color: #475669;
                vertical-align: middle;
            }
        }
    }
    .yf-fs-info{
        display: flex;
        align-items: center;
        span{
            font-family: PingFangSC-Medium;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #475669;
        }
        .yf-fs-all{
            width: 88px;
            height: 72px;
            margin: 0px 20px;
            input{
                font-family: PingFangSC-Medium;
                font-size: 32px;
                line-height: 32px;
                height: 70px;
                border-radius: 8px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
            }
        }
    }
}


</style>

<style lang="scss" scoped>
    .titile-container{
            span{
                font-family: PingFangSC-Medium;
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
            }
    }
    /*左侧两个文本框样式*/
    .bryf-container{
        height: calc(100% - 148px);
        padding: 30px 35px;
        display: flex;
        overflow-y: auto;
        .info-container{
            width: 520px;
            height: 100%;
            margin: 0px;
            padding: 0px;
            .wzwt-info-container{
                width: 100%;
                height: 580px;
                .wzwt-input-container{
                        width: 448px;
                        height: 428px;
                        margin-top:20px;
                        background-color: #ffffff;
                        border-radius: 8px;
                        border: solid 1px #c0ccda;
                        padding: 30px;
                        overflow: hidden;
                        font-family: PingFangSC-Regular;
                        font-size: 34px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #1f2d3d;
                }
            }
            .bqms-info-container{
                width: 100%;
                height: 754px;
                .bqms-input-container{
                    margin-top: 20px;
                    /*这里有一个奇葩的问题 全局样式生效  局部样式无法选中texarea*/
                    .bqms textarea.el-textarea__inner{
                        font-family: PingFangSC-Medium;
                        font-size: 34px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #20a0ff;
                        height: 678px;
                        padding: 30px;
                    }
                }
            }
        }
    .yf-foot-container{
        text-align: center;
        margin-top: 10px;
    } 
    }
    /*右侧药物的列表样式*/
    .yf-info-container{
        .yf-header-container{
            span.brxm{
                font-family: PingFangSC-Medium;
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
                margin-right: 35px;
            }
              
        }
    }
    .mainReList-container-div{
        margin-top: 40px;
        margin-left: 20px;
        
    }
    //药品列表样式
    .mainMeList-container{
        width:1320px;
        height: auto;
        margin-top:17px;
        margin-bottom:17px;
        display: flex;
        flex-wrap:wrap;
        border: 1px solid #c0ccda;
        .yp-item{
            width:330px;
            height: 70px;
            input{  
                max-width: 286px;
                padding: 7px 20px 7px 20px;
                font-family: PingFangSC-Regular;
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #475669;
                outline:none;
            }
        }
}
</style>
<script>
export default {
    name:"bryfpage"
    ,data() {
        return {
            yfdata:{
                pName:'张三',
                diagnoseLabels:'展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述，展示问诊问题生成的文字描述',
                description:'我患高血压20年，现在血压150/120，最高的时候190/150。头昏头痛。服降压药可以控制。我患高血压20年，现在血压150/120，最高的时候190/150。头昏头痛。服降压药可以控制。我患高血压20年，现在血压150/120，最高的时候190/150。头昏头痛。服降压药可以控制。我患高血压20年，现在血压150/120，最高的时候190/150。头昏头痛。服降压药可以控制。我患高血压20年，现在血压150/120。',
            
            },
            mainReList: [
                {
                "isStock": true,
                "amount":20,
                "remark":"后用，与主方同用",
                // 主方药物列表
                "mainMeList": [
                    {
                    "name": "sada",
                    "dose": 12
                    },
                    {
                    "name": "sada",
                    "dose": 12
                    },
                     {
                    "name": "sada",
                    "dose": 12
                    },
                    {
                    "name": "sada",
                    "dose": 12
                    },
                     {
                    "name": "sada",
                    "dose": 12
                    },
                    {
                    "name": "sada",
                    "dose": 12
                    },
                     {
                    "name": "sada",
                    "dose": 12
                    },
                    {
                    "name": "sada",
                    "dose": 12
                    },
                     {
                    "name": "sada",
                    "dose": 12
                    },
                    {
                    "name": "sada",
                    "dose": 12
                    },
                     {
                    "name": "sada",
                    "dose": 12
                    },
                    {
                    "name": "sada",
                    "dose": 12
                    }
                ],
                // 副方列表
                "viceReList": [
                    {
                    "isStock": true,
                    "amount":20,
                    "remark":"后用，与主方同用",
                    "viceMeList": [
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        }
                    ]
                    },
                    {
                    "isStock": true,
                    "amount":20,
                    "remark":"后用，与主方同用",
                    "viceMeList": [
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        }
                    ]
                    },
                    {
                    "isStock": true,
                    "amount":20,
                    "remark":"后用，与主方同用",
                    "viceMeList": [
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        },
                        {
                        "name": "sada",
                        "dose": 12
                        }
                    ]
                    }
                ]
                }
            ]
        };
    }
    ,computed: { 

    }
    ,created () {
        
    }
    ,watch: {
        mainReList: {
    　　　　handler(newValue, oldValue) {
    　　　　　　console.log("数据已经发生改变："+newValue[0].mainMeList[6].name);
            console.log("原本的值为："+newValue);
    　　　　},
    　　　　deep: true
　　   }
    }
    ,methods: {
    hellBryfpage:function(){
        var rows =  this.$route.params;
        console.log("hello 父类页面传递的参数为："+rows);
    },
    gotoBryfpage:function(){
         this.$router.push({
             path: '/Index/brglpage'
          })
    },
    clearAllYw:function(){
        var model_list = [
                {
                "isStock": true,
                // 主方药物列表
                "mainMeList": [
                    {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    }
                ],
                // 副方列表
                "viceReList": [
                    {
                    "isStock": true,
                    "viceMeList": [
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        }
                    ]
                    },
                    {
                    "isStock": true,
                    "viceMeList": [
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        }
                    ]
                    },
                    {
                    "isStock": true,
                    "viceMeList": [
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        }
                    ]
                    }
                ]
                }
            ];
            this.mainReList=model_list;
            
    },
        /**后端数据发送请求 */
    httpAjaxData:function(){     
        console.log("数据传递给后端");
    },
    /**
     * 删除时的提示确认框
     * msg 提示内容
     * callback 点击确定时的回调函数
     * mindex 主方列表 序号
     * vindex 副方列表 序号
     */
    openMegBox(msg,callback,mindex,vindex) {
        this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            if(callback==="deleteZf"){
                this.deleteZf(mindex);
            }else if(callback === "deleteFf"){
                this.deleteFf(mindex,vindex);
            }else{

            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    /** 
     * 新增主方方法
    */
    addZf:function(mindex,val){
        var model_zf = {
                "isStock": true,
                // 主方药物列表
                "mainMeList": [
                    {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    },
                     {
                    "name": "",
                    "dose": ""
                    },
                    {
                    "name": "",
                    "dose": ""
                    }
                ],
                // 副方列表
                "viceReList": [
                    {
                    "isStock": true,
                    "viceMeList": [
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        }
                    ]
                    },
                    {
                    "isStock": true,
                    "viceMeList": [
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        }
                    ]
                    },
                    {
                    "isStock": true,
                    "viceMeList": [
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        },
                        {
                        "name": "",
                        "dose": ""
                        }
                    ]
                    }
                ]
                };
        this.mainReList.push(model_zf);
    
    },
    /**
     * 移除副方
     * mindex 代表主方序号
     * vindex 代表副方序号
     */
    deleteFf:function(mindex,vindex){
        this.mainReList[mindex].viceReList.splice(vindex,1);
    },
    /** 移除指定的主方 */
    deleteZf:function(mindex){
        this.mainReList.splice(mindex,1);
    },
    
    /** 修改或新增主药方中的药物列表 */
    updateMainMe:function(mindex,val){
        console.log("开始执行更新数组的值"+val);
        var switch_btn = true;
        var list = this.mainReList[mindex].mainMeList;
        if(list && list.length > 0){
            for(var key in list){
                if(list[key].name==""){
                    // list[key].name=val;
                    switch_btn = false;
                    this.$set( this.mainReList[mindex].mainMeList[key],"name",val);
                    break;
                }
            }
            //默认的数据对象中没有药品为空的数据 向列表中添加四个对象
            if(switch_btn){
                this.mainReList[mindex].mainMeList.push({name: val, dose: 200});
                this.mainReList[mindex].mainMeList.push({name: '', dose: ""});
                this.mainReList[mindex].mainMeList.push({name: '', dose: ""});
                this.mainReList[mindex].mainMeList.push({name: '', dose: ""});
            }
        }
        
    },
    /**
     * 修改或新增副药方的药物列表
     * value 要修改的值
     * vindex 副方序号
     * mindex 主方序号 */
    
    updateViceMe:function(value,vindex,mindex){
        var switch_btn = true;
        var list = this.mainReList[mindex].viceReList[vindex].viceMeList;
         if(list && list.length > 0){
             for(var key in list){
                if(list[key].name==""){
                    // list[key].name=val;
                    switch_btn = false;
                    this.$set( this.mainReList[mindex].viceReList[vindex].viceMeList[key],"name",value);
                    break;
                }
            }
            //默认的数据对象中没有药品为空的数据 向列表中添加四个对象
            if(switch_btn){
                this.mainReList[mindex].viceReList[vindex].viceMeList.push({name: value, dose: 200});
                this.mainReList[mindex].viceReList[vindex].viceMeList.push({name: '', dose: ""});
                this.mainReList[mindex].viceReList[vindex].viceMeList.push({name: '', dose: ""});
                this.mainReList[mindex].viceReList[vindex].viceMeList.push({name: '', dose: ""});
            }
         }
    },
    /**e 触发事件
     * vindex 副方序号
     * mindex 主方序号
     */
    addfyfyw:function(e,vindex,mindex){
       console.log("新增副方的药物");
       var value = e.target.value;
       this.updateViceMe(value,vindex,mindex);
    },
    /**
     * e. 触发事件
     * mindex 主方序号
     */
    addzyfyw: function (e,mindex) {
        console.log("原本的值为："+mindex);
        console.log("input："+e.target.value);
        console.log(e);
        this.updateMainMe(mindex,e.target.value);
    },
      /** 新增副方 */
    addZyfff:function (mrindex){
          
          var viceMeArry = [];
          //循环生成8种中药
          for(var i=0;i<8;i++){
              var viceMeObj = {name:"",dose:""};
              viceMeArry.push(viceMeObj);
          }
          var viceReObj = {"viceMeList":viceMeArry};
          this.mainReList[mrindex].viceReList.push(viceReObj);
      },
      /**数组最后四位对象是否为空
       * return true 为空
       * false 不为空
       */
      arryEnd4null:function(arry){
          var switch_btn = true;
          for(var i = arry.length - 1; i > arry.length-5; i--){
              if(arry[i].name != ""){
                  switch_btn = false;
              }
          }
          return switch_btn;
      },
      /** 
       * 更新主方药物列表
       * input失去焦点 
       * 操作相应的数据
       * mindex 代表主方序号
       * findex 代表药物序号
       * */
      updateMainYw:function(mindex,findex){
          //第一步 排除是否为删除操作
          var ywObj = this.mainReList[mindex].mainMeList[findex];
          if(ywObj.name == ""){
              //删除操作 清空这个为空的对象，然后在数组末尾添加一个空的数据，判断最后四个数组对象为空并且数组对象大于等于16 去掉末尾四个数据；
              this.mainReList[mindex].mainMeList.splice(findex,1);
              //末尾添加数组对象
              var obj = {name:"",dose:""};
              this.mainReList[mindex].mainMeList.push(obj);
              var sz_length = this.mainReList[mindex].mainMeList.length;
              var flag = this.arryEnd4null(this.mainReList[mindex].mainMeList);
              if(sz_length>=16 && flag){
                  this.mainReList[mindex].mainMeList.splice(sz_length-4,4);
              }
              
          }
          //是更新数据，直接做数据请求操作
      },
      /** 更新 副方药物列表 */
      updateViceYw:function(mindex,vindex,findex){
           var ywObj = this.mainReList[mindex].viceReList[vindex].viceMeList[findex];
            if(ywObj.name == ""){
              //删除操作 清空这个为空的对象，然后在数组末尾添加一个空的数据，判断最后四个数组对象为空并且数组对象大于等于12 去掉末尾四个数据；
              this.mainReList[mindex].viceReList[vindex].viceMeList.splice(findex,1);
              //末尾添加数组对象
              var obj = {name:"",dose:""};
              this.mainReList[mindex].viceReList[vindex].viceMeList.push(obj);
              var sz_length = this.mainReList[mindex].viceReList[vindex].viceMeList.length;
              var flag = this.arryEnd4null(this.mainReList[mindex].viceReList[vindex].viceMeList);
              if(sz_length>=12 && flag){
                  this.mainReList[mindex].viceReList[vindex].viceMeList.splice(sz_length-4,4);
              }
          }
      }
    }
    ,mounted () {
        this.hellBryfpage();
    }
    ,beforeDestroy () {

    }
}
</script>


