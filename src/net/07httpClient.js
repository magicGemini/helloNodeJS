var http = require("http");

var options = {
    hostname: "localhost",
    port: 8888,
    path: "/",
    method: "GET",
};

var req = http.request(options,function (res) {
    console.log("STATUS: ",res.statusCode);
    console.log("HEADERS: ", JSON.stringify(res.headers));
    res.setEncoding("utf8");
    res.on("data",function (chunk) {
        console.log(chunk);
    });
});

req.end();
