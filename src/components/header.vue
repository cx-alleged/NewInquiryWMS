<template>
<div class="header">
      <div class="logo-icon-div">
          <!-- <img src="./assets/header/logo.png" width="135" height="38"> -->
          <img :src="logoImg" width="135" height="38">
      </div>
      <div class="nav-item-div">
          <ul>
              <li :class="active == '/Index/xjczbr' ? 'selected' : ''"><a v-on:click="gotopage(homepage)" >首页</a></li>
              <li :class="active == '/Index/brglpage' ? 'selected' : ''"><a v-on:click="gotopage(brglpage)" >病人管理</a></li>
              <li :class="active == '/Index/blglpage' ? 'selected' : ''"><a v-on:click="gotopage(blglpage)">病历管理</a></li>
              <li :class="active == '/Index/wzqkpage' ? 'selected' : ''"><a v-on:click="gotopage(sjtjpage)" >数据统计</a></li>
          </ul>
      </div>
      <div class="user-info-div">
          <div class="user-icon">
            <img :src="picAccount" width="40" height="40">
          </div>
          <div class="btn-group-div">
              <span>卢玮</span>
              <span style="color: #20a0ff;">注销</span>
          </div>
          <div class="now-date-div">
            <span class="now-date">
              <!-- 2017/06/27  19:30 -->
              {{formateDate}}
            </span>
          </div>
      </div>
    </div>
</template>

<style lang="scss">
    .header{
      width: 100%;
      height: 88px;
      background-color: #324057;
      border-radius: 2px;
      display:flex;
      flex-direction: row;
      align-items: center;
      .logo-icon-div{
          width: 283px;
          height: 38px;
          padding-left: 44px;
      }
      .nav-item-div{
        width: calc(100% - 896px);
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        ul{
            display:inline-block;
            widows: 100%;
            height: 100%;
            margin: 0px;
            padding: 0px;
            line-height: 88px;
            li{
              display: inline-block;
              margin-right: 70px;
              height: 88px;
            }
            li.selected{
                height: 83px;
                border-bottom: 5px solid #20a0ff;
            }
        }

        a,a:link{
            width: auto;
            height: 38px;
            text-decoration:none;
            font-family: PingFangSC-Medium;
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
        }
        a:hover{
            cursor:pointer;
        }
      }
      .user-info-div{
        width: 569px;
        height: 100%;
        display:flex;
        flex-direction: row;
        align-items: center;
        .user-icon{
          width: 40px;
          height: 40px;
          margin-right: 20px;
        }
        .btn-group-div{
          width: auto;
          height: auto;
         span{
            height: 40px;
            font-family: PingFangSC-Regular;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
            margin-right: 20px;
         }
        }
        .now-date-div{
          width: 247px;
	        height: 40px;
          margin-left: 50px;
          span{
            font-family: PingFangSC-Regular;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #99a9bf;
          }
        }
      }
    }
</style>

<script>
 import picLogo from '@/assets/header/logo.png'
 import picAccount from '@/assets/header/accounts.png'
export default {
    name:"headervue",
    // 父组件传递选中类型参数
    props: {
        active:{
            type:String,
            required:true
        }
    }
    ,data() {
        return {
            logoImg:picLogo,
            picAccount:picAccount,
            nowdate:new Date(),
            homepage:'/Index/xjczbr',
            brglpage:'/Index/brglpage',
            blglpage:'/Index/blglpage',
            sjtjpage:'/Index/wzqkpage'
        }
    }
    //计算属性 设置属性 获取属性值
    ,computed: { 
        //格式化日期 
        formateDate:function(){
            var date = this.nowdate;
            var mat={};
            mat.M=date.getMonth()+1;//月份记得加1
            mat.H=date.getHours();
            mat.s=date.getSeconds();
            mat.m=date.getMinutes();
            mat.Y=date.getFullYear();
            mat.D=date.getDate();
            mat.M = mat.M.toString().length < 2 ? '0'+mat.M.toString(): mat.M.toString();
            mat.D = mat.D.toString().length < 2 ? '0'+mat.D.toString(): mat.D.toString();
            mat.H = mat.H.toString().length < 2 ? '0'+mat.H.toString(): mat.H.toString();
            mat.m = mat.m .toString().length < 2 ? '0'+mat.m.toString(): mat.m .toString();
            return mat.Y+"/"+mat.M+"/"+mat.D+" "+mat.H+":"+mat.m;
        }
    }
    ,created () {
        
    }
    ,watch: {
        
    }
    ,methods: {
        gotopage:function(value){
            this.$emit('headCallBack', value);
        },
        //检查是不是为两位数字，不足补全
        check:function(str){
            str=str.toString();
            if(str.length<2){
                str='0'+ str;
            }
            return str;
        }
    }
    ,mounted () {
        var _this = this;
        this.timer = setInterval(function(){
            _this.nowdate = new Date();//修改数据date
        },1000*60);
    }
    ,beforeDestroy () {
         if(this.timer) {
            clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
        }
    }

}
</script>

