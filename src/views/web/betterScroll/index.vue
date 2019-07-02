<template>
  <div class="container">
    <div class="des">文档：<a href="https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/">https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/</a></div>
    <div class="section">
      <div class="qs">1、横向滚动设置后，下一页返回，滚动经常会失效的处理</div>
      <div class="ans">a:原因是DOM 结构发送变化的时候并没有重新计算 better-scroll，this.reScroll = new BScroll()<br />this.reScroll.refresh()<br />scroll部分为下面的item的宽总和，用flex1设置或者计算出总宽</div>
      <div class="demo scroll-container flexBox" ref="scroll1">
        <div class="scroll flex1">
          <div v-for="(item, index) in lists" :key="index" class="item" @click="detail(item)">
            <div class="img">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      reScroll: ''
    }
  },
  mounted () {
    if (this.$refs.scroll1) {
      this.reScroll = new BScroll(this.$refs.scroll1, {
        click: true,
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        bounce: true,
        probeType: 3
      })
      /* this.reScroll.on('scroll', (pos) => {
        // console.log(pos)
      }) */
    }
  },
  activated () {
    this.reScroll.refresh()
  },
  methods: {
    detail () {
      this.$router.push({
        name: 'betterScrollDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  padding: 20px 0;
  min-height: 100vh;
  box-sizing: border-box;
  background: #F7F7F7;
  .des {
    font-size: 34px;
    color: #636363;
  }
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
    .demo {
      margin-top: 10px;
    }
  }
}
.scroll-container {
  overflow: hidden;
  .scroll {
    /*width: 1000px;*/
/*    width: 500px;*/
    white-space: nowrap;
    .item {
      margin-right: 16px;
      display: inline-block;
      .img {
        width: 150px;
        height: 150px;
        text-align: center;
        line-height: 150px;
        box-sizing: border-box;
        background: green;
        color: #fff;
      }
    }
    .item:last-child {
      margin-right: 0;
    }
  }
}
</style>
