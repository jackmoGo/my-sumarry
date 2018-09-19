var events = require('events');

var startTime = 0;
var times = 3;

var render = function(results){
    console.log('All needs is ok! Total time: ' 
        + ((new Date()).getTime() - startTime));
    console.log(results);
}

var after = function (times, callback){
    var count = 0, results = {};
    return function (key, value){
        results[key] = value;
        count++;
        if (count === times){
            callback(results);
        }
    }
};

var done = after(times, render);
var emitter = new events.EventEmitter();

emitter.on("done", done);

var readFile = function(cb){
    console.log("reading template file");
    setTimeout(()=>{
        console.log("read template complete");
        cb("template file");
    }, 2000);
};

var dbQuery = function(cb){
    console.log("db querying");
    setTimeout(()=>{
        console.log("db query complete");
        cb("db data");
    }, 3000);
};

var l10nGet = function(cb){
    console.log("l10n getting");
    setTimeout(()=>{
        console.log("l10n get complete");
        cb("resources");
    }, 1000);
};

startTime = (new Date()).getTime();
readFile((value)=>{
    emitter.emit("done", "template", value);
});
dbQuery((value)=>{
    emitter.emit("done", "data", value);
});
l10nGet((value)=>{
    emitter.emit("done", "resources", value);
});