// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/js/Vuex.js'
import https from '@/http/config.js'
import axios from 'axios'

Vue.use(Mint)

Vue.config.productionTip = false
Vue.prototype.$http=https
Vue.prototype.$axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//路由监听
router.beforeEach((to, from, next) => {
  //去那里，从哪里来，执行函数next()
  console.log(to,from,next)
  next()
})