<template>
  <div>
    <div class="lists-box">
      <div v-for="(item, index) in lists" :key="index" class="item">
        <router-link :to="{path: '/web/' + item.path }">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        { name: 'keepalive处理缓存问题案例', id: 10001, path: 'keepalive' },
        { name: '百度地图设置定位', id: 10002, path: 'getLocation' },
        { name: 'element-ui相关', id: 10003, path: 'elementUi' },
        { name: 'better-scroll', id: 10004, path: 'betterScroll' },
        { name: 'sku', id: 10005, path: 'sku' },
        { name: 'arrSplice', id: 10006, path: 'arrSplice' },
        { name: 'IOS相关兼容样式等', id: 10007, path: 'iosRelative' },
        { name: 'js解析机制', id: 10008, path: 'JavaScript_1' },
        { name: 'js运行机制', id: 10009, path: 'JavaScript_2' },
        { name: 'vue的nextTick机制', id: 10010, path: 'nextTick' },
        { name: 'es6', id: 10011, path: 'es6' },
        { name: '页面性能监控', id: 10012, path: 'pageWatcher' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.lists-box {
  padding: 20px;
  .item {
    height: 40px;
    line-height: 40px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #BDBDBD;
    font-size: 26px;
  }
}
</style>
