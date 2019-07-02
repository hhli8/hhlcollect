<template>
  <div class="SKU">
    <div v-for="(item, index) in skuLists" :key="index">
      <p class="sku-name">{{item.name}}</p>
      <div class="sku-arr">
        <span class="sku-i" v-for="(sitem, sindex) in item.children" :key="sindex" :class="[item.default===sindex?'act':'', item.key]" @click="skuSelect($event, item, index, sindex)" :name="item.key">{{sitem.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skuLists: {
      type: [Array]
    },
    skuGoods: {
      type: [Array]
    }
  },
  data () {
    return {
      //
    }
  },
  created () {
    //
  },
  methods: {
    skuSelect () {
      //
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.SKU {
  background: #fff;
  margin-top: 20px;
  .sku-name {
    margin-bottom: 16px;
  }
  .sku-arr {
    .sku-i {
      display: inline-block;
      background: #BDBDBD;
      color: #fff;
      margin-right: 12px;
      margin-bottom: 15px;
      padding: 8px;
      border-radius: 10px;
    }
    .sku-i.act {
      background: #F54B78;
    }
    .sku-i {
      background: #BDBDBD;
    }
  }
}
</style>
