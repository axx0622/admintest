var http=require("http");
var fs=require("fs");
var querystring=require("querystring");
http.createServer(function(req,res){
    // result接收提交的数据，初始为空
    // i：记录接收数据的次数
    let result="",i=0
    // 第二步：数据进行批次传输
    req.on("data",function(data){
        result+=data
        console.log(`${++i}`,data,data.toString())
    })
    // 第三步：end数据传输完毕
    req.on("end",function(){
        let postdata=querystring.parse(result);
        console.log("end",postdata)
    })
      // 第一步
      fs.readFile("./static/form.html",function(err,data){
        if(err){
            res.write("404")
        }else{
            res.write(data)
        }
        res.end()
    })
}).listen(3000)