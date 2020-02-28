"use strict";

const LS_KEY = 'tasks';

const $listTask = $('#listTask');
const $inputTask = $('#inputTask');
const $templateTask = $('#templateTask').html();

let dialog;
let tasks = [];

$listTask.on('click', '.task', onTaskClick);
$listTask.on('click', '.delete__btn', onDeleteBtnClick);

$('#addTask').on('click', onAddTaskBtnClick);

init();

function onAddTaskBtnClick() {
    dialog.dialog('open');
}
function onTaskClick(e) {
    toggleTask($(e.target).data('id'));
}

function onDeleteBtnClick(e) {
    e.stopPropagation();
    deleteTask(
        $(e.target)
            .parent()
            .data('id')
    );
}

function init() {
    initDialog();
    getTasks();
}

function initDialog() {
    dialog = $('#formTask').dialog({
        autoOpen: false,
        height: 200,
        width: 350,
        modal: true,
        buttons: {
            Create: function() {
                submitForm();
                dialog.dialog('close');
            },
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            $inputTask.val('');
        }
    });
}

function getTasks() {
    restoreState();
    renderTasks(tasks);
}

function renderTasks(data) {
    $listTask.html(data.map(generateTaskHtml).join('\n'));
}

function generateTaskHtml(task) {
    return $templateTask
        .replace('{{id}}', task.id)
        .replace('{{text}}', task.text)
        .replace('{{completed}}', task.isCompleted ? 'completed' : '');
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    task.isCompleted = !task.isCompleted;
    saveState();
    renderTasks(tasks);
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveState();
    renderTasks(tasks);
}

function submitForm() {
    const task = {
        id: Date.now(),
        text: $inputTask.val(),
        isCompleted: false
    };
    addTask(task);
    saveState();
}

function addTask(task) {
    tasks.push(task);
    renderTasks(tasks);
}

function saveState() {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
}

function restoreState() {
    tasks = localStorage.getItem(LS_KEY);
    tasks = tasks ? JSON.parse(tasks) : [];
}