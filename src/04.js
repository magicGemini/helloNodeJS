// setTimeout
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();

event.on("clockRing", function () {
    console.log("clock ringing...");
});

setTimeout(function () {
    event.emit("clockRing");
}, 2000);
