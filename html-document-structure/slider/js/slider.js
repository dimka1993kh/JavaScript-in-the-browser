const slides = document.getElementsByClassName('slide');

const sliderNav = document.querySelectorAll('.slider-nav a');
var currentSlide = slides[0];
currentSlide.classList.add('slide-current');
const buttonArray = [0, 0, 0, 0];
Array.from(sliderNav).forEach((button, index) => {
    buttonArray[index] = button;
});
function findCurrentSlide() {
    return Array.from(slides).find((slide) => {
        return slide.classList.contains('slide-current');
    })
}
let prevSlide = buttonArray[0];
let nextSlide = buttonArray[1];
let firstSlide = buttonArray[2];
let lastSlide = buttonArray[3];

prevSlide.addEventListener('click', prevSlideFunc);
nextSlide.addEventListener('click', nextSlideFunc);
firstSlide.addEventListener('click', firstSlideFunc);
lastSlide.addEventListener('click', lastSlideFunc);

function prevSlideFunc() {
    if (currentSlide.previousElementSibling !== null) {
        currentSlide.classList.remove('slide-current');
        currentSlide.previousElementSibling.classList.add('slide-current');
        currentSlide = findCurrentSlide();
        if (currentSlide.previousElementSibling === null) {
            prevSlide.classList.add('disabled');
            firstSlide.classList.add('disabled');
        }
        if (nextSlide.classList.contains('disabled')) {
            nextSlide.classList.remove('disabled');
            lastSlide.classList.remove('disabled');
        }
    } 
}
function nextSlideFunc() {
    if (currentSlide.nextElementSibling !== null) {
        currentSlide.classList.remove('slide-current');
        currentSlide.nextElementSibling.classList.add('slide-current');
        currentSlide = findCurrentSlide();
        if (currentSlide.nextElementSibling === null) {
            nextSlide.classList.add('disabled');
            lastSlide.classList.add('disabled');
        }
        if (prevSlide.classList.contains('disabled')) {
            prevSlide.classList.remove('disabled');
            firstSlide.classList.remove('disabled');
        }
    } 
}
function firstSlideFunc() {
    currentSlide.classList.remove('slide-current');
    currentSlide = slides[0];
    currentSlide.classList.add('slide-current');
    if (lastSlide.classList.contains('disabled')) {
        nextSlide.classList.remove('disabled');
        lastSlide.classList.remove('disabled');
    }
    if (currentSlide.previousElementSibling === null) {
        prevSlide.classList.add('disabled');
        firstSlide.classList.add('disabled');
    }
}
function lastSlideFunc() {
    currentSlide.classList.remove('slide-current');
    currentSlide = slides[slides.length - 1];
    currentSlide.classList.add('slide-current');
    if (firstSlide.classList.contains('disabled')) {
        prevSlide.classList.remove('disabled');
        firstSlide.classList.remove('disabled');
    }
    if (currentSlide.nextElementSibling === null) {
        nextSlide.classList.add('disabled');
        lastSlide.classList.add('disabled');
    }
}

