var events = require('events');
var util = require('util');

var Promise = function(){
    events.EventEmitter.call(this);
};

Promise.prototype.then = function (
    fulfilledHandler, errorHandler, progressHandler){
    if (typeof fulfilledHandler === 'function'){
        this.once('success', fuffilledHandler);
    }
    if (typeof errorHandler === 'function'){
        this.once('error', errorHandler);
    }
    if (typeof progressHandler === 'function'){
        this.once('progress', progressHandler);
    }
};

var Deferred = function(){
    this.state = 'unfulfilled';
    this.promise = new Promise();
};

Deferred.prototype.resolve = function(obj){
    this.state = 'fulfilled';
    this.promise.emit('success', obj);
};

Deferred.prototype.reject = function(err){
    this.state = 'failed';
    this.promise.emit('error', err);
};

Deferred.prototype.progress = function(data){
    this.promise.emit('progress', data);
};

var promisify = function(res){
    var deferred = new Deferred();
    var result = '';
    res.on('data', function(chunk){
        result += chunk;
        deferred.progress(chunk);
    });
    res.on('end', function(){
        deferred.resolve(result);
    });
    res.on('error', function(err){
        deferred.reject(err);
    });
    return deferred.promise;
};

promisify(res).then(function(){
    // Done
}, function(err){
    // Error
}, function(chunk){
    // progress
});