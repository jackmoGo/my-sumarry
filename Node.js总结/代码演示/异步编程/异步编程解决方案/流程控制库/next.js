var utils = require('utils');
var events = require('events');

function createServer(){
    function app(req, res){
        app.handle(req, res);
    }
    utils.merge(app, proto);
    utils.merge(app, events.EventEmitter.prototype);
    app.route = '/';
    app.stack = [];
    for (var i = 0; i < arguments.length; ++i){
        app.use(arguments[i]);
    }
    return app;
}