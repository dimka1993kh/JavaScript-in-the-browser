const middle = ['https://goo.gl/Ekzeap',
                    'https://goo.gl/5MdY9V',
                    'https://goo.gl/PhbBJR',
                    'https://goo.gl/fYGJFM',
                    'https://goo.gl/vpT6ki'];

const lower = ['https://goo.gl/xEH9pX',
                    'https://goo.gl/ra6oeL',
                    'https://goo.gl/K4JXQT',
                    'https://goo.gl/gbkg9h',
                    'https://goo.gl/hWXeEC'];           
                    
const higher = ['https://goo.gl/HeJGGN',
                    'https://goo.gl/WUqpeL',
                    'https://goo.gl/YQ59Az',
                    'https://goo.gl/UAtKbF',
                    'https://goo.gl/F1wyZ5']; 
                                

const buttonCollection = document.getElementsByTagName('li');
const typePianino = document.getElementsByClassName('set');

document.addEventListener('keydown', () => {
    if (event.repeat) {
    if (event.shiftKey) { // определеим, нажаты ли Alt или Shift и запишем в src необходимый url.
        Array.from(typePianino)[0].classList.remove('middle');
        Array.from(typePianino)[0].classList.remove('higher');
        Array.from(typePianino)[0].classList.add('lower');
    } 
    if (event.altKey) {
        Array.from(typePianino)[0].classList.remove('middle');
        Array.from(typePianino)[0].classList.remove('lower');
        Array.from(typePianino)[0].classList.add('higher');
    }
}
});
document.addEventListener('keyup', () => { 
    Array.from(typePianino)[0].classList.add('middle');
    Array.from(typePianino)[0].classList.remove('lower');
    Array.from(typePianino)[0].classList.remove('higher');
    });

for (const button of buttonCollection) { //переберем кнопки
    const index = Array.from(buttonCollection).indexOf(button); // определим номер кнопки, на которую нажимаем
    const audio = Array.from(document.getElementsByTagName('audio'))[index]; //определим, в какой тег audio запишем src
    
    button.addEventListener('click', () => { // создадим событие  
        if (Array.from(typePianino)[0].classList.contains('lower')) {
            audio.src = lower[index];
        } else if (Array.from(typePianino)[0].classList.contains('higher')) {
            audio.src = higher[index]; 
        } else {
            audio.src = middle[index]
        }
        audio.play();
        });
    }


    

