var http = require("http");
var queryString = require("querystring");
var util = require("util");

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    'URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {

    var body = "";
    req.on("data", function (chunk) {
        body += chunk;
    });

    req.on("end", function () {
        body = queryString.parse(body);

        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        if (body.name && body.url) {
            res.write("<h3>网站名：" + body.name+"</h3>");
            res.write("<h3>URL：" + body.url+"</h3>");
        }else{
            res.write(postHTML);
        }
        res.end();
    })

}).listen(8888);

console.log("Server running at http://localhost:8888/");
