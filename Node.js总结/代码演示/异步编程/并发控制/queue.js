var async = require('async');
var fs = require('fs');

var q = async.queue(function (file, callback){
    fs.readFile(file, 'utf-8', callback);
}, 2);

q.drain = function (){
    console.log('finish');
};

fs.readdirSync('.').forEach(function (file){
    q.push(file, function (err, data){
        console.log(data);
    });
});
