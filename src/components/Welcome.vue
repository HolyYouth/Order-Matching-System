<template>
<div class="Welcome" style="margin:auto;position:relative;top:15%;width:30%;">
<el-container>
<el-header style="border-top-left-radius: 4px;border-top-right-radius: 4px;">
    <el-menu :default-active="$route.path"  style="width:100%" router mode="horizontal" >
        <el-menu-item style="width:50%;" index="/signin">Sign In</el-menu-item>
        <el-menu-item style="width:50%;" index="/signup">Sign Up</el-menu-item>
    </el-menu>
</el-header>
<el-main style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;">
  <keep-alive>
				    <router-view></router-view>
				</keep-alive>
</el-main>
</el-container>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password:'',
          index:1   
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
  }
</script>

<style scoped>
.Welcome{
  background-image:url('../static/5a31d86422d8a.jpg');
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.el-header, .el-footer {
    background-color: rgb(255, 255, 255);
    padding:0px;
    text-align: center;
    line-height: 60px;
  }
.el-menu-item{
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
     width: 100%;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    border:5px;
    border-radius: 10px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
    border-radius: 10px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
    border-radius: 10px;
  }
 .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
     background-color: rgb(224, 224, 224);
 }
</style>
