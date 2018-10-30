//
var http = require("http");
var url = require("url");
var queryString = require("querystring");

http.createServer(function (req, res) {

    var query = url.parse(req.url,true).query;
    console.log(query);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(JSON.stringify(query));
}).listen(8888,"localhost");

console.log("server running at http://localhost:8888/");
