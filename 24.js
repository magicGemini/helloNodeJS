// cookie manage
var express = require("express");
var util = require("util");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/",function (req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Cookies:"+util.inspect(req.cookies));
});

var server = app.listen(8888,function () {
    var port = server.address().port;
    console.log("server running at http://localhost:%s",port);
});
