const slides = document.getElementsByClassName('slide');
const slidesButtons = document.querySelector('.slider-nav');
const sliderNav = document.querySelectorAll('.slider-nav a');
var currentSlide = slides[0];
currentSlide.classList.add('slide-current');
const buttonArray = [0, 0, 0, 0];
Array.from(sliderNav).forEach((button, index) => {
    buttonArray[index] = button;
});

let prevSlide = buttonArray[0];
let nextSlide = buttonArray[1];
let firstSlide = buttonArray[2];
let lastSlide = buttonArray[3];

slidesButtons.addEventListener('click', slideFunc);

function slideFunc(event) {
if (event.target.dataset.action === 'prev') {
    if (currentSlide.previousElementSibling !== null) {
        currentSlide.classList.remove('slide-current');
        currentSlide.previousElementSibling.classList.add('slide-current');
        currentSlide = document.querySelector('.slide-current');
    }
} else if (event.target.dataset.action === 'next') {
    if (currentSlide.nextElementSibling !== null) {
        currentSlide.classList.remove('slide-current');
        currentSlide.nextElementSibling.classList.add('slide-current');
        currentSlide = document.querySelector('.slide-current');    
    }
} else if (event.target.dataset.action === 'first') {
    currentSlide.classList.remove('slide-current');
    currentSlide = slides[0];
    currentSlide.classList.add('slide-current');    
} else if (event.target.dataset.action === 'last') {
    currentSlide.classList.remove('slide-current');
    currentSlide = slides[slides.length - 1];
    currentSlide.classList.add('slide-current');
}

if (currentSlide.previousElementSibling === null) {
    prevSlide.classList.add('disabled');
    firstSlide.classList.add('disabled');
} else {
    prevSlide.classList.remove('disabled');
    firstSlide.classList.remove('disabled');
}
if (currentSlide.nextElementSibling === null) {
    nextSlide.classList.add('disabled');
    lastSlide.classList.add('disabled');
} else {
    nextSlide.classList.remove('disabled');
    lastSlide.classList.remove('disabled');
}
}
