'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const PI = Math.PI;

const lineMinWidth = 5;
const lineMaxWidth = 100;

const minHLS = 0;
const maxHLS = 359;
const saturation = 100;
const lightness = 50;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

document.body.style.overflow = 'hidden';

let lineWidth =  lineWidthFunc();
let color =  lineColor(event);
let draw = false;
var currentLineWidth = lineMaxWidth;
var currentHLS = minHLS;
var parameter = true;

// при открытии страницы очистим холст и зададим его размер равным размеру страницы
sizeCanvas();
// если мы поменяем размер страницы, то размер холста также изменится и холст очистится
window.addEventListener('resize', () => {
    sizeCanvas();
});

canvas.addEventListener("mousedown", (event) => {
    draw = true;
});
  
canvas.addEventListener("mouseup", () => {
    draw = false;
});
  
canvas.addEventListener("mouseleave", () => {
    draw = false;
});
 
canvas.addEventListener("mousemove", (event) => {
    if (draw) {
      const point = [event.offsetX, event.offsetY];
      circle(point, lineWidthFunc(), lineColor(event));
    }
});

canvas.addEventListener('dblclick', () => {
    ctx.clearRect(0, 0, draw.width, draw.height);
});
  
function sizeCanvas() {
    //установим размер холста равным размеру страницы
    const width = window.innerWidth; 
    const height = window.innerHeight;
    // добавим атрибуты ширины и высоты в canvas
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    // очистим холст  
    ctx.clearRect(0, 0, width, height);
  }

function lineWidthFunc() {
// Если ширина линии меньше максимальной и ширина линии идет на увеличение
    if (currentLineWidth < lineMaxWidth && parameter) {
            return currentLineWidth++;
        } else {
            parameter = false;
        }
// Если штрина линии больше минимальной и ширина линии идет на убывание       
    if (currentLineWidth > lineMinWidth && !parameter) {
            return currentLineWidth--;
        } else {
            parameter = true;
        }
    }

function lineColor(event) {
// Если событие произошло и оно будет являться нажатием шифта, то "уменьшаем" цвет и наоборот
    if (event !== undefined && event.shiftKey)  {
        return currentHLS--;
    } else {
        return currentHLS++;
    }
// Если мы дошли до максимальной ширины, то сбрасываем ширину к минимальной и наоборот
    if (currentHLS < minHLS) {
        currentHLS = maxHLS;
    } else if (currentHLS >  maxHLS) {
        currentHLS = minHLS;
    }
}
// создадим точку-круг из позиции нажатия на экран, размера точки и цвета
function circle(point, size, HLS) {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${lineColor(event)}, ${saturation}%, ${lightness}%)`;
    ctx.arc(...point, size, 0, 2 * PI);
    ctx.fill();
  }
