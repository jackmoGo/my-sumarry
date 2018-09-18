var events = require('events');
var util = require('util');

function MyEvent(){
    events.EventEmitter.call(this);
}

util.inherits(MyEvent, events.EventEmitter);

var myEvent = new MyEvent();
myEvent.on('test', function(msg){
    console.log(msg);
});
myEvent.emit('test', 'hello world');