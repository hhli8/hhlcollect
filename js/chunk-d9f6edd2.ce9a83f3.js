(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9f6edd2"],{"0439":function(e,t,n){"use strict";var r=n("3332"),o=n("51f3"),i=n("9b45"),s=n("5ce4");function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=a(s);u.Axios=i,u.create=function(e){return a(r.merge(s,e))},u.Cancel=n("9f80"),u.CancelToken=n("d475"),u.isCancel=n("3673"),u.all=function(e){return Promise.all(e)},u.spread=n("9e99"),e.exports=u,e.exports.default=u},"1b62":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},"1da1":function(e,t,n){e.exports=n.p+"img/demo-pic23.82622b03.jpg"},"27be":function(e,t,n){"use strict";var r=n("3494");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"2a2c":function(e,t,n){"use strict";var r=n("92bb"),o=n.n(r);o.a},"2be5":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},3332:function(e,t,n){"use strict";var r=n("51f3"),o=n("50aa"),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function c(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function p(e){return"number"===typeof e}function l(e){return"undefined"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===i.call(e)}function m(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function v(e){return"[object Function]"===i.call(e)}function w(e){return d(e)&&v(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function C(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=C(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)E(arguments[n],t);return e}function R(e,t,n){return E(t,function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t}),e}e.exports={isArray:s,isArrayBuffer:a,isBuffer:o,isFormData:u,isArrayBufferView:c,isString:f,isNumber:p,isObject:d,isUndefined:l,isDate:h,isFile:m,isBlob:g,isFunction:v,isStream:w,isURLSearchParams:y,isStandardBrowserEnv:x,forEach:E,merge:C,extend:R,trim:b}},3494:function(e,t,n){"use strict";var r=n("1b62");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},"35c6":function(e,t,n){"use strict";var r=n("3332"),o=n("79c0"),i=n("3673"),s=n("5ce4"),a=n("2be5"),u=n("45d2");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||s.adapter;return t(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},3673:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},3747:function(e,t,n){"use strict";var r=n("3332");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"3a0a":function(e,t,n){"use strict";var r=n("3332");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},4362:function(e,t,n){t.nextTick=function(e){setTimeout(e,0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"45d2":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"50aa":function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},"51f3":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"5ce4":function(e,t,n){"use strict";(function(t){var r=n("3332"),o=n("3a0a"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("76fc"):"undefined"!==typeof t&&(e=n("76fc")),e}var u={adapter:a(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)}),e.exports=u}).call(this,n("4362"))},"76fc":function(e,t,n){"use strict";var r=n("3332"),o=n("27be"),i=n("929b"),s=n("e555"),a=n("dd61"),u=n("3494"),c="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n("b032");e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";l.Authorization="Basic "+c(g+":"+v)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n("3747"),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(l,function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},"79c0":function(e,t,n){"use strict";var r=n("3332");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"7f43":function(e,t,n){e.exports=n("0439")},"929b":function(e,t,n){"use strict";var r=n("3332");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},"92bb":function(e,t,n){},"9b45":function(e,t,n){"use strict";var r=n("5ce4"),o=n("3332"),i=n("eb90"),s=n("35c6");function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});while(t.length)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=a},"9e99":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"9f80":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},b032:function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}function i(e){for(var t,n,i=String(e),s="",a=0,u=r;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if(n=i.charCodeAt(a+=.75),n>255)throw new o;t=t<<8|n}return s}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=i},c152:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"img-box flexBox flexBetween"},[r("div",{staticClass:"item",class:e.photo?"no-border":""},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.photo,expression:"photo"}],attrs:{src:e.photo}}),r("input",{attrs:{type:"file",accept:"image/*",capture:"camera"},on:{change:function(t){return e.chosePhoto(t)}}}),r("span",{staticClass:"text"},[e._v("选择照片")])]),r("div",{staticClass:"item no-border"},[r("img",{directives:[{name:"show",rawName:"v-show",value:0===e.sexact,expression:"sexact===0"}],ref:"img1",attrs:{src:n("1da1")}}),r("img",{directives:[{name:"show",rawName:"v-show",value:1===e.sexact,expression:"sexact===1"}],ref:"img2",attrs:{src:n("ee5e")}})])]),r("div",{staticClass:"sex"},e._l(e.sex,function(t,n){return r("span",{key:n,class:n===e.sexact?"act":"",on:{click:function(t){return e.chose(n)}}},[e._v(e._s(t))])}),0),r("div",{staticClass:"btn-box"},[r("button",{staticClass:"merge",on:{click:e.merge}},[e._v("融合")])])])},o=[],i=n("7f43"),s=n.n(i),a={data:function(){return{sex:["男生","女生"],sexact:0,photo:"",template:"",token:""}},created:function(){this.getToken()},mounted:function(){var e=this;this.getbase64(this.$refs.img1,function(t){e.template=t})},methods:{getToken:function(){var e=this;s.a.get("http://127.0.0.1:3001/baidu/token",{}).then(function(t){var n=t.data;e.token=n.data})},getbase64:function(e,t){var n=document.createElement("img");n.onload=function(){var e=document.createElement("canvas"),r=n.width,o=n.height,i=r/o;r>100&&(r=100,o=r/i),e.width=r,e.height=o;var s=e.getContext("2d");s.drawImage(n,0,0,r,o),t(e.toDataURL("image/png",.8))},n.src=e.src},merge:function(){var e={image_template:{image:this.template,image_type:"BASE64",quality_control:"NONE"},image_target:{image:this.photo,image_type:"BASE64",quality_control:"NONE"},merge_degree:"HIGH"};s.a.post("http://127.0.0.1:3001/baidu/merge",e,{headers:{token:this.token}}).then(function(){})},merge2:function(){if(this.photo){var e={api_key:"y6Ai5E7PjGQkUiR600-7vQFycf8sE5ey",api_secret:"x5OCkS_giIm0_oKqHUdIRRvHYRbp3Dg7",template_base64:this.template,merge_base64:this.photo};s.a.post("https://api-cn.faceplusplus.com/imagepp/v1/mergeface",{data:e},{headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(){})}else alert("请添加照片")},chosePhoto:function(e){var t=this,n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=function(){var e=document.createElement("img");e.onload=function(){var n=document.createElement("canvas"),r=e.width,o=e.height,i=r/o;r>100&&(r=100,o=r/i),n.width=r,n.height=o;var s=n.getContext("2d");s.drawImage(e,0,0,r,o),t.photo=n.toDataURL("image/png",.8)},e.src=this.result}},chose:function(e){var t=this;this.sexact=e;var n=0===e?this.$refs.img1:this.$refs.img2;this.getbase64(n,function(e){t.template=e})}}},u=a,c=(n("2a2c"),n("2877")),f=Object(c["a"])(u,r,o,!1,null,"6bc1170a",null);t["default"]=f.exports},d475:function(e,t,n){"use strict";var r=n("9f80");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o(function(t){e=t});return{token:t,cancel:e}},e.exports=o},dd61:function(e,t,n){"use strict";var r=n("3332");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return r.exec(e).slice(1)};function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),function(e){return!!e}),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,u=0;u<s;u++)if(o[u]!==i[u]){a=u;break}var c=[];for(u=a;u<o.length;u++)c.push("..");return c=c.concat(i.slice(a)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=o(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=o(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return o(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e555:function(e,t,n){"use strict";var r=n("3332"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},eb90:function(e,t,n){"use strict";var r=n("3332");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},ee5e:function(e,t,n){e.exports=n.p+"img/demo-pic111.22ccd522.jpg"}}]);
//# sourceMappingURL=chunk-d9f6edd2.ce9a83f3.js.map