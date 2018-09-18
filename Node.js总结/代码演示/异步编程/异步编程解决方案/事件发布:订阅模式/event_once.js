var events = require('events');
var proxy = new events.EventEmitter();

var db_select = function(cb){
    console.log('db selecting');
    setTimeout(function(){
        cb('ok');
    }, 2000);
};

var status = 'ready';

// var select = function(cb){
//     console.log('db select begin');
//     db_select(function(result){
//         if (result == 'ok'){
//             console.log('db select ok');
//             cb('ok');
//         }
//     });
// };

// var select = function(cb){
//     if (status == 'ready'){
//         status = 'pending';
//         console.log('db select begin');
//         db_select(function(result){
//             if (result == 'ok'){
//                 console.log('db select ok');
//                 status = 'ready';
//                 cb('ok');
//             }
//         });
//     }
// };

var select = function(cb){
    proxy.once('selected', cb);
    if (status == 'ready'){
        status = 'pending';
        console.log('db select begin');
        db_select(function(result){
            if (result == 'ok'){
                console.log('db select ok');
                status = 'ready';
                proxy.emit('selected', 'ok')
            }
        });
    }
};

select(function(result){
    console.log('ok!!!');
});
select(function(result){
    console.log('ok!!!');
});
select(function(result){
    console.log('ok!!!');
});
