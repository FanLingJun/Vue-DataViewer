<template>

<div>

  <div id="Chart" :style="{ height: '800px'}"></div>
  <div id="Chart_2" :style="{ height: '800px'}"></div>

</div>

</template>

<script>

  import axios from 'axios'
  let echarts = require('echarts')

  export default{
    name: "itemThree",
    data() {
      return {
        msg:'test!',
        array:[[]],
        array_2:[[]]
      }
    },
    mounted() {
      this.initData('初始化信息成功！')
    },
    methods: {
      initData(msg) {

        var Chart = echarts.init(document.getElementById('Chart'));
        var Chart_2 = echarts.init(document.getElementById('Chart_2'));

        //定义一个一维数组
        for (let k = 0;k < 4000;k++)
        {
          this.array[k] = [];
          this.array_2[k] = [];
          this.array[k][2] = '';
          this.array_2[k][2] = '';
          for (let i = 0;i < 2;i ++)
          {
            this.array[k][i] = 0;
            this.array_2[k][i] = 0;
          }
        }

        fetch('/alldata',{})
          .then((response) => response.json())
          .then(json => {
            for (let i = 1;i < 4000;i++)
            {
              if (json[i].price != null&&json[i].power !=null&&json[i].name != null)
              {
                this.array[i][0] = json[i].price;
                this.array[i][1] = json[i].power;
                this.array[i][2] = json[i].name;
                //console.log(this.array[i][0] + this.array[i][1] + this.array[i][2])
              }
            }

            for (let i = 4000;i < 8000;i++)
            {
              var j = i - 4000;
              if (json[i].price != null&&json[i].power !=null&&json[i].name != null)
              {
                this.array_2[j][0] = json[i].price;
                this.array_2[j][1] = json[i].power;
                this.array_2[j][2] = json[i].name;
              }
            }


            Chart.setOption({

                title: {
                  text: '汽车马力&价格（部分数据）',
                  left: 'center',
                  top: 0
                },
                visualMap: {
                  min: 0,
                  max: 140,
                  dimension: 1,
                  orient: 'vertical',
                  right: 10,
                  top: 'center',
                  text: ['HIGH', 'LOW'],
                  calculable: true,
                  inRange: {
                    color: ['#f2c31a', '#24b7f2']
                  }
                },
                tooltip: {
                  trigger: 'item',
                  axisPointer: {
                    type: 'cross'
                  },
                  formatter: '{c}'
                },
                xAxis: [{
                  name: '价格',
                  type: 'value',
                  max: 150

                }],
                yAxis: [{
                  name: '马力',
                  type: 'value',
                  max: 140
                }],
                series: [{
                  name: 'price-area',
                  type: 'scatter',
                  symbolSize: 5,
                  data: this.array
                }]
          }),

            Chart_2.setOption({
                title: {
                  text: '汽车马力&价格（部分数据）',
                  left: 'center',
                  top: 0
                },
                visualMap: {
                  min: 0,
                  max: 140,
                  dimension: 1,
                  orient: 'vertical',
                  right: 10,
                  top: 'center',
                  text: ['HIGH', 'LOW'],
                  calculable: true,
                  inRange: {
                    color: ['#f2c31a', '#24b7f2']
                  }
                },
                tooltip: {
                  trigger: 'item',
                  axisPointer: {
                    type: 'cross'
                  },
                  formatter: '{c}'
                },
                xAxis: [{
                  name: '价格',
                  type: 'value',
                  max: 150

                }],
                yAxis: [{
                  name: '马力',
                  type: 'value',
                  max: 140
                }],
                series: [{
                  name: 'price-area',
                  type: 'scatter',
                  symbolSize: 5,
                  data: this.array_2
                }]
              })
          })
      }
    }
  }
</script>

<style>
#Chart {
  margin:0 auto;
}
</style>
