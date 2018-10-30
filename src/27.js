// 静态文件服务器
var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {

    var filePath = url.parse(req.url).pathname;
    console.log("filepath : " + filePath);
    fs.readFile("./public/" + filePath, function (err, data) {
        if (err){
            res.writeHead(404);
            res.end("file not found.");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
    });

}).listen(8888,"localhost");

console.log("server running at http://localhost:8888/");
