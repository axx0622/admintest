// querystring：查询字符串
var querystring=require("querystring");
// console.log(querystring)
// {
//     unescapeBuffer: [Function: unescapeBuffer],
//     unescape: [Function: qsUnescape],
//     escape: [Function: qsEscape],
//     stringify: [Function: stringify],
//     encode: [Function: stringify],
//     parse: [Function: parse],
//     decode: [Function: parse]
//   }
// querystring作用：解析和格式化url查询字符串
// parse实现反序列化，反序列化成一个对象
var data=querystring.parse("username=tom&password=123");
console.log(data)
// stringify 序列化，序列化成字符串
var data2=querystring.stringify({"username":"tom","password":"123"})
console.log(data2)
//escape：对传入的字符串进行编码
var data3=querystring.escape("name=2")
console.log(data3) //name%3D2
// unescape：解码
var data4=querystring.unescape("name%3D2")
console.log(data4)