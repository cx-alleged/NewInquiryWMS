<template>
  <div id="app">
    <v-header :active="active"  v-on:headCallBack="headCall"></v-header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
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
      },
      created () {
        //   this.$http({
        //     method: 'post',
        //     url:"/api/rest/commitData/010105/01",
        //     data:{"cdid":"1","cdid_superadmin":"6A1AFAC58B4BE3C2E05010AC296E7BD8","cdid_resource":"6AB7B57A2A3AE957E05010AC296E1F87","yhm":"331002009","mm":"24c72134b6f5828f29fc6f316081f72b7ec31b9c"}
        //   }).then((res)=>{
        //     debugger
        //     console.log(res.data);
        //     var data_s =JSON.stringify(res.data);
        //  });
      }
      ,components: {
       "v-header": Vheader
      }
      ,beforeMount () {
        var currentName = this.$route.name
        console.log(currentName);
        this.active="/Index/"+currentName;
      }
      ,watch: {
        active:function (val,oldVal){
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
  