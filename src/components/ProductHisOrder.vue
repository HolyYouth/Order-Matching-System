<template>
<div>
  
  <div  class="table_container">
    <el-table
      :data="product.allOrder"
      stripe
      style="width: 100%"
      highlight-current-row
      :default-sort = "{prop: 'createTime', order: 'descending'}">
      <el-table-column
        prop="createTime"
        label="created"
        align="center">
      </el-table-column>
      <el-table-column
        prop="role"
        label="role"
        align="center">
      </el-table-column>
      <el-table-column
        prop="remainAmount"
        label="amount"
        align="center">
      </el-table-column>
      <el-table-column
        prop="price"
        label="price"
        align="center">
      </el-table-column>
      <el-table-column
        prop="status"
        label="status"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
export default {
    props:['product'],
 
  mounted(){
    this.product.allOrder.forEach((val,index)=>{
      val['createTime'] = this.renderTime(val['createTime'])
    })
    
    // for(var i=0;i<this.product.length;i++){
    //   this.product.allOrder[i].createTime=this.renderTime(this.product.allOrder[i].createTime)
    // }
    this.$forceUpdate();
  },
  data(){
    return {
      
    }
  },
  watch:{
    // "this.$route":function(){
    //   console.log("change")
    //   this.reFresh= false;
    //   this.$nextTick(()=>{
    //     this.reFresh = true
    //   })
    // }
  },
  beforeRouteUpdate (to,from,next){
      this.$forceUpdate();
  },
  methods:{
      renderTime(date) {
        var dateee = date.toString();
        return dateee.substr(0,10)+" "+dateee.substr(11,8)
//         this.userOrder.forEach((val,index) => {
// var creattime=val["createTime"].toString()
// val["createTime"]=creattime.substr(0,10)+" "+creattime.substr(11,8)
// });
      }
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
  .table_container{
        padding: 10px;
        border-radius: 10px;
    }

  .el-table__header{
    table-layout:initial;
    height: 1px;
  }
  
</style>