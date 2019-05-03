<template>

  <div class="wrapper">
    <div id="first_chart"></div>
    <div id="two_chart"></div>
    <div id="three_chart"></div>
    <div id="four_chart"></div>
  </div>

</template>

<script>

  let echarts = require('echarts');

  export default {
    name: "datastatistic",
    data() {
      return {
        msg: 'hello~'
      }
    },
    mounted() {
      this.initData("初始化信息成功！")
    },
    methods: {
      initData(msg) {
        var first_chart = echarts.init(document.getElementById('first_chart'));
        first_chart.setOption({
          color: ['#3398DB'],
          title: {
            text: '价格区间分布'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              name : '价格',
              type : 'category',
              data : ['(1, 5]','(5, 10]','(10, 15]','(15, 20]',
                '(20, 25]','(25, 30]','(30, 35]','(35, 50]',
              '(50, 100]','(100, 300]','(300, 1000]','>=1000'
              ],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              name: '数值',
              type : 'value'
            }
          ],
          series : [
            {
              type:'bar',
              barWidth: '60%',
              data:[697,2839,2646,1369,931,780,391,906,788,527,60,3]
            }
          ]
        })

        //第二个图
        var two_chart = echarts.init(document.getElementById('two_chart'));
        two_chart.setOption({
          color: ['#72777b'],
          title: {
            text: '速度区间分布'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              name : '速度',
              type : 'category',
              data : ['(0, 100]','(100, 150]','(150, 170]','(170, 175]','(175, 180]','(180, 185]','(185, 190]'
              ,'(190, 200]','(200, 205]','(205, 210]','(210, 220]','(220, 300]','>=300'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              name: '数值',
              type : 'value'
            }
          ],
          series : [
            {
              type:'bar',
              barWidth: '60%',
              data:[12,1200,2162,982,1280,1033,1155,1144,270,637,519,1482,61]
            }
          ]
        })

        //3
        var three_chart = echarts.init(document.getElementById('three_chart'));
        three_chart.setOption({
          color: ['#df9464'],
          title: {
            text: '整备质量区间分布'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              name : '整备质量',
              type : 'category',
              data : ['(0, 1100]','(1100, 1200]','(1300, 1400]',
              '(1400, 1450]','(1450, 1500]','(1500, 1550]','(1550, 1600]',
              '(1600, 1650]','(1650, 1700]','(1700, 1750]',
              '(1750, 1800]','(1800, 1900]','(1900, 2000]',
              '(2000, 2100]','(2100, 2200]','(2200, 2300]','>=2300'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              name: '数值',
              type : 'value'
            }
          ],
          series : [
            {
              type:'bar',
              barWidth: '60%',
              data:[1253,1153,1399,854,872,713,650,481,567,319,292,637,422,213,254,136,290]
            }
          ]
        })

        //4
        var four_chart = echarts.init(document.getElementById('four_chart'));
        four_chart.setOption({
          color: ['#45b97c'],
          title: {
            text: '升功率区间分布'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              name : '升功率',
              type : 'category',
              data : ['(0, 20],','(20, 30]','(30, 40]','(40, 50]','(50, 60]','(60, 70]','(70, 80]','(80, 90]','(90, 100]',
              '(100, 110]','>=110',],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              name: '数值',
              type : 'value'
            }
          ],
          series : [
            {
              type:'bar',
              barWidth: '60%',
              data:[3,118,644,2907,4929,1164,1104,740,204,85,39]
            }
          ]
        })

      }
    }

  }

</script>

<style>
#first_chart{
  width: 850px;
  height: 520px;

  margin-left: 100px;
}
#two_chart{
  width: 850px;
  height: 520px;
  margin-left: 100px;
  margin-top: 20px;
}
#three_chart{
  width: 850px;
  height: 520px;
  margin-left: 100px;
  margin-top: 20px;
}
#four_chart{
  width: 850px;
  height: 520px;
  margin-left: 100px;
  margin-top: 20px;
}
</style>
