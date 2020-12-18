"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = exports.e = exports.fact = exports.log = exports.pow = exports.sqrt = exports.mul = exports.div = exports.sub = exports.add = void 0;
var precisionDefaultValue = 2;
var pi = Math.PI;
//ADDING ELEMENTS
var add = function (array) {
    var add = 0;
    array.forEach(function (el) {
        add += el;
    });
    return add;
};
exports.add = add;
//SUBTRACTING ELEMENTS
var sub = function (array) {
    var sub = array[0];
    for (var i = 1; i < array.length; i++) {
        sub -= array[i];
    }
    return sub;
};
exports.sub = sub;
//DIVIDING ELEMENTS
var div = function (array, precision) {
    if (precision === void 0) { precision = precisionDefaultValue; }
    var div = array[0];
    for (var i = 1; i < array.length; i++) {
        div /= array[i];
    }
    return parseFloat(div.toPrecision(precision));
};
exports.div = div;
//MULTIPLYING ELEMENTS
var mul = function (array) {
    var mult = 1;
    for (var i = 0; i < array.length; i++) {
        mult *= array[i];
    }
    return mult;
};
exports.mul = mul;
//SQUARE ROOT
var sqrt = function (value, precision) {
    if (precision === void 0) { precision = precisionDefaultValue; }
    if (value > 0)
        return parseFloat(Math.sqrt(value).toFixed(precision));
    else
        return parseFloat(Math.sqrt(-1 * value).toFixed(precision)) + "i";
};
exports.sqrt = sqrt;
//POWER
var pow = function (a, b, precision) {
    if (precision === void 0) { precision = precisionDefaultValue; }
    return parseFloat(Math.pow(a, b).toFixed(precision));
};
exports.pow = pow;
//LOGARITHM
var log = function (value, base, precision) {
    if (base === void 0) { base = 10; }
    if (precision === void 0) { precision = precisionDefaultValue; }
    return parseFloat((Math.log(value) / Math.log(base)).toFixed(precision));
};
exports.log = log;
//FACTORIAL
var fact = function (value) {
    if (value % 1 !== 0) {
        throw new Error("Factorial can be computed only for integers!");
    }
    var fact = 1;
    for (var i = value; i > 0; i--) {
        fact *= i;
    }
    return fact;
};
exports.fact = fact;
//E function
var e = function (exponent, precision) {
    if (precision === void 0) { precision = precisionDefaultValue; }
    return parseFloat(Math.exp(exponent).toFixed(precision));
};
exports.e = e;
//Modulus Operator
var mod = function (a, b, precision) {
    if (precision === void 0) { precision = precisionDefaultValue; }
    return parseFloat((a % b).toFixed(precision));
};
exports.mod = mod;
