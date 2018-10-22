'use strict';

const signIn = document.querySelector('.sign-in-htm');
const signUp = document.querySelector('.sign-up-htm');
const loginHtml = document.querySelector('.login-html');

loginHtml.addEventListener('submit', pushOnButton);

function pushOnButton(event) {
    let errorMessage = event.target.querySelector('.error-message');  
    let objectForFormData = {};
    let newformData = new FormData(event.target);
    for (const [key, value] of newformData) {
        objectForFormData[key] = value;
    }

const request = new XMLHttpRequest();
if (event.target === signIn) {
    request.open('POST', 'https://neto-api.herokuapp.com/signin');
} else if (event.target === signUp) {
    request.open('POST', 'https://neto-api.herokuapp.com/signup');
}
request.setRequestHeader('Content-Type', 'application/json');
request.addEventListener('load', onLoad);
request.send(JSON.stringify(objectForFormData));
event.preventDefault();
  
function onLoad() {
    let jsonData = JSON.parse(request.responseText);
    if (jsonData.message) {
        errorMessage.textContent = jsonData.message;
    } else {
        errorMessage.textContent = `Пользователь ${jsonData.name} успешно авторизован`;
    } 
    }
};
