"use strict";

const numbers = prompt('Enter numbers separated by commas\nExample: 1, 2, 3, 4');

let arr = numbers.split(',').map(str => +str);
    arr = arr.filter(item => item);

const maxArr = Math.max(...arr);

const sumArr = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);

const evenArr = arr.filter(item => item % 2 === 0);

alert('Result:' +
'\n\   Max: ' + maxArr +
'\n\   Sum: ' + sumArr +
'\n\   Even: ' + evenArr);