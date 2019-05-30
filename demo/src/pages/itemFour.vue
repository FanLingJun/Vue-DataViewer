<template>
  <div>
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
        array2: [],
        array_name: []
      }
    },
    mounted() {
      this.initData('初始化数据成功!')
    },
    methods: {
      initData(msg) {

        var myChart = echarts.init(document.getElementById('myChart'))

        //fetch('/api/NumberData')
        fetch('/alldata')
          .then((response) => response.json())
          .then(json => {
            for (let i = 0;i <= 10000;i = i + 50)
            {
              this.array1.push(json[i].speed)
              this.array2.push(json[i].power)
              this.array_name.push(json[i].name)
            }
            //console.log("~~~~~~~")
            //console.log(this.array1)
            //console.log(this.array2)

            myChart.setOption({



              title: {
                text: '汽车速度&马力'
              },
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
                itemSize: 20,
                orient: 'vertical',
                top: 300,
                feature : {
                  dataView : {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                }
              },
              calculable : true,
              grid: {
                top: '12%',
                left: '1%',
                right: '10%',
                containLabel: true
              },
              xAxis: [
                {
                  type : 'category',
                  data : this.array_name
                }
              ],
              yAxis: [
                {
                  type : 'value',
                  name : '数值',
                  /*axisLabel: {
                    formatter: function (a) {
                      a = +a;
                      return isFinite(a)
                        ? echarts.format.addCommas(+a / 1000)
                        : '';
                    }
                  }*/

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
