var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    // require.url=="favicon.ico"代表是地址栏前面的小图标
    if(require.url=="favicon.ico"){
        return
    }
    var data=url.parse(req.url,true).query;
    var serverData={
        username:"admin",
        password:"123"
    }
    if(data.username==serverData.username&&data.password==serverData.password){
        res.end("success")
    }else{
        res.end("fail")
    }
}).listen(3000)