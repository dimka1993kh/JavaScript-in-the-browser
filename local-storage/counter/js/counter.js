'use strict';


const counter = document.getElementById('counter');
const buttons = document.querySelector('.wrap-btns');
buttons.addEventListener('click', pushOnButton);

localStorage.num ? counter.textContent = localStorage.num : counter.textContent = 0;

function pushOnButton(event) {
    if (event.target.textContent === '+') {
        counter.textContent++;
    } else if (event.target.textContent === '-') {
        counter.textContent--;
    } else if (event.target.textContent === 'Сбросить') {
        counter.textContent = 0;
    }
    localStorage.num = counter.textContent;
}