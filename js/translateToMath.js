// this function takes multiple arguments
// the last argument is the math phrase you want to translate
// all other arguments are variables

function mFunction(){
    var args = [].slice.call(arguments);
    var last = args.length-1;
    var body = translateToMath(args[last]);
    args.pop();

    return new Function(args,`return ${body};`);
}

function translateToMath(body){
    body = body.toLowerCase();

    translateKey = [
        [/pi/g,"Math.PI"],
        [/e/g,"Math.E"],
        [/abs/g,"Math.abs"],
        [/asin/g,"Math.asin"],
        [/acos/g,"Math.acos"],
        [/atan/g,"Math.atan"],
        [/sin/g,"Math.sin"],
        [/cos/g,"Math.cos"],
        [/tan/g,"Math.tan"],
        [/log/g,"Math.log"],
        [/ln/g,"Math.log"],
        [/sqrt/g,"Math.sqrt"],
        [/exp/g,"Math.exp"],
        [/\^/g,"**"],
        [/asin/g,"Math.asin"],
        [/arcsin/g,"Math.asin"],
        [/acos/g,"Math.acos"],
        [/arccos/g,"Math.acos"],
        [/atan/g,"Math.atan"],
        [/arctan/g,"Math.atan"],
        [/arccsc/g,"acsc"],
        [/arcsec/g,"asec"],
        [/arccot/g,"acot"],
        [/abs/g,"Math.abs"],
        [/acsc\(/g,"Math.asin(1.0/"],
        [/asec\(/g,"Math.acos(1.0/"],
        [/acot\(/g,"Math.atan(1.0/"],
        [/csc/g,"1.0/Math.sin"],
        [/sec/g,"1.0/Math.cos"],
        [/cot/g,"1.0/Math.tan"]
    ];

    translateKey.forEach(function(e){
        body = body.replace(e[0],e[1]);
    });

    return body;
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = {
        mFunction,
        translateToMath
    };
}