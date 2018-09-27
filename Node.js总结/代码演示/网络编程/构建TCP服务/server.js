var net = require('net');

var server = net.createServer(function (socket){
    socket.on('data', function (data){
        socket.write("你好");
    });
    socket.on('end', function (){
        console.log("连接断开");
    });
    socket.on('error', function(err){
        console.log(err);
    });
    socket.write("欢迎光临《深入浅出Node.js》示例：\n");
})

server.listen(8124, function (){
    console.log('server bound');
});

// server.listen('/tmp/echo1.sock', function (){
//     console.log('server bound');
// });