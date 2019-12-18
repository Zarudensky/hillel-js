"use strict";

// const a = 10;
// const b = 20;
// let result;

// if (a==10) {
//     result = 'rsult is 10';
// } else {
//     result = 'rsult is not 10';
// }

// result = (a == 10)? 'rsult is 10' : 'rsult is not 10'
// alert(result);

// switch(a){
//     case 10: 
//         alert('a is 10');
//     break;
//     case 20:
//         alert('a is 20');
//     break;
//     default:
//         alert('nothing');
// }

// for (let i = 0; i < 10;i++) {
//     alert(i);
// }

// let i = 0;
// while (i<10) {
//     alert(i);
//     i++;
// }

// let val;
// do {
//     val = prompt('Enter number');
// } while (isNaN(val));

let val = prompt('Enter number');
while (isNaN(val)) {
    val = prompt('Enter number');
}