"use strict";

const formTask = document.querySelector('#formTask');
const listTask = document.querySelector('#listTask');
const inputTask = document.querySelector('#inputTask');
const clearAllList = document.querySelector('#clearAllList');
const clearCompletedTasks = document.querySelector('#clearCompletedTasks');
const templateTask = document.querySelector('#templateTask').innerHTML;

formTask.addEventListener('submit', onBtnSubmit);
listTask.addEventListener('click', onTaskClick);
clearAllList.addEventListener('click', onClearAllClick);
clearCompletedTasks.addEventListener('click', onClearCompletedClick);

function onBtnSubmit() {
    event.preventDefault();
    sendForm();    
}

function sendForm() {
    if (validation()) {
        const textTask = { title: inputTask.value };
        addNewTask(textTask);
        changeSerialsNumbers();
        resetForm();
        inputFocusTo();
    }
}

function validation() {
    let valid = true;

    if(inputTask.value !== ''){
        makeValid();
    } else {
        makeInvalid();
        valid = false;
    }
    return valid;
}

function makeInvalid() {
    inputTask.classList.add('invalid');
}

function makeValid() {
    inputTask.classList.remove('invalid');
}

function addNewTask(textTask) {
    const task = templateTask.replace('{{text}}', textTask.title);
    const newTask = createTask(task);
    listTask.appendChild(newTask);
}

function createTask(task) {
    const template = document.createElement('template');
    task = task.trim();
    template.innerHTML = task;
    return template.content.firstChild;
}

function changeSerialsNumbers(){
    let serialNumber = document.getElementsByClassName('serial__number');
    for (let i = 0; i < serialNumber.length; i++) {
        let newNumber = i+1;
        serialNumber[i].innerHTML = newNumber + '. ';
    }
}

function resetForm() {
    formTask.reset();
}

function inputFocusTo() {
    inputTask.focus();
}

function onTaskClick(e) {
    if (e.target.classList.contains('task')) {
        toggleTask(e.target);
    } else if (e.target.classList.contains('delete__btn')) {
        deleteTask(e.target.parentNode);
        changeSerialsNumbers();
    }
}

function deleteTask(e) {
    e.remove();
}

function toggleTask(e) {
    e.classList.toggle('completed');
}

function onClearAllClick() {
    while (listTask.firstChild) {
        listTask.firstChild.remove();
    }
}

function onClearCompletedClick() {
    const сompletedTasks = document.querySelectorAll('.completed');
    сompletedTasks.forEach( e => e.remove() );
    changeSerialsNumbers();
}