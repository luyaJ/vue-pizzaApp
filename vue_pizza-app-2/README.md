# vue_pizza-app-2

版本二：使用 Vue + Vue-router + Vuex + Axios 进行状态管理

> A Vue.js project of pizza store

## Build Setup

``` bash
# create a new
vue init webpack projectName

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## add something

```bash
# install vue-router
npm i vue-router --save

# install axios
npm i axios --save

# install vuex
npm i vuex --save
```

这里我使用了野狗云实时通讯工具（现在好像不能注册了）

在 `main.js` 中：
```js
axios.defaults.baseURL = 'https://xxxxxxxx.wilddogio.com/'
```

也可配置全局 axios，在任何组件中都可以使用：
```js
// $axios 你自己可以随意取名字
Vue.prototype.$axios = axios

// 组件中这样使用
this.$axios.get('menu.json')
  .then(res => res.data)
```
