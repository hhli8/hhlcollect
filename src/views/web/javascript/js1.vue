<template>
  <div class="container">
    <p>JS解析机制</p>
    <div>
      解析过程分为编译和执行两个阶段
    </div>
    <br />
    <div>
      编译也叫做JS预处理，编译器将JS脚本代码转换成字节码，执行期间，解释器借助执行期环境将字节码生成机械码并按顺序执行。
    </div>
    <br />
    <div>
      JS是解释型语言而非编译型语言，所以代码在执行期才被解析器一行一行地动态编译和执行而非在执行之前完成编译。JS边编译边执行。
    </div>
    <div>
      JS引擎在预编译期对所有声明的变量和函数进行处理。
    </div>
    <div>
      变量的声明在预编译期，初始化过程发生在执行期而非预编译期
    </div>
    <div>
      预解析过程： 
1.把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值。 
2.把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用。 
3.先提升var，在提升function
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
// test
export default {
  created () {
    //
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
