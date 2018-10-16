const input = document.getElementsByTagName('input');
const textarea = document.getElementsByTagName('textarea');
const buttonSend = document.querySelector('form .button-contact');
const buttonChange = document.querySelector('main .button-contact');
const main = document.getElementsByTagName('main');
const contentform = document.getElementsByClassName('contentform');
let counter = 0;

const objectsOnPage = [];
Array.from(input).forEach((objectOnPage) => {
    objectsOnPage.push(objectOnPage);
});
objectsOnPage.push(textarea[0]);
console.log(objectsOnPage)

function fillingOutForms() {
    if (this.name === 'zip') {
        if (this.value.search(/[A-zА-яЁё]/) !== -1) {
            this.value = this.value.replace(/[A-zА-яЁё]/g, '');
            return;
        }  
    }
    if ((this.value !== '') && (this.value !== undefined)) {
        counter++; 
        console.log(counter) 
    } else if (this.value === '') {
        counter--;
        console.log(counter)
    } else {
        return;
    }
    if (counter === objectsOnPage.length) {
        buttonSend.disabled = false;
    } else if ((this.value === '') && (buttonSend.disabled === false)) {
        buttonSend.disabled = true; 
    }
}
objectsOnPage.forEach((element) => {
    if (element.value !== '') {
        counter++;  
        console.log(counter)
        
    }
})

fillingOutForms();

objectsOnPage.forEach((object) => {
    object.addEventListener('change', fillingOutForms);
})

const outputsArray= [];
const outputsOnPage = document.getElementsByTagName('output');
Array.from(outputsOnPage).forEach((output) => {
    outputsArray.push(output);
});

function sendMassage(event) {
    event.preventDefault()
    contentform[0].classList.add('hidden');
    main[0].classList.remove('hidden');
    objectsOnPage.forEach((object) => {
        outputsArray.forEach((output) => {
            if (object.name === output.id) {
                output.innerHTML = object.value;
            }
        })
    })
}

function changeMassage() {
    contentform[0].classList.remove('hidden');
    main[0].classList.add('hidden');
}

buttonSend.addEventListener('click', sendMassage);
buttonChange.addEventListener('click', changeMassage);

