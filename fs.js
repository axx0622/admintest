var fs=require("fs");
// console.log(fs)
// readFile：读取文件内容
fs.readFile("./static/1.txt",function(err,data){
    // err：错误的信息  data：文件的内容
    console.log(err)
    console.log(data.toString())
})
// 若文件不存在则创建文件
fs.writeFile("./static/2.txt","艾欣欣",function(err){
    console.log(err)
})