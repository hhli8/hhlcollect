<template>
  <div class="container">
    <p class="f-title"></p>
    <div class="content">
      <pre><code>
      </code></pre>
      <div class="red"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemid: ''
    }
  },
  created () {
    //
  },
  mounted () {
    //
  },
  methods: {
    //
    // 开始渲染时间
    /*
     * 头部资源加载时间
     */
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  padding: 20px 10px;
  min-height: 100vh;
  background: #F7F7F7;
  box-sizing: border-box;
  font-size: 28px;
  color: #333;
  .f-title {
    color: #000;
    font-size: 36px;
    padding-bottom: 10px;
  }
  .content {
    padding-bottom: 20px;
    .red {
      color: red;
    }
  }
}
</style>
