"use strict";
// 1
const a = prompt('What is your name?');
alert('Hello ' + a + '! Nice to meet you');

// 2
const valueFirst  = prompt('Enter the first value');
const valueSecond  = prompt('Enter the second value');

function calcAddition (valueFirst,valueSecond) {
    const resultAddition = Number(valueFirst) + Number(valueSecond);
    alert('Addition result: ' + valueFirst + ' + ' + valueSecond + ' = ' + resultAddition);
}

function calcSubtraction (valueFirst,valueSecond) {
    const resultSubtraction = Number(valueFirst) - Number(valueSecond);
    alert('Subtraction result: ' + valueFirst + ' - ' + valueSecond + ' = ' + resultSubtraction);
}

function calcMultiplication (valueFirst,valueSecond) {
    const resultMultiplication = Number(valueFirst) * Number(valueSecond);
    alert('Multiplication result: ' + valueFirst + ' * ' + valueSecond + ' = ' + resultMultiplication);
}

function calcDivision (valueFirst,valueSecond) {
    const resultDivision = Number(valueFirst) / Number(valueSecond);
    alert('Division result: ' + valueFirst + ' / ' + valueSecond + ' = ' + resultDivision);
}

calcAddition(valueFirst,valueSecond);
calcSubtraction(valueFirst,valueSecond);
calcMultiplication(valueFirst,valueSecond);
calcDivision(valueFirst,valueSecond);

// 3
function compileObject () {
    const person = {
        firstName: prompt('Enter your first name'),
        lastName: prompt('Enter your last name'),
        yearsOld: prompt('Enter your age'),
    }
    alert(`${person.firstName.toUpperCase()} ${person.lastName.toUpperCase()}, age ${person.yearsOld}`);
}
compileObject();