<template>
    <div v-if="reFresh" id="charts" style="margin:auto" :style="{width: '90%', height: '500px'}"></div>
</template>
<script>
export default {
  name: 'hello',
  props:['product'],
  data(){
    return {
      reFresh:true,
      test:[]
    }
  },
  // beforeRouteUpdate (to,from,next){
  //   this.reFresh = false;
  //   this.$nextTick(()=>{
  //     this.reFresh=true;
  //   })
  //   this.$forceUpdate();
  // },
  watch: {
    product:function(nev, old){
        this.drawLine(this.product.timePrice)
  }
  },
  mounted(){
    this.drawLine(this.product.timePrice)
  },
  methods: {
    drawLine(timePrice){
      var now = +new Date(1997, 9, 3)
      var present = new Date(+now);
      var data=[];
      for(var k=0;k<timePrice.length; k++){
        var aTime = new Date(timePrice[k].matchtime)
        data.push({name:aTime,value:[[aTime.getFullYear(), aTime.getMonth() + 1, aTime.getDate()].join('/'),timePrice[k].price]})
      }
      let myChart = this.$echarts.init(document.getElementById('charts'))
      myChart.setOption({
          title: { text: 'Price Tendency' },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
              animation: false
            }
          },
          dataZoom: [{
          }, {
              type: 'inside'
          }],
          xAxis: {
            type:'time',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false
            }
          },
          yAxis: {splitLine: {
            type:'value',
            
            show: false
          }},
          series: [{
              hoverAnimation: false,
              name: 'Price',
              type: 'line',
              data: data
          }]
      });
      
    }
  }

}
</script>