import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/Login'
    // },
    {
        path: '/',
        component: resolve => require(['@/components/index'],resolve)
    },
    {
      path: '/Login',
      name: 'login',
      component: resolve => require(['@/components/login'],resolve)
    },
    {
      path: '*',
      name: 'notFind',
      component: resolve => require(['@/components/no_found'],resolve)
    },
    {
      path: '/print',
      name: 'print',
      component: resolve => require(['@/components/yfprintpage'],resolve)
    },
    {
       path:'/Index',
       component: resolve => require(['@/components/index'],resolve),
       children:[
         {
           path:'xjczbr',
           name:'xjczbr',
           component: resolve => require(['@/components/homepage'],resolve)
         },
         {
          path:'brglpage',
          name:'brglpage',
          component: resolve => require(['@/components/brglpage'],resolve)
         },
         {
          path:'brxxpage',
          name:'brxxpage',
          component: resolve => require(['@/components/brxxpage'],resolve)
         },
         {
          path:'wjxxpage',
          name:'wjxxpage',
          component: resolve => require(['@/components/wjxxpage'],resolve)
         },
         {
          path:'grblglpage',
          name:'grblglpage',
          component: resolve => require(['@/components/grblglpage'],resolve)
         },
         {
          path:'blglpage',
          name:'blglpage',
          component: resolve => require(['@/components/blglpage'],resolve)
         }
         ,{
          path:'bryfpage',
          name:'bryfpage',
          component: resolve => require(['@/components/bryfpage'],resolve)
         }
         ,{
           path:'wzqkpage',
           name:"wzqkpage",
           component: resolve => require(['@/components/wzqkpage'],resolve)
         }
         ,{
          path:'yytjpage',
          name:"yytjpage",
          component: resolve => require(['@/components/yytjpage'],resolve)
        }
       ]
    },
    {
      path:"/xindex",
      name:"/xindex",
      component:resolve => require(['@/components/x_index'],resolve),
      children:[
        {
          path:'xhome',
          name:'xhome',
          component: resolve => require(['@/components/x_home'],resolve)
        }
      ]
    }
  ]
})
