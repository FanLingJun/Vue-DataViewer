<template>
  <div>
    <h1>汽车速度/马力之比</h1>
    <div id="myChart" :style="{ height: '700px'}"></div>
  </div>

</template>

<script>

  let echarts = require('echarts');

  export default{
    name: "itemFour",
    data() {
      return {
        msg:'test!',
        array1: [],
        array2: []
      }
    },
    mounted() {
      this.initData('初始化数据成功!')
    },
    methods: {
      initData(msg) {

        var myChart = echarts.init(document.getElementById('myChart'))

        fetch('/api/NumberData')
          .then((response) => response.json())
          .then(json => {
            for (let i = 100;i <= 3000;i = i + 50)
            {
              this.array1.push(json.data[i].speed)
              this.array2.push(json.data[i].power)
            }
            //console.log("~~~~~~~")
            //console.log(this.array1)
            //console.log(this.array2)

            myChart.setOption({
              tooltip : {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true
                  }
                }
              },
              toolbox: {
                show : true,
                feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
                }
              },
              calculable : true,
              legend: {
                data:['Growth', 'Budget 2011', 'Budget 2012'],
                itemGap: 5
              },
              grid: {
                top: '12%',
                left: '1%',
                right: '10%',
                containLabel: true
              },
              xAxis: [
                {
                  type : 'category',
                  data : this.array1
                }
              ],
              yAxis: [
                {
                  type : 'value',
                  name : '比值',
                  axisLabel: {
                    formatter: function (a) {
                      a = +a;
                      return isFinite(a)
                        ? echarts.format.addCommas(+a / 1000)
                        : '';
                    }
                  }
                }
              ],
              dataZoom: [
                {
                  show: true,
                  start: 94,
                  end: 100
                },
                {
                  type: 'inside',
                  start: 94,
                  end: 100
                },
                {
                  show: true,
                  yAxisIndex: 0,
                  filterMode: 'empty',
                  width: 30,
                  height: '80%',
                  showDataShadow: false,
                  left: '93%'
                }
              ],
              series : [
                {
                  name: 'Car Power',
                  type: 'bar',
                  data: this.array2
                },
                {
                  name: 'Car Speed',
                  type: 'bar',
                  data: this.array1
                }
              ]
            })
          })


      }



    }
  }

</script>

<style>
#myChart{
  margin: 0 auto 200px auto;

}
</style>
