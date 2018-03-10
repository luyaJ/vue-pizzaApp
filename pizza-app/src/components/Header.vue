<template>
  <div class="header">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#B481BB">
      <el-menu-item index="/">
        <router-link to="/">主页</router-link>
      </el-menu-item>
      <el-menu-item index="/menu">
        <router-link to="{name: 'MenuLink'}">菜单</router-link>
      </el-menu-item>
      <el-menu-item index="/admin">
        <router-link to="/admin">管理</router-link>
      </el-menu-item>
      <el-menu-item index="/about">
        <router-link to="/about">关于我们</router-link>
      </el-menu-item>
      <el-menu-item index="/login">
        <router-link to="/login">登录</router-link>
      </el-menu-item>
      <el-menu-item index="/register">
        <router-link to="/register">注册</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
  .el-menu{
  padding-left: 25%;
  }
}
</style>
