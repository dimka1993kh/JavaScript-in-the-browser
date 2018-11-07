const allInput = document.querySelectorAll('label input');
const done = document.getElementsByClassName('done');
const undone = document.getElementsByClassName('undone');

function movingFunc() {
        if (!event.target.checked) {
            undone[0].appendChild(this.parentElement);
            this.classList.remove('checked');
         } else {
            done[0].appendChild(this.parentElement);
            this.classList.add('checked');
         }
}
Array.from(allInput).forEach((input) => {
    input.addEventListener('click', movingFunc)
})


