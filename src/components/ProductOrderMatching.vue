<template>
<div >
  <h1>Order Matching</h1>
  <div style="">
    <el-table
      :data="product.matchOrders"
      stripe
      height="700px"
      highlight-current-row
      header-row-class-name="tableHead">
      <el-table-column label="Bid" align="center">
      <el-table-column
        prop="bidAmount"
        label="amount"
        align="center">
      </el-table-column>
      
      <el-table-column
        prop="bidPrice"
        label="price"
        align="center">
      </el-table-column>
      </el-table-column>
      <el-table-column label="Ask" align="center">
      <el-table-column
        prop="askPrice"
        label="price"
        align="center">
      </el-table-column>
      
       <el-table-column
        prop="askAmount"
        label="amount"
        align="center">
      </el-table-column>
      </el-table-column>
    </el-table>
  </div>
  </div>

</template>
<script>

export default {
  props: ['product'],
  // data(){
  //   return {
  //     // matchOrders:this.product
  //   }
  // },
  // computed:{
  //   orders(){
  //     alert('111');
      
  //     return this.product.bidOrder;
   
  //   }
  // },
  // watch:{
  //   // product:function(){
      
  //   // }
  // },
  // beforeRouteUpdate (to,from,next){
  //     this.$forceUpdate();
  // },
  mounted(){
    // var bidOrder = this.product.bidOrder;
    //   var askOrder = this.product.askOrder;
    //   if(bidOrder.length>askOrder.length){
    //     for(var k = 0; k<bidOrder.length; k++){
    //       if(k<askOrder.length){
    //         bidOrder[k]["askPrice"]=askOrder[k].price;
    //         bidOrder[k]["askAmount"]=askOrder[k].remainAmount;
    //         bidOrder[k]["askRole"]=askOrder[k].role;
    //       } else{
    //         bidOrder[k]["askPrice"]=null;
    //         bidOrder[k]["askAmount"]=null;
    //         bidOrder[k]["askRole"]=null;
    //       }
    //     }
    //   } else {
    //     for(var k = 0; k<bidOrder.length; k++){
    //       if(k<bidOrder.length){
    //         bidOrder[k]["askPrice"]=askOrder[k].price;
    //         bidOrder[k]["askAmount"]=askOrder[k].remainAmount;
    //         bidOrder[k]["askRole"]=askOrder[k].role;
    //       } else{
    //         bidOrder.push({price:null, remainAmount:null, 
    //                         role:"Bid",askPrice:askOrder[k].price,
    //                         askAmount:askOrder[k].remainAmount,
    //                         askRole:askOrder[k].role})
    //       }
    //     }
    //   }
    //   this.matchOrders = bidOrder;
  },
  methods:{
  }
  
}
</script>

<style>
.el-header, .el-footer {
    background-color: #909399;
    color: rgb(0, 0, 0);
    text-align: center;
    line-height: 60px;
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
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
  .table_container{
        padding: 10px;
        border-radius: 10px;
    }

  .el-table__header{
    table-layout:initial;
    height: 1px;
  }
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
}
.el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
}
</style>