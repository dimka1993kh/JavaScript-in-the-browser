'use strict';

const chat = document.querySelector('.chat');

const messageBox = chat.querySelector('.message-box'); // Форма отправки нового сообщения
const messageInput = chat.querySelector('.message-input'); // Добавляется класс message-input после ввода сообщения
const messageSubmit = chat.querySelector('.message-submit'); //Кнопка "Отправить"
const messagesContent = chat.querySelector('.messages-content'); // Блoк, в котором отображаются сообщения
const messagesTemplates = chat.querySelector('.messages-templates'); // в данном блоке хранятся шаблоны ссобщений
const messageArray = ["message loading", "message", "message-personal", "message-status"]; //Все виды сообщений (их классы)
const chatStatus = chat.querySelector('.chat-status'); // Статус чата (в сети/ не в сети)
const loading = chat.querySelector('loading');
const timestamp = chat.querySelector('.timestamp');

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
connection.addEventListener('open', openConnection);
connection.addEventListener('message', messageToYou);
messageSubmit.addEventListener('click', clickOnButton);
messageInput.addEventListener('keyup', pushOnEnter);
connection.addEventListener('close', closeConnection);


function openConnection() {
    chatStatus.textContent = chatStatus.dataset.online;
    messageSubmit.disabled = false;
    messagesContent.appendChild(messagesTemplates.children[3].cloneNode(true)).textContent = 'Пользователь появился в сети';  
}

function timeNow(item) {
    let date = new Date(),
    min = date.getMinutes();
    item.querySelector('.timestamp').textContent = date.getHours() + ':' + min;
}

function messageToYou(event) {
    const message = event.data;
    let cloneContentToYou = messagesTemplates.children[1].cloneNode(true);
    timeNow(cloneContentToYou);
    if (message === '...') {
        messagesContent.appendChild(messagesTemplates.children[0].cloneNode(true)).textContent = `${chat.querySelector('h1')} набирает сообщение`;
    } else {
        if (messagesContent.contains(loading)) {
            messagesContent.removeChild(loading);
        } 
        cloneContentToYou.querySelector('.message-text').textContent = message;
    messagesContent.appendChild(cloneContentToYou);
    }
}

function clickOnButton(event) {
    event.preventDefault();
    let cloneContent = messagesTemplates.children[2].cloneNode(true);
    timeNow(cloneContent);
    let myMessage = document.querySelector('.message-input');
    connection.send(myMessage.value);
    cloneContent.querySelector('.message-text').textContent = myMessage.value;
    messagesContent.appendChild(cloneContent);
    myMessage.value = '';
}

function pushOnEnter(event) {
    if (event.keycode === 13) {
        clickOnButton();
    }
}

function closeConnection() {
    chatStatus.textContent = chatStatus.dataset.ofline;
    messageSubmit.disabled = true;
    messagesContent.appendChild(messagesTemplates.children[3].cloneNode(true)).textContent = 'Пользователь не в сети';  
}

