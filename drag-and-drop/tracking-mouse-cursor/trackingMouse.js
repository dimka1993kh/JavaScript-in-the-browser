'use strict'

const leftEyeArea = document.querySelector('.cat_position_for_left_eye');
const rightEyeArea = document.querySelector('.cat_position_for_right_eye');

const leftEye = leftEyeArea.children[0];
const rightEye = rightEyeArea.children[0];


document.addEventListener('mousemove', event => {
   
    let radiusEyeArea = (leftEyeArea.getBoundingClientRect().right - leftEyeArea.getBoundingClientRect().left) / 2;

    let radiusEye = (leftEye.getBoundingClientRect().right - leftEye.getBoundingClientRect().left) / 2;
    
    let radius = radiusEyeArea - radiusEye;
    
    let x1 = leftEyeArea.getBoundingClientRect().right - radiusEyeArea ;
    let y1 = leftEyeArea.getBoundingClientRect().bottom - radiusEyeArea;
    
    let k = (event.pageY - y1) / (event.pageX - x1);

    leftEye.style.left = `${radius / Math.sqrt(1 + k * k)}px`;
    leftEye.style.top = `${k * radius / Math.sqrt(1 + k * k)}px`;
    console.log(Math.atan(k), Math.atan((radius / Math.sqrt(1 + k * k) + x1) /  (k * radius / Math.sqrt(1 + k * k)) + y1))
})