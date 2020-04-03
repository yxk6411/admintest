// querystring   查询字符串
var querystring=require("querystring")
// {
//     unescapeBuffer: [Function: unescapeBuffer],
//     unescape: [Function: qsUnescape],
//     escape: [Function: qsEscape],
//     stringify: [Function: stringify],
//     encode: [Function: stringify],
//     parse: [Function: parse],
//     decode: [Function: parse]
//   }
// 作用:解析和格式化url查询字符串
// parse实现反序列化  反序列化成一个对象
// var data =querystring.parse("username=tom&&password=123")
// stringify  序列化
//  var data =querystring.stringify( { username: 'tom', password: '123' })
//  console.log(data)
// escape 对传入字符串进行编码
// var data=querystring.escape("hnkz=7")
// console.log(data)
// unescape   解码
var data=querystring.unescape("hnkz%3D7")
console.log(data)