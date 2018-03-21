<template>
  <div class="register">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>请登录(〃'▽'〃)~</span>
      </div>
      <div class="text item">
        <el-form ref="form" :model="ruleForm" :ref="ruleForm" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 8, message: '长度在3到8个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  // 组件内的守卫
  beforeRouteEnter: (to, from, next) => {
    next(vm => vm.$store.dispatch("setUser", null))
  },
  methods: {
    onSubmit() {
      axios.get('/users.json')
          .then(res => {
            //  console.log(res.data);
            const data = res.data;
            const users = [];
            for (let key in data) {
              const user = data[key];
              //  console.log(user);
              users.push(user);
            }
            // console.log(users);
            // 实现过滤
            let result = users.filter( (user) => {
              return user.name === this.ruleForm.name && user.password === this.ruleForm.password
            });
            // console.log(result);
            // 判断result的长度是否大于0
            if (result != null && result.length > 0) {
              this.$store.dispatch("setUser", result[0].name)
              this.$router.push('/home');
            } else {
              alert('账号或密码错误');
              this.$store.dispatch("setUser", null)
            }
          })
    }
  }
}
</script>

<style lang="scss">
.register{
  margin: 0 auto;
  margin-top: 100px;
  width: 60%;
  .box-card{
    text-align: center;
  }
}
</style>
