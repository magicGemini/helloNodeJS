// post json
var http = require("http");
http.createServer(function (req, res) {
    if (mine(req) === 'application/json'){
        var buffers = [];
        req.on("data",function (chunk) {
            buffers.push(chunk);
        });
        req.on("end",function () {
            req.rawBody = Buffer.concat(buffers).toString();
            handle(req,res);
        });
    }
}).listen(8888, "localhost");
console.log("server running at http://localhost:8888/");

var mine = function (req) {
    var str = req.headers["content-type"] || '';
    return str.split(";")[0];
};

var handle = function (req, res) {
    try{
        req.body = JSON.parse(req.rawBody);
        console.log(req.body);
    }catch (e) {
        res.writeHead(400);
        res.end("Invalid JSON");
        return;
    }
    res.writeHead(200);
    res.end(JSON.stringify(req.body));
};
