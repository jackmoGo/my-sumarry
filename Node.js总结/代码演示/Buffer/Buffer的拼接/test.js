var fs = require('fs');

// var rs = fs.createReadStream('test2.md');
var rs = fs.createReadStream('test2.md', {highWaterMark: 11});
rs.setEncoding('utf-8');

var data = '';
rs.on("data", function (chunk) {
    console.log(chunk);
    data += chunk;
});
rs.on("end", function (){
    console.log(data);
})