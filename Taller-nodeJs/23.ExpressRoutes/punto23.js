var express = require('express');
var app = express();

app.get('/tweets', function (req, res) {
    res.sendFile(__dirname + "/tweets.html");
}).listen(8080);
