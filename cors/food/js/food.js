'use strict';

const pic = document.querySelector('[data-pic]');
const title = document.querySelector('[data-title]');
const ingredients = document.querySelector('[data-ingredients]');
const rating = document.querySelector('[data-rating]');
const star = document.querySelector('[data-star]');
const votes = document.querySelector('[data-votes]');
const consumers = document.querySelector('[data-consumers]');

loading('https://neto-api.herokuapp.com/food/42').then(food);

function loading(site) {
    const functionName = 'callback';
    return new Promise((done, fail) => {
      window[functionName] = done;
      const script = document.createElement('script');
      script.src = `${site}?jsonp=${functionName}`;
      document.body.appendChild(script);
    });
}

function food(data) {
    pic.style.backgroundImage = `url(${data.pic})`;
    title.textContent = data.title;
    ingredients.textContent = data.ingredients;
    loading('https://neto-api.herokuapp.com/food/42/rating').then(ratingFunc);
}

function ratingFunc(data) {
    rating.textContent = data.rating;
    votes.textContent = data.votes;
    star.style.width = `${data.rating * 10}%`;
    loading('https://neto-api.herokuapp.com/food/42/consumers').then(consumersFunc);
}

function consumersFunc(data) {
    console.log(data)
    data.consumers.forEach((consumer) => {
        consumers.innerHTML +=`<img src="${consumer.pic}" title="${consumer.name}">`;
    })
    consumers.innerHTML += `<span>(+${data.total})</span>`;
}
