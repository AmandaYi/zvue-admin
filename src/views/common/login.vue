<template>
  <div class="page-login">
    <el-form :model="loginForm" :rules="loginRules" ref="ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="input" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="input" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ trigger: "blur", validator: this.validateUsername }]
      }
    };
  },
  methods: {
    validateUsername(rule, value, callback) {
      if (value === "") {
        callback(new Error("用户名不能为空"));
        return;
      }
      if (value.length < 1 || value.length > 10) {
        callback(new Error("用户名长度错误"));
        return;
      }
      callback();
    },
    //   登陆
    async login() {
      try {
        await this.$store.dispatch("Login", this.loginForm);
        this.$router.replace({
          path: "/home"
        });
      } catch (ex) {
          alert(ex)
      }
    },
    submitForm(formName) {
      // 验证

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.page-login {
}
</style>