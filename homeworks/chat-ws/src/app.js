import './styles.css';
import './normalize.css';

const formMessage = document.querySelector('#formMessage');
const messageContainer = document.querySelector('#messageContainer');
const templateMessage = document.querySelector('#templateMessage').innerHTML;
const inputForm = document.querySelectorAll('.input__form');
const inputFormMessage = document.querySelector('.input__form-message');

const ws = new WebSocket('wss://fep-app.herokuapp.com/');

ws.onopen = onSocketOpen;
ws.onmessage = onSocketMessage;

formMessage.addEventListener('submit', onBtnSubmit);
formMessage.addEventListener('focus', onInputFocus, true);
formMessage.addEventListener('blur', onInputBlur, true);

function onSocketOpen() {
    notifyStateChange();
}

function notifyStateChange(message) {
    ws.send(
        JSON.stringify({
            action: 'message',
            payload: message
        })
    );
}

function onSocketMessage(message) {
    const packetData = JSON.parse(message.data);
    const inputFormName = document.querySelector('.input__form-name');

    if (inputFormName.value !== '') {
        addMessage(packetData.payload);
    }
}

function onBtnSubmit(e) {
    e.preventDefault();
    submitMessage();
}

function submitMessage() {
    if (validation()) {
        const message = getNewMessage();
        notifyStateChange(message);
        resetMessage();
        autoFocusMassage();
        scrollToLastMassage();
    }
}

function validation() {
    let valid = true;

    for (let i = 0; i < inputForm.length; i++) {
        if (!validate(inputForm[i].value)) {
            makeInvalid(inputForm[i]);
            valid = false;
        }
    }
    return valid;
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

function getNewMessage() {
    const obj = {};

    for (let i = 0; i < inputForm.length; i++) {
        obj[inputForm[i].name] = inputForm[i].value;
    }
    return obj;
}

function addMessage(e) {
    const messageBlock = document.createElement('div');
    messageBlock.className = 'message__block';

    messageBlock.innerHTML = templateMessage
        .replace('{{author}}', e.author)
        .replace('{{message}}', e.message);

    messageContainer.appendChild(messageBlock);
}

function resetMessage() {
    inputFormMessage.value = "";
}
function autoFocusMassage() {
    inputFormMessage.focus();
}
function scrollToLastMassage() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
}