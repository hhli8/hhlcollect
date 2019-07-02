<template>
  <div>
    <div class="show">{{adress}}</div>
    <div class="btn-box"><span class="btn" @click="getAdr">获取定位</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adress: ''
    }
  },
  methods: {
    getAdr (fun) {
      var that = this
      global.vbus.$emit('loading_show', true)
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'http://api.map.baidu.com/getscript?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ&services=&t=20190123111209'
      var head = document.getElementsByTagName('head').item(0)
      head.appendChild(script)
      script.onload = () => {
        var geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            var point = new BMap.Point(r.point.lng, r.point.lat)
            var myGeo = new BMap.Geocoder()
            myGeo.getLocation(point, function(result){      
              if (result){
                global.vbus.$emit('loading_show', false)
                // console.log(result)
                var adr = result.addressComponents
                that.adress = adr.province + adr.city + adr.district + adr.street
                // 定位不准确办法：
                if (fun.constructor === Function) {
                  fun(result)
                }
              }      
            })
          }
          else {
            global.vbus.$emit('loading_show', false)
            // alert('failed'+this.getStatus())
          }        
        })
      }
      // http://api.map.baidu.com/api?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ
      // http://api.map.baidu.com/getscript?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ&services=&t=20190123111209
      /* navigator.geolocation.getCurrentPosition((res) => {
        console.log(res)
        // 目前的H5获取定位，都需要HTTPS的支持。而微信的api则需要公众号才行，各有优缺点。
      }) */
    }
  }
}
</script>

<style scoped="scoped">
  .show {
    height: 120px;
  }
  .btn-box {
    text-align: center;
    margin-top: 20px;
  }
  .btn {
    display: inline-block;
    background: red;
    padding: 16px;
    width: 180px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 28px;
    border-radius: 10px;
  }
</style>
