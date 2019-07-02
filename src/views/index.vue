<template>
  <div class="Home">
    <div class="modules flexBox">
      <div v-for="(item, index) in modules" :key="index" class="item-module">
        <router-link :to="{path: '/' + item.path }">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modules: [
        { name: 'Qs', id: '', path: 'web' },
        { name: 'Scenery', id: '', path: 'travel' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
