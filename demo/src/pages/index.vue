<template>

<div id="main" :style="{ height: '1200px'}">
  <Carousel autoplay v-model="value" loop>
    <CarouselItem>
      <div class="wrapper">
        <img height="580px" width="100%" src="https://www.mercedes-benz.com.cn/content/dam/mb-cn/homepage/1440600cls.jpg">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="wrapper">
        <img height="580px" width="100%" src="http://a4.qpic.cn/psb?/V10GZ44l3v5uHj/iJWjMf27GGEJk4ZixNABKp*NlI9mkck22ZFOQYLHoE4!/b/dL8AAAAAAAAA&ek=1&kp=1&pt=0&bo=AAWKAgAFigIRADc!&tl=1&tm=1553954400&sce=0-12-12&rf=viewer_311">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="wrapper">
        <img height="580px" width="100%" src="http://a4.qpic.cn/psb?/V10GZ44l3v5uHj/dRhceo0Sb*9xnz3ggdkdfzBxCNPSYMWM8yyQzFXpNPs!/b/dL8AAAAAAAAA&ek=1&kp=1&pt=0&bo=AAWgAgAFoAIRADc!&tl=1&vuin=675546066&tm=1553954400&sce=50-1-1&rf=viewer_311">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="wrapper">
        <img height="580px" width="100%" src="http://a4.qpic.cn/psb?/V10GZ44l3v5uHj/uwO1Kebj*xghFFt7R0zJEmY8w8OMWSwF*PlIG*pppuE!/b/dL8AAAAAAAAA&ek=1&kp=1&pt=0&bo=AAVWAwAFVgMRADc!&tl=1&vuin=675546066&tm=1553954400&sce=50-1-1&rf=viewer_311">
      </div>
    </CarouselItem>
  </Carousel>
  <div id="myChart"></div>

  <div class="center" style="margin-top: -50px;margin-bottom: 50px">
    <h1 style="font-size: 45px">欢迎来到电商数据分析系统（汽车）</h1>
    <br>
    <Button type="error" to="statistic" style="width:200px" long ghost>
      进入系统
    </Button>
  </div>
</div>

</template>

<script>

  let echarts = require('echarts');

  export default{
    name: "index",
    data() {
      return {
        msg:'test!',
        Object: [],
        nameList: [],
        valueList: [],
        min: 346,
        max: 5000,
        value: 0,
        data:[]
      }
    },
    mounted() {
      this.initData('初始化数据成功！');
    },
    methods:{
      initData(msg) {

        var myChart = echarts.init(document.getElementById('myChart'),'infographic');

        var maskImage = new Image();
        //重点：云彩图片的base64码
        maskImage.src = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNTQ4LjE3NiA1NDguMTc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NDguMTc2IDU0OC4xNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNTI0LjE4MywyOTcuMDY1Yy0xNS45ODUtMTkuODkzLTM2LjI2NS0zMi42OTEtNjAuODE1LTM4LjM5OWM3LjgxLTExLjk5MywxMS43MDQtMjUuMTI2LDExLjcwNC0zOS4zOTkgICBjMC0yMC4xNzctNy4xMzktMzcuNDAxLTIxLjQwOS01MS42NzhjLTE0LjI3My0xNC4yNzItMzEuNDk4LTIxLjQxMS01MS42NzUtMjEuNDExYy0xOC4yNzEsMC0zNC4wNzEsNS45MDEtNDcuMzksMTcuNzAzICAgYy0xMS4yMjUtMjcuMDI4LTI5LjA3NS00OC45MTctNTMuNTI5LTY1LjY2N2MtMjQuNDYtMTYuNzQ2LTUxLjcyOC0yNS4xMjUtODEuODAyLTI1LjEyNWMtNDAuMzQ5LDAtNzQuODAyLDE0LjI3OS0xMDMuMzUzLDQyLjgzICAgYy0yOC41NTMsMjguNTQ0LTQyLjgyNSw2Mi45OTktNDIuODI1LDEwMy4zNTFjMCwyLjg1NiwwLjE5MSw2Ljk0NSwwLjU3MSwxMi4yNzVjLTIyLjA3OCwxMC4yNzktMzkuODc2LDI1LjgzOC01My4zODksNDYuNjg2ICAgQzYuNzU5LDI5OS4wNjcsMCwzMjIuMDU1LDAsMzQ3LjE4YzAsMzUuMjExLDEyLjUxNyw2NS4zMzMsMzcuNTQ0LDkwLjM1OWMyNS4wMjgsMjUuMDMzLDU1LjE1LDM3LjU0OCw5MC4zNjIsMzcuNTQ4aDMxMC42MzYgICBjMzAuMjU5LDAsNTYuMDk2LTEwLjcxNSw3Ny41MTItMzIuMTIxYzIxLjQxMy0yMS40MTIsMzIuMTIxLTQ3LjI0OSwzMi4xMjEtNzcuNTE1ICAgQzU0OC4xNzIsMzM5Ljc1Nyw1NDAuMTc0LDMxNi45NTIsNTI0LjE4MywyOTcuMDY1eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';

        fetch('/wordcloudData')
          .then(response => response.json())
          .then(json => {
            this.Object = json
            //console.log(json.name)
            this.nameList = this.Object.index;
            this.valueList = this.Object.data;
            for (let i = 0; i < 574;i++)
            {
              this.data.push({
                name: this.nameList[i],
                value: this.valueList[i],
                itemStyle: this.createRandomItemStyle()
              });
            }
            //console.log(this.nameList)
            //console.log(this.valueList)
            //console.log(this.data)

            myChart.setOption({
              title: {
                text: ' ',
              },
              tooltip: {
                show: true
              },
              series: [{
                name: 'Car',
                type: 'wordCloud',
                size: ['100%', '100%'],
                textRotation : [0, 45, 90, -45],
                maskImage: maskImage,
                textPadding: 0,
                autoSize: {
                  enable: true,
                  minSize: 24
                },
                data:this.data
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
    }
  }

</script>

<style scoped lang="css">
.wrapper {
  background-size: 100%;
  width: 100%;
  height: 800px;
}

#myChart {
  height: 800px;
  margin-top: -350px;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: #e0e6eb;
}

svg {
  width: 100%;
  height: 100%;
}
svg g {
  mix-blend-mode: lighten;
}
svg polygon {
  stroke: none;
  fill: white;
}

</style>
