import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './router/index'
import axios from 'axios'
import { store } from './store/store'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd6086063450enyxno.wilddogio.com/'
// 配置vue原型 在任何组件中都可以使用
Vue.prototype.$axios = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 全局前置守卫（守卫是异步解析执行的）
// router.beforeEach((to, from, next) => {
//   // 判断store.getters.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next() // 将页面显示出来
//   } else {
//     alert('还未登录，请先登录')
//     next('/login')
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
