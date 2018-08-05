<template>
  <div id="app">
    <v-header :active="active"  v-on:headCallBack="headCall"></v-header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  html,body{
        display: block;
        margin: 0px;
        width: 100%;
        height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>

<script>
//导入需要的头部控件
  import Vheader from '@/components/header'
  export default {
      data() {
        return{
          active:"/Index/xjczbr"
        }
      }
      ,components: {
       "v-header": Vheader
      }
      ,watch: {
        active:function (val,oldVal){
          console.log("****"+val);
          this.$router.push({
             path: val
          })
        }
      }
      ,methods: {
        headCall: function (url) { 
          console.log("父页面："+url)
          this.active = url;
        }

      }
  }
</script>
  