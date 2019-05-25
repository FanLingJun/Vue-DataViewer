<!--
<template>
  <div class="wrapper">
    &lt;!&ndash;<div id="myChart" style="width: 1500px;height: 1000px"></div>&ndash;&gt;
    &lt;!&ndash;<div id="Chart" style="width: 800px;height: 600px"></div>&ndash;&gt;
  </div>
</template>

<script>

  let echarts = require('echarts')

  export default {
    name: "test",
    data() {
      return {
        name: 'test!',
        temp: [],
        categories: [
          {
            "name": "HTMLElement",
            "keyword": {},
            "base": "HTMLElement"
          },
          {
            "name": "WebGL",
            "keyword": {},
            "base": "WebGLRenderingContext"
          },
          {
            "name": "SVG",
            "keyword": {},
            "base": "SVGElement"
          },
          {
            "name": "CSS",
            "keyword": {},
            "base": "CSSRule"
          },
          {
            "name": "Other",
            "keyword": {}
          }
        ],
        data: [
          {
            "name": "鲁迅",
            "value": 40,
            "category": 4
          },
          ],
        links: [
          ],
        nameList: [],
        comment_num: [],
        score: []

      }
    },
    mounted() {

      this.initData('初始化数据成功');
    },
    methods: {
      initData(msg) {

        var Chart = echarts.init(document.getElementById("Chart"))


        fetch('/api/luxunData')
          .then((response) => response.json())
          .then(json => {
            var k = 0
            for (let i = 0; i < 905; i++) {

              if (json.data[i].score !== 0&&json.data[i].comment_num > 300) {

                this.nameList[k] = json.data[i].name;
                this.comment_num[k] = json.data[i].comment_num;
                this.score[k] = json.data[i].score;
                k++;
              }

            }
            console.log(this.nameList)
            Chart.setOption({

              title: {
                text: '作品评论数/豆瓣评分'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true
                  }
                }
              },
              toolbox: {
                show: true,
                itemSize: 20,
                orient: 'vertical',
                top: 300,
                feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                }
              },
              calculable: true,
              grid: {
                top: '12%',
                left: '1%',
                right: '10%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  data: this.nameList
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  name: '比值',
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
              series: [
                {
                  name: '评论数',
                  type: 'bar',
                  data: this.comment_num
                },
                {
                  name: '评分',
                  type: 'bar',
                  data: this.score
                }
              ]


            })


          })
      },



    }
  }
</script>

<style scoped lang="css">
.wrapper {
  display: flex;
  flex-direction:row;
}

</style>
-->
