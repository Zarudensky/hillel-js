"use strict";

let valueFirst  = prompt('Enter the first value');
let valueSecond  = prompt('Enter the second value');

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

calcAddition(valueFirst,valueSecond);
calcSubtraction(valueFirst,valueSecond);
calcMultiplication(valueFirst,valueSecond);
calcDivision(valueFirst,valueSecond);