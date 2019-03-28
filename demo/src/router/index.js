import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Test from '@/pages/test'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    /*{
      path: ' ',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
  ]
});
export default router
