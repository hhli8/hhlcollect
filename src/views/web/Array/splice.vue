<template>
  <div class="container">
    <p class="sec">oldArr:{{arrStr}}</p>
    <p class="sec">newArr = arr.splice(1, 2, [88, 99], 10)</p>
    <p class="sec">result:</p>
    <p class="sec">newArr:{{JSON.stringify(newArr)}}</p>
    <p class="sec">oldArr:{{oldStr}}</p>
    <p class="sec title">与slice的区别</p>
    <p class="sec">slice不会修改原数组</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6],
      arrStr: '[1, 2, 3, 4, 5, 6]',
      newArr: [],
      oldStr: ''
    }
  },
  mounted () {
    this.newArr = this.arr.splice(1, 2, [88, 99], 10)
    this.oldStr = JSON.stringify(this.arr)
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  padding: 20px;
  min-height: 100vh;
  background: #F7F7F7;
  box-sizing: border-box;
  font-size: 32px;
  .sec {
    margin-bottom: 14px;
  }
  .title {
    color: #636363;
    font-size: 36px;
  }
}
</style>
