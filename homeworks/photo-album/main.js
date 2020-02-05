"use strict";

const MAIN_URL = 'https://jsonplaceholder.typicode.com';

const listAlbums = document.querySelector('#albums');
const listPhotos = document.querySelector('#photos');

const templateAlbum = document.querySelector('#templateAlbum').innerHTML;
const templatePhoto = document.querySelector('#templatePhoto').innerHTML;

listAlbums.addEventListener('click', onAlbumsClick);

getAlbums();

function getAlbums() {
    fetch(`${MAIN_URL}/albums`)
        .then(response => response.json())
        .then(renderAlbums);
}

function renderAlbums(list) {
    list.forEach(addNewAlbum);
}

function addNewAlbum(textAlbum) {
    const album = templateAlbum
        .replace('{{id}}', textAlbum.id)
        .replace('{{text}}', textAlbum.title)
        .replace('{{active}}', textAlbum.active);

    const newAlbum = createAlbum(album);
    listAlbums.appendChild(newAlbum);
}

function createAlbum(album) {
    const template = document.createElement('template');
    album = album.trim();
    template.innerHTML = album;
    return template.content.firstChild;
}

function onAlbumsClick(e) {
    if (e.target.classList.contains('album')) {
        removeClassesActive(listAlbums);
        addClassActive(e.target);
        clearPhotos(listPhotos);
        getPhotos(e.target);
    }
}

function removeClassesActive(listAlbums) {    
    for(let i = 0; i < listAlbums.children.length; i++){
        listAlbums.children[i].classList.remove('active');
    }
}

function addClassActive(e) {
    e.classList.add('active');
}

function clearPhotos(listPhotos) {
    while (listPhotos.firstChild) {
        listPhotos.removeChild(listPhotos.firstChild);
    }
}

function getPhotos(e) {
    fetch(`${MAIN_URL}/photos?albumId=${e.dataset.id}`)
        .then(response => response.json())
        .then(renderPhotos);
}

function renderPhotos(list) {
    list.forEach(addNewPhoto);
}

function addNewPhoto(urlPhoto) {
    const photo = templatePhoto
        .replace('{{url}}', urlPhoto.thumbnailUrl);

    const newPhoto = createPhoto(photo);
    listPhotos.appendChild(newPhoto);
}

function createPhoto(photo) {
    const template = document.createElement('template');
    photo = photo.trim();
    template.innerHTML = photo;
    return template.content.firstChild;
}