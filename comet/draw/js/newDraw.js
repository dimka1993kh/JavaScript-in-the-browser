'use strict';

window.editor.addEventListener('update', update)

function update(event) {
    const updateCanvas = event.canvas,
        ctx = updateCanvas.getContext('2d'),
        ws = new WebSocket('wss://neto-api.herokuapp.com/draw');
    ws.addEventListener('open', () => {
        updateCanvas.toBlob(blob => {ws.send(blob)})
  });
}
  