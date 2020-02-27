import Vue from 'vue'
import Router from 'vue-router'
import  Tabbar from '@/page/tabbar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tabbar',
      component: Tabbar,
      children:[
        {
          path:'index',
          name:'index',
          component:()=>import('@/page/index/index')
        },
        {
          path:'user',
          name:'user',
          component:()=>import('@/page/user/user')
        }
      ]
    },
    {
      path:'/hello',
      name:'helloword',
      component:()=>import('@/components/HelloWorld')
    }
  ]
})
