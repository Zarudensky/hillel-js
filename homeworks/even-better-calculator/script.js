"use strict";

let operator;
let amount;
let operand;
let operandsList = [];
let result;

do {
    operator = prompt('Enter operator (+,-,*,/)');
} while (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
);

do {
    amount = prompt('Enter amount (1 - 5)');
} while (isNaN(amount) || amount < 1 || amount > 5);

function enterOperand(item) {
    if (item > 0) {
        enterOperand(item -1);

        do {
            operand = prompt('Enter operand');
        } while (isNaN(operand) || operand === '');

        operand = Number(operand);

        operandsList.push(operand);
    }
}
enterOperand(amount);

switch (operator) {
    case '+':
        result = operandsList.reduce((total, num) => total + num);
        break;
    case '-':
        result = operandsList.reduce((total, num) => total - num);
        break;
    case '*':
        result = operandsList.reduce((total, num) => total * num);
        break;
    case '/':
        result = operandsList.reduce((total, num) => total / num);
        break;
}

alert(operandsList.join(operator) + '=' + result);