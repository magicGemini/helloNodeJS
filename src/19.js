var http = require("http");
var util = require("util");
var fs = require("fs");
var url = require("url");

http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    console.log("Request from: "+pathname);
    fs.readFile(pathname.substr(1),function (err,data) {
        if (err){
            console.log(err);
            res.writeHead(404,{"Content-Type":"text/html"});
        } else {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data.toString());
        }
        res.end();
    });

}).listen(8888);
console.log("Server running at http://localhost:8888");

