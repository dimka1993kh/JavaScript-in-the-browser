'use strict';

const newWeb = new WebSocket('wss://neto-api.herokuapp.com/mouse');

window.addEventListener('click', clickOnPage);
showBubbles(newWeb);

function clickOnPage(event) {
    const sendMessage = JSON.stringify({x: event.pageX,
    y: event.pageY});
    newWeb.send(sendMessage);
}


    