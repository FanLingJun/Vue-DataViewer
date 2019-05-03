<template>

<div class="main">

  <div class="main1">
    <br>
    <p class="title">调研情况</p>
    <br>
    <h1>本次调研中的汽车总数：<span class="num0">19265</span>辆</h1>
    <br>
    <h1>平均价格：<span class="num0">28.86</span>万元</h1>
    <br>
    <h1>平均速度：<span class="num0">187.2</span>km/h</h1>
    <br>
    <h1>平均升功率：<span class="num0">57.75</span>kW/L</h1>
    <br>
    <h1>平均排量：<span class="num0">2.88</span>L</h1>
    <!--<br>
    <h1>平均整备重量：<span class="num0">14872</span>Kg</h1>-->
    <br><br>
    <h1>最贵的车：<span class="num1">Icona-Vulcano(跑车)</span>6680万元</h1>
    <br>
    <!--<h1>速度最快的车：<span class="num1">华晨金杯-海狮</span>1690km/h</h1>
    <br>-->
    <h1>最大排量：<span class="num1">迈凯伦-P1</span>3.5L</h1>
    <br>
    <h1>升功率最高的车：<span class="num1">科尼赛克-Agera</span>1415kW/L</h1>

    <!--<Button type="success" to="datasatistic" style="margin-top: 100px;width: 200px" long>
      详细分析情况</Button>-->

  </div>

</div>

</template>

<script>

export default {
  name: "itemZero",
  data() {
    return {
      msg: 'hello~'
    }
  }
}

</script>

<style>
.main {
  margin-top: -30px;
  margin-left: -120px;
  margin-right: -200px;
  width: 1300px;
  height: 800px;
  /*background: url("../assets/car2.jpg") no-repeat;*/
}

.main .main1 {
  height: 800px;
  background: rgba(255,255,255,0.6);
}

.title {
  font-size: 50px;
  font-weight: bold;
}
.num0{
  color: #FF3030
}
.num1{
  color: #CD5555
}

</style>
