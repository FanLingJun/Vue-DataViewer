<template>

<div>
  <h1>汽车马力价格之比</h1>
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
        for (let k = 0;k < 3;k++)
        {
          this.array[k] = [];
          this.array[k][2] = '';
          for (let i = 0;i < 2;i ++)
          {
            this.array[k][i] = 0;
          }
        }

        fetch('/api/NumberData')
          .then((response) => response.json())
          .then(json => {
            for (let i = 0;i < 3;i++)
            {
              this.array[i][0] = json.data[i].money;
              this.array[i][1] = json.data[i].horsepower;
              this.array[i][2] = json.data[i].name;
            }
            Chart.setOption({
                title: {
                  text: '',
                },
                tooltip: {
                  formatter: '{c}'
                },
                xAxis: {
                  name:'价格',
                  nameTextStyle: {
                    fontSize: 18
                  },
                  scale: true
                },
                yAxis: {
                  name: '马力',
                  nameTextStyle: {
                    fontSize: 18
                  },
                  scale: true
                },
                series: [{
                  type: 'effectScatter',
                  symbolSize: 20,
                  data: [
                    [160, 40],
                    [190, 80]
                  ],
                }, {
                  type: 'scatter',
                  data: this.array,
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
