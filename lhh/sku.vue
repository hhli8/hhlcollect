<template>
  <div class="sku-box">
    <div v-for="(item, index) in skuLists" :key="index">
      <p class="sku-name">{{item.kind}}</p>
      <div class="sku-arr">
        <span class="sku-i" v-for="(sitem, sindex) in item.arr" :key="sindex" :class="[item.default===sindex?'act':'', item.key]" @click="skuSelect($event, item, index, sindex)" :name="item.key">{{sitem}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from '@/utils/common'
export default {
  props: {
    skuLists: {
      type: [Array]
    },
    skuGoods: {
      type: [Array]
    }
  },
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.skuSetDisable()
    })
  },
  methods: {
    skuSelect(e, item, index, sindex) {
      // console.log(item, index, sindex)
      var has = Utils.hasClass(e.target, 'disable')
      if (has) return false
      this.skuLists[index].default = sindex
      this.$nextTick(() => {
        this.skuSetDisable()
      })
    },
    skuSetDisable() {
      var allSpan = document.querySelectorAll('.sku-box span')
      for (var i = 0, length = allSpan.length; i < length; i++) {
        Utils.removeClass(allSpan[i], 'disable')
      }
      // 清除置灰span
      const filter = []
      const l = this.skuLists.length
      for (let i = 0; i < l; i++) {
        filter[i] = { key: this.skuLists[i].key }
        for (let j = 0; j < l; j++) {
          if (i !== j) filter[i][this.skuLists[j].key] = this.skuLists[j].arr[this.skuLists[j].default]
        }
      }
      // console.log(filter) // 数据格式转化[{key:'key3'}]
      // 筛选获取满足条件的结果列表
      if (filter.length < 2) {
        //
      } else {
        filter.forEach((item) => {
          var goods = []
          var count = 0
          for (var key in item) {
            if (key !== 'key') {
              if (count < 1) {
                goods = this.skuOperate(this.skuGoods, item[key], key)
              } else {
                goods = this.skuOperate(goods, item[key], key)
              }
              count++
            }
          }
          // console.log(goods)
          var spans = document.querySelectorAll(`.sku-box .${item.key}`)
          var set = new Set()
          goods.forEach((good) => {
            set.add(good.pvName[item.key])
          })
          if (set.size !== spans.length) {
            var arr = [...set]
            spans.forEach((span) => {
              var has = false
              arr.forEach((val) => {
                if (val === span.innerText) has = true
              })
              if (!has) Utils.addClass(span, 'disable')
            })
          }
        })
      }
    },
    skuOperate(arr, val, skuval) {
      var narr = []
      // console.log(this.skuGoods, val, skuval)
      this.data[skuval] = val
      arr.forEach((good) => {
        if (good.pvName[skuval] === val) {
          narr.push(good)
        }
      })
      // console.log(narr)
      this.$emit('model', narr)
      this.$emit('modelData', this.data)
      return narr
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  .sku-box {
    .sku-arr {
      height: auto;
    }
    .sku-i {
      display: inline-block;
      background: #fff;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      font-weight: 500;
      color: #606266;
      cursor: pointer;
      -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      margin-right: 16px;
      font-size: 12px;
      padding: 6px 15px;
      border-radius: 3px;
      margin-bottom: 6px;
    }
    .sku-i.act {
      color: #fff;
      background-color: #409EFF;
      border-color: #409EFF;
      /*-webkit-box-shadow: -1px 0 0 0 #409EFF;
      box-shadow: -1px 0 0 0 #409EFF;*/
    }
    .sku-i.disable {
      color: #bcbec2;
      background-color: #f4f4f5;
      border-color: #e9e9eb;
    }
  }
</style>
