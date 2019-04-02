<template>
  <div>
    <h1>汽车功率/整备质量</h1>
    <div id="myChart" :style="{width: '1000px', height: '700px'}"></div>
  </div>

</template>

<script>

  let echarts = require('echarts')

  export default{
    name: "itemOne",
    data() {
      return {
        msg:'itemOne',
        array: [[]],
        /*temp: [
          [28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]
        ]*/
      }
    },
    mounted(){
      this.initData('初始化信息成功!');
    },
    methods: {

      initData(msg){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myChart'));

        for (let k = 0;k < 2000;k++)
        {
          this.array[k] = [];
          for (let i = 0;i < 5;i ++)
          {
            this.array[k][i] = 0;
          }
          this.array[k][3] = 'Nothing';
        }

        fetch('/api/numberData')
          .then((response) => response.json())
          .then(json => {

            //获取数据
            for (let i = 0; i < 2000;i = i + 1)
            {
              this.array[i][0] = json.data[i].price;
              this.array[i][1] = json.data[i].power;
              this.array[i][2] = json.data[i].weight;
              this.array[i][3] = json.data[i].name;
              this.array[i][4] = 1990

            }
            //打印数据
            //console.log(this.array)
            //console.log(this.temp)
            //设置图表
            myChart.setOption({

                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                  offset: 0,
                  color: '#f7f8fa'
                }, {
                  offset: 1,
                  color: '#cdd0d5'
                }]),
                title: {
                  text: ''
                },
                legend: {
                  right: 10,
                  data: ['1990', '2015']
                },
                xAxis: {
                  name: '整备重量(Kg)',
                  splitLine: {
                    lineStyle: {
                      type: 'dashed'
                    }
                  }
                },
                yAxis: {
                  name: '功率(Kw)',
                  splitLine: {
                    lineStyle: {
                      type: 'dashed'
                    }
                  },
                  scale: true
                },
                series: [{
                  name: '价格',
                  data: this.array,
                  type: 'scatter',
                  symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 8;
                  },
                  label: {
                    emphasis: {
                      show: true,
                      formatter: function (param) {
                        return param.data[3] + '/' + param.data[0] + '万元';
                      },
                      position: 'top'
                    }
                  },
                  itemStyle: {
                    normal: {
                      shadowBlur: 10,
                      shadowColor: 'rgba(120, 36, 50, 0.5)',
                      shadowOffsetY: 5,
                      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                      }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                      }])
                    }
                  }
                }/*, {
                  name: '2015',
                  data: this.array,
                  type: 'scatter',
                  symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 2;
                  },
                  label: {
                    emphasis: {
                      show: true,
                      formatter: function (param) {
                        return param.data[3];
                      },
                      position: 'top'
                    }
                  },
                  itemStyle: {
                    normal: {
                      shadowBlur: 10,
                      shadowColor: 'rgba(25, 100, 150, 0.5)',
                      shadowOffsetY: 5,
                      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                      }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                      }])
                    }
                  }
                }*/]
            });
      })
    }
  }
}

</script>

<style>

</style>

