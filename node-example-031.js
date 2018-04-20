const fs = require('fs');
var sourceFile = fs.createReadStream('/home/kafi/Documents/college/cmpu-375/node-tutorial/index.html');
var destinationFile = fs.createWriteStream('/home/kafi/index.html');
sourceFile.on('data', function(chunk) {
destinationFile.write(chunk);
});
