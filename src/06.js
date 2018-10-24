//
var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
    console.log("listener 1 running.");
};

var listener2 = function () {
    console.log("listener 2 running.");
};

eventEmitter.on("connected",listener1);
eventEmitter.on("connected",listener2);

var eventListenerCount = eventEmitter.listenerCount("connected");
console.log("eventListenerCount:",eventListenerCount);

eventEmitter.emit("connected");

eventEmitter.removeListener("connected",listener2);
console.log("remove listener: listener 2");

eventEmitter.emit("connected");

eventListenerCount = eventEmitter.listenerCount("connected");
console.log("eventListenerCount:",eventListenerCount);

console.log("finished.");

