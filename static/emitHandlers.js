var socket = io.connect('/');
//emits room join 

socket.on('turn', function(payload){
    console.log("turn");
    gameboard = payload.gameboard;
    console.log(gameboard);
    yourTurn = 1;
    if(player == 1){
        drawCircle(payload.changed, ctx);
    }
    else{
        drawX(payload.changed, ctx);
    }
    var winStatus = winCheck(gameboard);
    if(winStatus == 0){
        socket.emit('win', roomId);
        alert("You lose, better luck next time");
        clearBoard(ctx);
        drawBoard(ctx);
        gameboard = reset();
        yourTurn = 0;

    }
    if(winStatus == 1){
        socket.emit('tie', roomId);
        alert("The game has ended in a Draw");
        clearBoard(ctx);
        drawBoard(ctx);
        gameboard = reset();
    }
    turnDis.innerText = "Make your move"
});

socket.on('winHandler', function(payload){
        alert("You win, I always knew you could do it.");
        clearBoard(ctx);
        drawBoard(ctx);
        gameboard = reset();
        yourTurn = 1;
});

socket.on('tieHandler', function(payload){
    alert("The game has ended in a Draw")
    clearBoard(ctx);
    drawBoard(ctx);
    reset(gameboard);
});

socket.on('disconnect', function(value){
    turnDis.innerText = "Other player has disconnected";
    clearBoard(ctx);
    drawBoard(ctx);
    reset(gameboard);
});

//handles server room status
socket.on('roomStatus', function(status){
        switch(status){
            case 1:
                player =1;
                yourTurn = 1;
                turnDis.innerText= "Waiting for other player";
                break;
            case 2:
                player =2;
                yourTurn = 0;
                turnDis.innerText = "Room joined, waiting for other player to move"
                break;
            case 3:
                alert("Room Colsed");
                window.location.reload();
        }
});