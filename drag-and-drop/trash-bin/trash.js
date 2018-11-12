'use strict'

const elements = document.querySelectorAll('.logo');
const trashBin = document.querySelector('#trash_bin');

let movedPiece = null;
let shiftX = 0;
let shiftY = 0;
document.addEventListener('mousedown', event => {
    if (event.target.classList.contains('logo')) {
        movedPiece = event.target;
        const bounds = event.target.getBoundingClientRect();
        shiftX = bounds.width / 2;
        shiftY = bounds.height / 2;
        }
    });

document.addEventListener('mousemove', event => {
    if (movedPiece) {
        // Предотвращаем выделение текста
        event.preventDefault();
        movedPiece.style.left = `${event.pageX - shiftX}px`;
        movedPiece.style.top = `${event.pageY - shiftY}px`;
        movedPiece.classList.add('moving');
        }
    });
document.addEventListener('mouseup', event => {
    if (movedPiece) {
        movedPiece.style.visibility = 'hidden';
        const check = document.elementFromPoint(event.clientX, event.clientY).closest('#trash_bin');
        movedPiece.style.visibility = 'visible';
        if (check) {
        movedPiece.classList.remove('moving');
        movedPiece.style.display = 'none';
        movedPiece = null;
        }
    }
    });
        
