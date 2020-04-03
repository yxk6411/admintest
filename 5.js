var path=require("path")
// basename 返回path的最后一部分
console.log(path.basename("/aa/cc/1.js"))
// dirname 返回目录名
console.log(path.dirname("aa/cc/1.js"))
// format  从对象中解析出路径字符串 
console.log(path.format({
    dir:"/aa",  //目录
    root:"",  //目录
    base:"/1.js",  //文件名称=name+exts
    name:"aaaa",  
    ext:'.html'  //后缀名
}))
//五行警告
//如果dir和root同时存在 root会被忽略，
//如果base个ext/name同时存在 则会忽略ext和name
// parse  根据字符串返回一个对象
console.log(path.parse("aa/cc/2.js"))
// join  将所有的名称利用pare。seq串联起来，再通过normalize格式化      
console.log(path.join("/aa","","./2.js"))
// normalize  格式化 规范化返回path路径
console.log(path.normalize("/aa/////////cc/1.js"))
// extname  获取文件后缀名
console.log(path.extname("/aa/1.css"))
//resolve 获取文件的绝对路径
console.log(path.resolve("aa","bb","cc","1/2"))
// relative 获取相对路径
var begin="c:aa/b"
var end="c:/dd/v"
console.log(path.relative(begin,end))