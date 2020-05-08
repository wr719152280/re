const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/proxy/**', {  //`api`是需要转发的请求 
      changeOrigin: true,
      pathRewrite: {"^/proxy" : ""},
      target: process.env.REACT_APP_TARGET
    })
  )
}