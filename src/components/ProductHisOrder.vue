<template>
<div>
  
  <div class="table_container">
    <el-table
      :data="orders"
      stripe
      height="800px"
      style="width: 100%"
      highlight-current-row=true
      header-row-class-name="tableHead">
      <el-table-column
        prop="id"
        label="id"
        align="center">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type"
        align="center">
      </el-table-column>
      <el-table-column
        prop="amount"
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
    props: {
    orders: {
      type: String,
      default: 'hello world'
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
  .table_container{
        padding: 10px;
        border-radius: 10px;
    }

  .el-table__header{
    table-layout:initial;
    height: 1px;
  }
</style>