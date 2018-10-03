const fullImage = Array.from(document.getElementsByClassName("gallery-view"))[0];

const thumbImages = document.getElementsByTagName('a');

Array.from(thumbImages).forEach((image) => {
    image.addEventListener('click', () => {
        event.preventDefault();
        for (const item of thumbImages) {
            item.classList.remove('gallery-current');
        }
        image.classList.add('gallery-current');
        fullImage.src = image.href;
    });
})
