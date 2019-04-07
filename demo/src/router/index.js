import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Test from '@/pages/test'
//import Test from '@/pages/siglepage/test'
import Statistic from '@/group/statistic'
import itemOne from '@/pages/itemOne'
import itemTwo from '@/pages/itemTwo'
import itemThree from '@/pages/itemThree'
import itemFour from '@/pages/itemFour'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: {name: 'index'}
    },
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
    {
      path: '/statistic',
      component: Statistic,
      redirect: {
        name: 'itemOne'
      },
      children: [
        {
          path: '',
          redirect: 'itemOne'
        },
        {
          path: 'itemOne',
          component: itemOne
        },
        {
          path: 'itemTwo',
          component: itemTwo
        },
        {
          path: 'itemThree',
          component: itemThree
        },
        {
          path: 'itemFour',
          component: itemFour
        },
      ]
    },
  ]
});
export default router
