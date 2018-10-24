var util = require("util");

function Person(){
    this.name = "John";
    this.toString = function () {
        return this.name;
    }
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(obj);
