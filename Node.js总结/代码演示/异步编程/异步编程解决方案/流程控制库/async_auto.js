var async = require('async');

var deps = {
    readConfig: function (callback){
        console.log('read config file');
        callback();
    },
    connectMongoDB: ['readConfig', function (res, callback){
        console.log('connect to mongodb');
        callback();
    }],
    connectRedis: ['readConfig', function (res, callback){
        console.log('connect to redis');
        callback();
    }],
    compileAsserts: function (callback){
        console.log('conpile asserts');
        callback();
    },
    uploadAsserts: ['compileAsserts', function (res, callback){
        console.log('upload to assert');
        callback();
    }],
    startup: ['connectMongoDB', 'connectRedis', 'uploadAsserts', function (res, callback){
        console.log('startup');
    }]
};

async.auto(deps);