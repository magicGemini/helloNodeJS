var net = require("net");

var server = net.createServer(function (socket) {
    socket.on("data",function (data) {
        socket.write("Hello ");
    });

    socket.on("end",function () {
        console.log("connect closed.");
    });

    socket.write("welcome to net programming part.\n");

}).listen(8124,function () {
    console.log("server bound on port: 8124");
});
