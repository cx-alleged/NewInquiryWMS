<style lang="scss" scoped>
    $designWidth: 1200;
    //定义 scss函数 计算rem 
    @function px2rem($px){
        @return $px*320/$designWidth/20 + rem;
    }
    html{
        font-size:10px;
        margin: 0px;
        padding: 0px;
    }
    body{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .print-container{
        width: px2rem(1200);
	    height: px2rem(1700);
        padding: 0px px2rem(55);
    }
</style>

<template>
  <div class="print-container">
  </div>
</template>
