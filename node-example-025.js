const fs = require('fs')
const watcher = fs.watch('/home/kafi/Documents/college/cmpu-375/node-tutorial')
watcher.on('change', function(event, filename) {
console.log(`${event} on file ${filename}`)
})
