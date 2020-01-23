"use strict";

const students = [ 
    new Student('Student 1', [10,9,8,0,10]),
    new Student('Student 12', [10,0,8,0,3,4])
    ];

    console.log(students);

// function countMark(student) {
//     return {
//         averageMark: value => student + value,
//         minMark: value => student - value,
//         maxMark: value => student / value
//     }
// }

// const returnMark = countMark(student);

// function averageMarkGroup() {
//     console.log('averageMark');
// }


// console.log(returnMark.averageMark()); // - возвращает среднюю оценку
// console.log(returnMark.minMark()); // - возвращает минимальную оценку
// console.log(returnMark.maxMark()); // - возвращает максимальную оценку
// console.log(returnMark.averageMark()); // - которая возвращает среднюю оценку по группе