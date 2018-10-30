// post xml
var http = require("http");
var xml2js= require("xml2js");
http.createServer(function (req, res) {
    if (hasBody(req)) {
        var buffers = [];
        req.on("data", function (chunk) {
            buffers.push(chunk);
        });
        req.on("end", function () {
            req.rawBody = Buffer.concat(buffers).toString();
            handle(req, res);
        });
    } else {
        handle(req, res)
    }

}).listen(8888, "localhost");
console.log("server running at http://localhost:8888/");

var hasBody = function (req) {
    return 'transfer-encoding' in req.headers || 'content-length' in req.headers;
};

var mine = function (req) {
    var str = req.headers["content-type"] || '';
    return str.split(";")[0];
};

var handle = function (req, res) {
    if (mine(req) === 'application/xml'){
        xml2js.parseString(req.rawBody,function (err, xml) {
            if (err){
                res.writeHead(400);
                res.end("Invalid XML");
                return;
            }
            req.body = xml;
            res.end(JSON.stringify(req.body));
        });
    }
};
