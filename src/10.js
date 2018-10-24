// pipe
var fs = require("fs");

var readStream = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("out.txt");

// var data = "";
// readStream.on("data", function (chunk) {
//     data += chunk;
// });
// readStream.on("end", function () {
//     console.log(data);
//     writeStream.write(data,"UTF8");
//     writeStream.end();
// });
// writeStream.on("finish",function () {
//     console.log("write finish.");
// });
// readStream.on("err",function (err) {
//     console.log(err.stack);
// });

readStream.pipe(writeStream);
