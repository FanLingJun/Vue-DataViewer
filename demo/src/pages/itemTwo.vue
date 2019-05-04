<template>
  <div>

    <div id="myChart" :style="{ height: '800px'}"></div>
    <div id="myChart_2" :style="{ height: '800px'}"></div>

  </div>
</template>

<script>

  let echarts = require('echarts');

  export default{
    name: "itemTwo",
    data() {
      return {
        msg:'test!',
        array:[[]],
        array_2:[[]],
      }
    },
    mounted() {
      this.initData('初始化数据成功！');
    },
    methods:{
      initData(msg) {

        var myChart = echarts.init(document.getElementById('myChart'));
        var myChart_2 = echarts.init(document.getElementById('myChart_2'));

        for (let k = 0;k < 8000;k++)
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

        fetch('/alldata')
          .then(response => response.json())
          .then(json => {

            for (let i = 0;i < 5000;i++)
            {
              if (json[i].price != null&&json[i].displacement != null&&json[i].name != null)
              {
                this.array[i][0] = json[i].price;
                this.array[i][1] = json[i].displacement;
                this.array[i][2] = json[i].name;
              }

            }

            for (let i = 5000;i < 10000;i++)
            {
              var j = i - 5000;
              if (json[i].price != null&&json[i].displacement != null&&json[i].name != null)
              {
                this.array_2[j][0] = json[i].price;
                this.array_2[j][1] = json[i].displacement;
                this.array_2[j][2] = json[i].name;
              }

            }

            myChart.setOption({
              title: {
                text: '汽车排量&价格（部分数据）',
              },
              tooltip: {
                formatter: '{c}'
              },
              xAxis: {
                name:'价格(万元)',
                nameTextStyle: {
                  fontSize: 18
                },
                //scale: true
                max: 1000
              },
              yAxis: {
                name: '排量(L)',
                min: 0,
                max: 7,
                nameTextStyle: {
                  fontSize: 18
                },
                //scale: true
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
            }),

            myChart_2.setOption({
                title: {
                  text: '汽车排量&价格（部分数据）',
                },
                tooltip: {
                  formatter: '{c}'
                },
                xAxis: {
                  name:'价格(万元)',
                  nameTextStyle: {
                    fontSize: 18
                  },
                  //scale: true
                  max: 1000
                },
                yAxis: {
                  name: '排量(L)',
                  min: 0,
                  max: 7,
                  nameTextStyle: {
                    fontSize: 18
                  },
                  //scale: true
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
                  data: this.array_2,
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
