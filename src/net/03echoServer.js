var net = require("net");

var server = net.createServer(function (socket) {
    socket.write("Echo server\n");
    socket.pipe(socket);
});
server.listen(8123,"127.0.0.1",function () {
    console.log("echo server at 127.0.0.1:8123");
});
