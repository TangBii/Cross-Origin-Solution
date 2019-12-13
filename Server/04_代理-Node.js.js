const express = require('express')
const proxy = require('http-proxy-middleware')

const app = new express()

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods","*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next()
})


app.listen(5000, function () {
  console.log('Proxy Service Started ')
})


app.use(
  '/',  // 代理所有请求
  proxy({
    target: 'http://127.0.0.1:3000',  // 被代理的服务器地址
  })
)




