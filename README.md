# vue-pizzaApp

这个项目中，我们使用`vue init webpack-simple pizza-app`初始化项目。

## 技术栈

* vue
* vue-router
* element ui
* scss

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


