'use strict'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const PI = Math.PI;
const minQuantity = 50;
const maxQuantity = 200;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const numberOgjects = quantityObjectsOnPage();
console.log(numberOgjects)

class Circle {
constructor(x, y, time) {
  this.xStart = Math.random() * canvasWidth;
  this.yStart = Math.random() * canvasHeight;
  this.size = Math.random() * 0.5 + 0.1;
  this.radius = 12 * this.size;
  this.create();
  this.nextPointFirst(x, y, time);
  this.nextPointSecond(x, y, time);
  }
  create() {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc( this.xStart,  this.yStart, this.radius, 0, 2 * PI, false);
    ctx.stroke();
  }
  randomFunction() {
    let random = Math.random();
      if (random <= 0.5) {
          return 'first';
      } else {
          return 'second';
      }
    }
    nextPointFirst(time) {
      return {
        x: this.xStart + Math.sin((50 + this.xStart + (time / 10)) / 100) * 3,
        y: this.yStart + Math.sin((45 + this.xStart + (time / 10)) / 100) * 4
      };
    }
    nextPointSecond(time) {
      return {
        x: this.xStart + Math.sin((this.xStart + (time / 10)) / 100) * 5,
        y: this.yStart + Math.sin((10 + this.xStart + (time / 10)) / 100) * 2
      }
  }
}

class Cross {
  constructor() {
    this.xStart = Math.random() * canvasWidth;
    this.yStart = Math.random() * canvasHeight;
    this.size = Math.random() * 0.5 + 0.1;
    this.side = 20 * this.size;
    this.angle = Math.random() * 360;
    this.rotationSpeed = Math.random() * (0.2 + 0.2) - 0.2;
    this.rad = this.angle * Math.PI / 180;
    this.halfSide = this.side / 2;
  }
  create() {
    ctx.translate(this.xStart, this.yStart);
    ctx.lineWidth = this.cross.outline;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0 - this.halfSide, 0);
    ctx.lineTo(0 + this.halfSide, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0 - this.halfSide);
    ctx.lineTo(0, 0 + this.halfSide);
    ctx.stroke();
    ctx.translate(-this.xStart, -this.yStart);
  }
  randomFunction() {
    let random = Math.random();
      if (random <= 0.5) {
          return 'first';
      } else {
          return 'second';
      }
    }
    nextPointFirst(time) {
      return {
        x: this.xStart + Math.sin((50 + this.xStart + (time / 10)) / 100) * 3,
        y: this.yStart + Math.sin((45 + this.xStart + (time / 10)) / 100) * 4
      };
    }
    nextPointSecond(time) {
      return {
        x: this.xStart + Math.sin((this.xStart + (time / 10)) / 100) * 5,
        y: this.yStart + Math.sin((10 + this.xStart + (time / 10)) / 100) * 2
      }
  }
 

  
}
 
// определение четного количества объектов
function quantityObjectsOnPage() {
    let quantity = Math.random() * (maxQuantity - minQuantity) + minQuantity;
    if (quantity % 2 !== 0) {
        quantity -= quantity % 2;
    }
    return quantity;
}
// создание нового объекта
function newObject() {
  var arrayObjects = [];
    for (let item = 0; item < numberOgjects  / 2; item++) {
      var circleObject = {};
      circleObject.class = new Circle();
      circleObject.random = circleObject.class.randomFunction();
      circleObject.name = 'circle';
      arrayObjects.push(circleObject);
    }
    for (let item = 0; item < numberOgjects  / 2; item++) {
      var crossObject = {};
      crossObject.class = new Cross();
      crossObject.random = crossObject.class.randomFunction();
      crossObject.name = 'cross';
      arrayObjects.push(crossObject);
    }
    return arrayObjects;
}

function move(object) {
  let randomFunc = 0;
  if (object.random === 'first') {
    randomFunc = object.class.nextPointFirst(Date.now());
  } else {
    randomFunc = object.class.nextPointSecond(Date.now());
  }
  ctx.beginPath();
  if (object.name === 'circle') {
    ctx.arc(randomFunc.x, randomFunc.y, object.class.radius, 0, 2 * PI, false);
    ctx.stroke();
  } else {

    ctx.translate(randomFunc.x, randomFunc.y);
    ctx.rotate(object.class.rad);

    ctx.lineWidth = object.class.outline;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0 - object.class.halfSide, 0);
    ctx.lineTo(0 + object.class.halfSide, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0 - object.class.halfSide);
    ctx.lineTo(0, 0 + object.class.halfSide);
    ctx.stroke();

    ctx.rotate(-object.class.rad);
    ctx.translate(-randomFunc.x, -randomFunc.y);

    object.class.rad += object.class.rotationSpeed;
  }
}

function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startObjects.forEach((object) => {
      move(object);
    })
    
  }

  let startObjects = newObject();
 
  setInterval(tick, 1000 / 20)