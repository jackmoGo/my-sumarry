var iconv = require('iconv-lite');
var fs = require('fs');

var chunks = [];
var size = 0;

var rs = fs.createReadStream('test2.md', {highWaterMark: 11});

rs.on('data', function (chunk){
    chunks.push(chunk);
    size += chunk.length;
});
rs.on('end', function (){
    var buf = Buffer.concat(chunks, size);
    var str = iconv.decode(buf, 'utf8');
    console.log(str);
});