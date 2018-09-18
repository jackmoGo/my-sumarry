var toString = Object.prototype.toString;

var isString = function(obj){
    return toString.call(obj) == '[object String]';
};

var isFunction = function(obj){
    return toString.call(obj) == '[object Function]';
};

console.log(isString('jackmo'));
var a = function(){
    return 2;
};
console.log(isFunction(a));

var isType = function(type){
    return function (obj){
        return toString.call(obj) == '[object ' + type + ']';
    };
};

var isString2 = isType('String');
var isFunction2 = isType('Function');

console.log(isString2('jackmo'));
var a = function(){
    return 2;
};
console.log(isFunction2(a));