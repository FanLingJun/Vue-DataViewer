import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Test from '@/pages/test'

import Statistic from '@/group/statistic'
import itemZero from '@/pages/itemZero'
import itemOne from '@/pages/itemOne'
import itemTwo from '@/pages/itemTwo'
import itemThree from '@/pages/itemThree'
import itemFour from '@/pages/itemFour'
import itemSix from '@/pages/itemSix'
import datastatistic from '@/pages/datastatistic'


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
        name: 'itemZero'
      },
      children: [
        {
          path: '',
          redirect: 'itemZero'
        },
        {
          path: 'itemZero',
          component: itemZero
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
        {
          path: 'datastatistic',
          component: datastatistic
        },
        {
          path: 'itemSix',
          component: itemSix
        },
      ]
    },
  ]
});
export default router
