const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
canvas.style.backgroundColor = '#000000';

newStarField()

canvas.addEventListener('click', newStarField);

function newStarField() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    const stars = (Math.random() + 1) * 200;

    ctx.beginPath();

    for (let i = 0; i <= stars; i++) {
        createStar();
    }
    ctx.closePath();
    ctx.stroke(); 
}

function colorStar() {
    const random = Math.random();
    if (random <= 1 / 3) {
        return '#ffffff';
    } else if (random > 1 / 3 && random <= 2 / 3) {
        return '#ffe9c4';
    } else {
        return '#d4fbff';
    }
}

function createStar() {
    const sizePoint = Math.random() * 1.1;
    const color = colorStar();
    const brightness = Math.random() * 0.3 + 0.8;
    ctx.fillRect(Math.random() * canvasWidth, Math.random() * canvasHeight, sizePoint ,sizePoint);
    ctx.fillStyle = color;
    ctx.globalAlpha = brightness;
}