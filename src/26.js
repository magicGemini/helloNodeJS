var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.write("<h1>Method:" + req.method + "</h1>");
    res.write("<h1>URL:" + req.url + "</h1>");
    res.end();
}).listen(8888, "localhost");

console.log("server running at http://localhost:8888");
