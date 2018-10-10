const linkButton = document.querySelectorAll('.tabs a'); // определяем табы
const tabConteiner = document.getElementById('content'); // определяем, куда табы отправятся

function startLoad() { // что происходит во  время загрузки информации
    preloader.classList.remove('hidden');
}

function endLoad() { // что происходит, когда загрузка завершилась
    preloader.classList.add('hidden');
}

function load() { // что происходит, когда информация загрузилась (после endLoad)
    tabConteiner.innerHTML = newTab.responseText;
}

const emailTab = Array.from(linkButton).find((header) => { // Определим, где хранится ссылка на Email в linkButton
    return header.innerHTML === 'Email';
});
/*const smsTab = Array.from(linkButton).find((sms) => { // Определим, где хранится ссылка на Sms в linkButton
    return sms.innerHTML === 'SMS';
});*/

function loadTabEmail() { // Создадим функцию отправки запроса для Email
    newTab.open("GET",emailTab.href, true);
    newTab.send();
};

/*function loadTabSms() { // Создадим функцию отправки запроса для Sms
    newTab.open("GET",smsTab.href, true);
    newTab.send();
};*/


var newTab = new XMLHttpRequest(); // создадим новый запрос

newTab.addEventListener('loadstart', startLoad);// создадим событие при начале загрузки
newTab.addEventListener('loadend', endLoad);// создадим событие при окончании загрузки
newTab.addEventListener('load', load); // создадим событие (при окончании загрузки будет выполнена функция load)

function openTab(event) { // создадим функцию обработки событий
    event.preventDefault(); // сотрем стандартное действие (переход по ссылке)
    if (this.classList.contains('active')) { // если кнопка активна, то ничего не делаем
      return;
    }
    linkButton.forEach((tab) => {
        tab.classList.toggle('active');
    });
    newTab.open("GET", this.href, true);
    newTab.send();
  }

linkButton.forEach((tab) => { // зададим событие на клик (выполняется функция openTab)
    tab.addEventListener('click', openTab);
});

document.addEventListener('DOMContentLoaded', loadTabEmail); // задаем начальный экран таба