function drawArrow(x,y,theta) {
    var len = 20;

    var lenX = len*Math.cos(theta)/2;
    var lenY = len*Math.sin(theta)/2;

    var lenHead = len / 2;
    var arrowAngle = Math.PI/4;

    var lenHeadXm = lenHead*Math.cos(theta-Math.PI/2-arrowAngle);
    var lenHeadYm = lenHead*Math.sin(theta-Math.PI/2-arrowAngle);

    var lenHeadXp = lenHead*Math.cos(theta+Math.PI/2+arrowAngle);
    var lenHeadYp = lenHead*Math.sin(theta+Math.PI/2+arrowAngle);

    ctx.beginPath();

    ctx.moveTo(x-lenX,y+lenY);
    ctx.lineTo(x+lenX,y-lenY);
    ctx.moveTo(x+lenX,y-lenY);
    ctx.lineTo(x+lenX+lenHeadXm,y-lenY-lenHeadYm);
    ctx.moveTo(x+lenX,y-lenY);
    ctx.lineTo(x+lenX+lenHeadXp,y-lenY-lenHeadYp);
    
    ctx.stroke();
}