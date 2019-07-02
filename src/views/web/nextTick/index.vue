<template>
  <div class="container">
    <div>
      Javascript 的队列数据结构<br />
      a_两种基本的种数据结构堆(heap)和栈(stack)，还有一个队列(queue)，并不是严格意义上的数据结构。<br />
      a_栈先进后出，后进先出，堆很据键值对，队列：一种先进先出（FIFO）的数据结构<br />
      P执行上下文 and 函数调用栈<br />
      a_一个 JavaScript 程序中，必定会产生多个执行上下文，JavaScript引擎会以栈的方式来处理它们，我们称其为函数调用栈(call stack)
      a_栈底永远都是全局上下文，而栈顶就是当前正在执行的上下文。
      a_任务队列又可以分为 macro-task（task）与 micro-task（job）。<br />
      a_https://blog.csdn.net/gitchat/article/details/78620850<br />
      a_微任务job（promise/nexttick）和宏任务task(settimeout。。。)<br />
      a_Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MutationObserver，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。<br />
      a_
    </div>
    <div>
      <p>问题：原理是什么？</p>
      <p>是什么：DOM更新完后执行，根据任务队列的原理，使用promise.then和mutationObserve，MessageChannel等实现的</p>
      <p>问题2：js事件循环机制</p>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    //
  },
  mounted () {
    /* console.log('1') // 1
    //
    setTimeout(function() { // setTimeout1
      console.log('2') // 4
      process.nextTick(function() {
          console.log('3')
      })
      new Promise(function(resolve) {
          console.log('4')
          resolve();
      }).then(function() {
          console.log('5')
      })
    })
    process.nextTick(function() { // process1
      console.log('6') //
    })
    new Promise(function(resolve) { // then1
      console.log('7') // 2
      resolve()
    }).then(function() {
      console.log('8') // 3
    })
    //
    setTimeout(function() {
      console.log('9')
      process.nextTick(function() {
        console.log('10')
      })
      new Promise(function(resolve) {
        console.log('11')
        resolve()
      }).then(function() {
        console.log('12')
      })
    }) */
    // https://blog.csdn.net/qq_35430000/article/details/88211896 错误
    // 整体script作为第一个宏任务进入主线程，遇到console.log，输出1。
    // 遇到setTimeout，其回调函数被分发到宏任务Event Queue中。我们暂且记为setTimeout1。
    // 遇到process.nextTick()，其回调函数被分发到微任务Event Queue中。我们记为process1。
    // 遇到Promise，new Promise直接执行，输出7。then被分发到微任务Event Queue中。我们记为then1。
    // 又遇到了setTimeout，其回调函数被分发到宏任务Event Queue中，我们记为setTimeout2。
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
