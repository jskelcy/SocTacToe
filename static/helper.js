function detectClick(x, y){
    if(y <= 134){
        if(x <= 134){//top left
            return 1;
        }
        if(x <= 268){//top middle
            return 2;
        }
        else{//top right
            return 3;
        }
    } else if(y <= 268){
        if(x <= 134){//middle left
            return 4;
        }
        if(x <= 268){//middle middle
            return 5;
        }
        else{//middle right
            return 6;
        }
    } else {
        if(x <= 134){//bottom left
            return 7;
        }
        if(x <= 268){//bottom middle
            return 8;
        }
        else{//bottom right
            return 9;
        }
    }
}

function winCheck(gameboard){
    var colCount = 0, rowCount = 0;
    var opponent;
    var tieCount = 0;
    (player == 1)? opponent =2: opponent=1;

    for(var i = 0; i < 3; i++){
        colCount = 0;
        rowCount = 0;
        for(var j = 0; j < 3; j++){
            var spot1= gameboard[i][j];
            var spot2= gameboard[j][i];
            if(spot1== opponent){
                colCount++;
            }
            if(spot1 > 0){
                tieCount++;
            }
            if(spot2 == opponent){
                rowCount++;
            }
        }
        console.log("tieCount=" +tieCount);
        if(rowCount == 3 || colCount == 3){
            return 0;
        }
    }
    if(gameboard[0][0] == opponent && gameboard[1][1] == opponent && gameboard[2][2] == opponent){
        return 0;
    }
    if(gameboard[0][2] == opponent && gameboard[1][1] == opponent && gameboard[2][0] == opponent){
        return 0;
    }
    if(tieCount ==9){
        return 1;
    }
    return 2;
}

function reset(gameboard){
    return([[0, 0 , 0],[0, 0, 0],[0, 0, 0]]);
}

            
function join(){
    div = document.getElementById("roomId");
    console.log(div);
    roomId  = div.value;
    if (roomId ==""){
        alert("stahp");
        }else{
        socket.emit('newJoin', roomId);
        console.log(roomId);
    }
}

