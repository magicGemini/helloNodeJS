var dgram = require("dgram");

var message = new Buffer("hello to node.js");
var client = dgram.createSocket("udp4");
client.send(message,0, message.length, 41234,"localhost",function (err, bytes) {
    client.close();
});
