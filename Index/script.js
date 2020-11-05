var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//CHUNK
var chunk = function (arr, n) {
    var charr = [];
    var sarr = __spreadArrays(arr);
    var size = Math.ceil(sarr.length / n);
    for (var i = 0; i < size; i++) {
        charr.push(sarr.splice(0, n));
    }
    console.log("Output of Chunk is:");
    console.log(charr);
};
chunk(['a', 'b', 'c', 'd'], 2);
//Sum
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        sum = sum + i;
    }
    console.log("output of Sum function is " + sum);
};
sum(1, 2, 3, 4, 5, 6);
//Reduce
var red = function (i, num) {
    return num + i;
};
var reduce = function (arr, fun, num) {
    var sparr = __spreadArrays(arr);
    for (var _i = 0, sparr_1 = sparr; _i < sparr_1.length; _i++) {
        var i = sparr_1[_i];
        num = fun(i, num);
    }
    console.log("output of Reduce function is " + num);
};
var array = [12, 23, 32];
reduce(array, red, 0);
//filter
var even = function (num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
};
var filter = function (arr, fun) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (fun(i)) {
            result.push(i);
        }
    }
    console.log("output of Filter function is " + result);
};
var fil = [12, 13, 15, 23, 33, 21, 33, 54, 32];
filter(fil, even);
//find
var fin = function (i, index) {
    if (index === void 0) { index = 0; }
    if (i % 2 === 0) {
        return true;
    }
    return false;
};
var find = function (arr, fi, ind) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var i = arr_2[_i];
        if (fi(i, ind)) {
            console.log("Output of Find Function is " + i);
            return;
        }
    }
    console.log("Output of Find Function is " + undefined);
};
var fin1 = [15, 57, 65, 23, 66];
find(fin1, fin, 0);
