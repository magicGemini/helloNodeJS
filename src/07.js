const buf = Buffer.from("hello","ascii");

//buffer encoding
console.log(buf.toString("ascii"));
console.log(buf.toString("utf8"));
console.log(buf.toString("utf16le"));
console.log(buf.toString("ucs2"));
console.log(buf.toString("utf8"));
console.log(buf.toString("base64"));
console.log(buf.toString("latin1"));
console.log(buf.toString("binary"));
console.log(buf.toString("hex"));

//create buffer
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1,2,3,4]);
const buf5 = Buffer.from("test");
const buf6 = Buffer.from("test","latin1");

//write buffer
const buffer = Buffer.alloc(256);
len = buffer.write("hello world.");
console.log("buffer length:", len);

// read buffer
const readBuf = Buffer.alloc(26);
for (var i = 0; i < 26; i++){
    readBuf[i] = i + 97;
}
console.log(readBuf.toString("ascii",0,5));

// buffer to JSON
const json = JSON.stringify(readBuf);
console.log(json);
const copy = JSON.parse(json,(key, value) => {
    return value && value.type == 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);

// concat buffer
const bufA = Buffer.from("hello");
const bufB = Buffer.from(" world");
const bufC = Buffer.concat([bufA, bufB]);
console.log(bufC.toString());

// buf.compare

// buf.copy

// buf.slice

// buf.length
