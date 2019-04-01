// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

import iView from 'iview'
import 'iview/dist/styles/iview.css';
//引入主题
import 'echarts/theme/dark.js'
import 'echarts/theme/vintage.js'
import 'echarts/theme/macarons.js'
import 'echarts/theme/infographic.js'

import VueRouter from 'vue-router'
import woldCloud from 'echarts-wordcloud'


Vue.use(echarts)
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(woldCloud)

Vue.config.productionTip = false


Vue.prototype.changeData = function () {
  alert('执行成功');
};


Vue.prototype.Search = function (a,b,array){

    for (let i = 0;i < 3;i ++)
    {
      if (array[i][0] === a&&array[i][1] === b)
        return array[i][2];
    }

};


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
