import Vue from 'vue'
import Router from 'vue-router'
import Lqy from './views/lqy_index'
import record from './views/lqy_record'
import exchange from './views/lqy_exchange'
// import lucky from './views/luckywheel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'lqy',
      component: Lqy
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange
    }
    // {
    //   path: '/lucky',
    //   name: 'lucky',
    //   component: lucky
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
