"use strict";

const students = [ 
    new Student('Student 1', [10,9,8,0,10]),
    new Student('Student 12', [10,0,8,0,3,4])
];

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.averageMark = function () {
    const total = this.marks.reduce((sum, current) => sum + current, 0);
    const average = total / this.marks.length;
    return Math.floor(average * 100) / 100;
}

Student.prototype.minMark = function () {
    return Math.min(...this.marks);
}

Student.prototype.maxMark = function () {
    return Math.max(...this.marks);
}

function averageGroupMark(students) {
    const total = students.reduce((sum, students) => sum + students.averageMark(), 0);
    return total / students.length;
}