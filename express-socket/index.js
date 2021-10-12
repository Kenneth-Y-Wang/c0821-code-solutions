const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
app.use(express.static('public'));

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

io.on('connection', function (socket) {
  console.log('socket connected:', socket.id);
  io.emit('user connected');
  socket.on('chat', function (msg) {
    console.log(msg);
    io.emit('chat', msg);
  });

  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });
});
