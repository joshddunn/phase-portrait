function mathToCanvasX(x,xmin,xmax,margin,pwidth) {
    return margin+pwidth*(x - xmin)/Math.abs(xmax-xmin);
}

function mathToCanvasY(y,ymin,ymax,margin,pheight) {
    return margin+pheight-pheight*(y-ymin)/Math.abs(ymax-ymin);
}

function canvasToMathX(xPos,xmin,xmax,margin,pwidth) {
    return (xPos-margin)*Math.abs(xmax-xmin)/pwidth + xmin;
}

function canvasToMathY(yPos,ymin,ymax,margin,pheight) {
    return -(yPos-margin-pheight)*Math.abs(ymax-ymin)/pheight + ymin;
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = {
        mathToCanvasX,
        mathToCanvasY,
        canvasToMathX,
        canvasToMathY
    };
}