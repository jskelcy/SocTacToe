var express = require('express')
    , app = express()
    , server = require('http').createServer(app);


server.listen(3030);

var io= require('socket.io').listen(server);

var game= "null";

app.use(express.static('static'));


app.get('/', function(req, res){
    console.log('served the page yo')
    res.sendfile(__dirname + '/index.html');
});

var activeRooms=[];

function popCheck(roomId){
    console.log("POP");
    var pop = io.sockets.clients(roomId).length;
    if(pop == 2){
        console.log("returning a 1");
        return 1;
    }else{
        console.log("returning a 0");
        return 0;
    }
}

io.sockets.on('connection', function(socket){
    console.log('accepted connection');
    socket.on('join', function(value){
        game = "started";
        console.log(value);
    });
    socket.on('move', function(payload){
        console.log('moved');
        socket.broadcast.to(payload.roomId).emit('turn', payload);
    });
    socket.on('win', function(roomId){
        socket.broadcast.to(roomId).emit('winHandler', '');
    });
    socket.on('newJoin', function(roomId){
        if(activeRooms.indexOf(roomId) == -1){
        //new room
        socket.join(roomId);
        activeRooms.push(roomId);
        socket.emit('roomStatus',1);
        }else if(popCheck(roomId) ==0){
            //joining a room with one other person
            socket.join(roomId);
            socket.emit('roomStatus', 2);
        }else{
            //room is full
            socket.emit('roomStatus', 3);
        }
    });
});

