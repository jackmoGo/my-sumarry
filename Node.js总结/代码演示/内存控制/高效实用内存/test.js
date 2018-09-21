// var foo = function (){
//     var local = "局部变量";
//     (function (){
//         console.log(local);
//     })();
// }

// var foo = function (){
//     (function (){
//         var local = "局部变量";
//     })();
//     console.log(local);
// }

var foo = function (){
    var bar = function (){
        var local = "局部变量";
        return function (){
            return local;
        };
    };
    var bar = bar();
    console.log(bar());
};

foo();