"use strict";

const LS_KEY = 'stickers';
const STICKER_DELETE_CLASS = 'sticker__delete';
const STICKER_TEXT_CLASS = 'sticker__text';

const stickerTemplate = document.querySelector('#stickerTemplate').innerHTML;
const boardElement = document.querySelector('#board');

let stickersList = [];

document
    .querySelector('#addBtn')
    .addEventListener('click', onAddBtnClick);
document
    .querySelector('#clearBtn')
    .addEventListener('click', onClearBtnClick);
boardElement.addEventListener('click', onBoardClick);
boardElement.addEventListener('focusout', onBoardFocusout);

init();

function onAddBtnClick() {
    createSticker();
}

function onClearBtnClick() {
    clearAll();
}

function onBoardClick(e) {
    switch (true) {
        case e.target.classList.contains(STICKER_DELETE_CLASS):
            deleteSticker(e.target.parentElement.dataset.stickerId);
            break;
    }
}

function onBoardFocusout(e) {
    const element = e.target;
    switch (true) {
        case e.target.classList.contains(STICKER_TEXT_CLASS):
            updateSticker(
                element.parentElement.dataset.stickerId,
                element.name,
                element.value
            );
            break;
    }
}

function init() {
    refreshStickerList();
    renderStickerList();
}

function getStickerElement(id) {
    return boardElement.querySelector(`[data-sticker-id="${id}"]`);
}

function createSticker() {
    const sticker = {
        id: Date.now(),
        text: ''
    };
    stickersList.push(sticker);

    saveLocalStorage();
    renderSticker(sticker);
}

function updateSticker(id, name, value) {
    const sticker = stickersList.find(el => el.id == id);

    sticker[name] = value;
    saveLocalStorage();
}

function deleteSticker(id) {
    stickersList = stickersList.filter(el => el.id != id);
    saveLocalStorage();

    deleteStickerElement(id);
}

function deleteStickerElement(id) {
    const element = getStickerElement(id);
    element && element.remove();
}

function clearAll() {
    stickersList = [];
    saveLocalStorage();
    boardElement.innerHTML = '';
}

function renderStickerList() {
    stickersList.forEach(renderSticker);
}

function renderSticker(sticker) {
    boardElement.insertAdjacentHTML('beforeEnd', getStickerHtml(sticker));
}


function getStickerHtml(sticker) {
    return stickerTemplate
        .replace('{{id}}', sticker.id)
        .replace('{{text}}', sticker.text);
}

function refreshStickerList() {
    stickersList = localStorage.getItem(LS_KEY);
    stickersList = stickersList ? JSON.parse(stickersList) : [];
}

function saveLocalStorage() {
    localStorage.setItem(LS_KEY, JSON.stringify(stickersList));
}

