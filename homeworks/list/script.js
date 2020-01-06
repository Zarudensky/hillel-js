"use strict";
const countLines = document.querySelector('#operand');
const validationMessage = document.querySelector('#validation');
const list = document.querySelector('#list');

document.querySelector('#generate').addEventListener('click', onBtnClick);

function onBtnClick() {
    clearList();
    validation();
}

function clearList() {
    list.innerHTML = '';
}

function validation() {
    if (isNaN(countLines.value) || countLines.value <= 0) {
        showMessage();
    } else {
        hideMessage();
        updateList();
    }
}

function showMessage() {
    validationMessage.style.display = 'block';
}

function hideMessage() {
    validationMessage.style.display = 'none';
}

function updateList() {
    for (let i = 0; i < countLines.value; i++) {
        let newElement = document.createElement('li');
        newElement.innerHTML = i + 1;
        list.append(newElement);
    }
}