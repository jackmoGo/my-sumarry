var async = require('async');
var fs = require('fs');

var start = (new Date()).getTime();

// async.parallel([
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     },
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     },
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     },
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     },
//     function(callback){
//         fs.readFile('file1.txt', 'utf-8', callback);
//     },
//     function (callback){
//         fs.readFile('file2.txt', 'utf-8', callback);
//     }
// ], function (err, results){
//     console.log(results, (new Date()).getTime() - start);
// });

async.parallelLimit([
    function(callback){
        fs.readFile('file1.txt', 'utf-8', callback);
    },
    function (callback){
        fs.readFile('file2.txt', 'utf-8', callback);
    },
    function(callback){
        fs.readFile('file1.txt', 'utf-8', callback);
    },
    function (callback){
        fs.readFile('file2.txt', 'utf-8', callback);
    },
    function(callback){
        fs.readFile('file1.txt', 'utf-8', callback);
    },
    function (callback){
        fs.readFile('file2.txt', 'utf-8', callback);
    },
    function(callback){
        fs.readFile('file1.txt', 'utf-8', callback);
    },
    function (callback){
        fs.readFile('file2.txt', 'utf-8', callback);
    },
    function(callback){
        fs.readFile('file1.txt', 'utf-8', callback);
    },
    function (callback){
        fs.readFile('file2.txt', 'utf-8', callback);
    }
], 1, function (err, results){
    console.log(results, (new Date()).getTime() - start);
});
