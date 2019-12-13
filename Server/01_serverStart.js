const express = require('express')

const app = new express()

// 监听端口为3000
app.listen(3000, function () {
  console.log('Service Started ')
})

// 请求路径为 'account' 的 get 请求
app.get('/account', function (req, res) {
  res.send('Account balance: 100')
})

// 请求路径为 'withdraw' 的 post 请求
app.post('/withdraw', function (req, res) {
  const money = req.body
  res.send('Account balance minus' + money)
})