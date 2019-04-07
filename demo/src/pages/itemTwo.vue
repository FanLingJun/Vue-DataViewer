<template>
  <div>
    <h1>汽车排量价格之比</h1>
    <div id="myChart" :style="{ height: '800px'}"></div>
  </div>
</template>

<script>

  let echarts = require('echarts');

  export default{
    name: "itemTwo",
    data() {
      return {
        msg:'test!',
        array:[[]]
      }
    },
    mounted() {
      this.initData('初始化数据成功！');
    },
    methods:{
      initData(msg) {

        var myChart = echarts.init(document.getElementById('myChart'));

        for (let k = 0;k < 8000;k++)
        {
          this.array[k] = [];
          this.array[k][2] = '';
          for (let i = 0;i < 2;i ++)
          {
            this.array[k][i] = 0;
          }
        }

        fetch('/alldata')
          .then(response => response.json())
          .then(json => {

            for (let i = 1;i < 8000;i = i + 20)
            {
              this.array[i][0] = json[i].price;
              this.array[i][1] = json[i].displacement;
              this.array[i][2] = json[i].name;
            }
            myChart.setOption({
              title: {
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
                name: '排量(L)',
                min: 0,
                max: 6,
                nameTextStyle: {
                  fontSize: 18
                },
                scale: true
              },
              series: [{
                type: 'effectScatter',
                symbolSize: 1,
                /*data: [
                  [160, 40],
                  [190, 80]
                ],*/
              }, {
                type: 'scatter',
                data: this.array,
              }]
            })
          })
      },
      createRandomItemStyle() {
        return {
          normal: {
            color: 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')'
          }
        };
      },
     GetValue() {
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
     }
    },
  }

</script>

<style>

</style>
