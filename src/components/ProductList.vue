<template>
<div class="ProdTable">
<el-container>
<el-header  style="background-color: #E9EEF3;text-align:center;color:#000000"><font size="8">MARKET</font> </el-header>
<el-main style="line-height: 0px">
<el-table
:data="this.$store.state.products"
stripe highlight-current-row border
@row-click="jumpToProductPage"
>
<el-table-column
prop="id"
label="NUMBER"
width="100"
>
</el-table-column>
<el-table-column
prop="symbol"
label="STOCK"
>
</el-table-column>
<el-table-column
prop="type"
label="SYMBOL NAME"
>
</el-table-column>
<el-table-column
prop="price"
label="CURRENT PRICE"
>
</el-table-column>
</el-table>
</el-main>
</el-container>
</div>

</template>

<script>
import Product from '@/components/Product.vue'
export default {
// created: function(){
    //  this.$http.get('api/stocks')
    //  .then((data)=>{
// this.$store.commit("setStockList",data.data.data)
    //    // this.stockList = data.data.data;
    //  },(err)=>{
    //    console.log(err)
    //  })
// },

data() {
return {
stocks:[{
id:"1",
stock: "APPL1",
price: 10.0
}]
}
},
watch:{
  'this.$store.state.product':function(){
    this.$forceUpdate();
  }
},
methods:{
jumpToProductPage(row){
  // var product = [];
  // for(var i=0;i< this.$store.state.products.length;i++){
  //   if(this.$store.state.products[i].symbol==row.symbol){
  //     // console.log({product:this.$store.state.products[i]});
  //     this.$router.push({path:'/product/',component:Product, query:{product:this.$store.state.products[i]}}); 
  //   }
  // }
  this.$router.push({path:'/product/',component:Product, query:{symbol:row.symbol}}); 
  
  
  }
}
}
</script>

<style>
.ProdTable{
/* padding-top: 10%; */
padding-left: 10%;
padding-right: 10%;
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