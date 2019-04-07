<template>

  <!--<div>
    <div id="dowebok">
      <div class="section section1">
        <br>
        <h3>本次调研中汽车总数:"19265"</h3>
        <p>平均价格：28.86万元<br>平均速度：187.2Km/h<br>平均升功率：57.75<br>平均排量：2.88L<br>平均整备重量：1487<br></p>
      </div>
      <div class="section section2">
        <h3>汽车之最：</h3>
        <br><br><br>
        <p>最贵的车：6680万元 Icona-Vulcano(跑车)<br>速度最快的车：160km/h 中欧-尊适<br>最大排量：3.5L 迈凯伦-P1<br>升功率最高的车：1415 科尼赛克-Agera</p>
      </div>
    </div>
  </div>
-->
</template>

<script>


  /*import '@/assets/js/jquery-1.8.3.min'
  import '@/assets/js/jquery.fullPage'
  import '@/assets/js/jquery.easing.min'
*/
  export default {
    name: "test",
    data() {
      return {
        name: 'test!',
        price: 'TEST',
        data: []
      }
    },
    mounted() {
      this.initData('初始化数据成功');
    },
    methods: {

      initData(msg) {
      }
    }
  }

  /*$(function(){
    $('#dowebok').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
      afterLoad: function(anchorLink, index){
        if(index == 2){
          //alert('222');
          $('.section2').find('p').delay(500).animate({
            left: '0'
          }, 1500, 'easeOutExpo');
        }
        if(index == 3){
          //alert('333');
          $('.section3').find('p').delay(500).animate({
            bottom: '0'
          }, 1500, 'easeOutExpo');
        }
        if(index == 4){
          //alert('444');
          $('.section4').find('p').fadeIn(2000);
        }
      },
      onLeave: function(index, direction){
        if(index == '2'){
          //alert('2222');
          $('.section2').find('p').delay(500).animate({
            left: '-120%'
          }, 1500, 'easeOutExpo');
        }
        if(index == '3'){
          //alert('3333');
          $('.section3').find('p').delay(500).animate({
            bottom: '-120%'
          }, 1500, 'easeOutExpo');
        }
        if(index == '4'){
          //alert('4444');
          $('.section4').find('p').fadeOut(2000);
        }
      }
    });
  });*/

</script>

<style scoped lang="css">

  /*@import "siglepage/siglepage.css";*/
  /*.section { text-align: center; font: 50px "Microsoft Yahei"; color: #fff;}
  .section2 p { position: relative; left: -120%;}
  .section3 p { position: relative; bottom: -120%;}
  .section4 p { display: none;}
*/
</style>
