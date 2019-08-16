<template>
<div style="height:100%">
    <el-container>
        <!-- <el-header  style="background-color: #409EFF;text-align:center;line-height:0px"><h2 style="text-align:center">{{product.symbol}}</h2>
        </el-header> -->
            <el-container>
                <el-aside style="overflow:hidden" width="50%">
                    <el-container>
                        <el-header style="background-color:#D3DCE6" height="50%" ><ProductInfo :product="product"/></el-header>
                        <el-main  style="line-height: 0px"><ProductOrderMatching :product="product"/></el-main>
                    </el-container>
                </el-aside>
                <el-main style="line-height: 0px">
                  <el-container>
                    <el-header>
                  <el-menu  style="width:100%;background-color:#ffffff" mode="horizontal" @select="handleSelect">
                      <el-menu-item  index="1">Chart</el-menu-item>
                      <el-menu-item  index="2">History Order</el-menu-item>
                  </el-menu>
                    </el-header>
                    <el-main style="line-height: 0px">
                      <PriceChart v-if="select=='1'" :product="product"/>
                      <ProductHisOrder v-if="select=='2'" :product="product"/>
                      
                  
                    </el-main>
                  </el-container>
                  </el-main>

            
            </el-container>
    </el-container>
</div>
</template>
<script>
import ProductInfo from '@/components/ProductInfo.vue'
import ProductHisOrder from '@/components/ProductHisOrder.vue'
import ProductOrderMatching from '@/components/ProductOrderMatching.vue'
import PriceChart from '@/components/PriceChart.vue'
export default {
    data() {
      return {
        select:'1',
        dialogFormVisible: false,
        // productSymbol:this.$route.query.symbol,
        newOrder:{
          price:'',
          amount:'',
          type:''
        }, 
      }
    },
    beforeRouteUpdate (){
      this.$forceUpdate();
    },
    computed:{
      productSymbol :function(){
        // console.log(this.$route.query.symbol);
        return this.$route.query.symbol
      },
      product :function(){
        
        for(var i=0;i< this.$store.state.products.length;i++){
          if(this.$store.state.products[i].symbol==this.productSymbol){
            // console.log(this.$store.state.products[i].timePrice[1].matchtime)
            return this.$store.state.products[i]
          }
        }
        // console.log(this.$route.query.product);
        // return this.$route.query.product;
      }
    },
    mounted(){
      // console.log(this.productSymbol);
      console.log(this.product)
      this.constructOrders();
    },
    methods:{
      handleSelect(key, keyPath) {
        this.select = key;
      },
      constructOrders(){
        
      }
    },
    components:{
        ProductInfo,
        ProductHisOrder,
        ProductOrderMatching,
        PriceChart
    }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #409EFF;
    color: rgb(0, 0, 0);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    padding:0px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding:0px;
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
    margin-bottom: 20px;

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
</style>