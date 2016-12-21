//Test for chat utility in node js

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(request, response){
    //response.send('<h1>Hello Guest</h1>');
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
    console.log('Listening for connections on port 3000');
});




