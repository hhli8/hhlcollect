<template>
  <div>
    <div v-for="(item, index) in kinds" :key="index" style="height: 60px;" @click="toLists(item)">
      <span>品类{{index+1}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kinds: [
        { id: 111, type: 'normal' },
        { id: 222, type: 'special' }
      ]
    }
  },
  methods: {
    toLists (item) {
      this.$router.push({
        name: 'keepaliveLists',
        params: {
          id: item.id,
          type: item.type
        },
        query: {
          name: 'demo'
        }
      })
    }
  }
}
</script>

<style>
</style>
