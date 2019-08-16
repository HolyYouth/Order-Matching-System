<template>
<div class="ProdTable">
  <el-container>
  <el-header  style="background-color: #E9EEF3;text-align:center;color:#000000">
    <font size="8">My Orders</font> </el-header>
    <el-main style="line-height: 0px">
    <el-table
      :data="userOrder"
      stripe border
      highlight-current-row
      height="800"
      
      style="font-size:14px;"
      header-row-class-name="tableHead"
      :header-cell-style="{height:'15px'}"
      size='mini'>
      <!-- <el-table-column
        prop="id"
        label="Order ID"
        align="center"
        >
      </el-table-column> -->
      <el-table-column
        prop="symbol"
        label="Symbol"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="role"
        label="Role"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="originAmount"
        label="Origin Amount"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="remainAmount"
        label="Remain Amount"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        align="center"
        >
      </el-table-column>
      <el-table-column
        
        prop="createTime"
        label="createTime"
        align="center"
        >
      </el-table-column>
      <el-table-column
        
        prop="matchTime"
        label="matchTime"
        align="center"
        >
      </el-table-column>
      <el-table-column
      fixed="right"
      label="option"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, userOrder)"
          type="text">
          Del
        </el-button>
      </template>
    </el-table-column>
    </el-table>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {

created: function(){
  var url='http://192.168.43.225:8080/order/getOrder/'
  var userID=window.sessionStorage.getItem('user')
	axios.get(url+userID)
	.then((data)=>{
    this.userOrder=data.data;
    this.userOrder.forEach((val,index) => {
      var creattime=val["createTime"].toString()
      val["createTime"]=creattime.substr(0,10)+" "+creattime.substr(11,8)
      if(val["matchTime"]!=null){
        var matchTime=val["matchTime"].toString()
        val["matchTime"]=matchTime.substr(0,10)+" "+matchTime.substr(11,8)
      }
    });
    for(var val in this.userOrder){

    
      
    };
		},(err)=>{
			console.log(err)
		})
},
data(){
    return {
        userOrder:[],
    }
},
methods:{
  // tableRowStyle({ row, rowIndex }) {
  //       return 'height:30px;'
  // },
  deleteRow(index, rows) {
    var url='http://192.168.43.225:8080/order/deleteOrder/'
    console.log(rows[index].id)
    axios.get(url+rows[index].id)
    .then((res)=>{
      console.log('http msg')
      console.log(res.data)
      if(res.data!=null){
        this.$store.commit('STORE_PRODUCTS', res.data)
        rows.splice(index, 1);
      }
    })   
  }
}
}
</script>
<style >
.ProdTable{
/* padding-top: 10%; */
padding-left: 10%;
padding-right: 10%;
}
  .table_container{
    padding-left: 10%;
    padding-right: 12%;
  }
  .el-table th.gutter{
    display: table-cell!important;
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
