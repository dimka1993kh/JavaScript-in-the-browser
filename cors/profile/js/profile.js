'use strict';

const name = document.querySelector('[data-name]');
const position = document.querySelector('[data-position]');
const description = document.querySelector('[data-description]');
const technologies = document.querySelector('[data-technologies]');
const pic = document.querySelector('[data-pic]');
const content = document.querySelector('.content');

function loading(site) {
    const functionName = 'callback';
    
    return new Promise((done, fail) => {
      window[functionName] = done;
      const script = document.createElement('script');
      script.src = `${site}?jsonp=${functionName}`;
      document.body.appendChild(script);
    });
  }

  loading(`https://neto-api.herokuapp.com/profile/me`).then(myProfile);
  
function myProfile(data) {
    name.textContent = data.name;
    description.textContent = data.description;
    position.textContent = data.position;
    pic.src = data.pic;
    loading(`https://neto-api.herokuapp.com/profile/${data.id}/technologies`).then(technolog);
    content.style.display = 'initial';
  }
  
  function technolog(data) {    
    data.forEach(function (item) {
      let str = `<span class="devicons devicons-${item}"></span>`;
      technologies.innerHTML += str;
    })
  }
  
