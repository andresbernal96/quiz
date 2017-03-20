var fs = require("fs");
    fs.readFile("pagina.html", function (err, contents) {
    console.log(contents.toString());
});