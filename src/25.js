// restful
var express = require("express");
var fs = require("fs");
var app = express();

app.get("/userlist", function (req, res) {
    fs.readFile(__dirname + "/user.json", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(data));
            res.end(data);
        }
    });
});

var server = app.listen(8888, function () {
    var port = server.address().port;
    console.log("server running at http://localhost:%s", port);
});
