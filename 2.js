var http = require("http")
// console.log(http)
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type": "text/html;charset=utf-8"
    })
    console.log(req.url)
    // req.url  获取地址路径
    switch(req.url){
        case"/hani":
        // 写入
        res.write("hani")
        break;
        default:
            res.write("我是默认的")
    }
    //     if(req.url=="/hani"){
    // res.write("hani")
    //     }else{
    //         res.write("我是默认的")
    //     }
    res.end()
})
server.listen(3000) 