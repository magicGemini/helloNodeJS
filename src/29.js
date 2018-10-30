// cookie
var http = require("http");

http.createServer(function (req, res) {
    req.cookies = parseCookie(req.headers.cookie);
    console.log(req.cookies);
    handle(req, res);
}).listen(8888, "localhost");

console.log("server running at http://localhost:8888/");

// parse cookie
var parseCookie = function (cookie) {
    var cookies = {};
    if (!cookie) {
        return cookies;
    }
    var list = cookie.split(";");
    for (var i = 0; i < list.length; i++) {
        var pair = list[i].split("=");
        cookies[pair[0].trim()] = pair[1];
    }
    return cookies;
};

//
var handle = function (req, res) {

    if (!req.cookies.isVisit) {
        res.setHeader("Set-Cookie", serialize("isVisit", "1"));
        res.writeHead(200);
        res.end("first visit");
    } else {
        res.writeHead(200);
        res.end("not the first visit.");
    }
};

// serialize Set-Cookie
var serialize = function (name, val, opt) {
    var pairs = [name + '=' + val];
    opt = opt || {};
    if (opt.maxAge) pairs.push("Max-Age=" + opt.maxAge);
    if (opt.domain) pairs.push("Domain=" + opt.domain);
    if (opt.path) pairs.push("Path=" + opt.path);
    if (opt.expires) pairs.push("Expires=" + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push("HttpOnly");
    if (opt.secure) pairs.push("Secure");
    return pairs.join("; ");
};
