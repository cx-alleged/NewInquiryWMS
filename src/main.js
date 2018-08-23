// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import App from './App'
import router from './router'
import store from './store/index'
//引入axios
import axios from 'axios'
import '../src/assets/utils/http.js'
//引入公共部分js
import common from '../src/assets/utils/common.js'
//引入打印插件
import Print from '../src/assets/utils/print.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new
   全局注册
*/
Vue.use(ElementUI)
//注册打印插件
Vue.prototype.$Print= Print;
//定义全局变量
Vue.prototype.$http= axios;
//定义全局属性给公共部分js
Vue.prototype.$common = common;


var gc = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
