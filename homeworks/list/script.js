"use strict";
const operand = document.querySelector('#operand');
const validation = document.querySelector('#validation');
const list = document.querySelector('#list');

document.querySelector('#generate').addEventListener('click', onBtnClick);

function onBtnClick() {
    if (isNaN(operand.value) || operand.value <= 0) {
        validation.style.display = 'block';
        clearList();
    } else {
        validation.style.display = 'none';
        clearList();
        updateList()
    }
}

function clearList() {
    list.innerHTML = '';
}

function updateList() {
    for (let i = 0; i < operand.value; i++) {
        let newElement = document.createElement('li');
        newElement.innerHTML = i + 1;
        list.append(newElement);
    }
}