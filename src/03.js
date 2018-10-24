// eventEmitter
var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection", function () {
    console.log("connected.");
    eventEmitter.emit("data_received");
});

eventEmitter.on("data_received",function () {
    console.log("data received.");
});

eventEmitter.emit("connection");
console.log("finished.");
