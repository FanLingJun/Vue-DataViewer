<template>

<div>
  <h1>汽车马力&价格</h1>
  <div id="Chart" :style="{ height: '800px'}"></div>
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
        array:[[]]
      }
    },
    mounted() {
      this.initData('初始化信息成功！')
    },
    methods: {
      initData(msg) {

        var Chart = echarts.init(document.getElementById('Chart'))
        //定义一个一维数组
        for (let k = 0;k < 4000;k++)
        {
          this.array[k] = [];
          this.array[k][2] = '';
          for (let i = 0;i < 2;i ++)
          {
            this.array[k][i] = 0;
          }
        }

        fetch('/alldata',{})
          .then((response) => response.json())
          .then(json => {
            for (let i = 1;i < 4000;i = i + 2)
            {
              this.array[i][0] = json[i].price;
              this.array[i][1] = json[i].power;
              this.array[i][2] = json[i].name;
            }
            //console.log(this.array);
            //console.log(this.array[i][2]);
            Chart.setOption({

                title: {
                  text: '',
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
                  type: 'value',
                  max: 150

                }],
                yAxis: [{
                  type: 'value',
                  max: 140
                }],
                series: [{
                  name: 'price-area',
                  type: 'scatter',
                  symbolSize: 5,
                  // itemStyle: {
                  //     normal: {
                  //         borderWidth: 0.2,
                  //         borderColor: '#fff'
                  //     }
                  // },
                  data: this.array
                }]






/*                title: {
                  text: '',
                },
                tooltip: {
                  formatter: '{c}'
                },
                xAxis: {
                  name:'价格(万元)',
                  nameTextStyle: {
                    fontSize: 18
                  },
                  scale: true
                },
                yAxis: {
                  name: '最大马力(ps)',
                  nameTextStyle: {
                    fontSize: 18
                  },
                  scale: true
                },
                series: [{
                  type: 'effectScatter',
                  symbolSize: 10,
                  /!*data: [
                    [160, 40],
                    [190, 80]
                  ],*!/
                }, {
                  type: 'scatter',
                  data: this.array,
                }]*/
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
