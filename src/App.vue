<template>
  <div id="app">
    <el-header >
    <el-menu :default-active="$route.path"  style="width:100%;background-color: #409EFF;border-bottom: 2px solid #cccccc;" router mode="horizontal" >
      <el-menu-item index="/" style="width:10%"><img style="width:auto; height:100%" src="./static/2ce042985829d85a7628486aeba596f0.jpg">
      </el-menu-item>
      <el-submenu index='tou' style="float:right">
      <template slot="title" ><div class="demo-basic--circle">
      <div class="block"><el-avatar shape="circle" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div></template>
    <el-menu-item v-if="noLog" index="/userOrderList">My Orders</el-menu-item>
    <el-menu-item v-if="noLog" @click="Logout">Logout</el-menu-item>
    </el-submenu>
    </el-menu>
</el-header>
<el-main style="height:90%">
  <keep-alive exclude="Login">
	   <router-view></router-view>
	</keep-alive>
</el-main>
  
  </div>
</template>

<script>
import axios from 'axios';
axios.default.baseURL = "http:192.168.43.225:8080"
export default {
  name: 'App',
  data(){
    return {
      squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      noLog:true
    }
  },
  created(){
    localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));

  },
  mounted(){
    this.loadProductData();
    this.initWebSocket();
  },
  methods:{
    loadProductData() {       
      var url="http://192.168.43.225:8080/getall"
      axios.get(url).then((response) => {
        this.$store.commit('STORE_PRODUCTS', response.data)
      })    
    },
    Logout(){
      this.$store.commit('LOGOUT')
      this.$router.push({path:'/'})
    },
    initWebSocket(){ 
      const wsuri = 'ws://192.168.43.225:8080/websocket/123'
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen(){ 
    },
    websocketonerror(){
    },
    websocketonmessage(e){
      console.log('ws msg')
      console.log(e.data)
      this.$store.commit('STORE_PRODUCTS',e.data);
    },
    websocketsend(Data){
      this.websock.send(Data)
    },
    websocketclose(e){
      console.log('断开连接', e)
    }
  }
}
</script>

<style>
html,body,#app {
  
  margin: auto;
  width: 100%;
  height: 100%;
  

}
body .el-table th.gutter{
    display: table-cell!important;
}
 
body .el-table colgroup.gutter{
    display: table-cell!important;
}
.el-header{
  padding : 0px;
  text-align: center;
}
.el-menu {
    background-color: #818b9e;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
      background-color: #a6b8dbda;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom: 2px solid #409EFF;
      color: #409EFF;
  }
  .el-menu--horizontal>.el-menu-item {
      color: #000000;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      outline: 0;
      color: #40a0ff;
  }
  
.el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px!important;
}
.el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
    padding: 0px;
}
</style>
