function drawCircle(num, ctx){
    if(num == 1){//top left
        ctx.beginPath();
        ctx.arc(67, 67, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 2){//top middle
        ctx.beginPath();
        ctx.arc(201, 67, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 3){//top right
        ctx.beginPath();
        ctx.arc(335, 67, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 4){//middle left
        ctx.beginPath();
        ctx.arc(67, 201, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 5){//middle middle
        ctx.beginPath();
        ctx.arc(201, 201, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 6){//middle right
        ctx.beginPath();
        ctx.arc(335, 201, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 7){//bottom left
        ctx.beginPath();
        ctx.arc(67, 335, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 8){//bottom middle
        ctx.beginPath();
        ctx.arc(201, 335, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }else if(num == 9){//bottom right
        ctx.beginPath();
        ctx.arc(335, 335, 50, 150, 0, 2 * Math.PI, false);
        ctx.lineWidth = 5;
        ctx.stroke();
    }
}

function drawX(num, ctx){
    ctx.lineWidth=2;
    if(num == 1){//top left
        ctx.beginPath();
        ctx.moveTo(42, 42);
        ctx.lineTo(92, 92);
        ctx.stroke();
        ctx.moveTo(42, 92);
        ctx.lineTo(92, 42);
        ctx.stroke();
    }else if(num == 2){//top middle
        ctx.beginPath();
        ctx.moveTo(176, 42);
        ctx.lineTo(226, 92);
        ctx.stroke();
        ctx.moveTo(176, 92);
        ctx.lineTo(226, 42);
        ctx.stroke();
    }else if(num == 3){//top right
        ctx.beginPath();
        ctx.moveTo(310, 42);
        ctx.lineTo(360, 92);
        ctx.stroke();
        ctx.moveTo(310, 92);
        ctx.lineTo(360, 42);
        ctx.stroke();
    }else if(num == 4){//middle left
        ctx.beginPath();
        ctx.moveTo(42, 176);
        ctx.lineTo(92, 226);
        ctx.stroke();
        ctx.moveTo(42, 226);
        ctx.lineTo(92, 176);
        ctx.stroke();
    }else if(num == 5){//middle middle
        ctx.beginPath();
        ctx.moveTo(176, 176);
        ctx.lineTo(226, 226);
        ctx.stroke();
        ctx.moveTo(176, 226);
        ctx.lineTo(226, 176);
        ctx.stroke();
    }else if(num == 6){//middle right
        ctx.beginPath();
        ctx.moveTo(310, 176);
        ctx.lineTo(360, 226);
        ctx.stroke();
        ctx.moveTo(310, 226);
        ctx.lineTo(360, 176);
        ctx.stroke();
    }else if(num == 7){//bottom left
        ctx.beginPath();
        ctx.moveTo(42, 310);
        ctx.lineTo(92, 360);
        ctx.stroke();
        ctx.moveTo(42, 360);
        ctx.lineTo(92, 310);
        ctx.stroke();
    }else if(num == 8){//bottom middle
        ctx.beginPath();
        ctx.moveTo(176, 310);
        ctx.lineTo(226, 360);
        ctx.stroke();
        ctx.moveTo(176, 360);
        ctx.lineTo(226, 310);
        ctx.stroke();
    }else if(num == 9){//bottom right
        ctx.beginPath();
        ctx.moveTo(310, 310);
        ctx.lineTo(360, 360);
        ctx.stroke();
        ctx.moveTo(310, 360);
        ctx.lineTo(360, 310);
        ctx.stroke();
    }
}

function drawBoard(ctx){
    ctx.fillStyle='#FFFFFF';
    canvas.width =402;
    canvas.height = 402;
    ctx.lineWidth=10;
    ctx.beginPath();
    ctx.moveTo(134,0);
    ctx.lineTo(135,402);
    ctx.moveTo(268,0);
    ctx.lineTo(268,402);

    ctx.moveTo(0,134);
    ctx.lineTo(402,134);

    ctx.moveTo(0,268);
    ctx.lineTo(402,268);

    ctx.stroke();
}

