<template>
  <div class="container">
    <p>JS运行机制</p>
    <div>js的出身决定了他只可以单线程，即使web worker的出现并没有改变他的本质</div>
    <p>任务队列</p>
    <div>
      关键词：IO设备，任务挂起，主线程，异步任务可执行时，任务队列通知主线程，改异步任务进入主线程
      于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）
    </div>
    <div>
      （1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
（2）主线程之外，还存在一个"任务队列"（task
queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
（4）主线程不断重复上面的第三步。
    </div>
    <div>qs:异步任务是在主线程上的任务都执行完了再执行吗</div>
    <div>执行栈，可以这么说，执行栈上的同步任务完成后才会有 任务队列转为到执行栈</div>
    <div>只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。</div>
    <p>事件和回调函数</p>
    <div>
      同上的机制，主线程空了之后，任务队列里好了的异步才会执行，定时器，必须在到了时间后才会在主线程执行
    </div>
    <p>event loop</p>
    <div>主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。</div>
    <div>栈和堆</div>
    <p>定时器</p>
    <div>
      node.js的event loop
    </div>
    <div>
      （1）V8引擎解析JavaScript脚本。
（2）解析后的代码，调用Node API。
（3）libuv库负责Node
API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。
（4）V8引擎再将结果返回给用户。
    </div>
    <div>process.nextTick setImmediate</div>
  </div>
</template>

<script>
// test
// https://www.cnblogs.com/MasterYao/p/5563725.html
export default {
  created () {
    // web worker https://blog.csdn.net/aitangyong/article/details/49445307
    // postMessage onMessage
    // importScripts('script1.js')加载外部资源
  },
  mounted () {
    //
    // console.log(process)
    var req = new XMLHttpRequest()
    req.open('GET', '')
    req.onload = () => {
      // console.log(222)
    }
    req.onerror = () => {}
    req.send()
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  padding: 20px 0;
  min-height: 100vh;
  background: #F7F7F7;
  box-sizing: border-box;
}
</style>
