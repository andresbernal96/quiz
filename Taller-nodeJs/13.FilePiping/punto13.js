var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.on('readable', function () {
    
    file.pipe(process.stdout);
});
