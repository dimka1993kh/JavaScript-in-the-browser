'use strict';

const siteArray = ['https://neto-api.herokuapp.com/cart/colors', 'https://neto-api.herokuapp.com/cart/sizes', 'https://neto-api.herokuapp.com/cart'];
const colorSwatch = document.querySelector('#colorSwatch');
const sizeSwatch = document.querySelector('#sizeSwatch');
let quickCart = document.querySelector('#quick-cart');


const addToCard = document.querySelector('#AddToCart');

siteArray.forEach((site) => {
    fetch(site, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
      if (site === siteArray[0] || siteArray[1]) {
        colorAndSize(data, site);
      } else if (site === siteArray[2]) {
        cart(data);
      }
    })
  })
  let swatches = document.querySelector('.swatches');
  swatches.addEventListener('click', selection);
  addToCard.addEventListener('click', request);

function colorAndSize(data, site) { //добавление сниппетов цвета и размера
  data.forEach((item) => { // пройдемся по полученным объектам с каждого из 2х сайтов
    let available = 0; // зададим переменные, которые будут определять доступен ли размер/цвет и выбрали мы его или нет
    let checked = 0;
    if (item.isAvailable) { // проверяем, доступен ли цвет или размер и записываем в переменные значения для снипеда
      available = 'available';
      checked = 'checked';
    } else {
      available = 'soldout';
      checked = 'disabled';
    } 
    if (site === 'https://neto-api.herokuapp.com/cart/colors') { //снипед для цвета
        colorSwatch.innerHTML += `<div data-value="${item.type}" class="swatch-element color ${item.type} ${available}">
        <div class="tooltip">${item.title}</div>
        <input quickbeam="color" id="swatch-1-${item.type}" type="radio" name="color" value="${item.type}" ${checked}>
        <label for="swatch-1-${item.type}" style="border-color: red;">
          <span style="background-color: ${item.code};"></span>
          <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
        </label>
      </div>`
    } else if (site === 'https://neto-api.herokuapp.com/cart/sizes') { // снипед для размера
        sizeSwatch.innerHTML += `<div data-value="${item.type}" class="swatch-element plain ${item.type} ${available}">
        <input id="swatch-0-${item.type}" type="radio" name="size" value="${item.type}" ${checked}>
        <label for="swatch-0-${item.type}">
          ${item.title}
          <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
        </label>
      </div>`
    }
  })
}

function cart(data) { // функция для добавления снипета миниатюры покупки и расчета стоимости
  let buySum = 0;
  data.forEach((item) => { //добавляем миниатюру
    buySum = item.price * item.quantity; //расчитывем стоимость

    quickCart.innerHTML = `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${item.id}" style="opacity: 1;">
    <div class="quick-cart-product-wrap">
      <img src="${item.pic}" title="${item.title}">
      <span class="s1" style="background-color: #000; opacity: .5">$${item.price}</span>
      <span class="s2"></span>
    </div>
    <span class="count hide fadeUp" id="quick-cart-product-count-${item.id}">${item.quantity}</span>
    <span class="quick-cart-product-remove remove" data-id="${item.id}"></span>
  </div>`
  });
  quickCart.innerHTML += `<a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open"> 
  <span>
    <strong class="quick-cart-text">Оформить заказ<br></strong>
    <span id="quick-cart-price">${buySum}</span>
  </span>
</a>`;
const quickCartPay = document.querySelector('#quick-cart-pay');
const remove = document.querySelector('.remove');
if (data.length !== 0) {
  quickCartPay.classList.add('open'); 
} else {
  quickCartPay.classList.remove('open');
}

remove.addEventListener('click', empty);
}

function empty() {
  let remove = document.querySelector('.remove');
  let quickCart = document.querySelector('#quick-cart');
  let formData = new FormData(); 
  formData.append('productId', remove.dataset.id);

  fetch('https://neto-api.herokuapp.com/cart/remove', {
    method: 'post',
    body: formData
  }).then((response) => { 
    return response.json();
  }).then((data) => {
    (data.length > 0) ? cart(data) : quickCart.innerHTML = '';
  });
}

function selection() {
  let inputSwatches = document.querySelectorAll('.swatches input'),
      inputSwatchesArr = Array.from(inputSwatches),
      arrIndex = [];
  
  inputSwatchesArr.forEach(function (item, ind) {
    if (item.checked) {
      arrIndex.push(ind);
    }
  })
  localStorage.index = JSON.stringify(arrIndex);
}

function request(event) {
  event.preventDefault();
  let AddToCartForm = document.querySelector('#AddToCartForm'),
      formData = new FormData(AddToCartForm); 
  formData.append('productId', AddToCartForm.dataset.productId);
  fetch('https://neto-api.herokuapp.com/cart', {
      method: 'post',
      body: formData
  }).then(function(response) { 
    return response.json();
  }).then(function(data) {
    cart(data)
  });
  
}





