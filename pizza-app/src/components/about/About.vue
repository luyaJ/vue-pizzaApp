<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <router-link :to="{name: 'historyLink'}">
            <el-button type="info active" plain>历史订单</el-button>
          </router-link>
          <router-link :to="{name: 'contactLink'}">
            <el-button type="info" plain>联系我们</el-button>
          </router-link>
          <router-link to="/about/orderingGuide">
            <el-button type="info" plain>点餐文档</el-button>
          </router-link>
          <router-link to="/about/delivery">
            <el-button type="info" plain>快递信息</el-button>
          </router-link>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content bg-purple">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style lang="scss">
.el-row {
  margin-top: 20px;
  .grid-content{
    margin-left: 20px;
    .el-button{
      width: 200px;
      margin: 0 auto;
      text-align: left;
      margin-bottom: 15px;
    }
  }
}
</style>
