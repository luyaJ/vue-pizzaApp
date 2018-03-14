<template>
  <div id="app">
    <app-header></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"><router-view name="history"></router-view></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"><router-view name="contact"></router-view></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"><router-view name="history"></router-view></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
.container{
  margin-top: 30px;
}
</style>

