// process get request with express
var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/",function (req, res) {
    res.sendfile(__dirname + "/public/index.html");
});

app.get("/process_get",function (req, res) {
    var response = {
        "firstName":req.query.first_name,
        "lastName":req.query.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8888,function () {
    var host = server.address().host;
    var port = server.address().port;
    console.log("server running at http://%s:%s",host,port);
});
