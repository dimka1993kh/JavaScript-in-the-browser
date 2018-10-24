'use strict';
const counterClass = document.querySelector('.counter');
const outputErrors = document.querySelector('.errors');

const newWebSoket = new WebSocket('wss://neto-api.herokuapp.com/counter');

newWebSoket.addEventListener('message', closeWebSoket);

window.addEventListener('beforeunload', () => {
    connection.onclose = function () {};
    connection.close(1000, 'Страница закрыта')
    });   

function closeWebSoket(event) {
    const message = JSON.parse(event.data);
    counterClass.textContent = message.connections;
    outputErrors.textContent = message.errors;
}
