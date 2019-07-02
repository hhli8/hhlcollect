<template>
  <div>
    <keep-alive :exclude="excludeArr">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    excludeArr () {
      return this.$store.state.excludeArr
    }
  }
}
</script>

<style>
</style>
