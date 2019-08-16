<template>
<div>
    <h2 style="text-align: center;padding-left:100px">
     {{product.symbol}}
     <!-- <el-button type="info" style="float:right;" @click="dialogFormVisible = true">Create Order</el-button> -->
      <el-tooltip class="item" effect="dark" content="Click to creat an order" placement="top-start">
        <el-button type="text" style="float:right;padding-right:10px;color:#333;" icon="el-icon-circle-plus" @click="checkLogin">Create Order</el-button>
      </el-tooltip>
      <!-- <el-dialog title="Create Order" width="40%" :visible.sync="dialogFormVisible"> -->
        
      <!-- </el-dialog> -->
    </h2>
<el-row style="padding-left:10px;margin-bottom: 0px;" :gutter="20">
    <el-col :span="6"><div style="float:left" class="grid-content bg-purple">Symbol: {{product.symbol}}</div></el-col>
    <el-col :span="6"><div style="float:left" class="grid-content bg-purple">Type: {{product.type}}</div></el-col>
</el-row>
<el-row style="padding-left:10px;margin-bottom: 0px;" :gutter="20">
    <el-col :span="6"><div style="float:left" class="grid-content bg-purple">Price: {{product.price}}</div></el-col>
    <el-col :span="6"><div style="float:left" class="grid-content bg-purple">Status: {{product.status}}</div></el-col>
    </el-row>
    
    <el-form :model="newOrder" :rules="rules" ref="newOrder">
      <el-row>
      <el-col>
          <el-form-item label="type:" prop="orderType">
            <el-select v-model="value" placeholder="Type">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :default-value="MKT"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select style="float:left;width:20%"  v-model="newOrder.orderType" placeholder="Please choose the order type">
              <el-option :disabled="mktDisable" label="MKT" value="MKT"></el-option>
              <el-option label="LMT" value="LMT"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
      <el-col>
          <el-form-item label="role:" prop="role">
            <el-select style="float:left;width:20%"  v-model="newOrder.role" placeholder="Please choose your role">
              <el-option label="Bid" value="Bid"></el-option>
              <el-option label="Ask" value="Ask"></el-option>
            </el-select>
          </el-form-item>
      </el-col>
      </el-row>
          <el-form-item label="Amount:" prop="originAmount">
            <el-input v-model.number="newOrder.originAmount" autocomplete="off" clearable placeholder="Please input the amount"></el-input>
          </el-form-item>
          <el-form-item label="Price:" prop="price">
            <el-input v-if="newOrder.orderType!='MKT'" v-model.number="newOrder.price" autocomplete="off" placeholder="Please input the price"></el-input>
            <span v-if="newOrder.orderType=='MKT'" style="float:left"><span style="float:left">{{newOrder.price=product.price}}$</span> <br/>(The price might be different since the market float)</span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="reset('newOrder')">Cancel</el-button>
          <el-button type="primary" @click="createOrder('newOrder')">Create</el-button>
        </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  props:['product'],
  // beforeRouteUpdate (to,from,next){
  //     this.$forceUpdate();
  //   },
  data(){
    return {
      options:[{
        value:'MKT',
        label:'MKT',
      },{
        value:'LMT',
        label:'LMT'
      }
      ],
      dialogFormVisible:false,
      mktDisable:false,
      newOrder:{
        productId:this.product.id,
        price:'',
        originAmount:'',
        role:'',
        orderType:'',
        traderId:window.sessionStorage.getItem('user')
      },
      rules: {
        price: [
          { required: true, message: 'The price can\'t be null', trigger: 'blur' },
          {type:'number', message:'The price has to be a number'}
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        originAmount: [
          { required: true, message: 'The amount can\'t be null', trigger: 'change' },
          {type:'number', message:'The amount has to be a number'}
        ],
        role: [
          { required: true, message: 'The amount can\'t be null', trigger: 'change' },
        ],
        orderType: [
          { required: true, message: 'The amount can\'t be null', trigger: 'change' },
        ],
        
      }
    }
  },
  mounted(){
    if(this.product.matchOrders==null || this.product.matchOrders.length<0 || 
    this.product.matchOrders[0].bidPrice==null || this.product.matchOrders[0].askPrice==null ||
    this.product.matchOrders[0].bidPrice=="" || this.product.matchOrders[0].askPrice==""){
        this.mktDisable = true;
      }else{
        this.mktDisable = false;
      }
  },
  watch:{
    product:function(){
      this.newOrder.productId = this.product.id;
      if(this.product.matchOrders==null && this.product.matchOrders.length<0 || 
      this.product.matchOrders[0].bidPrice==null || this.product.matchOrders[0].askPrice==null ||
      this.product.matchOrders[0].bidPrice=="" || this.product.matchOrders[0].askPrice==""){
        this.mktDisable = true;
      }else{
        this.mktDisable = false;
      }
    }
  },
  methods:{
    createOrder(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.newOrder.traderId = window.sessionStorage.getItem('user');
            var url = "http://192.168.43.225:8080/order/createOrder";
            axios.post(url,this.newOrder)
            .then(res=>{
              // console.log(res.data);
              this.$store.state.products = res.data;
              // console.log(this.$store.state.products);
              this.dialogFormVisible = false;
              this.reset(formName);
            })
            .catch(error=>{
              this.dialogFormVisible = false;
            });
            
          } else {
            console.log('error submit!!');
            return false;
          }
      });
      
    },
    checkLogin(){
      var token=parseInt(window.sessionStorage.getItem('token'))
      this.dialogFormVisible = true;
      // console.log('checking login')
      if(token!=1){
        this.$store.commit('setLogin_to',this.$router.currentRoute.name)
        this.$router.push({name: 'Login'})
      }
      else{
        this.dialogFormVisible = true;

      }
      
      
    },
    reset(formName){
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    }
  }
}
</script>
<style>
.el-header, .el-footer {
    background-color: #ffffff;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: rgb(253, 251, 251);
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
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-row {
    margin: 0px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
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
</style>