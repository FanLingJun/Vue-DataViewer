<template>
  <div>

    <div id="myChart" :style="{width: '1000px', height: '700px'}"></div>
    <div id="myChart_2" :style="{width: '1000px', height: '700px'}"></div>

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
        array_2: [[]]
      }
    },
    mounted(){
      this.initData('初始化信息成功!');
    },
    methods: {

      initData(msg) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myChart'));
        var myChart_2 = echarts.init(document.getElementById('myChart_2'));


        for (let k = 0;k < 5000;k++)
        {
          this.array[k] = [];
          this.array_2[k] = [];
          for (let i = 0;i < 5;i ++)
          {
            this.array[k][i] = 0;
            this.array_2[k][i] = 0;
          }
          this.array[k][3] = 'Nothing';
          this.array_2[k][3] = 'Nothing';
        }

        //fetch('/api/numberData')
        fetch('/alldata')
          .then((response) => response.json())
          .then(json =>  {

            //获取数据(前端版本)
            /*for (let i = 0; i < 2000;i = i + 1)
            {
              this.array[i][0] = json.data[i].price;
              this.array[i][1] = json.data[i].power;
              this.array[i][2] = json.data[i].weight;
              this.array[i][3] = json.data[i].name;
              this.array[i][4] = 1990

            }*/
            for (let i = 0; i < 5000;i = i + 1)
            {
              if (json[i].price !== ''&&json[i].power !== null&&json[i].name !== null&&json[i].weight !== null)
              {
                this.array[i][0] = json[i].price;
                this.array[i][1] = json[i].power;
                this.array[i][2] = json[i].weight;
                this.array[i][3] = json[i].name;
                this.array[i][4] = 1990

                //console.log(this.array[i])
              }
            }


            for (let i = 5000; i < 10000;i = i + 1)
            {
              if (json[i].price !== ''&&json[i].power !== null&&json[i].name !== null&&json[i].weight !== null)
              {
                var j = i - 5000;
                this.array_2[j][0] = json[i].price;
                this.array_2[j][1] = json[i].power;
                this.array_2[j][2] = json[i].weight;
                this.array_2[j][3] = json[i].name;
                this.array_2[j][4] = 2015

                //console.log(this.array_2[j])
              }
            }

            //打印数据
            //console.log(this.array)
            //console.log(this.temp)
            //设置图表
            myChart.setOption({
/*
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                  offset: 0,
                  color: '#f7f8fa'
                }, {
                  offset: 1,
                  color: '#cdd0d5'
                }]),*/
                title: {
                  text: '汽车功率&整备质量（部分数据）'
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
                  },

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
                }]
            });



            myChart_2.setOption({

              /*backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
              }, {
                offset: 1,
                color: '#cdd0d5'
              }]),*/
              title: {
                text: '汽车功率&整备质量(部分数据)'
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
                },
                max : 800

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
                data: this.array_2,
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
              }]
            });

      })
    }
  }
}

</script>

<style>

</style>

