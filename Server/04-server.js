const express = require('express')
const bodyParser=require("body-parser");

const app = new express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false }))

app.listen(3000, function () {
  console.log('Service Started ')
})

// 设置通用响应头
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Methods","*");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next()
// })

app.get('/setCookie', function (req, res) {
  res.cookie('money','1100');  // 设置 cookie 为 money:1100
  res.end('set Cookie ok')
})

app.get('/account', function (req, res) {
  // 读取 cookie
  let money = req.headers.cookie.split('=')[1]
  money = money * 1 + 100
  res.cookie('money', money)
  res.end('ok')  // 响应字符串形式函数调用
})

app.post('/withdraw', function (req, res) {
  const money = req.body.cost

  res.send('Account balance minus $' + money)
})




