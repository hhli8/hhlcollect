module.exports = {
  publicPath: './',
  // 配置：https://blog.csdn.net/qq_25134721/article/details/86244796
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75,
            selectorBlackList: ['weui','mu'],
            propList: ['*']
          })
        ]
      }
    }
  }
}
