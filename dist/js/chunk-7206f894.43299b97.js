(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7206f894"],{"4e71":function(t,n,e){},"5b13":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[t._v("\n    Javascript 的队列数据结构"),e("br"),t._v("\n    a_两种基本的种数据结构堆(heap)和栈(stack)，还有一个队列(queue)，并不是严格意义上的数据结构。"),e("br"),t._v("\n    a_栈先进后出，后进先出，堆很据键值对，队列：一种先进先出（FIFO）的数据结构"),e("br"),t._v("\n    P执行上下文 and 函数调用栈"),e("br"),t._v("\n    a_一个 JavaScript 程序中，必定会产生多个执行上下文，JavaScript引擎会以栈的方式来处理它们，我们称其为函数调用栈(call stack)\n    a_栈底永远都是全局上下文，而栈顶就是当前正在执行的上下文。\n    a_任务队列又可以分为 macro-task（task）与 micro-task（job）。"),e("br"),t._v("\n    a_https://blog.csdn.net/gitchat/article/details/78620850"),e("br"),t._v("\n    a_微任务job（promise/nexttick）和宏任务task(settimeout。。。)"),e("br"),t._v("\n    a_Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MutationObserver，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。"),e("br"),t._v("\n    a_\n  ")]),e("div",[e("p",[t._v("问题：原理是什么？")]),e("p",[t._v("是什么：DOM更新完后执行，根据任务队列的原理，使用promise.then和mutationObserve，MessageChannel等实现的")]),e("p",[t._v("问题2：js事件循环机制")])])])}],s={created:function(){},mounted:function(){}},i=s,c=(e("e017"),e("2877")),o=Object(c["a"])(i,a,r,!1,null,"19a0b0db",null);n["default"]=o.exports},e017:function(t,n,e){"use strict";var a=e("4e71"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-7206f894.43299b97.js.map