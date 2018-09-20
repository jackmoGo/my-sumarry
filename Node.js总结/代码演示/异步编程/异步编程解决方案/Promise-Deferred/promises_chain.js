var Promise = function(){
    this.queue = [];
    this.isPromise = true;
}


var Deferred = function(){
    this.promise = new Promise();
}

