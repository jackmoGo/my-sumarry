var async = require('async');
var fs = require('fs');

// async.series([
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     }
// ], function (err, results){
//     console.log(results);
// });

// async.parallel([
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     }
// ], function (err, results){
//     console.log(results);
// });

async.waterfall([
    function (callback){
        fs.readFile('file1.txt', 'utf-8', function (err, content){
            callback(err, content);
        });
    },
    function (arg1, callback){
        fs.readFile(arg1, 'utf-8', function (err, content){
            callback(err, content);
        });
    },
    function (arg1, callback){
        fs.readFile(arg1, 'utf-8', function (err, content){
            callback(err, content);
        });
    }
], function (err, result){
    console.log(result);
});