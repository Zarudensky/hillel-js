"use strict";

function createCalculator(operand) {
    return {
        add: value => operand + value,
        sub: value => operand - value,
        divide: value => operand / value,
        mult: value => operand * value,
        set: value => operand = value
    }
}

const calculator = createCalculator(10);

console.log(calculator.add(45)); // return 55 
console.log(calculator.sub(45)); // return -35 
console.log(calculator.divide(5)); // return 2 
console.log(calculator.mult(5)); // return 50 
console.log(calculator.set(100)); // sets the base value to 100 
console.log(calculator.mult(5)); // return 500