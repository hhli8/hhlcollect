<template>
  <div class="container">
    <p class="title">sku使用说明：</p>
    <div>skulists为sku列表集合，skuGoods为商品集合</div>
    <sku :skuLists="skulists" :skuGoods="goods"></sku>
  </div>
</template>

<script>
import sku from './sku'
export default {
  components: {
    sku
  },
  data () {
    return {
      skulists: [],
      goods: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.skulists = [
        { name: '颜色', type: 'color', id: '', children: [
          { name: '银白色', type: 'silver', id: '' },
          { name: '红色', type: 'red', id: '' },
          { name: '白色', type: 'white', id: '' }
        ] },
        { name: '尺寸', type: 'size', id: '', children: [
          { name: '24', type: '', id: '' },
          { name: '128', type: '', id: '' },
          { name: '256', type: '', id: '' }
        ] },
        { name: '来源', type: 'source', id: '', children: [
          { name: '天猫', type: '', id: '' },
          { name: '京东', type: '', id: '' },
          { name: '小象', type: '', id: '' }
        ] }
      ]
      this.goods = [
        { color: '银白色', size: '24', source: '天猫' },
        { color: '银白色', size: '128', source: '天猫' },
        { color: '银白色', size: '256', source: '天猫' },
        { color: '银白色', size: '24', source: '京东' },
        { color: '银白色', size: '128', source: '京东' },
        { color: '银白色', size: '256', source: '京东' },
        { color: '银白色', size: '24', source: '小象' },
        { color: '银白色', size: '128', source: '小象' },
        { color: '银白色', size: '256', source: '小象' },
        //
        { color: '红色', size: '24', source: '天猫' },
        { color: '红色', size: '128', source: '天猫' },
        { color: '红色', size: '256', source: '天猫' },
        { color: '红色', size: '24', source: '京东' },
        { color: '红色', size: '128', source: '京东' },
        { color: '红色', size: '256', source: '京东' },
        { color: '红色', size: '24', source: '小象' },
        { color: '红色', size: '128', source: '小象' },
        { color: '红色', size: '256', source: '小象' },
        //
        { color: '白色', size: '24', source: '天猫' },
        { color: '白色', size: '128', source: '天猫' },
        { color: '白色', size: '256', source: '天猫' },
        { color: '白色', size: '24', source: '京东' },
        { color: '白色', size: '128', source: '京东' },
        { color: '白色', size: '256', source: '京东' },
        { color: '白色', size: '24', source: '小象' },
        { color: '白色', size: '128', source: '小象' },
        { color: '白色', size: '256', source: '小象' }
      ]
    }, 200)
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
  .title {
    font-size: 34px;
    margin-bottom: 20px;
  }
  .des {
    color: #636363;
    margin-bottom: 10px;
  }
}
</style>
