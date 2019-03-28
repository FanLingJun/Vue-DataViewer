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
import VueRouter from 'vue-router'

Vue.use(echarts)
Vue.use(iView)
Vue.use(VueRouter)


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
