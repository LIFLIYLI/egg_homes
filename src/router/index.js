import Vue from 'vue'
import Router from 'vue-router'
import  Tabbar from '@/page/tabbar'
import Seach from '@/page/seach'

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
        },
        {
          path:'find',
          name:'find',
          component:()=>import('@/page/find/find')
        },
        {
          path:'homes',
          name:'homes',
          component:()=>import('@/page/homes/home')
        }
      ]
    },
    {
      path:'/hello',
      name:'helloword',
      component:()=>import('@/components/HelloWorld')
    },
    {
      path:'/seach',
      name:'seach',
      component:Seach,
    }
  ]
})
