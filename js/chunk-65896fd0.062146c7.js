(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65896fd0"],{8367:function(t,e,i){},"87c3":function(t,e,i){"use strict";var n=i("8367"),o=i.n(n);o.a},bb77:function(t,e,i){t.exports=i.p+"img/121.72c7da6f.jpg"},eba1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"section"},[n("div",{staticClass:"section-title"},[t._v("ProgressEvent")]),n("div",{staticClass:"sec-video"},[n("video",{ref:"video",attrs:{"webkit-playsinline":"webkit-playsinline",playsinline:"playsinline",src:t.videoUrl,id:"videoPlayer",preload:"none",poster:t.videoImg}},[n("source",{attrs:{type:"video/mp4"}}),t._m(0)]),n("div",{staticClass:"start",on:{click:t.onToggleVideo}},[t._v("播放")])]),t._m(1)]),n("div",{staticClass:"section"},[n("div",{staticClass:"section-title"},[t._v("页面加载进度监听")]),n("div",{staticClass:"sec-2"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[n("div",{staticClass:"pic"},[t._v("加载中......")])]),n("img",{attrs:{src:"http://pic29.nipic.com/20130514/12477194_083818249176_2.jpg",alt:""}}),n("img",{attrs:{src:"http://pic37.nipic.com/20140115/9448607_120900609000_2.jpg",alt:""}}),n("img",{attrs:{src:"http://pic3.nipic.com/20090519/2390580_090051082_2.jpg",alt:""}}),n("img",{attrs:{src:"http://pic25.nipic.com/20121127/9026859_131523397124_2.jpg",alt:""}}),n("img",{attrs:{src:"http://pic29.nipic.com/20130514/12477194_083818249176_2.jpg",alt:""}}),n("img",{ref:"lastimg",attrs:{src:i("bb77"),alt:""}})])]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"vjs-no-js"},[t._v(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),i("a",{attrs:{href:"http://videojs.com/html5-video-support/",target:"_blank"}},[t._v("supports HTML5 video")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sec-img"},[i("img",{attrs:{src:"https://img.alicdn.com/imgextra/i3/2271249322/O1CN01WOlOuy2IjWfeaedIE_!!2271249322.jpg_600x600.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[i("div",{staticClass:"section-title"},[t._v("标题")]),i("div",[t._v("asdasdsasdasd")])])}],s={data:function(){return{videoUrl:"",videoImg:"",loading:!0,timer:null}},created:function(){var t=this;setTimeout(function(){t.videoImg="https://img.alicdn.com/imgextra/i1/6000000000252/TB2vLSmgL9TBuNjy0FcXXbeiFXa_!!6000000000252-0-tbvideo.jpg_600x600.jpg",t.videoUrl="http://tbm-auth.alicdn.com/Ls0XofzEPTIXXV6Cnex/um2r4JY6PRYgS4JNcBI@@sdregop.mp4?auth_key=1566910847-0-0-d4b2c5cca75e75666acb80f4e49344db"})},mounted:function(){var t=this,e=this.$refs.video;e.addEventListener("abort",function(){console.log("外部资源中止加载时")}),e.addEventListener("error",function(){console.log("error")}),e.addEventListener("load",function(){}),e.addEventListener("loadstart",function(){console.log("loadstart")}),e.addEventListener("loadend",function(){console.log("loadend")}),e.addEventListener("progress",function(){console.log("progress-加载中")}),e.addEventListener("timeout",function(){console.log("timeout")});var i=new ProgressEvent("load",{lengthComputable:!0,loaded:30,total:100});document.body.addEventListener("load",function(t){}),document.body.dispatchEvent(i);var n=new XMLHttpRequest;function o(t){if(t.lengthComputable)t.loaded,t.total;else console.log("不能计算进度")}function s(t){console.log("传输结束")}function a(t){console.log("传输过程中发生错误")}function c(t){console.log("用户取消了传输")}n.addEventListener("progress",o,!1),n.addEventListener("load",s,!1),n.addEventListener("error",a,!1),n.addEventListener("abort",c,!1),n.open("POST","https://ystest.xiaoxiangyoupin.com/v2/buyer/market/querySpuGoodsDetail",!0),n.send({gId:575350592097,token:"6d9d024310b43061ed35dfc88b2d73e4",bannerType:1}),document.onreadystatechange=function(){"complete"===document.readyState&&(t.loading=!1,console.log("判断页面加载完成，加载的图标就隐藏")),console.log(document.readyState)},this.$refs.lastimg.addEventListener("load",function(){t.loading=!1})},methods:{onToggleVideo:function(){var t=this,e=this.$refs.video;e.play(),this.timer=setInterval(function(){var i=e.currentTime/e.duration;console.log(i),1===i&&(clearInterval(t.timer),t.timer=null)},60)}},beforeDestory:function(){clearInterval(this.timer),this.timer=null}},a=s,c=(i("87c3"),i("2877")),r=Object(c["a"])(a,n,o,!1,null,"c357cbe4",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-65896fd0.062146c7.js.map