<template>
  <div class="container">
    <div class="section">
      <div class="qs">1、el-table绑定的 :data="tabledata" 修改时，数据已改变，显示未改变问题</div>
      <div class="ans">a:使用el-table key设置，每次修改时改变key，强制新旧dom树刷新，不过会有页面滚动bug。最终使用this.$set(this.tabledata, index, response.data)，数组这么操作，json按属性操作</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  padding: 20px 0;
  min-height: 100vh;
  background: #F7F7F7;
  box-sizing: border-box;
  .section {
    padding: 15px;
    margin-bottom: 15px;
    background: #fff;
    font-size: 30px;
    line-height: 32px;
    .qs {
      color: #333;
      margin-bottom: 8px;
    }
    .ans {
      color: #939393;
    }
  }
}
</style>
