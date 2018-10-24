// write stream
var fs = require("fs");
var writeStream = fs.createWriteStream("out.txt");

var data = "hello world , bye-bye";
writeStream.write(data,"UTF8");
writeStream.end();

writeStream.on("finish",function () {
    console.log("write finished.");
});
writeStream.on("error",function (err) {
    console.log(err.stack);
});
console.log("finished.");
