<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <keep-alive :exclude="excludeArr">
      <router-view v-if="$route.meta.keepAlive" class="View"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="View"></router-view>
    <!-- 加载弹层 -->
    <loading v-if="loadingStauts"></loading>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      loadingStauts: false
    }
  },
  computed: {
    excludeArr () {
      // console.log(this.$store.state.excludeArr)
      return this.$store.state.excludeArr
    }
  },
  created () {
    global.vbus.$on('loading_show', (status) => {
      this.loadingStauts = status
    })
  },
  methods: {
    //
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
