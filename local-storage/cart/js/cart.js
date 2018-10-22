'use strict';

const siteArray = ['https://neto-api.herokuapp.com/cart/colors', 'https://neto-api.herokuapp.com/cart/sizes'];
const colorSwatch = document.querySelector('#colorSwatch');
const sizeSwatch = document.querySelector('#sizeSwatch');

siteArray.forEach((site) => {
    fetch(site, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach((item) => {
        let available = 0;
        let checked = 0;
        if (item.isAvailable) {
          available = 'available';
          checked = 'checked';
        } else {
          available = 'soldout';
          checked = 'disabled';
        } 
        if (site === 'https://neto-api.herokuapp.com/cart/colors') {
            colorSwatch.innerHTML += `<div data-value="${item.type}" class="swatch-element color ${item.type} ${available}">
            <div class="tooltip">${item.title}</div>
            <input quickbeam="color" id="swatch-1-${item.type}" type="radio" name="color" value="${item.type}" ${checked}>
            <label for="swatch-1-${item.type}" style="border-color: red;">
              <span style="background-color: ${item.code};"></span>
              <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
            </label>
          </div>`
        } else if (site === 'https://neto-api.herokuapp.com/cart/sizes') {
            sizeSwatch.innerHTML += `<div data-value="${item.type}" class="swatch-element plain ${item.type} ${available}">
            <input id="swatch-0-${item.type}" type="radio" name="size" value="${item.type}" ${checked}>
            <label for="swatch-0-${item.type}">
              ${item.title}
              <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
            </label>
          </div>`
     
        }

      })

    });
})

