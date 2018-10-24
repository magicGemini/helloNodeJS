// post request
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var urlEncodedParser = bodyParser.urlencoded({extended: false});

app.get("/*",function (req, res) {
   res.sendfile(__dirname + "/public/index_post.html");
});

app.post("/process_post",urlEncodedParser,function (req, res) {
   var response = {
       "firstName":req.body.first_name,
       "lastName":req.body.last_name,
   };
   console.log(response);
   res.end(JSON.stringify(response));

});

var server = app.listen(8888, function () {
    var host = server.address().host;
    var port = server.address().port;
    console.log("server running at http://%s:%s", host, port);
});
