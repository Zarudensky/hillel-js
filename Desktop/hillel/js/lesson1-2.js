"use strict";

const name = 'Alex';
// console.log(`Hello ${name}`);

let person = {
    name: 'Alex',
    ege: 32,
    adress: {
        city: 'Dnipro',
        country: 'Ua'
    },
    username: 'Grib',
    'project-role': 'techer'
}
// console.log(person);
// console.log(`Name - ${person.name}`);
// console.log(`City - ${person.adress.city}`);
// console.log(`Country - ${person['adress'].country}`);
// console.log(`Project-Role - ${person['project-role']}`);

const newText = 'it is a new text';
// console.log(newText.toUpperCase());

const a = 10.568;
const b = 20.45;
const c = 0.568;
const d = '10.68';
// console.log(Math.max(a,b,c));
// console.log(Math.round(Math.max(a,b,c)));
// console.log(Math.round(Math.max(a,b,c) * 10) / 10);

let result = Math.max(a,b,c);
result = Math.round(result * 10) / 10;
// console.log(result);

// console.log(d, +d); // не явное преобразование
// console.log(Number(d)); // явное преобразование

// console.log(d, !d); // не явное преобразование
// console.log(d, !!d); // не явное преобразование
// console.log(Boolean(d)); // явное преобразование

// console.log(a,'' + a); // не явное преобразование
// console.log(String(a)); // явное преобразование

function sayHi(youName, myName) {
    alert('Hello ' + youName);
    alert('How are you?');
    alert('My name is ' + myName);
}

function sayBye() {
    alert('Bye!');
}

// sayHi('Rob');
// sayBye();
// sayHi('Ben');
// sayBye();
// sayHi('John', 'Marry');