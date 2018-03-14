<template>
  <div class="home">
    <div class="content">
      <h1>这里是Pizza小店</h1>
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
  background: url('../assets/back.jpg') no-repeat center;
  background-size: 100% 100%;
  height: 85vh;
  .content{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
    h1{
      font-size: 24px;
      font-weight: 700;
      line-height: 50px;
    }
    h2{
      font-size: 20px;
      line-height: 50px;
    }
  }
}
</style>

