
const http = require('http');

var options = {
    host: 'www.baidu.com',
    prot: 80,
    path: '/upload',
    method: 'POST'
};

var req = http.request(options, function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('BODY: ' + chunk);
    });
    res.on('end', function(){
        // todo
    });
});
console.log('req');
req.write('data\n');
req.write('data\n');
req.end();