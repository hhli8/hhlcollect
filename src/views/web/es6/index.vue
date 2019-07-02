<template>
  <div class="container">
    <p class="f-title">async/await</p>
    <div class="content">
      <pre>
getBookId () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('1001'), 1000)
  })
}
const id = await this.getBookId(title) // 1001
      </pre>
      <div class="red">注：错误捕捉，await只能用于async函数的域里面，await的继发执行和并发执行</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemid: ''
    }
  },
  created () {
    //
  },
  mounted () {
    this.funAsync1().then(() => {
      // console.log(res)
    }, () => {
      // console.log(err)
    })
    this.funAsync2()
    this.funAsync3()
    // https://www.cnblogs.com/jeodeng/p/10663869.html
  },
  methods: {
    async funAsync1 () {
      // throw new Error('出错了')
      // return 'str1111'
    },
    async funAsync2 () {
      //
      function getPromise(str = 'sucess') {
        return new Promise((resolve) => {
          // resolve(str)
          setTimeout(() => resolve(str), 1000)
        })
      }
      async function fn() {
        // getPromise会返回一个Promise
        const data = await getPromise()
        // fn运行在这停顿，这里会停1秒，最后输出data
        // 要wait等待getPromise()这个异步操作返回结果
        // console.log(data, 'data')
        // 最后返回data，当然你要是处理完业务也可以不返回
        // 视场景而定了，只是想告诉你async会返回一个promise，而这个data在then里面拿到
        return data
      }
      // fn()
      fn().then(() => {
        // console.log(res)
      })
    },
    setItemid () {
      return new Promise(() => {
        // this.itemid = 100
        setTimeout(() => {
          this.itemid = 100
        }, 1000)
      })
    },
    getBookId () {
      return new Promise((resolve) => {
        setTimeout(() => resolve('1001'), 1000)
      })
    },
    getBookDes () {
      return new Promise((resolve) => {
        setTimeout(() => resolve('这是一本好书'), 1000)
      })
    },
    uploadBookInfo () {
      return new Promise((resolve) => {
        setTimeout(() => resolve('上传成功'), 1000)
      })
    },
    uploadWidthPromise (title = '你不知道的JavaScript') {
      this.getBookId(title).then((id) => {
        // console.log(id) // 1001
        this.getBookDes(id).then((des) => {
          // console.log(des) // 这是一本好书
          this.uploadBookInfo({
            title,
            id,
            des,
          }).then(() => {
            // console.log(res) // 上传成功
          })
        })
      })
    },
    /* async uploadWidthAsync (title = '你不知道的JavaScript') {
      const id = await this.getBookId(title)
      const des = await this.getBookDes(id)
      const result = await this.uploadBookInfo({ id, des, title })
      // console.log(id, des, result) // 1001 这是一本好书 上传成功
    }, */
    async funAsync3 () {
      //
      /* 业务场景：我们有一本书，目前只有书名
              要通过请求 getBookId 获取到书的id
              然后靠id通过请求 getBookDes 获取到书的description
              最后要把id，和title，还有description一起存到数据库中 uploadBookInfo */
      // this.uploadWidthAsync()
      this.uploadWidthPromise()
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  padding: 20px 10px;
  min-height: 100vh;
  background: #F7F7F7;
  box-sizing: border-box;
  font-size: 28px;
  color: #333;
  .f-title {
    color: #000;
    font-size: 36px;
    padding-bottom: 10px;
  }
  .content {
    padding-bottom: 20px;
    .red {
      color: red;
    }
  }
}
</style>
