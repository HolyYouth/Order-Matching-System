<template>
  <div>
    <div class="login-box">
        <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
        <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
            <span class="login-title">Welcome</span>
            <div style="margin-top: 10px"></div>
            <!-- <el-form-item label="username" prop="loginName"> -->
            <el-form-item prop="loginName">
                <el-col >
                    <el-input placeholder="username" type="text" v-model="loginForm.loginName" clearable></el-input>
                </el-col>
            </el-form-item>
            <!-- <el-form-item label="password" prop="loginPassword" > -->
            <el-form-item  prop="loginPassword" >
                <el-col >
                    <el-input placeholder="password" type="password" v-model="loginForm.loginPassword" show-password></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginSubmit('loginForm')">Login</el-button>
                <el-button type="primary" @click="onRegit('loginForm')">Regist</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: "login",
        data() {
            return {
                loginForm: {
                    loginName: '',
                    loginPassword: ''
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                loginFormRules: {
                    loginName: [
                        {required: true, message: 'Username can not be null', trigger: 'blur'}
                    ],
                    loginPassword: [
                        {required: true, message: 'Password can not be null', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            onRegit(formName){
                this.$refs[formName].validate((valid) => {
                    var regist_url="http://192.168.43.225:8080/register"
                    if (valid){
                        axios.get(regist_url,{params:{
                            user: this.loginForm.loginName,
                            pass: this.loginForm.loginPassword
                        }})
                        .then((response)=>{
                            if(response.data==="Success"){
                                this.$message({showClose:true,message:"Regist successed!"});
                            }else if (response.data==="User_Exist"){
                                this.$message({showClose:true,message:"Username Existed!",type:error});
                            }else{
                                this.$message({showClose:true,message:"Unknown error! Please try again",type:error});
                            }
                        })
                    }else{
                        return false
                    }
                })
            },
            loginSubmit(formName) {
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    var username=this.loginForm.loginName
                    var password=this.loginForm.loginPassword
                    var url="http://192.168.43.225:8080/login"
                    if (valid) {

                        // 与后端交互验证用户名密码
//                         axios.get(url, {params:{
//                             user: username,
//                             pass: password
//                         }})
//                         .then((response) => {
                            
//                             if (response.data === 'Success') {
//                                 this.$store.commit('SET_TOKEN', 1)
//                                 this.$store.commit('GET_USER', username)
//                                 var LoginTo=this.$store.state.login_to
//                                 this.$store.commit('setLogin_to','productList')
//                                 this.$router.push({name:LoginTo})
//                             }else if(response.data==="Wrong_Password"){
//                                 this.$message({
//                                     showClose: true,
//                                     message: 'Wrong password!',
//                                     type: 'error'});
//                             }else if(response.data==="Wrong_User"){
//                                 this.$message({
//                                     showClose: true,
//                                     message: 'User has not registed!',
//                                     type: 'error'});
//                             }else{
//                                 this.$message({
//                                     showClose: true,
//                                     message: 'Unknown Error!',
//                                     type: 'error'});
//                             }
//                         })

                        this.$store.commit('SET_TOKEN', 1)//设置登录token
                        var LoginTo=this.$store.state.login_to
                        this.$store.commit('setLogin_to','productList')
                        this.$router.push({name:LoginTo})

                    } else {
                        return false;
                    }
                });
            }
        }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 140px auto;
        padding: 25px 25px 15px 25px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px rgb(61, 125, 141);
        background-color: rgb(227, 231, 233)
    }
.login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: rgb(61, 125, 141);
    font-size: 30px;
    font-weight: bold;
    }
  
</style>