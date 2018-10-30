// post form data
var http = require("http");
var querystring = require("querystring");

var hasBody = function(req){
    return 'transfer-encoding' in req.headers || 'content-length' in req.headers;
};

http.createServer(function (req, res) {

    if (hasBody(req)){
        var buffers = [];
        req.on("data",function (chunk) {
            buffers.push(chunk);
        });
        req.on("end",function () {
            req.rawBody = Buffer.concat(buffers).toString();
            handle(req,res);
        });
    } else {
        handle(req,res)
    }
}).listen(8888,"localhost");
console.log("Server running at http://localhost:8888/");

var handle = function (req, res) {
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded'){
        req.body = querystring.parse(req.rawBody);
    }
    console.log(req.body);
    res.writeHead(200);
    res.end("form post");
};
