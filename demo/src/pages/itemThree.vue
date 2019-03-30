<template>

  <div id="Chart" :style="{ height: '800px'}">

  </div>

</template>

<script>

  let echarts = require('echarts')
  //url = https://echarts.baidu.com/data/asset/data/aqi-beijing.json

  export default{
    name: "itemThree",
    data() {
      return {
        msg:'test!'
      }
    },
    mounted() {
      this.initData('初始化信息成功！')
    },
    methods: {
      initData(msg) {
        var Chart = echarts.init(document.getElementById('Chart'))
        fetch('https://echarts.baidu.com/data/asset/data/aqi-beijing.json')
          .then((response) => response.json())
          .then(json => {
            this.data = json.data

            Chart.setOption({
              title: {
                text: 'Beijing AQI'
              },
              tooltip: {
                trigger: 'axis'
              },
              xAxis: {
                data: data.map(function (item) {
                  return item[0];
                })
              },
              yAxis: {
                splitLine: {
                  show: false
                }
              },
              toolbox: {
                left: 'center',
                feature: {
                  dataZoom: {
                    yAxisIndex: 'none'
                  },
                  restore: {},
                  saveAsImage: {}
                }
              },
              dataZoom: [{
                startValue: '2014-06-01'
              }, {
                type: 'inside'
              }],
              visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                  gt: 0,
                  lte: 50,
                  color: '#096'
                }, {
                  gt: 50,
                  lte: 100,
                  color: '#ffde33'
                }, {
                  gt: 100,
                  lte: 150,
                  color: '#ff9933'
                }, {
                  gt: 150,
                  lte: 200,
                  color: '#cc0033'
                }, {
                  gt: 200,
                  lte: 300,
                  color: '#660099'
                }, {
                  gt: 300,
                  color: '#7e0023'
                }],
                outOfRange: {
                  color: '#999'
                }
              },
              series: {
                name: 'Beijing AQI',
                type: 'line',
                data: data.map(function (item) {
                  return item[1];
                }),
                markLine: {
                  silent: true,
                  data: [{
                    yAxis: 50
                  }, {
                    yAxis: 100
                  }, {
                    yAxis: 150
                  }, {
                    yAxis: 200
                  }, {
                    yAxis: 300
                  }]
                }
              }
            })
          })
      }
    }
  }

</script>

<style>

</style>
