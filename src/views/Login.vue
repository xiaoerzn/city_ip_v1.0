<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      
      <div class="avatar_box">
        <img  v-loading="loading" src="../assets/bg/avatar.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading:true,
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'zhangnan',
        password: '1234'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.$router.push('/home')
    const that = this
    document.onkeydown = function (e) {
      e = window.event || e
      if (that.$route.path === '/login' && (e.code === 'Enter' || e.code == 'Num Enter')) {
        that.$refs.loginFormRef.validate(async (valid) => {
          if (!valid) return
          const { data: res } = await that.$http.post('login', that.loginForm)
          if (res.meta.status !== 200) return that.$message.error('登录失败！')
          this.loading=false
          that.$message.success('登录成功')

          window.localStorage.setItem('token', res.data.token)

          that.$router.push('/home')
        })
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async (valid) => {
        try {
          if (!valid) return
          const { data: res } = await this.$http.post('base/login', this.loginForm)
          // console.log(res)
          if (res.meta.status !== 200) return this.$message.error('登录失败！')
          this.$message.success('登录成功')
          window.localStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        } catch (err) {
          this.$message.error('请求失败！')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
//   background-color: #2b4b6b;
  background-image: url('../assets/bg/Loginbg.png');
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.login_box {
  // opacity:0.5;
  width: 450px;
  height: 300px;
  // background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
