'use strict'

const box = document.getElementsByClassName('box');
const buttons = document.getElementsByTagName('button');

const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        cartCount.innerHTML++;
        cartTotalPrice.innerHTML = Number(cartTotalPrice.innerHTML) + Number(button.dataset.price);
    })
})
