var path=require("path");
// basename:返回path的最后一部分
console.log(path.basename("aa/bb/cc/1.js"))

// dirname:返回目录名
console.log(path.dirname("aa/bb/cc/1.js"))

// format:从对象中解析出路径字符串
console.log(path.format({
    dir:"/aa", //目录
    root:"/bb/", //目录
    base:"1.js", //文件名称name+ext的结合体
    name:"aaaa",
    ext:".css"  //后缀名
}))
// 如果dir和root同时存在，则root会被忽略
// 如果base和ext/name同时存在，则会忽略ext/name

// parse：返回一个对象
console.log(path.parse("aa/bb/cc/2.js"))

// join:将所有的名称利用path.seq连接起来，再通过normallze格式化
console.log(path.join("/aa","/bb","./2.js"))

// normalize:格式化 规范化返回的path
console.log(path.normalize("/aa////////bb/../1.js"))

// extname:获取文件后缀名
console.log(path.extname("aa/bb/cc/2.css"))

// resolve:获取文件的绝对路径
console.log(path.resolve("aa","bb","cc","1/2"))
// relative:获取相对路径
var begin="c:aa/bb";
var end="c:cc/dd"
console.log(path.relative(begin,end))