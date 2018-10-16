const counter = document.querySelectorAll('h3 > output');
const checkbox = document.getElementsByTagName('input');
const listBlock = document.getElementsByClassName('list-block');
let count = 0;

console.log(counter[0], checkbox)

function showOfCompletedTasks() {   
        if (this.checked) {
            count++;
        } else {
            count--;
        }
        counter[0].value = `${count} из ${Array.from(checkbox).length}`;
        if (count === Array.from(checkbox).length) {
            listBlock[0].classList.add('complete');
        } else {
            listBlock[0].classList.remove('complete');
        }
}

Array.from(checkbox).forEach((task) => {
    if (task.checked) {
        count++;
        counter[0].value = `${count} из ${Array.from(checkbox).length}`; 
    }
    task.addEventListener('change', showOfCompletedTasks);
})
