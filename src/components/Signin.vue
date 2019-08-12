<template>
    
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="Username" prop="name">
    <el-input v-model="ruleForm.name" placeholder="Please input your username"></el-input>
  </el-form-item>
  <el-form-item label="Password" prop="password" >
    <el-input v-model="ruleForm.password" placeholder="Please input your password"  show-password></el-input>
</el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login('ruleForm')">Sign in</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
</template>


<script>
import axios from 'axios';
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password:'',
        },
        rules: {
          name: [
            { required: true, message: 'Please input your username', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input your password', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      login(formName) {
        axios.get('/getProductList',{
            params:{username:formName.name,
            password:formName.password}
        })
        .then(function(response){
            console.log("1111");
        })
        .catch(function(error){
            alert("22222");
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>