// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import App from './App'
import router from './router'
import store from './store/index'
//引入axios
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new
   全局注册
*/
Vue.use(ElementUI)
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//定义全局变量
Vue.prototype.$http= axios


var gc = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
