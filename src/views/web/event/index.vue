<template>
  <div class="container">
    <div class="section">
      <div class="section-title">ProgressEvent</div>
      <div class="sec-video">
        <video webkit-playsinline="webkit-playsinline" playsinline="playsinline" ref="video" :src="videoUrl" id="videoPlayer" preload="none" :poster="videoImg">
          <!--controls-->
          <source type="video/mp4">
          <p class="vjs-no-js"> To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a> </p>
        </video>
        <div class="start" @click="onToggleVideo">播放</div>
      </div>
      <div class="sec-img">
        <img  src="https://img.alicdn.com/imgextra/i3/2271249322/O1CN01WOlOuy2IjWfeaedIE_!!2271249322.jpg_600x600.jpg" alt="" />
      </div>
    </div>
    <div class="section">
      <div class="section-title">页面加载进度监听</div>
      <div class="sec-2">
        <div class="loading" v-show="loading">
          <div class="pic">加载中......</div>
        </div>
        <img src="http://pic29.nipic.com/20130514/12477194_083818249176_2.jpg" alt="">
        <img src="http://pic37.nipic.com/20140115/9448607_120900609000_2.jpg" alt="">
        <img src="http://pic3.nipic.com/20090519/2390580_090051082_2.jpg" alt="">
        <img src="http://pic25.nipic.com/20121127/9026859_131523397124_2.jpg" alt="">
        <img src="http://pic29.nipic.com/20130514/12477194_083818249176_2.jpg" alt="">
        <img ref="lastimg" src="./121.jpg" alt="" />
      </div>
    </div>
    <div class="section">
      <div class="section-title">标题</div>
      <div>asdasdsasdasd</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoUrl: '',
      videoImg: '',
      loading: true,
      timer: null // 进度条定时器
    }
  },
  created () {
    setTimeout(() => {
      // playsinline ios 10中设置可以让视频在小窗内播
      this.videoImg = 'https://img.alicdn.com/imgextra/i1/6000000000252/TB2vLSmgL9TBuNjy0FcXXbeiFXa_!!6000000000252-0-tbvideo.jpg_600x600.jpg'
      // this.videoImg = 'https://img.alicdn.com/imgextra/i3/2271249322/O1CN01WOlOuy2IjWfeaedIE_!!2271249322.jpg_600x600.jpg'
      this.videoUrl = 'http://tbm-auth.alicdn.com/Ls0XofzEPTIXXV6Cnex/um2r4JY6PRYgS4JNcBI@@sdregop.mp4?auth_key=1566910847-0-0-d4b2c5cca75e75666acb80f4e49344db'
    })
  },
  mounted () {
    /* eslint-disable */
    // 支持前5个事件的浏览器有Firefox 3.5+、Safari 4+、Chrome、iOS版Safari和Android版WebKit。Opera、IE8+只支持load事件。目前还没有浏览器支持loadend事件。
    let video = this.$refs.video
    video.addEventListener('abort', () => {
      console.log('外部资源中止加载时') // 外部资源中止加载时（比如用户取消）触发。如果发生错误导致中止，不会触发该事件。
    })
    video.addEventListener('error', () => {
      console.log('error')
    })
    video.addEventListener('load', () => {
      // console.log('load-加载完成') // img时，触发1
    })
    video.addEventListener('loadstart', () => {
      console.log('loadstart') // 触发1
    })
    video.addEventListener('loadend', () => {
      console.log('loadend')
    })
    video.addEventListener('progress', () => {
      console.log('progress-加载中') // 偶尔触发2
    })
    video.addEventListener('timeout', () => {
      console.log('timeout')
    })
    var p = new ProgressEvent('load', {
      lengthComputable: true, // 布尔值，表示加载的总量是否可以计算，默认是false。
      loaded: 30, // 整数，表示已经加载的量，默认是0。
      total: 100 // 整数，表示需要加载的总量，默认是0。
    })
    document.body.addEventListener('load', function (e) {
      // console.log('已经加载：' + (e.loaded / e.total) * 100 + '%')
    })
    document.body.dispatchEvent(p)
    //
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('progress', updateProgress, false)
    xhr.addEventListener('load', transferComplete, false)
    xhr.addEventListener('error', transferFailed, false)
    xhr.addEventListener('abort', transferCanceled, false)
    xhr.open('POST', 'https://ystest.xiaoxiangyoupin.com/v2/buyer/market/querySpuGoodsDetail', true) // 参数3是否异步
    xhr.send({
      gId: 575350592097,
      token: '6d9d024310b43061ed35dfc88b2d73e4',
      bannerType: 1
    })
    function updateProgress(e) {
      if (e.lengthComputable) {
        var percentComplete = e.loaded / e.total;
      } else {
        console.log('不能计算进度');
      }
    }
    
    function transferComplete(e) {
      console.log('传输结束');
    }
    
    function transferFailed(evt) {
      console.log('传输过程中发生错误');
    }
    
    function transferCanceled(evt) {
      console.log('用户取消了传输');
    }
    // 页面加载监听
    document.onreadystatechange = () => {
      if(document.readyState === 'complete') { // 判断页面加载完成，加载的图标就隐藏
        this.loading = false
        console.log('判断页面加载完成，加载的图标就隐藏')
      }
      console.log(document.readyState) // 无法监听
    }
    this.$refs.lastimg.addEventListener('load', () => {
      this.loading = false
    })
    // 监听最后一个图片加载完成
    /* eslint-disable */
  },
  methods: {
    // https://blog.csdn.net/renfufei/article/details/44522887
    // video进度设置
    onToggleVideo () {
      let video = this.$refs.video
      video.play()
      this.timer = setInterval(() => {
        var percent = video.currentTime / video.duration
        console.log(percent)
        if (percent === 1) {
          clearInterval(this.timer)
          this.timer = null
        }
      }, 60)
    },     
  },
  beforeDestory () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style scoped="scoped" lang="scss" src="./index.scss"></style>
