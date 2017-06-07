var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static('public'));

app.get('/notes', function(req, res) {
  res.json([{}, {}]);
});

io.on('connection', function (socket) {
  socket.emit('answers', { hello: 'world' });
  socket.on('gum', function (data) {
    console.log(data);
  });
});
