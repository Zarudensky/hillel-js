"use strict";

// const numbers = prompt('Enter numbers separated by commas\n\Example: 1, 2, 3, 4');
// const numbers = ('1, 3, 2, .2, 1.38, 4, 0, 3*5,не число,,0x34');

// let arr = numbers.split(',').map(str => +str);
// console.log(arr);

// arr = arr.filter(item => item);
// console.log(arr);

// console.log('Max value: ' + Math.max(...arr));

// const result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0);
// console.log('Sum1: ' + result);

// const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);
// console.log('Sum2:' + sum(arr));

// const sumn = arr.reduce((res, el) => (res + el), 0);
// console.log('Sum3: ' + sumn);

// console.log('Четные: ' + arr.filter(item => item % 2 === 0));


let max = null;
let sum = 0;
const even = [];

const numbers = '1, 3, 2, .2, 1.38, 4, 0, 3*5,не число,,0x34'
    .split(',')
    .forEach(func);

console.log('Max: ' + max);
console.log('Sum: ' + sum);
console.log('Even: ' + even);

function func(val) {
    if (!isNaN(val) && val.trim() !== '') {
        val = Number(val);
        sum += val;

        if (max === null || max < val) {
            max = val;
        }
        if (val % 2 === 0) {
            even.push(val);
        }
    }
}

function callMe(item) {
    console.log('step1');
    if (item > 0) {
        callMe(item -1);
        console.log('step2');
    }
}
callMe(3);
console.log('step3');