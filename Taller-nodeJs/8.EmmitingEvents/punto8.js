var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
var users = [];
var chatlog = [];

chat.on('message', function(message) {
    chatlog.push(message);
});

chat.on('join', function(nickname) {
    users.push(nickname);
});

chat.emit("join", "hola");
chat.emit("message", "mensaje");
