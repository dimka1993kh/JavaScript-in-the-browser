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

for (const button of buttonCollection) { //переберем кнопки
    const index = Array.from(buttonCollection).indexOf(button); // определим номер кнопки, на которую нажимаем
    const audio = Array.from(document.getElementsByTagName('audio'))[index]; //определим, в какой тег audio запишем src
    
    button.addEventListener('click', () => { // создадим событие
        if (event.shiftKey) { // определеим, нажаты ли Alt или Shift и запишем в src необходимый url.
            audio.src = lower[index];
        } else if (event.altKey) {
            audio.src = higher[index]; 
        } else {
            audio.src = middle[index]
        }
        audio.play();
        });
    }


    

