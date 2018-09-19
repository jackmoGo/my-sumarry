var count = 0;
var results = {};
var startTime = 0;

var render = function(results){
    console.log('All needs is ok! Total time: ' 
        + ((new Date()).getTime() - startTime));
    console.log(results);
}

var done = function (key, value){
    results[key] = value;
    count++;
    if (count === 3){
        render(results);
    }
};

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
// readFile((value)=>{
//     done("template", value);
// });
// dbQuery((value)=>{
//     done("data", value);
// });
// l10nGet((value)=>{
//     done("resources", value);
// });

readFile((fileValue) => {
    done("template", fileValue);
    dbQuery((dbValue)=>{
        done("data", dbValue);
        l10nGet((value)=>{
            done("resources", value);
        });
    });
})