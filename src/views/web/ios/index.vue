<template>
  <div class="container">
    <div class="section">
      <div class="qs">1、input的placeholder垂直居中问题</div>
      <div class="ans">a:使用line-height:normal处理</div>
    </div>
    <div class="section">
      <div class="qs">2、iphone X的，背景页面A，弹窗B，里面有输入框C，C聚焦后失焦，A上移的底部会有空白，造成B上的事件错位</div>
      <div class="ans">a:在input失焦时处理，给予A滚动到初始的位置即可，<br />document.documentElement.scrollTop/<br />document.body.scrollTop设置为聚焦前的初始位置即可</div>
    </div>
  </div>
</template>

<script>
export default {
  //
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
    word-break: break-all;
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
