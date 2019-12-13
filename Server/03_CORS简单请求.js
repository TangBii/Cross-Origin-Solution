const express = require('express')

const app = new express()

app.listen(3000, function () {
  console.log('Service Started ')
})

// 设置通用响应头
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next()
})

app.get('/account', function (req, res) {
  let data = 100  // 模拟数据
  res.send(JSON.stringify(data))  // 响应字符串形式函数调用
})

app.post('/withdraw', function (req, res) {
  const money = req.body
  res.send('Account balance minus' + money)
})




