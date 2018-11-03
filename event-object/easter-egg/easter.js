const navigation = Array.from(document.getElementsByTagName('nav'))[0]; 
const secret = Array.from(document.getElementsByClassName('secret'))[0];


document.addEventListener('keydown', () => {
    if ((event.code === 'KeyT') && (event.ctrlKey) && (event.altKey)) {
        navigation.classList.toggle('visible');  
}
});
let enteredSecretCode = '';
const secretCode = 'ytnjkjubz';
document.addEventListener('keydown', () => { 
    if (event.code.length === 4) { // ИСПОЛЬЗУЕМ ДЛЯ ТОГО, ЧТОБЫ НЕ СЧИТАЛИСЬ СТРЕЛКИ, SHIFT И Т.Д.
        enteredSecretCode = enteredSecretCode.concat((event.code).substr(3).toLowerCase()); //ЕСЛИ ПИШЕМ КАКУЮ-ТО БУКВУ Х, ТО ИЗ KEYX ВЫДЕЛЯЕМ ТОЛЬКО Х И МЕНЯЕМ РЕГИСТР НА НИЖНИЙ
    }
    if (enteredSecretCode.slice(-secretCode.length) === secretCode) { //ЕСЛИ СЛОВО ТОЧНО РВНО СЕКРЕТНОМУ, ТО ЗАПУСКАЕМ ПАСХАЛКУ
        secret.classList.toggle('visible');
    }
});



