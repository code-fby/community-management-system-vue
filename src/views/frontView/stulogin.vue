<template>
  <div class="login-container">
    <div class="login-container-main">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="co_fff f48 pb5 cursor-point" @click="to('/front')">校园学生社团平台</div>
            <div class="co_fff f22 mt10 cursor-point" @click="to('/front')">Campus student association platform</div>
          </div>
        </el-col>
        <el-col :span="12" class="flex-center-box">
          <div  style="width: 400px;height: 400px;position: relative;">
            <img class="login-img" src="../../assets/frontImage/geren-copy.png" alt="">
            <div class="card" style="margin-top: 8%;">
              <div class="fb f18 mt20 mb20 textAlign">高校社团学生登录</div>
              <div>
                <!-- <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                > -->
                <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  class="demo-ruleForm"
                >
                  <el-form-item  prop="stunum">
                    <el-input v-model.number="ruleForm.stunum" placeholder="请输入学号">
                      <svg-icon icon-class="user" slot="prefix" style="width: 20px;height: 100%;"/>
                    </el-input>
                  </el-form-item>
                  <!-- <el-form-item label="" prop="pass"> -->
                  <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码">
                      <svg-icon icon-class="password" slot="prefix" style="width: 20px;"/>
                    </el-input>
                  </el-form-item>
                  <div class="mb15">
                    <el-row :gutter="20">
                      <el-col :span="14" class="align-left font-blue-1 f14 cursor-point">还没账号?立即注册</el-col>
                      <el-col :span="10" class="align-right font-blue-1 f14 cursor-point">忘记密码</el-col>
                    </el-row>
                  </div>
                  <el-form-item class="mb0 textAlign">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    
  </div>

</template>
<script>
export default {
  data() {
    var checkStuNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        stunum: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        stunum: [{ validator: checkStuNum, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    to(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  /* z-index: -1; */
  background-image: url("../../assets/frontImage/bg5.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.login-container-main,
.el-row,
.el-col-12 {
  height: 100%;
}
.el-col-12 .grid-content {
  height: 100%;
  text-align: center;
  /* transform: translateY(50%); */
  margin-top: 40%;
}
.el-col-12 .grid-card {
  width: 50%;
  margin-top: 28%;
  margin-left: 15%;
  /* transform: translate(25%, 25%); */
}
.login-img {
  color: #fff;
  border: 0.15rem solid #3897e6;
  border-radius: 50%;
  padding: 0.8rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.login-img:hover {
  padding: 1.2rem;
}
</style>