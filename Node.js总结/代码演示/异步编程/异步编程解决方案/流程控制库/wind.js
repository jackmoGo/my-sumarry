var Wind = require('wind');

var compare = function (x, y){
    return x - y;
};

var print = function (a){
    console.log('printing', a);
}

var swapAsync = eval(Wind.compile("async", function (a, i, j){
    $await(Wind.Async.sleep(20));
    var t = a[i]; a[i] = a[j]; a[j] = t;
    print(a);
}));

var bubbleSort = eval(Wind.compile("async", function (array){
    for (var i = 0; i < array.length; ++i){
        for (var j = 0; j < array.length - i - 1; j++){
            if (compare(array[j], array[j + 1]) > 0){
                $await(swapAsync(array, j, j + 1));
            }
        }
    }
}));

bubbleSort([4,5,6,8,1,2]);