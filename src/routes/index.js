import Vue from 'vue'
import Router from 'vue-router'
import Web from './web'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => { require(['@/views'], resolve) }
    },
    Web,
    {
      path: '/faceMerge',
      name: 'faceMerge',
      component: resolve => { require(['@/views/mergeface'], resolve) }
    },
    {
      path: '/demo',
      name: 'faceMerge2',
      component: resolve => { require(['@/views/demo'], resolve) }
    }
  ]
})
