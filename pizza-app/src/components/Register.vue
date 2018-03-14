<template>
  <div class="register">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎您的注册ヾ(◍°∇°◍)ﾉﾞ~</span>
      </div>
      <div class="text item">
        <el-form :model="ruleForm" status-icon :rules="rules" :ref="ruleForm" label-width="80px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model="ruleForm.confirmPassword" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('ruleForm')">注册</el-button>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.confirmPassword !== '') {
          this.$ref.ruleForm.validateField('confirmPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      if (this.ruleForm.password === this.ruleForm.confirmPassword) {
        const formData = {
          name: this.ruleForm.name,
          password: this.ruleForm.password,
          confirmPassword: this.ruleForm.confirmPassword
        }

        axios.post('/users.json', formData)
            .then(res => this.$router.push('/login'));
      }
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
