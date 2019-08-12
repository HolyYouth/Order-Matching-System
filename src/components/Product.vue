<template>
<div style="height:100%">
    <el-container>
        <el-header style="background-color: #409EFF;">{{product.symbol}}</el-header>
            <el-container>
                <el-aside width="50%">
                    <el-container>
                        <el-header height="50%"><ProductInfo/></el-header>
                        <el-main><ProductOrderMatching/></el-main>
                    </el-container>
                </el-aside>
                <el-main ><ProductHisOrder :orders="product.orders"/></el-main>
            </el-container>
    </el-container>
</div>
</template>
<script>
import ProductInfo from '@/components/ProductInfo.vue'
import ProductHisOrder from '@/components/ProductHisOrder.vue'
import ProductOrderMatching from '@/components/ProductOrderMatching.vue'
export default {
    data() {
      return {
        product:{
            symbol:'APPL',
            orders:[{id:1,type:'bid',amount:10,price:10.37,status:'dealed'},
                {id:2,type:'ask',amount:10,price:10.37,status:'dealed'},
                {id:3,type:'ask',amount:8,price:10.3,status:'alive'},
                {id:4,type:'ask',amount:7,price:10.1,status:'alive'},
                {id:5,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:6,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:7,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:8,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:9,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:10,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:11,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:12,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:13,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:14,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:15,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:16,type:'ask',amount:8,price:9.3,status:'alive'},
                {id:17,type:'ask',amount:8,price:9.3,status:'alive'},
            ]
        }
        }
    },
    mounted(){

    },
    methods:{

    },
    components:{
        ProductInfo,
        ProductHisOrder,
        ProductOrderMatching
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
    &:last-child {
      margin-bottom: 0;
    }
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
</style>