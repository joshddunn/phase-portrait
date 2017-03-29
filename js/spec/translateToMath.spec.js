var imports = require('../translateToMath.js');

describe("Basic parsing", () => {
    it("Translates all versions of pi/Pi/PI", () => {
        expect(imports.translateToMath('pi')).toEqual('Math.PI');
        expect(imports.translateToMath('Pi')).toEqual('Math.PI');
        expect(imports.translateToMath('PI')).toEqual('Math.PI');
    });

    it("Powers work", () => {
        expect(imports.translateToMath('2^(3^2)')).toEqual('2**(3**2)');
    });
});

describe("Translating to a function", () => {

    it("cos(x)", () => {
        var testFunc = new Function(['x'], 'return Math.cos(x);');
        var mFunction = imports.mFunction('x',"cos(x)");

        expect(mFunction(1)).toEqual(testFunc(1));
        expect(mFunction(0)).toEqual(testFunc(0));
        expect(mFunction(Math.PI)).toEqual(testFunc(Math.PI));
    });

    it("csc(x)", () => {
        var testFunc = new Function(['x'], 'return 1.0/Math.sin(x);');
        var mFunction = imports.mFunction('x',"csc(x)");

        expect(mFunction(1)).toEqual(testFunc(1));
        expect(mFunction(0)).toEqual(testFunc(0));
        expect(mFunction(Math.PI)).toEqual(testFunc(Math.PI));
    });

    it("acsc(x)", () => {
        var testFunc = new Function(['x'], 'return Math.asin(1.0/x);');
        var mFunction = imports.mFunction('x',"acsc(x)");

        expect(mFunction(2)).toEqual(testFunc(2));
        expect(mFunction(-5)).toEqual(testFunc(-5));
    });
});