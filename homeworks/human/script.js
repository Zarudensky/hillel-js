"use strict";

function createPerson () {
    const person = {
        firstName: prompt('Enter your first name'),
        lastName: prompt('Enter your last name'),
        yearsOld: prompt('Enter your age'),
    }
    alert(`${person.firstName.toUpperCase()} ${person.lastName.toUpperCase()}, age ${person.yearsOld}`);
}
createPerson();