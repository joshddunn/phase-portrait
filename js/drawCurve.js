function drawCurve(xPos,yPos) {
    var amount = 5000;
    var h = 0.1;

    var kx1, kx2, kx3, kx4;
    var ky1, ky2, ky3, ky4;
    var newX, newY, xLoc, yLoc;

    ctx.beginPath();
    var oldX;
    var oldY;

    ctx.strokeStyle="#FF0000";

    for (var i = 0; i < 2; i++){
        h = 0.1 - 0.2*i;

        oldX = canvasToMathX(xPos,xmin,xmax,margin/2,pwidth/2);
        oldY = canvasToMathY(yPos,ymin,ymax,margin/2,pheight/2);

        ctx.moveTo(mathToCanvasX(oldX,xmin,xmax,margin,pwidth),mathToCanvasY(oldY,ymin,ymax,margin,pheight));

        for (var j = 0; j < amount; j++){
            // Runge-Kutta algorithm
            kx1 = F(oldX,oldY);
            ky1 = G(oldX,oldY);
            
            kx2 = F(oldX+kx1*h/2,oldY+ky1*h/2);
            ky2 = G(oldX+kx1*h/2,oldY+ky1*h/2);

            kx3 = F(oldX+kx2*h/2,oldY+ky2*h/2);
            ky3 = G(oldX+kx2*h/2,oldY+ky2*h/2);

            kx4 = F(oldX+kx3*h,oldY+ky3*h);
            ky4 = G(oldX+kx3*h,oldY+ky3*h);

            newX = oldX + h*(kx1/6 + kx2/3 + kx3/3 + kx4/6);
            newY = oldY + h*(ky1/6 + ky2/3 + ky3/3 + ky4/6);

            xLoc = mathToCanvasX(newX,xmin,xmax,margin,pwidth);
            yLoc = mathToCanvasY(newY,ymin,ymax,margin,pheight);

            if (xLoc >= margin && xLoc <= margin+pwidth && yLoc >= margin && yLoc <= margin+pheight){
                ctx.lineTo(xLoc,yLoc);
            } else {
                ctx.moveTo(xLoc,yLoc);
            }

            oldX = newX;
            oldY = newY;
        }
    }

    ctx.stroke();
}