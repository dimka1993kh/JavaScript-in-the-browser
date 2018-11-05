'use strict';
function pooling() {
    let elemPooling = document.querySelectorAll('.pooling > div'),
        xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://neto-api.herokuapp.com/comet/pooling", false);
    xhr.send();
    arrayScan(elemPooling, xhr.responseText)
  }
  
  setInterval(pooling, 5000);
  
