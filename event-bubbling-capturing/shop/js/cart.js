'use strict';
const itemsList = document.getElementsByClassName('items-list')[0];

function send(event) {
    let buttonToCart = event.target;
    let item = {};
    item.title = buttonToCart.dataset.title;
    item.price = buttonToCart.dataset.price
    
    if (buttonToCart.classList.contains('add-to-cart')) {
        event.preventDefault();
        addToCart(item)
      }
}

itemsList.addEventListener('click', send);


