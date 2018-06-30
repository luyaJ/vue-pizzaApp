# vue_pizza-app-1

版本一：使用 Vue + Vue-router + Axios

> A Vue.js project of pizza store

## Build Setup

``` bash
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
