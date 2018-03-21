import Vue from 'vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { routes } from './routes.js'
import axios from 'axios'
import { store } from './store/store.js'
import {
  Menu,
  MenuItem,
  Input,
  Table,
  TableColumn,
  Icon,
  Button,
  Form,
  FormItem,
  Card,
  Row,
  Col,
  Header
} from 'element-ui';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Header);

Vue.use(VueRouter);
axios.defaults.baseURL = 'https://wd6086063450enyxno.wilddogio.com/'

// 配置vue原型 (在任何组建中都可以正常使用axios)
Vue.prototype.http = axios

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // 判断store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register'){
//     next();
//   } else {
//     alert('还没有登录，请先登录!');
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach((to, from) => {
//   alert('after each');
// })

const router = new VueRouter({
  routes,
  mode: 'history'
  // scrollBehavior (to, from, savedPosition) {
  //   return {x:0, y: 60}
  // }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
