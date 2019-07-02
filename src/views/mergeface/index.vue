<template>
  <div>
    <div class="img-box flexBox flexBetween">
      <div class="item" :class="photo?'no-border':''">
        <img :src="photo" v-show="photo"/>
        <input type="file" @change="chosePhoto($event)" accept="image/*" capture="camera"/>
        <span class="text">选择照片</span>
      </div>
      <div class="item no-border">
        <img ref="img1" src="./img/demo-pic23.jpg" v-show="sexact===0"/>
        <img ref="img2" src="./img/demo-pic111.jpg" v-show="sexact===1"/>
      </div>
    </div>
    <div class="sex">
      <span v-for="(item, index) in sex" :key="index" :class="index===sexact?'act':''" @click="chose(index)">{{item}}</span>
      <!--<span class="act">男</span><span>女</span>-->
    </div>
    <div class="btn-box">
      <button class="merge" @click="merge">融合</button>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      sex: ['男生', '女生'],
      sexact: 0,
      photo: '',
      template: '',
      token: ''
    }
  },
  created () {
    // console.log(Axios)
    this.getToken()
  },
  mounted () {
    this.getbase64(this.$refs.img1, (res) => {
      this.template = res
    })
  },
  methods: {
    getToken () {
      // key czNS7Nj4GseO0bcmRk6rvBOzesspT2C4  appid T5r2icQO24HGZa3oAf8kspWG
      // token 25.6b9f39b0cb8e87c8eeafcbbf0d731fc9.315360000.1875945597.282335-16528025
      /* Axios.get('https://aip.baidubce.com/oauth/2.0/token', {
        params: {
          'grant_type': 'client_credentials',
          'client_id': 'T5r2icQO24HGZa3oAf8kspWG',
          'client_secret': 'czNS7Nj4GseO0bcmRk6rvBOzesspT2C4'
        }
      }).then((res) => {
        console.log(res)
      }) */
      Axios.get('http://127.0.0.1:3001/baidu/token', {}).then((res) => {
        let data = res.data
        this.token = data.data
      })
    },
    getbase64 (target, fun) {
      var img = document.createElement('img')
      img.onload = function() {
        var canvas = document.createElement('canvas')
        let w = img.width
        let h = img.height
        let scale = w / h
        if (w > 100) {
          w = 100
          h = w / scale
        }
        canvas.width = w
        canvas.height = h
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, w, h)
        fun(canvas.toDataURL('image/png', 0.8))
      } 
      img.src = target.src
    },
    merge () {
      let query = {
        image_template:{
          image: this.template,
          image_type: 'BASE64',
          quality_control: 'NONE'
        },
        image_target: {
          image: this.photo,
          image_type: 'BASE64',
          quality_control: 'NONE'
        },
        merge_degree: 'HIGH'
      }
      Axios.post('http://127.0.0.1:3001/baidu/merge', query, {
        headers: {
          token: this.token
        }
      }).then(() => {
        // console.log(res)
      })
      /* Axios.post('https://aip.baidubce.com/rest/2.0/face/v1/merge?access_token=24.f9ba9c5341b67688ab4added8bc91dec.2592000.1485570332.282335-8574074', {
        image_template:{
          image: this.template,
          image_type: 'BASE64',
          quality_control: 'NONE'
        },
        image_target: {
          image: this.photo,
          image_type: 'BASE64',
          quality_control: 'NONE'
        },
        merge_degree: 'HIGH'
      }).then((res) => {
        console.log(res)
      }) */
    },
    merge2 () {
      if (!this.photo) {
        alert('请添加照片')
        return
      }
      let data = {
        api_key: 'y6Ai5E7PjGQkUiR600-7vQFycf8sE5ey',
        api_secret: 'x5OCkS_giIm0_oKqHUdIRRvHYRbp3Dg7',
        template_base64: this.template,
        merge_base64: this.photo
      }
      Axios.post('https://api-cn.faceplusplus.com/imagepp/v1/mergeface', {
        data: data
      }, {
        headers: {
          'Content-Type':'application/json;charset=UTF-8'
          // 'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(() => {
        // console.log(res)
      })
    },
    chosePhoto (e) {
      var that = this
      var ready = new FileReader()
      ready.readAsDataURL(e.target.files[0])
      ready.onload = function() {
        var img = document.createElement('img')
        img.onload = function() {
          var canvas = document.createElement('canvas')
          let w = img.width
          let h = img.height
          let scale = w / h
          if (w > 100) {
            w = 100
            h = w / scale
          }
          canvas.width = w
          canvas.height = h
          var ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, w, h)
          that.photo = canvas.toDataURL('image/png', 0.8)
          // that.imgsrc = window.URL.createObjectURL(e.target.files[0])
          // console.log(this.photo)
          // fun(canvas.toDataURL('image/png', 0.8))
        } 
        img.src = this.result
      }
    },
    chose (index) {
      this.sexact = index
      let target = index === 0 ? this.$refs.img1 : this.$refs.img2
      this.getbase64(target, (res) => {
        this.template = res
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
