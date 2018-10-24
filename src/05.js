// event has mutli callback function with args
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();

event.on("someEvent",function (arg1, arg2) {
    console.log("listener 1", arg1, arg2);
});

event.on("someEvent",function (arg1,arg2) {
    console.log("listener 2", arg1, arg2);
});

event.emit("someEvent", "Arg One", "Arg Two");
console.log("listener 1 will run before listener 2.");
