var imports = require('../coordinates.js');

describe('Testing math to canvas coordinate converter', () => {

    it('mathToCanvasX: negative xmin, positive xmax', () => {
        var xmin = -5, xmax = 5, margin = 100, pwidth = 800;
        expect(imports.mathToCanvasX(xmin,xmin,xmax,margin,pwidth)).toEqual(margin);
        expect(imports.mathToCanvasX(xmax,xmin,xmax,margin,pwidth)).toEqual(margin+pwidth);
        expect(imports.mathToCanvasX(0.5*(xmin+xmax),xmin,xmax,margin,pwidth)).toEqual(margin+pwidth/2);
    });

    it('mathToCanvasX: negative xmin, negative xmax', () => {
        var xmin = -5, xmax = -2, margin = 100, pwidth = 800;
        expect(imports.mathToCanvasX(xmin,xmin,xmax,margin,pwidth)).toEqual(margin);
        expect(imports.mathToCanvasX(xmax,xmin,xmax,margin,pwidth)).toEqual(margin+pwidth);
        expect(imports.mathToCanvasX(0.5*(xmin+xmax),xmin,xmax,margin,pwidth)).toEqual(margin+pwidth/2);
    });

    it('mathToCanvasX: positive xmin, positive xmax', () => {
        var xmin = 2, xmax = 5, margin = 100, pwidth = 800;
        expect(imports.mathToCanvasX(xmin,xmin,xmax,margin,pwidth)).toEqual(margin);
        expect(imports.mathToCanvasX(xmax,xmin,xmax,margin,pwidth)).toEqual(margin+pwidth);
        expect(imports.mathToCanvasX(0.5*(xmin+xmax),xmin,xmax,margin,pwidth)).toEqual(margin+pwidth/2);
    });

    it('mathToCanvasY:  negative ymin, positive ymax', () => {
        var ymin = -5, ymax = 5, margin = 100, pheight = 800;
        expect(imports.mathToCanvasY(ymin,ymin,ymax,margin,pheight)).toEqual(margin+pheight);
        expect(imports.mathToCanvasY(ymax,ymin,ymax,margin,pheight)).toEqual(margin);
        expect(imports.mathToCanvasY(0.5*(ymin+ymax),ymin,ymax,margin,pheight)).toEqual(margin+pheight/2);
    });

    it('mathToCanvasY:  negative ymin, negative ymax', () => {
        var ymin = -5, ymax = -2, margin = 100, pheight = 800;
        expect(imports.mathToCanvasY(ymin,ymin,ymax,margin,pheight)).toEqual(margin+pheight);
        expect(imports.mathToCanvasY(ymax,ymin,ymax,margin,pheight)).toEqual(margin);
        expect(imports.mathToCanvasY(0.5*(ymin+ymax),ymin,ymax,margin,pheight)).toEqual(margin+pheight/2);
    });

    it('mathToCanvasY:  positive ymin, positive ymax', () => {
        var ymin = 2, ymax = 5, margin = 100, pheight = 800;
        expect(imports.mathToCanvasY(ymin,ymin,ymax,margin,pheight)).toEqual(margin+pheight);
        expect(imports.mathToCanvasY(ymax,ymin,ymax,margin,pheight)).toEqual(margin);
        expect(imports.mathToCanvasY(0.5*(ymin+ymax),ymin,ymax,margin,pheight)).toEqual(margin+pheight/2);
    });
});

describe('Testing canvas to math coordinate converter', () => {
    it('canvasToMathX: negative xmin, positive xmax', () => {
        var xmin = -5, xmax = 5, margin = 100, pwidth = 800;
        expect(imports.canvasToMathX(margin,xmin,xmax,margin,pwidth)).toEqual(xmin);
        expect(imports.canvasToMathX(margin+pwidth,xmin,xmax,margin,pwidth)).toEqual(xmax);
        expect(imports.canvasToMathX(margin+pwidth/2,xmin,xmax,margin,pwidth)).toEqual(0.5*(xmin+xmax));
    });

    it('canvasToMathX: negative xmin, negative xmax', () => {
        var xmin = -5, xmax = -2, margin = 100, pwidth = 800;
        expect(imports.canvasToMathX(margin,xmin,xmax,margin,pwidth)).toEqual(xmin);
        expect(imports.canvasToMathX(margin+pwidth,xmin,xmax,margin,pwidth)).toEqual(xmax);
        expect(imports.canvasToMathX(margin+pwidth/2,xmin,xmax,margin,pwidth)).toEqual(0.5*(xmin+xmax));
    });

    it('canvasToMathX: positive xmin, positive xmax', () => {
        var xmin = 2, xmax = 5, margin = 100, pwidth = 800;
        expect(imports.canvasToMathX(margin,xmin,xmax,margin,pwidth)).toEqual(xmin);
        expect(imports.canvasToMathX(margin+pwidth,xmin,xmax,margin,pwidth)).toEqual(xmax);
        expect(imports.canvasToMathX(margin+pwidth/2,xmin,xmax,margin,pwidth)).toEqual(0.5*(xmin+xmax));
    });

    it('canvasToMathY: negative ymin, positive ymax', () => {
        var ymin = -5, ymax = 5, margin = 100, pheight = 800;
        expect(imports.canvasToMathY(margin,ymin,ymax,margin,pheight)).toEqual(ymax);
        expect(imports.canvasToMathY(margin+pheight,ymin,ymax,margin,pheight)).toEqual(ymin);
        expect(imports.canvasToMathY(margin+pheight/2,ymin,ymax,margin,pheight)).toEqual(0.5*(ymin+ymax));
    });

    it('canvasToMathY: negative ymin, negative ymax', () => {
        var ymin = -5, ymax = -2, margin = 100, pheight = 800;
        expect(imports.canvasToMathY(margin,ymin,ymax,margin,pheight)).toEqual(ymax);
        expect(imports.canvasToMathY(margin+pheight,ymin,ymax,margin,pheight)).toEqual(ymin);
        expect(imports.canvasToMathY(margin+pheight/2,ymin,ymax,margin,pheight)).toEqual(0.5*(ymin+ymax));
    });

    it('canvasToMathY: positive ymin, positive ymax', () => {
        var ymin = 2, ymax = 5, margin = 100, pheight = 800;
        expect(imports.canvasToMathY(margin,ymin,ymax,margin,pheight)).toEqual(ymax);
        expect(imports.canvasToMathY(margin+pheight,ymin,ymax,margin,pheight)).toEqual(ymin);
        expect(imports.canvasToMathY(margin+pheight/2,ymin,ymax,margin,pheight)).toEqual(0.5*(ymin+ymax));
    });
});