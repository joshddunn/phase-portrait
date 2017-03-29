function drawPhasePlane() {
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle="#000000";

    var steps = 20;
    var xstep = (xmax-xmin)/steps;
    var ystep = (ymax-ymin)/steps;

    F = mFunction("x","y",dxdt);
    G = mFunction("x","y",dydt);

    for (var i = 0; i <= steps; i++){
        for (var j = 0; j <= steps; j++){
            var x = xmin + j*xstep;
            var y = ymin + i*ystep;

            var xPlot = mathToCanvasX(x,xmin,xmax,margin,pwidth);
            var yPlot = mathToCanvasY(y,ymin,ymax,margin,pheight);

            drawArrow(xPlot,yPlot,Math.atan2(G(x,y),F(x,y)));
        }
    }

    ctx.rect(margin,margin,pwidth,pheight);
    ctx.stroke();

    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText(xlabel,500,980,1000);
    ctx.save();

    ctx.translate(c.width - 1, 0 );
    ctx.rotate(-Math.PI/2);
    ctx.fillText(ylabel,-500,-950,1000);

    ctx.restore();
}