"use strict";

const conteiner = document.querySelector('.conteiner');
let jsonObj;

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
    return response.json();
    })
    .then(data => {
        jsonObj = data;
        console.log(jsonObj);
        conteiner.innerHTML += `<div>${jsonObj}</div>`;
    });
