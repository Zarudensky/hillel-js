"use strict";

const USERS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';

const formUsers = document.querySelector('#formUsers');
const listUsers = document.querySelector('#listUsers');
const templateUser = document.querySelector('#templateUser').innerHTML;
const inputUser = document.querySelectorAll('.input__user');
let list = [];

formUsers.addEventListener('submit', onBtnSubmit);
formUsers.addEventListener('focus', onInputFocus, true);
formUsers.addEventListener('blur', onInputBlur, true);
listUsers.addEventListener('click', onlistUsersClick);

init();

function init() {
    getUsers();
}

function onBtnSubmit(e) {
    e.preventDefault();
    submitUser();
}

function onlistUsersClick(e) {
    const element = e.target;

    switch (true) {
        case element.classList.contains('delete__btn') :
            removeUser(element.closest('.user').dataset.id);
            break;
        case element.classList.contains('edit__btn') :
            editUser(element.closest('.user').dataset.id);
            break;
    }
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

function getUsers() {
    fetch(USERS_URL)
        .then(resp => resp.json())
        .then(setUsers)
        .then(renderUsersList);
}

function setUsers(data) {
    return (list = data);
}

function renderUsersList(data) {
    listUsers.innerHTML = '';

    data.forEach(renderUser);
}

function removeUser(id) {
    fetch(`${USERS_URL}/${id}`, {
        method: 'DELETE'
    });
    list = list.filter(item => item.id !== id);
    renderUsersList(list);
}

function editUser(id) {
    const user = list.find(item => item.id == id);
    fillForm(user);
}

function fillForm(user) {
    for (let i = 0; i < inputUser.length; i++) {
        inputUser[i].value = user[inputUser[i].name];
    }
}

function submitUser() {
    if (validation()) {
        const user = getNewUser();
        if (user.id) {
            updateUser(user);
        } else {
            createUser(user);
        }
        resetForm();
    }
}

function updateUser(user) {
    fetch(`${USERS_URL}/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    list = list.map(item => (item.id == user.id ? user : item));
    renderUsersList(list);
}

function createUser(user) {

    fetch(`${USERS_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(resp => resp.json())
        .then(data => {
            list.push(data);
            renderUsersList(list);
        });
}

function validation() {
    let valid = true;
    for (let i = 0; i < inputUser.length; i++) {
        if (!validate(inputUser[i].value) && inputUser[i].type !== 'hidden') {
            makeInvalid(inputUser[i]);
            valid = false;
        }
    }
    return valid;
}

function getNewUser() {
    const obj = {};
    for (let i = 0; i < inputUser.length; i++) {
        obj[inputUser[i].name] = inputUser[i].value;
    }
    return obj;
}

function renderUser(user) {
    const userBlock = addUser(user);
    listUsers.append(userBlock);
}

function addUser(user) {
    return htmlToElement(
        templateUser
            .replace('{{id}}', user.id)
            .replace('{{firstName}}', user.firstName)
            .replace('{{lastName}}', user.lastName)
            .replace('{{email}}', user.email)
    );
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function resetForm() {
    formUsers.reset();
    document.querySelector('#idInput').value = '';
}