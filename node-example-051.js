const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
io.on('connection', socket => {
console.log('a new user is connected');
});
app.get('/', (req, res) => {
res.sendfile('indexS.html');
});
http.listen(3000, () => {
console.log('listening on *:3000');
});
