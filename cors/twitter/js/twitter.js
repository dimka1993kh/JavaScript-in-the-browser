'use strict';

const wallpaper = document.querySelector('[data-wallpaper]');
const username = document.querySelector('[data-username]');
const description = document.querySelector('[data-description]');
const pic = document.querySelector('[data-pic]');
const tweets = document.querySelector('[data-tweets]');
const followers = document.querySelector('[data-followers]');
const following = document.querySelector('[data-following]');
  
const script = document.createElement('script');
script.src = `https://neto-api.herokuapp.com/twitter/jsonp`;
document.body.appendChild(script)

function callback(data) {   
    wallpaper.src = data.wallpaper;
    username.textContent = data.username;
    description.textContent = data.description;
    pic.src = data.pic;
    tweets.textContent = data.tweets;
    followers.textContent = data.followers;
    following.textContent = data.following;
  }
  

  
    