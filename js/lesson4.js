"use strict";

// // function declaration
// function f() {
//     alert ('f');
// }

// // function express
// const h = function() {
//     alert ('h');
// }

// // стрелочная функция
// const arrow = (a,b) => {
//     alert(2 + 3);
// }


// function fu (a,b) {
//     return a+b;
// }
// fu(2,3);

// const global = '23';
// function f(a) {
//     const b = 5;
//     return a + b = global;    
// }
// const result = f(10);

// Масивы
const arr = [1,2,34];

// arr.push('test');
// arr.pop();
// arr.shift();
// arr.unshift();


const iterate = function(item) {
    console.log(item);
}
arr.forEach(iterate);

// то же самое что и forEach
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// то же самое, упрощенный синтаксис
arr.forEach(function(item) {
    console.log(item);
});

// то же самое с стрелочной функцией, упрощенный синтаксис
arr.forEach((item) => {
    console.log(item);
});

// то же самое с стрелочной функцией, еще проще
arr.forEach(item => console.log(item));

// не работает проверить дома. Не разобрался! видео2 - 30 мин
// const f = str => 'Hello' + str;
// const f = function(str) {
//     return 'Hello' + str;
// }
// function f(str) {
//     return 'Hello' + str;    
// }

// const newarr = arr.map(item => item + 10);
// console.log(newarr);

const contlist = [
    {
        name: 'Alex',
        lastname: 'Beng'
    },
    {
        name: 'Elen',
        lastname: 'Koleso'
    }
];
contlist.forEach(item => console.log(item));

// не работает проверить дома
// const namelist = contlist.mop(item =>{
//     return item.name;
// });