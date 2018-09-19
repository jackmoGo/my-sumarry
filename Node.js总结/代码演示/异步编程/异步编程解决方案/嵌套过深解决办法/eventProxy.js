var EventProxy = require('eventproxy');

var startTime = 0;
var proxy = new EventProxy();

proxy.all("template", "data", "resources", function(template, data, resources){
    console.log('All needs is ok! Total time: ' 
        + ((new Date()).getTime() - startTime));
    console.log(template, data, resources);
})


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
    proxy.emit("template", value);
});
dbQuery((value)=>{
    proxy.emit("data", value);
});
l10nGet((value)=>{
    proxy.emit("resources", value);
});