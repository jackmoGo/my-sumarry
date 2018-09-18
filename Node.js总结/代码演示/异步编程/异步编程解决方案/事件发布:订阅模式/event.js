
const Emitter = require('events');

var emitter = new Emitter();

emitter.on("event1", function(message){
    console.log(message);
});

emitter.emit('event1', "I am message!");