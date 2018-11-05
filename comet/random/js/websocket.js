'use strict';
  let connection = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
  
  connection.addEventListener('message', function (event) {
    let socket = document.querySelectorAll('.websocket > div');
    arrayScan(socket, event.data)
  });
  
  function arrayScan(data, num) {
    Array.from(data).forEach(function (item) {
      item.classList.remove('flip-it');
      if (item.innerHTML === num) {
        item.classList.add('flip-it');
      }
    })
  }
  
  
  
  
  