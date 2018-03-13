# vue-pizzaApp

这个项目中，我们使用`vue init webpack-simple pizza-app`初始化项目。

## 技术栈

* vue
* vue-router
* element ui
* scss
* axios

## 路由跳转

```js
// 跳转到上一次浏览的页面
this.$router.go(-1);

// 跳转到指定的地址
this.$router.replace('/menu');

// 跳转到指定路由的名字下的地址
this.$router.replace({name:'MenuLink'});

// 通过push跳转
this.$router.push('/menu');
this.$router.push({name: 'MenuLink'})
```

## 组件复用

在首页增加两个组件：
```bash
<div class="container">
  <router-view name="history"></router-view>
  <router-view name="contact"></router-view>
</div>
```

还需在routes中配置：
```js
path: '/',
components: {
  default: Home,
  'history': History,
  'contact': Contact
}
```

## axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

在vue中使用axios，配合野狗通信云的使用：
```bash
// 安装
npm i axios --save

// 引用
import axios from 'axios';
axios.defaults.baseURL = 'https://wd6086063450enyxno.wilddogio.com/'
```


