// read stream
var fs = require("fs");
var data = "";
var readStream = fs.createReadStream("./08.js");
readStream.encoding = "utf8";
readStream.on("data",function (chunk) {
    data += chunk;
});
readStream.on("end",function () {
    console.log(data);
});
readStream.on("error",function (err) {
    console.error(err.stack)
});
console.log("finished.");
