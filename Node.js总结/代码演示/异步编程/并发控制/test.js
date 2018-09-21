var async = require('async');

for (var i = 0; i < 10000; i++){
    async.series([
    function(callback){
        setTimeout(() => {
            console.log('test1');
        }, 2000);
    },
    function (callback){
        setTimeout(() => {
            console.log('test2');
        }, 2000);
    }], function (err, results){
        console.log('test3');
    });
}