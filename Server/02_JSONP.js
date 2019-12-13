const express = require('express')

const app = new express()

app.listen(3000, function () {
  console.log('Service Started ')
})

app.get('/account', function (req, res) {
  let {callback} = req.query  // 获取回调函数名
  let data = 100  // 模拟数据
  res.send(`${callback}(${data})`)  // 响应字符串形式函数调用
})

app.post('/withdraw', function (req, res) {
  const money = req.body
  res.send('Account balance minus' + money)
})