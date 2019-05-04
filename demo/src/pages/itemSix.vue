<template>
  <div class="wrapper">
    <div class="left">
      <div id="myChart" style="width: 800px;height: 600px"></div>
    </div>
    <div class="right">
      <Input search enter-button="Search" v-model="CarName" @on-search="SearchCar"/>
      <Scroll class="scroll">
        <RadioGroup v-model="CarType" @on-change="ChangeData" class="radio" vertical>
          <Radio v-for="(item, index) in nameList" :label="index" :key="index" style="margin: 8px 0">
            {{ item }}
          </Radio>
        </RadioGroup>
      </Scroll>
    </div>

  </div>
</template>

<script>

  let echarts = require('echarts')

  export default {
    name: "itemSix",
    data() {
      return {
        name: 'itemSix!',
        CarName: '一汽奥迪A3 Sportback',
        CarType: '1',
        nameList: [],
        yearData: [],
        saleData: [],
        array: [],
        data: [],
      }
    },
    mounted() {
      //this.init();
      this.initData('初始化数据成功');
    },
    methods: {
      initData(msg) {
        var myChart = echarts.init(document.getElementById("myChart"))
        fetch('/saleNumber')
          .then((response) => response.json())
          .then(json =>  {
            var i = 0;
            //console.log(json[i])
            this.array = [];
            this.yearData = [];
            this.saleData = [];
            this.array = json[i];
            //console.log(this.array[i].salesDate)

            for (let i = 0;i < json.length;i++)
            {
              if (json[i].length != 0&&json[i][0].name != null)
              {
                //console.log(json[i][0].name);
                this.nameList.push(json[i][0].name);
              }
            }

            for (let i = 0;i < this.array.length;i++)
            {
              this.yearData.push(this.array[i].salesDate);
              this.saleData.push(this.array[i].salesNum);
            }
            myChart.setOption({
              title: {
                text: this.nameList[this.CarType] + '过去几个月的销量'
              },
              xAxis: {
                type: 'category',
                data: this.yearData
              },
              color:['#3398DB'],
              yAxis: {
                type: 'value'
              },
              series: [{
                data: this.saleData,
                type: 'line'
              }]
            })
          })

      },

      ChangeData() {
        var myChart = echarts.init(document.getElementById("myChart"))
        fetch('/saleNumber')
          .then((response) => response.json())
          .then(json =>  {
            var i = this.CarType - 1;
            //console.log(json[i])
            this.array = [];
            this.yearData = [];
            this.saleData = [];
            this.array = json[i];
            //console.log(this.array[i].salesDate)

            for (let i = 0;i < this.array.length;i++)
            {
              this.yearData.push(this.array[i].salesDate);
              this.saleData.push(this.array[i].salesNum);
            }
            myChart.setOption({
              title: {
                text: this.nameList[this.CarType] + '过去几个月的销量'
              },
              xAxis: {
                type: 'category',
                data: this.yearData
              },
              color:['#3398DB'],
              yAxis: {
                type: 'value'
              },
              series: [{
                data: this.saleData,
                type: 'line'
              }]
            })



          })

      },

      SearchCar() {
        for (let i = 0;i < this.nameList.length;i++)
        {
          if (this.nameList[i] == this.CarName)
          {
            this.CarType = i;
            this.ChangeData();
          }
        }
      }
    }
  }
</script>

<style scoped lang="css">
  .wrapper {
    display: flex;
    flex-direction:row;
  }
  .right {
    margin-top: 80px;
  }
  .radio {
    margin-top: 50px;
  }
  .scroll{
    margin-top:30px;
  }

</style>
