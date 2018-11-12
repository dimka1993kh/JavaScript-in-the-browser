'use strict'
Function.prototype.delayed = function (ms) {
    var timer = 0;
    var callback = this;
    return function() {
        message.classList.remove('view');
        block.classList.add('active');
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
};
const block = document.querySelector('.block');

const message = document.querySelector('.message');

const text = document.querySelector('.textarea');

text.addEventListener('focus', () => {
    block.classList.add('active');
})

text.addEventListener('blur', () => {
    block.classList.remove('active');
})

text.addEventListener('keyup', callback.delayed(2000))


function callback() {
    message.classList.add('view');
    block.classList.remove('active');
}



