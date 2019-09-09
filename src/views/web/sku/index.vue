<template>
  <div class="container">
    33333
    <div>
      <helloy @setColor="color"></helloy>
    </div>
    <div>
      <muh-sku
        :goodlist="goods"
        :skulist="skus"
        :option="skuOption">
      </muh-sku>
    </div>
  </div>
</template>

<script>
import skuData from './skudata.js'
export default {
  name: '',
  components: {
    // sku
  },
  data () {
    return {
      // sku组件
      goods: [], // 商品列表
      skus: [], // sku列表
      skuOption: {} // 其他配置
    }
  },
  created () {
    setTimeout(() => {
      this.goods = skuData.goods
      this.skus = skuData.skus
      this.skuOption = {
        degood: {
          img: 'https://cbu01.alicdn.com/img/ibank/2018/420/661/8608166024_582723176.jpg',
          price: 6500, // 分
          id: '12asdqewasdad',
          none_sku: true // 是否sku商品
        }, // 默认显示数据*
        needInit: false, // 每次在弹窗里打开是否需要初始化
        stockflag: false, // 是否开启库存逻辑*
        structure: {
          name: 'pname',
          id: 'pid',
          children: 'values',
          cstructure: {
            name: 'vname',
            id: 'vid',
            pricekey: 'price',
            oripricekey: 'oripricekey'
          }
        }
      }
    }, 500)
  },
  mounted () {
    //
  },
  methods: {
    color (x) {
      console.log(x)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">

</style>
