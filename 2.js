// 引入http模块 require 加载
var http=require("http");
// 创建服务器
var server=http.createServer(function(req,res){
    console.log("hello node")
    // 设置响应头 status:状态码
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    console.log(req.url)
    switch(req.url){
        case "/red":
            // 写入
            res.write("red")
            break;
        default:
            res.write("我是默认的")
    }
})

// 监听端口
server.listen(3000)