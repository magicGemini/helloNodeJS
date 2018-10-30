// session
var http = require("http");
var sessions = {};
var key = "session_id";
const EXPIRES = 20 * 60 * 1000;
var generateSession = function () {
    var session = {};
    session.id = (new Date().getTime()) + Math.random();
    session.cookie = {
        expires: (new Date().getTime()) + EXPIRES
    };
    sessions[session.id] = session;
    return session;
};

http.createServer(function (req, res) {

    req.cookies = parseCookie(req.headers.cookie);
    console.log(req.cookies);

    var id = req.cookies[key];
    if (!id) {
        req.session = generateSession();
    } else {
        var session = sessions[id];
        if (session) {
            if (session.cookie.expires > (new Date().getTime())) {
                // update expire time
                session.cookie.expires = (new Date().getTime()) + EXPIRES;
                req.session = session;
            } else {
                // expired session
                delete sessions[id];
                req.session = generateSession();
            }
        } else {
            req.session = generateSession();
        }
    }

    var writeHead = res.writeHead;
    res.writeHead = function(){
        var cookies = res.getHeader("Set-Cookie");
        var session = serialize(key,req.session.id);
        cookies = Array.isArray(cookies) ? cookies.concat(session) : [session];
        res.setHeader("Set-Cookie",cookies);
        return writeHead.apply(this, arguments);
    };

    handle(req, res);

}).listen(8888, "localhost");

console.log("server running at http://localhost:8888/");

var handle = function (req, res) {
    if (!req.session.isVisit) {
        req.session.isVisit = true;
        res.writeHead(200);
        res.end("first visit.");
    } else {
        res.writeHead(200);
        res.end("not the first visit.");
    }
};

var parseCookie = function (cookie) {
    var cookies = {};
    if (!cookie) {
        return cookies;
    } else {
        var list = cookie.split(";");
        for (var i = 0; i < list.length; i++) {
            var pair = list[i].split("=");
            cookies[pair[0].trim()] = pair[1];
        }
        return cookies;
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
