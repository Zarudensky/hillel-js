"use strict";

const formContacts = document.querySelector('#formContacts');
const listContacts = document.querySelector('#listContacts');
const templateContact = document.querySelector('#templateContact').innerHTML;
const inputContact = document.querySelectorAll('.input__contact');

formContacts.addEventListener('submit', onBtnSubmit);
formContacts.addEventListener('focus', onInputFocus, true);
formContacts.addEventListener('blur', onInputBlur, true);
listContacts.addEventListener('click', onlistContactsClick);

function onBtnSubmit(e) {
    e.preventDefault();
    submitContact();
}

function submitContact() {
    if (validation()) {
        const contact = getNewContact();
        addContact(contact);
        resetForm();
    }
}

function validation() {
    let valid = true;

    for (let i = 0; i < inputContact.length; i++) {
        if (!validate(inputContact[i].value)) {
            makeInvalid(inputContact[i]);
            valid = false;
        }
    }
    return valid;
}

function onInputBlur(e) {
    if (!validate(e.target.value)) {
        makeInvalid(e.target);
    }
}

function onInputFocus(e) {
    makeValid(e.target);
}

function makeInvalid(e) {
    e.classList.add('invalid');
}

function makeValid(e) {
    e.classList.remove('invalid');
}

function validate(value) {
    return !!value.trim();
}

function getNewContact() {
    const obj = {};

    for (let i = 0; i < inputContact.length; i++) {
        obj[inputContact[i].name] = inputContact[i].value;
    }

    return obj;
}

function addContact(contact) {
    const contactBlock = document.createElement('div');
    contactBlock.className = 'contact';

    contactBlock.innerHTML = templateContact
        .replace('{{firstName}}', contact.firstName)
        .replace('{{lastName}}', contact.lastName)
        .replace('{{phone}}', contact.phone);

    listContacts.appendChild(contactBlock);
}

function resetForm() {
    formContacts.reset();
}

function onlistContactsClick(e) {
    if (e.target.classList.contains('delete__btn')) {
        deleteContact(e.target.closest('.contact'));
    }
}

function deleteContact(e) {
    e.remove();
}