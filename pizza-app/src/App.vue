<template>
  <div id="app">
    <app-header></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="container">
      <router-view name="history"></router-view>
      <router-view name="contact"></router-view>
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

</style>

