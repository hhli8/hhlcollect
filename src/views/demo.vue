<template>
  <div class="box">
    demo
    <div v-show="show">
      <div class="bg" :class="styleAct?'act':''" @click="close"></div>
      <div class="popup" :class="styleAct?'act':''">
        显示文案<div>消失</div>
      </div>
    </div>
    
    <div @click="open">显示</div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      styleAct: false
    }
  },
  methods: {
    open () {
      this.show = true
      setTimeout(() => {
        this.styleAct = true
      }, 100)
    },
    close () {
      this.styleAct = false
      setTimeout(() => {
        this.show = false
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  .box {
    height: 100vh;
    position: relative;
    .bg {
      position: fixed;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .7);
      opacity: 0;
      transition: opacity linear .3s;
    }
    .bg.act {
      opacity: 1;
    }
    .popup {
      position: fixed;
      height: 200px;
      width: 400px;
      border: 1px solid red;
      background: red;
      left: 50%;
      top: 200px;
      margin-left: -200px;
      opacity: 0;
      transition: opacity linear .3s;
    }
    .popup.act {
      opacity: 1;
    }
  }
</style>
