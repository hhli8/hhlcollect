export default {
  path: '/web',
  component: resolve => { require(['@/views/web'], resolve) },
  children: [
    {
      path: '/',
      name: 'webLists',
      component: resolve => { require(['@/views/web/lists'], resolve) }
    },
    {
      path: 'keepalive',
      name: 'keepaliveHome',
      component: resolve => { require(['@/views/web/keepalive'], resolve) }
    },
    {
      path: 'keepaliveLists/:id',
      name: 'keepaliveLists',
      component: resolve => { require(['@/views/web/keepalive/list'], resolve) },
      meta: {
        keepAlive: true
      }
    },
    {
      path: 'keepaliveDetail',
      name: 'keepaliveDetail',
      component: resolve => { require(['@/views/web/keepalive/detail'], resolve) }
    },
    {
      path: 'getLocation',
      name: 'getLocation',
      component: resolve => { require(['@/views/web/location'], resolve) }
    },
    {
      path: 'elementUi',
      name: 'elementUi',
      component: resolve => { require(['@/views/web/element'], resolve) }
    },
    {
      path: 'betterScroll',
      name: 'betterScroll',
      component: resolve => { require(['@/views/web/betterScroll'], resolve) },
      meta: {
        keepAlive: true
      }
    },
    {
      path: 'betterScrollDetail',
      name: 'betterScrollDetail',
      component: resolve => { require(['@/views/web/betterScroll/detail'], resolve) }
    },
    {
      path: 'sku',
      name: 'sku',
      component: resolve => { require(['@/views/web/sku'], resolve) }
    },
    {
      path: 'arrSplice',
      name: 'arrSplice',
      component: resolve => { require(['@/views/web/Array/splice'], resolve) }
    },
    {
      path: 'iosRelative',
      name: 'iosRelative',
      component: resolve => { require(['@/views/web/ios'], resolve) }
    },
    {
      path: 'JavaScript_1',
      name: 'js1',
      component: resolve => { require(['@/views/web/javascript/js1'], resolve) }
    },
    {
      path: 'JavaScript_2',
      name: 'js2',
      component: resolve => { require(['@/views/web/javascript/js2'], resolve) }
    },
    {
      path: 'nextTick',
      name: 'nextTick',
      component: resolve => { require(['@/views/web/nextTick'], resolve) }
    },
    {
      path: 'es6',
      name: 'es6',
      component: resolve => { require(['@/views/web/es6'], resolve) }
    },
    {
      path: 'pageWatcher',
      name: 'PageWatcher',
      component: resolve => { require(['@/views/web/pageWatcher'], resolve) }
    },
    {
      path: 'event',
      name: 'event',
      component: resolve => { require(['@/views/web/event'], resolve) }
    },
    {
      path: 'css3',
      name: 'css3',
      component: resolve => { require(['@/views/web/css'], resolve) }
    }
  ]
}
