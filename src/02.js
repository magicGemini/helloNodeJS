var fs = require("fs");

fs.readFile('./aaaaa',function (err,data) {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});

console.log("finished.");
