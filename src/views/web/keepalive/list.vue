<template>
  <div>
    <div>{{inputV}}</div>
    <div>
      <div class="item" v-for="(item, index) in lists" :key="index" @click="detail">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keepliveList',
  data () {
    return {
      inputV: '',
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  },
  beforeRouteLeave (to, from, next) {
    // 离开时若是去上一级页面，则清除缓存
    to.name === 'keepaliveHome' && this.$store.commit('addExcludeArr', 'keepliveList')
    next()
  },
  activated () {
    this.$store.commit('removeExcludeArr', 'keepliveList') // 保留缓存
  },
  created () {
    // console.log(this.$route.params)
    this.inputV = JSON.stringify(this.$route.params) + JSON.stringify(this.$route.query)
  },
  methods: {
    detail () {
      this.$router.push({
        name: 'keepaliveDetail'
      })
    }
  }
}
</script>

<style scoped="scoped">
  .item {
    height: 40px;
    line-height: 40px;
    background: #008CFF;
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
  }
</style>
