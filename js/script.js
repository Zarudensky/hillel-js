"use strict";

// const numbers = prompt('Enter numbers separated by commas\n\Example: 1, 2, 3, 4');
const numbers = ('1, 3, 2, .2, 1.38, 4, 3*5,не число,,0x34');

let arr = numbers.split(',').map(str => +str);
console.log(arr);

arr = arr.filter(item => item);
console.log(arr);

console.log('Max value: ' + Math.max(...arr));



const result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);
console.log('Sum: ' + result);

// const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);
// console.log(sum(arr));

console.log('Четные: ' + arr.filter(item => item % 2 === 0));