<template>
  <div class="home">
    <div class="content">
      <h1>这里是luyaj的Pizza小店</h1>
      <h2>好吃不腻的Pizza哟~</h2>
      <el-button @click="gotoMenu" type="success">Let's Order!</el-button>
    </div>
    <div class="backImg"></div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoMenu() {
      this.$router.push('/about');
    }
  }
}
</script>

<style lang="scss">
.home{
  background: url('../assets/pizza.jpg') no-repeat;
  height: 85vh;
  .content{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
  }
}
</style>

