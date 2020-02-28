"use strict";

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const listTask = document.querySelector('#listTask');
const templateTask = document.querySelector('#templateTask').innerHTML;

getTodos();

function getTodos() {
    fetch(TODOS_URL)
        .then(response => response.json())
        .then(renderTodos);
}

function renderTodos(todos) {
    todos.forEach(addNewTask);
}

function addNewTask(textTask) {
    const task = templateTask
    .replace('{{text}}', textTask.title)
    .replace('{{completed}}', textTask.completed ? 'completed' : '');

    const newTask = createTask(task);
    listTask.appendChild(newTask);
}

function createTask(task) {
    const template = document.createElement('template');
    task = task.trim();
    template.innerHTML = task;
    return template.content.firstChild;
}