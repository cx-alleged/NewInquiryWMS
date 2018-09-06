<template>
    <div class="bryf-container">
        <div class="info-container">
            <div class="wzwt-info-container">
                <div class="titile-container" @click="setActiveSyle(1)">
                    <span>
                        基本信息
                    </span>
                    <span>
                        <i v-bind:class="[d_isActive ? 'el-icon-caret-top' : 'el-icon-caret-bottom']"></i>
                        <!-- <i class="el-icon-caret-bottom"></i> -->
                    </span>
                </div>
                <div v-bind:class="[{ 'isdisplaynone': d_isActive }, 'wzwt-input-container']">
                    <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入诊断标签，以逗号分隔"
                        class="bqms"
                        v-model="diagnoseLabels">
                        </el-input>
                </div>
            </div>
            <div class="bqms-info-container">
                <div class="titile-container" @click="setActiveSyle(2)">
                    <span>
                        病情描述
                    </span>
                    <span>
                        <i v-bind:class="[b_isActive ? 'el-icon-caret-top' : 'el-icon-caret-bottom']"></i>
                        <!-- <i class="el-icon-caret-bottom"></i> -->
                    </span>
                </div>
                <div v-bind:class="[{ 'isdisplaynone': b_isActive }, 'bqms-input-container']">
                <!-- <div class="bqms-input-container"> -->
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
                <!-- 这里循环遍历药品对象，为空时默认生成null个单元格 每四个就添加一列，不足四个补足四个， -->
                <div class="mainReList-container" v-for="(item, mrindex) in yfdata.mainReList" :key="mrindex">
                    <div class="zf-search-info"><span name="zfname">主方{{mrindex+1}}</span><el-input class="new-yfmc" @keyup.enter.native="addzyfyw($event,mrindex)"></el-input><el-input class="ywfs" @change="updateAmount" v-model="item.amount"></el-input><span>付</span><el-input class="ywbz" v-model="item.remarks"></el-input><el-checkbox name="isStock" v-model="item.isStock" class="rk-checkbox">入库</el-checkbox><el-button class="btn-default" type="primary" @click="addZyfff(mrindex)">加副方</el-button><el-button icon="el-icon-delete" @click="openMegBox('是否删除主方','deleteZf',mrindex,'')" class="zf-btn-delete"></el-button></div>
                <div class="mainMeList-container" >
                    <div class="yp-item" v-for="(h, i) in item.recipeDetailList" :key="i"><input v-model="h.medicine" @blur="updateMainYw(mrindex,i)"/></div>
                </div>
                <div class="viceReList-container" v-for="(vice, vindex) in item.viceReList" :key="vindex">
                        <div class="zf-search-info"><span name="zfname">副方{{vindex+1}}</span><el-input class="new-yfmc"  @keyup.enter.native="addfyfyw($event,vindex,mrindex)"></el-input><el-input class="ywfs"  @change="updateAmount" v-model="vice.amount"></el-input><span>付</span><el-input class="ywbz" v-model="vice.remarks"></el-input><el-checkbox name="isStock" v-model="vice.isStock" class="rk-checkbox">入库</el-checkbox><el-button icon="el-icon-delete" @click="openMegBox('是否删除副方','deleteFf',mrindex,vindex)" class="zf-btn-delete"></el-button></div>
                    <div class="mainMeList-container" >
                            <div class="yp-item" v-for="(vim, m) in vice.viceRecipeDetailList" :key="m"><input v-model="vim.medicine" @blur="updateViceYw(mrindex,vindex,m)"/></div>
                        </div>
                </div>
                </div>
                <div class="yf-fs-info">
                    <span>共计</span>
                    <el-input class="yf-fs-all" v-model="allTotal"></el-input>
                    <span>付</span>
                </div>
            </div>
            <div class="yf-foot-container">
                 <el-button :class="[{'isdisplaynone': is_display_zd },'btn-default btn-blue']" @click="submitYfData">完成诊断</el-button>
                 <el-button  @click="gotoLastPage" :class="[{'isdisplaynone': is_display_fh },'btn-default']" >返回</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/css/bryfpage.scss';
</style>
<style lang ="scss">
    @import '../assets/css/yfprint.scss';
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
    .isdisplaynone{
        display: none;
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
                // height: 580px;
                height: auto;
                margin-bottom: 20px;
                .wzwt-input-container{
                        // width: 448px;
                        height: 489px;
                        margin-top:20px;
                }
            }
            .bqms-info-container{
                width: 100%;
                // height: 754px;
                height: auto;
                .bqms-input-container{
                    margin-top: 20px;
                }
            }
        }
    .yf-foot-container{
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
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
        width:1323px;
        height: auto;
        margin-top:17px;
        margin-bottom:17px;
        display: flex;
        flex-wrap:wrap;
        border-bottom: 1px solid #c0ccda;
        border-right:1px solid #c0ccda;
        overflow: hidden;
        .yp-item{
            width:330px;
            height: 70px;
            input{  
                    max-width: 290px;
                    padding: 8px 20px 8px 20px;
                    font-family: PingFangSC-Regular;
                    font-size: 40px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #475669;
                    outline: none;
                    border: 1px solid #c0ccda;
                    border-bottom: 0px;
                    border-right: 0px;
            }
        }
}
</style>

<script src="../assets/js/bryfpage.js">
</script>


