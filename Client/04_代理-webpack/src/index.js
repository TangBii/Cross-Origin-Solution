// 发送请求
const xmlhttp = new XMLHttpRequest()
const url = '/withdraw'
xmlhttp.open('POST', url, true)
xmlhttp.setRequestHeader('Content-Type', 'application/json')
xmlhttp.send(JSON.stringify({"cost": '100'}))

// 处理响应
xmlhttp.onreadystatechange = function () {
  if(xmlhttp.readyState === 4){
    if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304){
      console.log(xmlhttp.responseText)
    }
  }
}