// 引入http模块 require 加载
var http=require("http")
// 创建服务器 createServer
var server=http.createServer(function(req,res){
    console.log("hello node")
    // 设置响应头 status:状态码
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // 结束响应
    res.end("我已经结束了")
})

// 监听端口
server.listen(3000)
// 后台只要改动代码那么必须重新启动

// if(req.url=="/red"){
    //     res.write("red")
    // }else{
    //     res.write("我是默认的")
    // }
    // 结束响应
    // res.end("我已经结束了")
