var http = require("http");
http.createServer(function (req, res) {

    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello http");

}).listen(8888,"localhost");

console.log("server runing at http://localhost:8888");
