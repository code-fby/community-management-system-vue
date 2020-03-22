<template>
  <div class="login-container">
    <div class="login-container-main">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="co_fff f48 pb5 cursor-point" @click="to('/front')">高校社团教师注册</div>
            <div
              class="co_fff f22 mt10 cursor-point"
              @click="to('/front')"
            >College association teacher registration</div>
          </div>
        </el-col>
        <el-col :span="12" class="flex-center-box">
          <div style="width: 500px;height: auto;position: relative;">
            <img class="login-img" src="../../assets/frontImage/geren-copy.png" alt />
            <div class="card" style="margin-top: 8%;">
              <div class="fb f18 mt20 mb20 textAlign">Registration module</div>
              <div>
                <el-form
                  :model="ruleForm"
                  :rules="rules"
                  ref="ruleForm"
                  label-width="18%"
                  size="mini"
                  class="demo-ruleForm"
                >
                  <el-form-item label="教职工号" prop="teacherNum">
                    <el-input v-model="ruleForm.teacherNum"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="teacherPassword">
                    <el-input type="password" v-model="ruleForm.teacherPassword" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="姓名" prop="teacherName">
                    <el-input v-model="ruleForm.teacherName"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="teacherPhone">
                    <el-input v-model="ruleForm.teacherPhone"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="teacherSex">
                    <el-radio-group v-model="ruleForm.teacherSex">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>

                  <el-form-item label="所属学院" prop="teacherCollege">
                    <el-select v-model="ruleForm.teacherCollege" placeholder="请选择所属学院名称">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
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
    var validateStuNum = (rule, value, callback) => {
      if (!(/^[0-9]+.?[0-9]*$/.test(value))) {
        callback(new Error('请输入数字,且非负数'))
      } else if (value.indexOf('.') !== -1) {
        callback(new Error('请输入非小数数字'))
      } else if (value.length < 12 || value.length > 12) {
        callback(new Error('学号为12位，请填写完整'))
      } else {
        callback()
      }
    }
    var validateStuClassNum = (rule, value, callback) => {
      if (!(/^[0-9]+.?[0-9]*$/.test(value))) {
        callback(new Error('请输入数字,且非负数'))
      } else if (value.indexOf('.') !== -1) {
        callback(new Error('请输入非小数数字'))
      } else if (value.length < 7 || value.length > 7) {
        callback(new Error('班级编号为7位，请填写完整'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.stuPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validateStuPhone = (rule, value, callback) => {
      if (!(/^1[3456789]\d{9}$/.test(value))) {
        callback(new Error('手机号格式错误，请重新填写！'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        teacherNum: '',
        teacherPassword: '',
        checkPass: '',
        teacherName: '',
        teacherPhone: '',
        teacherSex: '',
        teacherCollege: ''
      },
      rules: {
        teacherNum: [
          { required: true, message: '请输入教职工号', trigger: 'blur' },
          { validator: validateStuNum, trigger: 'blur' }
        ],
        stuClassNum: [
          { required: true, message: '请输入班级编号', trigger: 'blur' },
          { validator: validateStuClassNum, trigger: 'blur' }
        ],
        teacherPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        teacherName: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        teacherPhone: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { validator: validateStuPhone, trigger: 'blur' }
        ],
        teacherSex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        teacherCollege: [
          { required: true, message: '请选择所属学院', trigger: 'change' }
        ]
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