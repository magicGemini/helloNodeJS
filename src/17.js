// get request
var http = require("http");
var util = require("util");
var url = require("url");

http.createServer(function (request,response) {
    response.writeHead(200, {
        "Content-Type":"text/html; charset=utf-8",
    });

    var param = url.parse(request.url,true).query;
    response.write("<h3>name："+param.name+"</h3>");
    response.write("<h3>age："+param.age+"</h3>");
    response.end();
}).listen(8888);

console.log("server running at http://localhost:8888/");
