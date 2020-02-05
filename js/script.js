"use strict";

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const listAlbums = document.querySelector('#albums');
const templateAlbum = document.querySelector('#templateAlbum').innerHTML;

listAlbums.addEventListener('click', onAlbumsClick);

getAlbums();

function getAlbums() {
    fetch(ALBUMS_URL)
        .then(response => response.json())
        .then(renderTodos);
}

function renderTodos(list) {
    list.forEach(addNewAlbum);
}

function onAlbumsClick(e) {
    if (e.target.classList.contains('album')) {
        toggleAlbum(e.target);
    }
}

function addNewAlbum(textAlbum) {
    const album = templateAlbum
        .replace('{{id}}', textAlbum.id)
        .replace('{{text}}', textAlbum.title)
        .replace('{{completed}}', textAlbum.completed ? 'completed' : '');

    const newAlbum = createAlbum(album);
    listAlbums.appendChild(newAlbum);
}

// function deleteTask(el) {
//     console.log(el.dataset.id);
//     fetch(`${TODOS_URL}/${el.dataset.id}`, {
//         method: 'DELETE'
//     });

//     el.remove();
// }

function toggleAlbum(el) {
    el.classList.toggle('completed');
    console.log(el.dataset.id);
}

function createAlbum(album) {
    const template = document.createElement('template');
    album = album.trim();
    template.innerHTML = album;
    return template.content.firstChild;
}