'use strict';

  
  function longPooling() {
    let elemlongPooling = document.querySelectorAll('.long-pooling > div'),
         xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;
  
      if (this.status == 202) {
        arrayScan(elemlongPooling, xhr.responseText.trim())
      }
      
      longPooling();
    }
    
    xhr.open("GET", "https://neto-api.herokuapp.com/comet/long-pooling", true);
    xhr.send();
  }
  longPooling();
  
  
  
  
  
  