"use strict";

let valueAction;
let valueFirst;
let valueSecond;

while (true) {
    valueAction = prompt('What action do you want to do?\n\Enter one of the values: +, -, *, /');
    if (valueAction === '+' || valueAction === '-' || valueAction === '*' || valueAction === '/') break;
}

do {
    valueFirst = prompt('Enter the first value (Number)');
} while (isNaN(valueFirst));

do {
    valueSecond = prompt('Enter the second value (Number)');
} while (isNaN(valueSecond));

valueFirst = Number(valueFirst);
valueSecond = Number(valueSecond);

function calcAddition (valueFirst,valueSecond) {
    const resultAddition = valueFirst + valueSecond;
    alert('Addition result: ' + valueFirst + ' + ' + valueSecond + ' = ' + resultAddition);
}

function calcSubtraction (valueFirst,valueSecond) {
    const resultSubtraction = valueFirst - valueSecond;
    alert('Subtraction result: ' + valueFirst + ' - ' + valueSecond + ' = ' + resultSubtraction);
}

function calcMultiplication (valueFirst,valueSecond) {
    const resultMultiplication = valueFirst * valueSecond;
    alert('Multiplication result: ' + valueFirst + ' * ' + valueSecond + ' = ' + resultMultiplication);
}

function calcDivision (valueFirst,valueSecond) {
    const resultDivision = valueFirst / valueSecond;
    alert('Division result: ' + valueFirst + ' / ' + valueSecond + ' = ' + resultDivision);
}

switch(valueAction){
    case '+': 
        calcAddition(valueFirst,valueSecond);
    break;
    case '-':
        calcSubtraction(valueFirst,valueSecond);
    break;
    case '*':
        calcMultiplication(valueFirst,valueSecond);
    break;
    case '/':
        calcDivision(valueFirst,valueSecond);
    break;
}

// The same method as the "switch" using "if"

// if (valueAction === '+') {
//     calcAddition(valueFirst,valueSecond);
// }else if (valueAction === '-') {
//     calcSubtraction(valueFirst,valueSecond);
// } else if (valueAction === '*') {
//     calcMultiplication(valueFirst,valueSecond);
// } else if (valueAction === '/') {
//     calcDivision(valueFirst,valueSecond);
// }