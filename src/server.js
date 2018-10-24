var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request from ",pathname,"received.");
        route(pathname);
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.end("hello world");
    }

    http.createServer(onRequest).listen(8888);
    console.log("server running at http://localhost:8888/")
}

exports.start = start;
