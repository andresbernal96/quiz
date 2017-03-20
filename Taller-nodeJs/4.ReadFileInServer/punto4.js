
var http = require("http");
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("pagin.html", function (err, contents) {
        if (err) {
            console.log(err);
        } else {
            response.write(contents);
            response.end();
        }
    });
}).listen(8080);