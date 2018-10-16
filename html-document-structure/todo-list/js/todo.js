const allInput = document.querySelectorAll('label input');
const done = document.getElementsByClassName('done');
const undone = document.getElementsByClassName('undone');

function movingFunc() {
        if (this.parentElement.parentElement === done[0]) {
            undone[0].appendChild(this.parentElement);
            this.classList.remove('checked');
         } else if (this.parentElement.parentElement === undone[0]) {
            done[0].appendChild(this.parentElement);
            this.classList.add('checked');
         }
}
Array.from(allInput).forEach((input) => {
    input.addEventListener('click', movingFunc)
})


